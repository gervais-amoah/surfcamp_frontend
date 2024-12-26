import HighlightArcticle from '@/app/_components/Blog/HighlightArcticle';
import SubscribeToNewsletter from '@/app/_components/Blog/SubscribeToNewsletter';
import FeaturedItems from '@/app/_components/FeaturedItems/FeaturedItems';
import { fetchBlogArticles } from '@/utils/strapi.utils';

export default async function BlogPage() {
  const articles = await fetchBlogArticles();
  const highlightedArticle =
    articles.find((article) => article.isHighlightArcticle) || articles[0];
  const articlesToShow = articles.filter(
    (article) => article.id !== highlightedArticle.id
  );

  return (
    <div className="blog-page">
      <HighlightArcticle data={highlightedArticle} />
      <SubscribeToNewsletter />
      <FeaturedItems items={articlesToShow} />
    </div>
  );
}
