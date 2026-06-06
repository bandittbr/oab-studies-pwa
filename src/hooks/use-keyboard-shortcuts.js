import { useEffect } from "react";

export function useKeyboardShortcuts(bindings) {
  useEffect(() => {
    function handleKeydown(event) {
      const target = event.target;
      const isTypingTarget =
        target instanceof HTMLElement &&
        (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);

      if (isTypingTarget) {
        return;
      }

      const key = `${event.ctrlKey || event.metaKey ? "mod+" : ""}${event.key.toLowerCase()}`;
      const handler = bindings[key];

      if (handler) {
        event.preventDefault();
        handler(event);
      }
    }

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [bindings]);
}
