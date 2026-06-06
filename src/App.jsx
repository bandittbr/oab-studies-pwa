import { Component, lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppShell } from "./components/app-shell";
import { PageSkeleton } from "./components/skeletons";

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
            Voltar ao início
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const DashboardPage = lazy(() =>
  import("./pages/dashboard-page").then((module) => ({ default: module.DashboardPage }))
);
const PracticePage = lazy(() =>
  import("./pages/practice-page").then((module) => ({ default: module.PracticePage }))
);
const ReviewPage = lazy(() =>
  import("./pages/review-page").then((module) => ({ default: module.ReviewPage }))
);
const OfficialExamsPage = lazy(() =>
  import("./pages/official-exams-