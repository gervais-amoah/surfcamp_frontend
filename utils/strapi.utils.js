const API_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://127.0.0.1:1337/api';

const IMG_URL =
  process.env.NEXT_PUBLIC_STRAPI_GALLERY_URL || 'http://127.0.0.1:1337';

export async function fetchDataFromAPI(route) {
  const url = `${API_URL}/${route}`;

  try {
    const data = await fetch(url, {
      cache: 'no-cache',
    }).then((res) => res.json());
    console.log('DATA', data);

    return data?.data?.attributes?.info_blocks?.data || [];
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch data from ${url}`);
  }
}

export function formatInfoBlocks(data) {
  return data.map((block) => ({
    id: block.id,
    headline: block.attributes.headline,
    text: block.attributes.body,
    imageUrl: IMG_URL + block.attributes.image.data.attributes.url,
    reversed: block.attributes.ShowImageOnRight,
    button: block.attributes.button,
  }));
}
