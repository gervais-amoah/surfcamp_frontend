import Link from 'next/link';
import React from 'react';
import FeaturedArticle from './FeaturedArticle';

export default function FeaturedItems({ headline, items }) {
  return (
    <section className="featured-items">
      <h3 className="featured-items__headline">
        {headline || 'Our featured items'}
      </h3>

      <div className="featured-items__container">
        {items.map((item) => (
          <FeaturedArticle article={item} key={item.slug} />
        ))}
      </div>

      <Link href="/blog">
        <button className="btn btn--medium btn--turquoise">See more</button>
      </Link>
    </section>
  );
}
