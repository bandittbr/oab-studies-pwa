import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppShell } from "./components/app-shell";
import { PageSkeleton } from "./components/skeletons";

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
  import("./pages/official-exams-page").then((module) => ({ default: module.OfficialExamsPage }))
);
const OfficialExamSessionPage = lazy(() =>
  import("./pages/official-exam-session-page").then((module) => ({ default: module.OfficialExamSessionPage }))
);
const QuestionBankPage = lazy(() =>
  import("./pages/question-bank-page").then((module) => ({ default: module.QuestionBankPage }))
);
const LawLibraryPage = lazy(() =>
  import("./pages/law-library-page").then((module) => ({ default: module.LawLibraryPage }))
);
const PlatformPage = lazy(() =>
  import("./pages/platform-page").then((module) => ({ default: module.PlatformPage }))
);

export default function App() {
  return (
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
  );
}
