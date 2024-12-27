import Link from 'next/link';

export default function ArticleOverview({ article }) {
  const headlines = article.articleContent.filter(
    (component) => component.__component === 'blog-article.headline'
  );

  return (
    <div className="article-overview">
      <div className="article-overview__info">
        <h3 className="article-overview__headline">In this blog</h3>
        <h5 className="article-overview__excerpt">{article.excerpt}</h5>
      </div>

      <ul className="article-overview__headlines">
        {headlines.map((headline, index) => (
          <li key={headline.id}>
            <Link href={`#${headline.slug}`}>
              {index + 1}. {headline.headline}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
