import ArticleComponent from '@/app/_components/Blog/ArticleComponent';
import ArticleIntro from '@/app/_components/Blog/ArticleIntro';
import ArticleOverview from '@/app/_components/Blog/ArticleOverview';
import { fetchBlogArticles, fetchDataFromAPI } from '@/utils/strapi.utils';

export default async function BlogSlugPage({ params }) {
  const { slug } = params;
  const articles = await fetchBlogArticles();
  const article = articles.find((article) => article.slug === slug);

  return (
    <div>
      <ArticleIntro article={article} />
      <section className="article-section">
        <ArticleOverview article={article} />
        {article.articleContent.map((component, index) => (
          <ArticleComponent
            key={component.id}
            component={component.__component}
            content={component}
          />
        ))}
      </section>
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
