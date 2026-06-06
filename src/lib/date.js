export function nowIso() {
  return new Date().toISOString();
}

export function addHours(iso, hours) {
  const date = iso ? new Date(iso) : new Date();
  date.setHours(date.getHours() + hours);
  return date.toISOString();
}

export function isDue(iso) {
  if (!iso) {
    return false;
  }

  return new Date(iso).getTime() <= Date.now();
}

export function formatDateLabel(iso) {
  if (!iso) {
    return "--";
  }

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(iso));
}

export function formatShortDay(iso) {
  return new Intl.DateTimeFormat("pt-BR", {
    weekday: "short"
  }).format(new Date(iso));
}

export function formatDuration(totalSeconds) {
  const safeSeconds = Math.max(0, Math.floor(totalSeconds));
  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const seconds = safeSeconds % 60;

  return [hours, minutes, seconds].map((value) => String(value).padStart(2, "0")).join(":");
}

export function startOfDay(dateInput) {
  const date = new Date(dateInput);
  date.setHours(0, 0, 0, 0);
  return date;
}

export function sameDay(left, right) {
  return startOfDay(left).getTime() === startOfDay(right).getTime();
}
