/**
 * uploader.mjs
 * Faz upload de imagem(ns) para o Cloudinary e retorna URL(s) pública(s).
 */

import { readFileSync } from 'fs';
import { basename } from 'path';
import 'dotenv/config';

async function uploadOne(filePath, cloud, key, sec) {
  const url = `https://api.cloudinary.com/v1_1/${cloud}/image/upload`;

  const formData = new FormData();
  const blob = new Blob([readFileSync(filePath)], { type: 'image/png' });
  formData.append('file', blob, basename(filePath));
  formData.append('upload_preset', 'oab_bot');
  formData.append('folder', 'oab-social-bot');

  const auth = Buffer.from(`${key}:${sec}`).toString('base64');

  const res  = await fetch(url, {
    method:  'POST',
    headers: { Authorization: `Basic ${auth}` },
    body:    formData,
  });

  const json = await res.json();
  if (json.error) throw new Error(`Cloudinary: ${json.error.message}`);

  console.log(`✓ Upload: ${json.secure_url}`);
  return json.secure_url;
}

/**
 * Faz upload de um único arquivo e retorna a URL pública.
 */
export async function uploadImage(filePath) {
  const cloud = process.env.CLOUDINARY_CLOUD_NAME;
  const key   = process.env.CLOUDINARY_API_KEY;
  const sec   = process.env.CLOUDINARY_API_SECRET;
  return uploadOne(filePath, cloud, key, sec);
}

/**
 * Faz upload de múltiplos arquivos (slides do carrossel) em paralelo.
 * @param {string[]} filePaths — array de caminhos locais
 * @returns {string[]} array de URLs públicas (mesma ordem)
 */
export async function uploadImages(filePaths) {
  const cloud = process.env.CLOUDINARY_CLOUD_NAME;
  const key   = process.env.CLOUDINARY_API_KEY;
  const sec   = process.env.CLOUDINARY_API_SECRET;

  console.log(`Enviando ${filePaths.length} imagens ao Cloudinary…`);
  // Sequencial para evitar rate-limit
  const urls = [];
  for (const fp of filePaths) {
    urls.push(await uploadOne(fp, cloud, key, sec));
  }
  return urls;
}
