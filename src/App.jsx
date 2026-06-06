import { Component, lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppShell } from "./components/app-shell";
import { PageSkeleton } from "./components/skeletons";
import { useAuth } from "./state/auth-context";
import { LoginPage } from "./pages/login-page";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error("[ErrorBoundary]", error, info?.componentStack);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: "100dvh", display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: "1.5rem",
          padding: "2rem", textAlign: "center",
          background: "var(--bg, #0f1117)", color: "var(--text, #e8eaf0)"
        }}>
          <div style={{ fontSize: "2.5rem" }}>⚠️</div>
          <div>
            <div style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.5rem" }}>
              Algo deu errado
            </div>
            <div style={{ fontSize: "0.8rem", color: "var(--muted, #8a8fa8)", maxWidth: 360 }}>
              {this.state.error?.message ?? "Erro inesperado no app."}
            </div>
          </div>
          <button
            onClick={() => { this.setState({ hasError: false, error: null }); window.location.href = "/"; }}
            style={{
              background: "var(--text, #e8eaf0)", color: "var(--bg, #0f1117)",
              border: "none", borderRadius: "0.75rem", padding: "0.625rem 1.5rem",
              fontSize: "0.875rem", fontWeight: 600, cursor: "pointer"
            }}
          >
            Voltar ao inicio
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const DashboardPage = lazy(() =>
  import("./pages/dashboard-page").then((m) => ({ default: m.DashboardPage }))
);
const PracticePage = lazy(() =>
  import("./pages/practice-page").then((m) => ({ default: m.PracticePage }))
);
const ReviewPage = lazy(() =>
  import("./pages/review-page").then((m) => ({ default: m.ReviewPage }))
);
const OfficialExamsPage = lazy(() =>
  import("./pages/official-exams-page").then((m) => ({ default: m.OfficialExamsPage }))
);
const OfficialExamSessionPage = lazy(() =>
  import("./pages/official-exam-session-page").then((m) => ({ default: m.OfficialExamSessionPage }))
);
const QuestionBankPage = lazy(() =>
  import("./pages/question-bank-page").then((m) => ({ default: m.QuestionBankPage }))
);
const LawLibraryPage = lazy(() =>
  import("./pages/law-library-page").then((m) => ({ default: m.LawLibraryPage }))
);
const PlatformPage = lazy(() =>
  import("./pages/platform-page").then((m) => ({ default: m.PlatformPage }))
);

function LoadingScreen() {
  return (
    <div style={{
      minHeight: "100dvh", display: "flex", alignItems: "center", justifyContent: "center",
      background: "var(--bg, #0f1117)", color: "var(--muted, #8a8fa8)", fontSize: "0.875rem"
    }}>
      Carregando...
    </div>
  );
}

export default function App() {
  const { user, isGuest } = useAuth();

  if (user === undefined) return <LoadingScreen />;
  if (user === null && !isGuest) return <LoginPage />;

  return (
    <ErrorBoundary>
      <AppShell>
        <Suspense fallback={<PageSkeleton />}>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/questoes" element={<QuestionBankPage />} />
            <Route path="/materias" element={<Navigate to="/questoes" replace />} />
            <Route path="/provas" element={<OfficialExamsPage />} />
            <Route path="/provas/:examId" element={<OfficialExamSessionPage />} />
            <Route path="/resolver" element={<PracticePage />} />
            <Route path="/resolver/:subjectId" element={<PracticePage />} />
            <Route path="/revisao" element={<ReviewPage />} />
            <Route path="/leis" element={<LawLibraryPage />} />
            <Route path="/studio" element={<PlatformPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </AppShell>
    </ErrorBoundary>
  );
}
