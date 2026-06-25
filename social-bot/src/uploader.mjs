/**
 * uploader.mjs
 * Faz upload da imagem para o Cloudinary e retorna a URL pública.
 */

import { readFileSync } from 'fs';
import { basename } from 'path';
import 'dotenv/config';

export async function uploadImage(filePath) {
  const cloud = process.env.CLOUDINARY_CLOUD_NAME;
  const key   = process.env.CLOUDINARY_API_KEY;
  const sec   = process.env.CLOUDINARY_API_SECRET;

  const url = `https://api.cloudinary.com/v1_1/${cloud}/image/upload`;

  const formData = new FormData();
  const blob = new Blob([readFileSync(filePath)], { type: 'image/png' });
  formData.append('file', blob, basename(filePath));
  formData.append('upload_preset', 'oab_bot');
  formData.append('folder', 'oab-social-bot');

  const auth = Buffer.from(`${key}:${sec}`).toString('base64');

  const res = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Basic ${auth}` },
    body: formData,
  });

  const json = await res.json();
  if (json.error) throw new Error(`Cloudinary: ${json.error.message}`);

  console.log(`✓ Imagem enviada: ${json.secure_url}`);
  return json.secure_url;
}
