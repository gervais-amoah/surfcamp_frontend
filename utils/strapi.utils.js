const BASE_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://127.0.0.1:1337/api';

export async function fetchData(route) {
  const url = `${BASE_URL}/${route}`;

  try {
    const data = await fetch(url).then((res) => res.json());
    console.log('DATA', data);

    return data?.data?.attributes?.info_blocks?.data || [];
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch data from ${url}`);
  }
}
