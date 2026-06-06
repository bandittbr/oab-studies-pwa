import { useState } from "react";
import { loginWithEmail, loginWithGoogle, registerWithEmail } from "../services/auth-service";

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.616z" fill="#4285F4"/>
      <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
      <path d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z" fill="#FBBC05"/>
      <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
    </svg>
  );
}

const FIREBASE_ERRORS = {
  "auth/email-already-in-use": "Este e-mail já está cadastrado.",
  "auth/invalid-email": "E-mail inválido.",
  "auth/weak-password": "Senha muito fraca. Use pelo menos 6 caracteres.",
  "auth/user-not-found": "Usuário não encontrado.",
  "auth/wrong-password": "Senha incorreta.",
  "auth/invalid-credential": "E-mail ou senha incorretos.",
  "auth/popup-closed-by-user": "Login com Google cancelado.",
  "auth/too-many-requests": "Muitas tentativas. Aguarde alguns minutos."
};

function parseError(err) {
  return FIREBASE_ERRORS[err.code] ?? err.message ?? "Erro inesperado. Tente novamente.";
}

export function LoginPage() {
  const [mode, setMode] = useState("login"); // "login" | "register"
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      if (mode === "login") {
        await loginWithEmail(email, password);
      } else {
        if (!name.trim()) { setError("Informe seu nome."); setLoading(false); return; }
        await registerWithEmail(name.trim(), email, password);
      }
    } catch (err) {
      setError(parseError(err));
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogle() {
    setError("");
    setLoading(true);
    try {
      await loginWithGoogle();
    } catch (err) {
      setError(parseError(err));
    } finally {
      setLoading(false);
    }
  }

  function switchMode(m) {
    setMode(m);
    setError("");
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div style={{
      minHeight: "100dvh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "1.5rem",
      background: "var(--bg, #0f1117)"
    }}>
      {/* Brand */}
      <div style={{ marginBottom: "2rem", textAlign: "center" }}>
        <div style={{
          width: 56, height: 56, borderRadius: "1rem",
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 1rem",
          fontSize: "1.75rem"
        }}>
          ⚖️
        </div>
        <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text, #e8eaf0)" }}>
          Estudo OAB
        </div>
        <div style={{ fontSize: "0.8rem", color: "var(--muted, #8a8fa8)", marginTop: "0.25rem" }}>
          Prepare-se para a prova com inteligência
        </div>
      </div>

      {/* Card */}
      <div style={{
        width: "100%",
        maxWidth: 400,
        background: "var(--panel-bg, rgba(255,255,255,0.04))",
        border: "1px solid var(--panel-border, rgba(255,255,255,0.08))",
        borderRadius: "1.25rem",
        padding: "2rem",
        backdropFilter: "blur(12px)"
      }}>
        {/* Toggle */}
        <div style={{
          display: "flex",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "0.75rem",
          padding: "0.25rem",
          marginBottom: "1.75rem"
        }}>
          {["login", "register"].map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => switchMode(m)}
              style={{
                flex: 1,
                padding: "0.5rem",
                borderRadius: "0.5rem",
                border: "none",
                cursor: "pointer",
                fontSize: "0.875rem",
                fontWeight: 600,
                transition: "all 0.15s",
                background: mode === m ? "var(--text, #e8eaf0)" : "transparent",
                color: mode === m ? "var(--bg, #0f1117)" : "var(--muted, #8a8fa8)"
              }}
            >
              {m === "login" ? "Entrar" : "Cadastrar"}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {mode === "register" && (
            <div>
              <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "var(--muted, #8a8fa8)", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Nome
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome completo"
                required={mode === "register"}
                disabled={loading}
                style={inputStyle}
              />
            </div>
          )}

          <div>
            <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "var(--muted, #8a8fa8)", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              E-mail
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              disabled={loading}
              style={inputStyle}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "var(--muted, #8a8fa8)", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Senha
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={mode === "register" ? "Mínimo 6 caracteres" : "Sua senha"}
                required
                minLength={mode === "register" ? 6 : undefined}
                disabled={loading}
                style={{ ...inputStyle, paddingRight: "3rem" }}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                style={{
                  position: "absolute", right: "0.75rem", top: "50%", transform: "translateY(-50%)",
                  background: "none", border: "none", cursor: "pointer",
                  color: "var(--muted, #8a8fa8)", fontSize: "0.875rem", padding: "0.25rem"
                }}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {error && (
            <div style={{
              background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.3)",
              borderRadius: "0.625rem", padding: "0.75rem 1rem",
              fontSize: "0.8rem", color: "#f87171"
            }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%", padding: "0.75rem",
              background: loading ? "rgba(99,102,241,0.4)" : "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#fff", border: "none", borderRadius: "0.75rem",
              fontSize: "0.9rem", fontWeight: 700, cursor: loading ? "not-allowed" : "pointer",
              marginTop: "0.25rem", transition: "opacity 0.15s"
            }}
          >
            {loading ? "Aguarde..." : mode === "login" ? "Entrar" : "Criar conta"}
          </button>
        </form>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", margin: "1.25rem 0" }}>
          <div style={{ flex: 1, height: 1, background: "var(--panel-border, rgba(255,255,255,0.08))" }} />
          <span style={{ fontSize: "0.75rem", color: "var(--muted, #8a8fa8)" }}>ou</span>
          <div style={{ flex: 1, height: 1, background: "var(--panel-border, rgba(255,255,255,0.08))" }} />
        </div>

        {/* Google */}
        <button
          type="button"
          onClick={handleGoogle}
          disabled={loading}
          style={{
            width: "100%", padding: "0.75rem",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid var(--panel-border, rgba(255,255,255,0.12))",
            borderRadius: "0.75rem",
            color: "var(--text, #e8eaf0)",
            fontSize: "0.875rem", fontWeight: 600,
            cursor: loading ? "not-allowed" : "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", gap: "0.625rem",
            transition: "background 0.15s"
          }}
        >
          <GoogleIcon />
          Continuar com Google
        </button>
      </div>

      <div style={{ marginTop: "2rem", fontSize: "0.75rem", color: "var(--muted, #8a8fa8)", textAlign: "center", maxWidth: 320 }}>
        Seu progresso fica salvo na nuvem e sincronizado em todos os seus dispositivos.
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "0.625rem 0.875rem",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid var(--panel-border, rgba(255,255,255,0.1))",
  borderRadius: "0.625rem",
  color: "var(--text, #e8eaf0)",
  fontSize: "0.875rem",
  outline: "none",
  boxSizing: "border-box"
};
