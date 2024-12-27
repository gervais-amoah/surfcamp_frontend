import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function FeaturedArticle({ article }) {
  return (
    <Link href={`/blog/${article.slug}`} className="featured-items__article">
      <div className="featured-items__article-img">
        <Image
          src={article.featuredImage}
          fill={true}
          sizes="100%"
          alt={`Go to the article ${article.headline}`}
        />
      </div>
      <div className="featured-items__article-text">
        <h5>{article.headline}</h5>
        <p className="copy">{article.date}</p>
      </div>
    </Link>
  );
}
