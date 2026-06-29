/**
 * publisher.mjs
 * Publica no Instagram via Graph API.
 * Requer: INSTAGRAM_ACCOUNT_ID + INSTAGRAM_ACCESS_TOKEN no .env
 *
 * Fluxo single-image:
 *   1. Criar media container (image_url + caption)
 *   2. Aguardar FINISHED
 *   3. Publicar (media_publish)
 *   4. Adicionar comentário de gabarito
 *
 * Fluxo carrossel:
 *   1. Criar N containers individuais (is_carousel_item=true)
 *   2. Aguardar todos FINISHED
 *   3. Criar carousel container (media_type=CAROUSEL, children=[...])
 *   4. Aguardar FINISHED
 *   5. Publicar (media_publish)
 *   6. Adicionar comentário de gabarito
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

async function waitForContainer(containerId, maxAttempts = 15) {
  for (let i = 0; i < maxAttempts; i++) {
    await new Promise(r => setTimeout(r, 3000));
    const data = await igGet(`/${containerId}?fields=status_code`);
    console.log(`  container ${containerId} status: ${data.status_code}`);
    if (data.status_code === 'FINISHED') return;
    if (data.status_code === 'ERROR')    throw new Error(`Container ${containerId} falhou no processamento.`);
  }
  throw new Error('Timeout aguardando container do Instagram.');
}

// ── Single image ──────────────────────────────────────────────────────────────

/**
 * Publica uma única imagem no Instagram.
 * @param {string} imageUrl
 * @param {string} caption
 * @param {string} [comment]
 * @returns {string|null} ID do post publicado
 */
export async function publishToInstagram(imageUrl, caption, comment) {
  if (!TOKEN || !ACCOUNT) {
    console.warn('⚠️  Instagram não configurado. Imagem não publicada.');
    return null;
  }

  const container = await igFetch(`/${ACCOUNT}/media`, { image_url: imageUrl, caption });
  await waitForContainer(container.id);

  const post = await igFetch(`/${ACCOUNT}/media_publish`, { creation_id: container.id });
  console.log(`✓ Post publicado: ${post.id}`);

  if (comment && post.id) {
    await igFetch(`/${post.id}/comments`, { message: comment });
    console.log('✓ Comentário de gabarito adicionado.');
  }

  return post.id;
}

// ── Carrossel ─────────────────────────────────────────────────────────────────

/**
 * Publica um carrossel de imagens no Instagram.
 * @param {string[]} imageUrls — array de URLs públicas (até 10)
 * @param {string}   caption
 * @param {string}   [comment]
 * @returns {string|null} ID do post publicado
 */
export async function publishCarouselToInstagram(imageUrls, caption, comment) {
  if (!TOKEN || !ACCOUNT) {
    console.warn('⚠️  Instagram não configurado. Carrossel não publicado.');
    return null;
  }

  if (!imageUrls || imageUrls.length < 2) {
    throw new Error('Carrossel requer ao menos 2 imagens.');
  }

  // 1. Criar um container por slide
  console.log(`Criando ${imageUrls.length} containers de slides…`);
  const itemContainerIds = [];
  for (const url of imageUrls) {
    const c = await igFetch(`/${ACCOUNT}/media`, {
      image_url:          url,
      is_carousel_item:   true,
    });
    console.log(`  slide container criado: ${c.id}`);
    itemContainerIds.push(c.id);
  }

  // 2. Aguardar todos os slides ficarem FINISHED
  console.log('Aguardando processamento dos slides…');
  for (const cId of itemContainerIds) {
    await waitForContainer(cId);
  }

  // 3. Criar carousel container
  console.log('Criando container de carrossel…');
  const carousel = await igFetch(`/${ACCOUNT}/media`, {
    media_type: 'CAROUSEL',
    children:   itemContainerIds.join(','),
    caption,
  });

  await waitForContainer(carousel.id);

  // 4. Publicar
  const post = await igFetch(`/${ACCOUNT}/media_publish`, { creation_id: carousel.id });
  console.log(`✓ Carrossel publicado: ${post.id}`);

  // 5. Comentário de gabarito
  if (comment && post.id) {
    await igFetch(`/${post.id}/comments`, { message: comment });
    console.log('✓ Comentário de gabarito adicionado.');
  }

  return post.id;
}
