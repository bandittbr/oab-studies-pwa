export function exportProgressSnapshot(state) {
  return {
    version: 1,
    exportedAt: new Date().toISOString(),
    payload: state
  };
}

export function parseProgressSnapshot(rawValue) {
  const parsed = JSON.parse(rawValue);
  if (!parsed?.payload) {
    throw new Error("Backup invalido.");
  }
  return parsed.payload;
}
