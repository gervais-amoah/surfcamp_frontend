import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function HighlightArcticle({ data }) {
  const { headline, excerpt, slug, featuredImage } = data;

  return (
    <article className="highlight-article">
      <div className="highlight-article__info">
        <h3>{headline}</h3>
        <p className="copy">{excerpt}</p>
        <Link href={`/blog/${slug}`}>
          <button className="btn btn--medium btn--turquoise">Read more</button>
        </Link>
      </div>

      <img
        className="highlight-article__image"
        src={featuredImage}
        alt="hero"
      />
    </article>
  );
}
