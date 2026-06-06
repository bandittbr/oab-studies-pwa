import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // undefined = carregando, null = deslogado, objeto = usuário autenticado
  const [user, setUser] = useState(undefined);
  const [isGuest, setIsGuest] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u ?? null);
      if (u) setIsGuest(false); // login real cancela modo visitante
    });
    return unsub;
  }, []);

  function enterAsGuest() { setIsGuest(true); }
  function exitGuest() { setIsGuest(false); }

  return (
    <AuthContext.Provider value={{ user, isGuest, enterAsGuest, exitGuest }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
