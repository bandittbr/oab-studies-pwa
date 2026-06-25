/**
 * publisher.mjs
 * Publica no Instagram via Graph API.
 * Requer: INSTAGRAM_ACCOUNT_ID + INSTAGRAM_ACCESS_TOKEN no .env
 *
 * Fluxo Graph API:
 *  1. Criar media container (POST /me/media) com image_url + caption
 *  2. Publicar container   (POST /me/media_publish)
 *  3. Adicionar comentário com gabarito
 */

import 'dotenv/config';

const BASE_URL = 'https://graph.facebook.com/v21.0';
const TOKEN    = process.env.INSTAGRAM_ACCESS_TOKEN;
const ACCOUNT  = process.env.INSTAGRAM_ACCOUNT_ID;

async function igFetch(path, body) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ ...body, access_token: TOKEN }),
  });
  const json = await res.json();
  if (json.error) throw new Error(`Instagram API: ${json.error.message}`);
  return json;
}

async function igGet(path) {
  const url = `${BASE_URL}${path}&access_token=${TOKEN}`;
  const res  = await fetch(url);
  return res.json();
}

async function waitForContainer(containerId, maxAttempts = 12) {
  for (let i = 0; i < maxAttempts; i++) {
    await new Promise(r => setTimeout(r, 3000));
    const data = await igGet(`/${containerId}?fields=status_code`);
    console.log(`  container status: ${data.status_code}`);
    if (data.status_code === 'FINISHED') return;
    if (data.status_code === 'ERROR') throw new Error('Container falhou no processamento.');
  }
  throw new Error('Timeout aguardando container do Instagram.');
}

/**
 * Publica a imagem no Instagram.
 * @param {string} imageUrl  — URL pública da imagem (ex: CDN ou GitHub raw)
 * @param {string} caption   — legenda completa
 * @param {string} [comment] — comentário de gabarito (opcional)
 * @returns {string} ID do post publicado
 */
export async function publishToInstagram(imageUrl, caption, comment) {
  if (!TOKEN || !ACCOUNT) {
    console.warn('⚠️  Instagram não configurado (dry-run). Imagem não publicada.');
    return null;
  }

  // 1. Criar container
  const container = await igFetch(`/${ACCOUNT}/media`, {
    image_url: imageUrl,
    caption,
  });

  // 2. Aguardar container ficar pronto
  await waitForContainer(container.id);

  // 3. Publicar
  const post = await igFetch(`/${ACCOUNT}/media_publish`, {
    creation_id: container.id,
  });

  console.log(`✓ Post publicado no Instagram: ${post.id}`);

  // 3. Comentário de gabarito
  if (comment && post.id) {
    await igFetch(`/${post.id}/comments`, { message: comment });
    console.log('✓ Comentário de gabarito adicionado.');
  }

  return post.id;
}
