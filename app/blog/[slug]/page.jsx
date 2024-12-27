import { fetchBlogArticles, fetchDataFromAPI } from '@/utils/strapi.utils';

export default async function BlogSlugPage({ params }) {
  const { slug } = params;
  const articles = await fetchBlogArticles();

  const article = articles.find((article) => article.slug === slug);

  return (
    <div>
      <h1>{article.headline}</h1>
    </div>
  );
}

export async function generateStaticParams() {
  const articles = await fetchDataFromAPI('blog-articles');

  return articles.map((article) => ({
    slug: article.attributes.slug,
  }));
}

export const revalidate = 60 * 60 * 24; // 24 hours
