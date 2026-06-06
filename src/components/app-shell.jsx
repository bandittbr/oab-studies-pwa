import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useKeyboardShortcuts } from "../hooks/use-keyboard-shortcuts";
import { useStudy } from "../state/study-context";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   CONFIG DE NAVEGAÇÃO
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const navItems = [
  {
    to: "/", label: "Início", short: "Início", badge: null,
    icon: <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7A1 1 0 003 11h1v6a1 1 0 001 1h4v-4h2v4h4a1 1 0 001-1v-6h1a1 1 0 00.707-1.707l-7-7z"/></svg>
  },
  {
    to: "/questoes", label: "Questões", short: "Banco", badge: null,
    icon: <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/></svg>
  },
  {
    to: "/provas", label: "Provas", short: "Provas", badge: null,
    icon: <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd"/></svg>
  },
  {
    to: "/revisao", label: "Revisão", short: "Revisão", badge: "due",
    icon: <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/></svg>
  },
  {
    to: "/leis", label: "Lei seca", short: "Leis", badge: null,
    icon: <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 2a1 1 0 01.894.553l7 14A1 1 0 0117 18H3a1 1 0 01-.894-1.447l7-14A1 1 0 0110 2zM10 7a1 1 0 011 1v3a1 1 0 11-2 0V8a1 1 0 011-1zm0 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/></svg>
  }
  // Studio: acesso via /studio (requer senha de admin)
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   THEME TOGGLE
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function ThemeButton({ iconOnly = false }) {
  const { state, toggleTheme } = useStudy();
  const isDark = state.theme === "dark";
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      className="flex items-center gap-2 rounded-[var(--r-md)] border border-[var(--panel-border)] bg-white/4 px-3 py-2 text-sm text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--border-hover)] min-h-[44px]"
    >
      {isDark
        ? <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"/></svg>
        : <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>
      }
      {!iconOnly && <span className="text-xs">{isDark ? "Claro" : "Escuro"}</span>}
    </button>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ITEM DE NAVEGAÇÃO — SIDEBAR
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
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
      className={`group flex items-center gap-3 rounded-[var(--r-md)] px-3 py-2.5 text-sm font-medium transition ${
        isActive
          ? "bg-[var(--text)] text-[var(--bg)]"
          : "text-[var(--muted)] hover:text-[var(--text)] hover:bg-white/5"
      }`}
    >
      <span className={isActive ? "text-[var(--bg)]" : "text-[var(--muted)] group-hover:text-[var(--text)] transition-colors"}>
        {item.icon}
      </span>
      <span className="flex-1 leading-none">{item.label}</span>
      {badge && <span className="nav-badge">{badge > 99 ? "99+" : badge}</span>}
    </a>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ITEM DE NAVEGAÇÃO — BOTTOM NAV
   Zona do polegar: ícone + rótulo
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
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
      className={`relative flex flex-col items-center gap-1 rounded-[var(--r-sm)] py-2 px-1 text-[0.6rem] font-semibold uppercase tracking-[0.08em] transition ${
        isActive
          ? "bg-[var(--text)] text-[var(--bg)]"
          : "text-[var(--muted)]"
      }`}
    >
      {item.icon}
      <span>{item.short}</span>
      {badge && (
        <span className="absolute -top-0.5 right-0.5 nav-badge">{badge > 9 ? "9+" : badge}</span>
      )}
    </a>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   STAT — sidebar
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function SidebarStat({ label, value, accent = false }) {
  return (
    <div className="flex items-center justify-between px-3 py-2">
      <span className="text-xs text-[var(--muted)]">{label}</span>
      <span className={`text-sm font-bold ${accent ? "text-[var(--accent)]" : "text-[var(--text)]"}`}>
        {value}
      </span>
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   APP SHELL
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export function AppShell({ children }) {
  const { dashboardMetrics, globalSearchQuery, isBooting, setGlobalSearchQuery } = useStudy();
  const navigate  = useNavigate();
  const location  = useLocation();
  const due       = dashboardMetrics?.dueReviewCount ?? 0;

  // Modo imersivo: oculta nav (sessão de prova / prática ativa)
  const isImmersive =
    location.pathname.startsWith("/provas/") ||
    location.pathname.startsWith("/pratica/");

  useKeyboardShortcuts({
    "mod+k": () => navigate("/studio"),
    "/":     () => navigate("/studio"),
    "mod+1": () => navigate("/"),
    "mod+2": () => navigate("/questoes"),
    "mod+3": () => navigate("/provas"),
    "mod+4": () => navigate("/revisao"),
    "mod+5": () => navigate("/leis"),
    "mod+6": () => navigate("/studio"),
  });

  return (
    <div className="app-shell flex min-h-dvh">

      {/* ━━ SIDEBAR DESKTOP ━━ */}
      <aside className="glass-panel hidden lg:flex w-60 xl:w-64 shrink-0 flex-col sticky top-0 h-dvh rounded-none border-y-0 border-l-0 overflow-y-auto z-10">

        {/* Marca */}
        <Link to="/" className="flex items-center gap-3 px-4 pt-5 pb-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-[var(--r-sm)] bg-[var(--brand)]/12 text-[var(--brand)] shrink-0">
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path fillRule="evenodd" d="M10 2a1 1 0 01.894.553l7 14A1 1 0 0117 18H3a1 1 0 01-.894-1.447l7-14A1 1 0 0110 2zM10 7a1 1 0 011 1v3a1 1 0 11-2 0V8a1 1 0 011-1zm0 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
            </svg>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-[var(--text)]">Estudo OAB</div>
            <div className="text-[0.65rem] text-[var(--muted)]">Estudo jurídico offline</div>
          </div>
        </Link>

        {/* Busca */}
        <div className="px-3 pb-3">
          <div className="relative">
            <svg className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[var(--muted)]" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
            </svg>
            <input
              value={globalSearchQuery}
              onChange={(e) => setGlobalSearchQuery(e.target.value)}
              onFocus={() => navigate("/studio")}
              placeholder="Buscar… ⌘K"
              className="w-full rounded-[var(--r-md)] border border-[var(--panel-border)] bg-white/4 pl-9 pr-3 py-2 text-xs text-[var(--text)] placeholder:text-[var(--muted)]"
            />
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-2 space-y-0.5 pb-2">
          {navItems.map((item) => <SideNavItem key={item.to} item={item} due={due} />)}
        </nav>

        {/* Estatísticas */}
        <div className="border-t border-[var(--panel-border)] py-2">
          <div className="px-3 pb-1 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
            Progresso
          </div>
          <SidebarStat label="Respondidas" value={String(dashboardMetrics?.answeredCount ?? 0)} />
          <SidebarStat label="Precisão"    value={`${dashboardMetrics?.accuracy ?? 0}%`} />
          {due > 0 && <SidebarStat label="Fila revisão" value={String(due)} accent />}
        </div>

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
              <div className="flex h-7 w-7 items-center justify-center rounded-[var(--r-xs)] bg-[var(--brand)]/12 text-[var(--brand)]">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                  <path fillRule="evenodd" d="M10 2a1 1 0 01.894.553l7 14A1 1 0 0117 18H3a1 1 0 01-.894-1.447l7-14A1 1 0 0110 2zM10 7a1 1 0 011 1v3a1 1 0 11-2 0V8a1 1 0 011-1zm0 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="text-sm font-semibold text-[var(--text)]">Estudo OAB</span>
            </Link>

            {/* Busca rápida → studio */}
            <button
              type="button"
              onClick={() => navigate("/studio")}
              className="flex items-center gap-2 rounded-[var(--r-md)] border border-[var(--panel-border)] bg-white/4 px-3 py-2 text-xs text-[var(--muted)] min-h-[40px]"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 shrink-0">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
              </svg>
              Buscar
            </button>

            <ThemeButton iconOnly />
          </header>
        )}

        {/* Conteúdo da página */}
        <main className="flex-1 px-3 py-3 sm:px-4 sm:py-4 lg:px-6 lg:py-5">
          {isBooting ? (
            <div className="glass-panel rounded-[var(--r-xl)] p-8 flex items-center gap-4 text-sm text-[var(--muted)]">
              <svg className="h-5 w-5 animate-spin text-[var(--brand)] shrink-0" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
              Carregando base offline e pacotes importados…
            </div>
          ) : (
            <div className="page-enter">{children}</div>
          )}
        </main>

        {/* Bottom nav mobile — zona do polegar */}
        {!isImmersive && (
          <nav className="glass-panel sticky bottom-0 z-30 lg:hidden border-x-0 border-b-0 rounded-none safe-pb">
            <div className="grid grid-cols-5 gap-px px-1 pt-1.5 pb-1">
              {navItems.map((item) => <BottomNavItem key={item.to} item={item} due={due} />)}
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}
