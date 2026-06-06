const DB_NAME = "lexflow-oab-db";
const DB_VERSION = 1;
const STORE_NAMES = {
  contentPacks: "content-packs"
};

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains(STORE_NAMES.contentPacks)) {
        database.createObjectStore(STORE_NAMES.contentPacks, { keyPath: "packId" });
      }
    };
  });
}

async function withStore(mode, executor) {
  const database = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = database.transaction(STORE_NAMES.contentPacks, mode);
    const store = transaction.objectStore(STORE_NAMES.contentPacks);

    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);

    executor(store, resolve, reject);
  }).finally(() => {
    database.close();
  });
}

export async function getContentPacks() {
  const database = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(STORE_NAMES.contentPacks, "readonly");
    const store = transaction.objectStore(STORE_NAMES.contentPacks);
    const request = store.getAll();

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result ?? []);
    transaction.oncomplete = () => database.close();
  });
}

export async function saveContentPack(pack) {
  await withStore("readwrite", (store) => {
    store.put(pack);
  });
}

export async function removeContentPack(packId) {
  await withStore("readwrite", (store) => {
    store.delete(packId);
  });
}

export async function clearContentPacks() {
  await withStore("readwrite", (store) => {
    store.clear();
  });
}
