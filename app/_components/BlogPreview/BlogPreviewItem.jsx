import Link from 'next/link';

export default function BlogPreviewItem({ article }) {
  const { id, headline, date, author, slug, featuredImage } = article;
  return (
    <div className="blog-preview__item">
      <Link href={`/blog/${slug}`}>
        <div className="blog-preview__image">
          <img src={featuredImage} alt={headline} />
        </div>
        <h5 className="blog-preview__title">{headline}</h5>
        <p className="copy-small">
          {author} - {date}
        </p>
      </Link>
    </div>
  );
}
