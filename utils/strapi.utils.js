import moment from 'moment';
import { API_URL, IMG_URL } from './constants';
import qs from 'qs';

export async function fetchDataFromAPI(route) {
  const url = `${API_URL}/${route}`;

  try {
    const data = await fetch(url, {
      cache: 'no-cache',
    }).then((res) => res.json());

    return data?.data || [];
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch data from ${url}`);
  }
}

export async function fetchInfoBlocks() {
  const data = await fetchDataFromAPI('infoblocks-landing?populate=deep');
  return formatInfoBlocks(data);
}

export async function fetchBlogArticles() {
  const data = await fetchDataFromAPI('blog-articles?populate=deep');
  return formatBlogArticles(data);
}

export async function fetchSingleEvent(eventID) {
  const eventData = await fetchDataFromAPI(`events/${eventID}?populate=deep`);
  const {
    attributes: {
      name,
      description,
      startingDate,
      singlePrice,
      sharedPrice,
      endDate,
      image,
    },
  } = eventData;
  const imageUrl = getImageUrl(image);

  return {
    name,
    description,
    startingDate: moment(startingDate).format('MMMM Do, YYYY'),
    endDate: moment(endDate).format('MMMM Do, YYYY'),
    singlePrice,
    sharedPrice,
    imageUrl,
  };
}

export function generateEventSignupPayload(formData, eventID) {
  return {
    data: {
      ...formData,
      ...(eventID
        ? { events: { connect: [eventID] } }
        : { isGeneralInterest: true }),
    },
  };
}

export async function fetchAllFutureEvents(limit = 12, eventToExclude = null) {
  const query = qs.stringify(
    {
      pagination: {
        start: 0,
        limit: limit,
      },
      filters: {
        startingDate: {
          $gt: new Date(),
        },
        id: eventToExclude ? { $ne: eventToExclude } : {},
      },
      sort: ['startingDate:asc'],
      populate: {
        image: {
          populate: '*',
        },
      },
    },
    { encodeValuesOnly: true }
  );

  const res = await fetch(`${API_URL}/events?${query}`).then((res) =>
    res.json()
  );
  return formatEvents(res.data);
}

export function formatInfoBlocks(data) {
  const rawArr = data?.attributes?.info_blocks?.data || [];
  return rawArr.map((block) => ({
    id: block.id,
    headline: block.attributes.headline,
    text: block.attributes.body,
    imageUrl: IMG_URL + block.attributes.image.data.attributes.url,
    reversed: block.attributes.ShowImageOnRight,
    button: block.attributes.button,
  }));
}
export function formatBlogArticles(data) {
  return (
    data
      .sort(
        (a, b) =>
          new Date(b.attributes.publishedAt) -
          new Date(a.attributes.publishedAt)
      )
      .map((article) => ({
        id: article.id,
        headline: article.attributes.headline,
        author: article.attributes.author,
        excerpt: article.attributes.excerpt,
        slug: article.attributes.slug,
        date: moment(article.attributes.publishedAt).format(
          'dddd, Do MMMM YYYY'
        ),
        isHighlightArcticle: article.attributes.isHighlightArcticle,
        featuredImage:
          IMG_URL + article.attributes.featuredImage.data.attributes.url,
        articleContent: article.attributes.articleContent,
      })) || []
  );
}
export function formatEvents(data) {
  return data.map((event) => ({
    id: event.id,
    name: event.attributes.name,
    description: event.attributes.description,
    startingPrice: event.attributes.singlePrice,
    startingDate: moment(event.attributes.publishedAt).format(
      'dddd, MMMM Do, YYYY'
    ),
    featuredImage: IMG_URL + event.attributes.image.data.attributes.url,
  }));
}

export function getImageUrl(image) {
  return IMG_URL + image.data.attributes.url;
}
