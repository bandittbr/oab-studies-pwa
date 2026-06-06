import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

// Campos sincronizados com a nuvem (progresso do usuário)
const SYNC_FIELDS = [
  "questionProgress",
  "favorites",
  "questionAnnotations",
  "articleAnnotations",
  "officialExamSessions",
  "theme",
  "preferences",
  "studySession",
  "lastVisitedSubjectId"
];

export async function loadUserProgress(uid) {
  try {
    const ref = doc(db, "users", uid, "data", "progress");
    const snap = await getDoc(ref);
    if (!snap.exists()) return null;
    return snap.data();
  } catch (err) {
    console.error("[Firestore] loadUserProgress error:", err);
    return null;
  }
}

export async function saveUserProgress(uid, state) {
  try {
    const data = {};
    for (const key of SYNC_FIELDS) {
      if (state[key] !== undefined) data[key] = state[key];
    }
    const ref = doc(db, "users", uid, "data", "progress");
    await setDoc(ref, data, { merge: true });
  } catch (err) {
    console.error("[Firestore] saveUserProgress error:", err);
  }
}
