import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useKeyboardShortcuts } from "../hooks/use-keyboard-shortcuts";
import { useStudy } from "../state/study-context";
import { useAuth } from "../state/auth-context";
import { logout } from "../services/auth-service";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   CONFIG DE NAVEGAÇÃO
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const navItems = [
  {
    to: "/", label: "Início", short: "Início", badge: null,
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-[18px] w-[18px]">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7A1 1 0 003 11h1v6a1 1 0 001 1h4v-4h2v4h4a1 1 0 001-1v-6h1a1 1 0 00.707-1.707l-7-7z"/>
      </svg>
    )
  },
  {
    to: "/questoes", label: "Questões", short: "Banco", badge: null,
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-[18px] w-[18px]">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
      </svg>
    )
  },
  {
    to: "/provas", label: "Provas", short: "Provas", badge: null,
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-[18px] w-[18px]">
        <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd"/>
      </svg>
    )
  },
  {
    to: "/revisao", label: "Revisão", short: "Revisão", badge: "due",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-[18px] w-[18px]">
        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
      </svg>
    )
  },
  {
    to: "/leis", label: "Lei seca", short: "Leis", badge: null,
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-[18px] w-[18px]">
        <path fillRule="evenodd" d="M10 2a1 1 0 01.894.553l7 14A1 1 0 0117 18H3a1 1 0 01-.894-1.447l7-14A1 1 0 0110 2zM10 7a1 1 0 011 1v3a1 1 0 11-2 0V8a1 1 0 011-1zm0 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
      </svg>
    )
  }
];


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   BUSCA GLOBAL — SIDEBAR
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function SidebarSearch({ query, setQuery, results, navigate }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handler(e) {
      if (!containerRef.current?.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function handleKeyDown(e) {
    if (e.key === "Enter" && query.trim()) {
      navigate(`/questoes?search=${encodeURIComponent(query.trim())}`);
      setOpen(false);
    } else if (e.key === "Escape") {
      setQuery("");
      setOpen(false);
    }
  }

  const topQuestions = results.filter((r) => r.type === "question").slice(0, 4);
  const topArticles  = results.filter((r) => r.type === "article").slice(0, 2);
  const allResults   = [...topQuestions, ...topArticles];

  return (
    <div ref={containerRef} className="relative px-3 pb-3">
      <div className="relative">
        <svg className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[var(--muted)]" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
        </svg>
        <input
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => { if (query) setOpen(true); }}
          onKeyDown={handleKeyDown}
          placeholder="Buscar questões e leis…"
          className="w-full rounded-[var(--r-md)] border border-[var(--panel-border)] bg-white/4 pl-9 pr-7 py-2 text-xs text-[var(--text)] placeholder:text-[var(--muted)] outline-none focus:border-[var(--border-focus)] transition-colors"
        />
        {query && (
          <button
            type="button"
            onClick={() => { setQuery(""); setOpen(false); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-[var(--muted)] hover:text-[var(--text)] text-sm leading-none min-h-0"
          >
            ✕
          </button>
        )}
      </div>

      {open && query && allResults.length > 0 && (
        <div className="absolute top-full left-3 right-3 z-50 mt-1 glass-panel rounded-[var(--r-md)] overflow-hidden">
          {allResults.map((result) => (
            <button
              key={result.id}
              type="button"
              onClick={() => {
                if (result.type === "question") {
                  navigate(`/questoes?search=${encodeURIComponent(query)}`);
                } else {
                  navigate(`/leis?artigo=${result.id}`);
                }
                setQuery("");
                setOpen(false);
              }}
              className="flex w-full items-start gap-2.5 px-3 py-2.5 text-left hover:bg-white/5 border-b border-[var(--panel-border)] last:border-0 transition min-h-0"
            >
              <span className={`mt-0.5 shrink-0 text-[0.6rem] font-bold px-1.5 py-0.5 rounded ${
                result.type === "question"
                  ? "bg-[var(--brand)]/20 text-[var(--brand)]"
                  : "bg-emerald-500/20 text-emerald-300"
              }`}>
                {result.type === "question" ? "Q" : "§"}
              </span>
              <div className="min-w-0">
                <div className="truncate text-xs text-[var(--text)]">
                  {result.type === "question"
                    ? (result.item.statement?.slice(0, 72) ?? "")
                    : (result.item.articleNumber + " — " + (result.item.title ?? ""))}
                </div>
                <div className="truncate text-[0.65rem] text-[var(--muted)] mt-0.5">
                  {result.subtitle}
                </div>
              </div>
            </button>
          ))}
          <button
            type="button"
            onClick={() => { navigate(`/questoes?search=${encodeURIComponent(query)}`); setQuery(""); setOpen(false); }}
            className="flex w-full items-center justify-center gap-1.5 px-3 py-2 text-xs text-[var(--muted)] hover:text-[var(--text)] hover:bg-white/5 transition min-h-0"
          >
            Ver todas com "{query}" →
          </button>
        </div>
      )}
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   THEME TOGGLE
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function ThemeButton({ iconOnly = false }) {
  const { state, toggleTheme } = useStudy();
  const isDark = state.theme === "dark";
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      className="flex items-center gap-2 rounded-[var(--r-md)] border border-[var(--panel-border)] bg-white/4 px-3 py-2 text-sm text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--border-hover)] min-h-[44px] transition-colors"
    >
      {isDark
        ? <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"/></svg>
        : <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>
      }
      {!iconOnly && <span className="text-xs">{isDark ? "Claro" : "Escuro"}</span>}
    </button>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ITEM DE NAVEGAÇÃO — SIDEBAR (premium)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function SideNavItem({ item, due }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = item.to === "/"
    ? location.pathname === "/"
    : location.pathname.startsWith(item.to);
  const badge = item.badge === "due" && due > 0 ? due : null;
  return (
    <a
      href={item.to}
      onClick={(e) => { e.preventDefault(); navigate(item.to); }}
      className={`
        group relative flex items-center gap-3
        rounded-[var(--r-md)] px-3 py-2.5 text-sm font-medium
        transition-all duration-150
        ${isActive
          ? "bg-[var(--brand)]/12 text-[var(--text)]"
          : "text-[var(--muted)] hover:text-[var(--text)] hover:bg-white/5"
        }
      `}
    >
      {/* Indicador ativo — linha esquerda */}
      <span
        className={`
          absolute left-0 top-1/2 -translate-y-1/2
          w-[3px] rounded-r-full
          transition-all duration-200
          ${isActive ? "h-5 bg-[var(--brand)] opacity-100" : "h-0 opacity-0"}
        `}
      />
      {/* Ícone */}
      <span className={`shrink-0 transition-colors ${
        isActive ? "text-[var(--brand)]" : "text-[var(--muted)] group-hover:text-[var(--text-2)]"
      }`}>
        {item.icon}
      </span>
      <span className={`flex-1 leading-none ${isActive ? "font-semibold" : ""}`}>
        {item.label}
      </span>
      {badge && (
        <span className="nav-badge">{badge > 99 ? "99+" : badge}</span>
      )}
    </a>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ITEM DE NAVEGAÇÃO — BOTTOM NAV
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function BottomNavItem({ item, due }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = item.to === "/"
    ? location.pathname === "/"
    : location.pathname.startsWith(item.to);
  const badge = item.badge === "due" && due > 0 ? due : null;
  return (
    <a
      href={item.to}
      onClick={(e) => { e.preventDefault(); navigate(item.to); }}
      className={`
        relative flex flex-col items-center gap-1
        rounded-[var(--r-sm)] py-2 px-1
        text-[0.6rem] font-semibold uppercase tracking-[0.08em]
        transition-all duration-150
        ${isActive ? "text-[var(--brand)]" : "text-[var(--muted)]"}
      `}
    >
      {/* Dot indicator */}
      {isActive && (
        <span className="absolute top-0.5 left-1/2 -translate-x-1/2 h-1 w-4 rounded-full bg-[var(--brand)]" />
      )}
      <span className={`transition-transform duration-150 ${isActive ? "scale-110" : ""}`}>
        {item.icon}
      </span>
      <span>{item.short}</span>
      {badge && (
        <span className="absolute -top-0.5 right-0.5 nav-badge">{badge > 9 ? "9+" : badge}</span>
      )}
    </a>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   STAT — sidebar
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function SidebarStat({ label, value, accent = false }) {
  return (
    <div className="flex items-center justify-between px-3 py-1.5">
      <span className="text-xs text-[var(--muted)]">{label}</span>
      <span className={`text-sm font-semibold ${accent ? "text-[var(--warn)]" : "text-[var(--text)]"}`}>
        {value}
      </span>
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   USUÁRIO — SIDEBAR
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function UserBlock() {
  const { user, isGuest, exitGuest } = useAuth();

  if (isGuest) {
    return (
      <div className="border-t border-[var(--panel-border)] px-3 py-3 flex items-center gap-2.5">
        <div style={{
          width: 30, height: 30, borderRadius: "50%", flexShrink: 0,
          background: "rgba(255,255,255,0.07)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "0.875rem"
        }}>
          👤
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs font-semibold text-[var(--text)] truncate">Visitante</div>
          <div className="text-[0.6rem] text-[var(--muted)] truncate">Progresso local apenas</div>
        </div>
        <button
          type="button"
          onClick={exitGuest}
          className="shrink-0 rounded-[var(--r-sm)] px-2.5 py-1.5 text-[0.65rem] font-semibold text-[var(--brand)] border border-[var(--brand)]/30 hover:bg-[var(--brand)]/10 transition min-h-0"
        >
          Login
        </button>
      </div>
    );
  }

  if (!user) return null;
  const name    = user.displayName || user.email?.split("@")[0] || "Usuário";
  const initial = name.charAt(0).toUpperCase();
  return (
    <div className="border-t border-[var(--panel-border)] px-3 py-3 flex items-center gap-2.5">
      <div style={{
        width: 30, height: 30, borderRadius: "50%", flexShrink: 0,
        background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "0.8rem", fontWeight: 700, color: "#fff", overflow: "hidden"
      }}>
        {user.photoURL
          ? <img src={user.photoURL} alt={name} style={{ width: 30, height: 30, borderRadius: "50%", objectFit: "cover" }} />
          : initial}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs font-semibold text-[var(--text)] truncate">{name}</div>
        <div className="text-[0.6rem] text-[var(--muted)] truncate">{user.email}</div>
      </div>
      <button
        type="button"
        onClick={() => logout()}
        title="Sair"
        className="shrink-0 rounded-[var(--r-sm)] p-1.5 text-[var(--muted)] hover:text-[var(--text)] hover:bg-white/5 transition min-h-0"
      >
        <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
          <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h5a1 1 0 000-2H4V5h4a1 1 0 000-2H3zm10.293 4.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L14.586 12H8a1 1 0 010-2h6.586l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd"/>
        </svg>
      </button>
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   APP SHELL
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export function AppShell({ children }) {
  const { dashboardMetrics, globalSearchQuery, globalSearchResults, isBooting, setGlobalSearchQuery } = useStudy();
  const navigate = useNavigate();
  const location = useLocation();
  const due      = dashboardMetrics?.dueReviewCount ?? 0;

  const isImmersive =
    location.pathname.startsWith("/provas/") ||
    location.pathname.startsWith("/pratica/");

  useKeyboardShortcuts({
    "mod+1": () => navigate("/"),
    "mod+2": () => navigate("/questoes"),
    "mod+3": () => navigate("/provas"),
    "mod+4": () => navigate("/revisao"),
    "mod+5": () => navigate("/leis"),
  });

  return (
    <div className="app-shell flex min-h-dvh">

      {/* ━━ SIDEBAR DESKTOP ━━ */}
      <aside className="glass-panel hidden lg:flex w-60 xl:w-64 shrink-0 flex-col sticky top-0 h-dvh rounded-none border-y-0 border-l-0 overflow-y-auto z-10">

        {/* Marca */}
        <Link to="/" className="flex items-center gap-3 px-4 pt-5 pb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-[var(--r-md)] shrink-0"
            style={{ background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" }}
          >
            <svg viewBox="0 0 20 20" fill="white" className="h-4 w-4">
              <path fillRule="evenodd" d="M10 2a1 1 0 01.894.553l7 14A1 1 0 0117 18H3a1 1 0 01-.894-1.447l7-14A1 1 0 0110 2zM10 7a1 1 0 011 1v3a1 1 0 11-2 0V8a1 1 0 011-1zm0 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
            </svg>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-[var(--text)]">Estudo OAB</div>
            <div className="text-[0.62rem] text-[var(--muted)]">Jurídico offline</div>
          </div>
        </Link>

        {/* Busca */}
        <SidebarSearch
          query={globalSearchQuery}
          setQuery={setGlobalSearchQuery}
          results={globalSearchResults ?? []}
          navigate={navigate}
        />

        {/* Nav */}
        <nav className="flex-1 px-2 pb-2">
          <div className="mb-1 px-3 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
            Menu
          </div>
          <div className="space-y-0.5">
            {navItems.map((item) => <SideNavItem key={item.to} item={item} due={due} />)}
          </div>
        </nav>

        {/* Progresso */}
        <div className="border-t border-[var(--panel-border)] py-3">
          <div className="px-3 mb-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
            Progresso
          </div>
          <SidebarStat label="Respondidas" value={String(dashboardMetrics?.answeredCount ?? 0)} />
          <SidebarStat label="Precisão"    value={`${dashboardMetrics?.accuracy ?? 0}%`} />
          {due > 0 && <SidebarStat label="Revisão pendente" value={String(due)} accent />}
        </div>

        {/* Usuário */}
        <UserBlock />

        {/* Tema */}
        <div className="border-t border-[var(--panel-border)] px-3 py-3">
          <ThemeButton />
        </div>
      </aside>

      {/* ━━ COLUNA PRINCIPAL ━━ */}
      <div className="flex min-w-0 flex-1 flex-col">

        {/* Header mobile */}
        {!isImmersive && (
          <header className="glass-panel sticky top-0 z-30 lg:hidden flex items-center gap-2 px-4 py-2.5 border-x-0 border-t-0 rounded-none">
            <Link to="/" className="flex items-center gap-2 mr-auto">
              <div
                className="flex h-7 w-7 items-center justify-center rounded-[var(--r-sm)] shrink-0"
                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
              >
                <svg viewBox="0 0 20 20" fill="white" className="h-3.5 w-3.5">
                  <path fillRule="evenodd" d="M10 2a1 1 0 01.894.553l7 14A1 1 0 0117 18H3a1 1 0 01-.894-1.447l7-14A1 1 0 0110 2zM10 7a1 1 0 011 1v3a1 1 0 11-2 0V8a1 1 0 011-1zm0 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="text-sm font-semibold text-[var(--text)]">Estudo OAB</span>
            </Link>

            <button
              type="button"
              onClick={() => navigate("/questoes")}
              className="flex items-center gap-2 rounded-[var(--r-md)] border border-[var(--panel-border)] bg-white/4 px-3 py-2 text-xs text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--border-hover)] min-h-[40px] transition-colors"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 shrink-0">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
              </svg>
              Questões
            </button>

            <ThemeButton iconOnly />
          </header>
        )}

        {/* Conteúdo da página */}
        <main className="flex-1 px-3 py-4 sm:px-4 sm:py-5 lg:px-6 lg:py-6">
          {isBooting ? (
            <div className="glass-panel rounded-[var(--r-xl)] p-8 flex items-center gap-4 text-sm text-[var(--muted)]">
              <svg className="h-5 w-5 animate-spin text-[var(--brand)] shrink-0" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
              Carregando base offline e pacotes importados…
            </div>
          ) : (
            <div className="page-enter">
              {children}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
