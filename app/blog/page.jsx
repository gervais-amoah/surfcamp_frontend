import HighlightArcticle from '@/app/_components/Blog/HighlightArcticle';
import SubscribeToNewsletter from '@/app/_components/Blog/SubscribeToNewsletter';
import FeaturedItems from '@/app/_components/FeaturedItems/FeaturedItems';
import { fetchDataFromAPI, formatBlogArticles } from '@/utils/strapi.utils';

export default async function BlogPage() {
  const data = await fetchDataFromAPI('blog-articles?populate=deep');
  const articles = formatBlogArticles(data);
  const highlightedArticle = articles.find(
    (article) => article.isHighlightArcticle
  );
  const articlesToShow = articles.filter(
    (article) => !article.isHighlightArcticle
  );

  return (
    <div className="blog-page">
      <HighlightArcticle data={highlightedArticle} />
      <SubscribeToNewsletter />
      <FeaturedItems items={articlesToShow} />
    </div>
  );
}
