/**
 * tracker.mjs
 * Registra questões postadas no Firestore.
 * Em path B (local), usar selector.mjs com posted.json é suficiente.
 * Este módulo é ativado quando FIREBASE_PROJECT_ID estiver configurado.
 */

import 'dotenv/config';

let db = null;

async function getDb() {
  if (db) return db;

  const { initializeApp, cert } = await import('firebase-admin/app');
  const { getFirestore }        = await import('firebase-admin/firestore');

  initializeApp({
    credential: cert({
      projectId:   process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey:  process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });

  db = getFirestore();
  return db;
}

const COLLECTION = 'posted_questions';

/**
 * Retorna Set com IDs de questões já postadas.
 */
export async function getPostedIds() {
  if (!process.env.FIREBASE_PROJECT_ID) return new Set();
  const db   = await getDb();
  const snap = await db.collection(COLLECTION).get();
  return new Set(snap.docs.map(d => d.id));
}

/**
 * Registra uma questão como postada.
 * @param {string} questionId
 * @param {object} meta — instagramPostId, captionPreview, etc.
 */
export async function markPosted(questionId, meta = {}) {
  if (!process.env.FIREBASE_PROJECT_ID) {
    console.log('ℹ️  Firestore não configurado — usando posted.json local.');
    return;
  }
  const db = await getDb();
  await db.collection(COLLECTION).doc(questionId).set({
    postedAt: new Date().toISOString(),
    ...meta,
  });
  console.log(`✓ Questão ${questionId} registrada no Firestore.`);
}
