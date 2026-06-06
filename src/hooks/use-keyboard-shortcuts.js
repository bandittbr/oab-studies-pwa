import { useEffect, useRef } from "react";

export function useKeyboardShortcuts(bindings) {
  // Guardar bindings em ref para evitar re-adicionar o listener a cada render
  const bindingsRef = useRef(bindings);
  useEffect(() => {
    bindingsRef.current = bindings;
  });

  useEffect(() => {
    function handleKeydown(event) {
      const target = event.target;
      const isTypingTarget =
        target instanceof HTMLElement &&
        (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);

      if (isTypingTarget) return;

      const key = `${event.ctrlKey || event.metaKey ? "mod+" : ""}${event.key.toLowerCase()}`;
      const handler = bindingsRef.current[key];

      if (handler) {
        event.preventDefault();
        handler(event);
      }
    }

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []); // Listener adicionado apenas uma vez
}
