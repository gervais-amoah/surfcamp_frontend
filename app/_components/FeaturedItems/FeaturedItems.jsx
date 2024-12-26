'use client';
import Link from 'next/link';
import { useState } from 'react';
import FeaturedArticle from './FeaturedArticle';

export default function FeaturedItems({ headline, items }) {
  const [itemNumber, setItemNumber] = useState(3);

  const increaseNumber = () => {
    setItemNumber((prev) => {
      if (prev + 3 > items.length) {
        return items.length;
      }
      return prev + 3;
    });
  };

  return (
    <section className="featured-items">
      <h3 className="featured-items__headline">
        {headline || 'Our featured items'}
      </h3>

      <div className="featured-items__container">
        {items.slice(0, itemNumber).map((item) => (
          <FeaturedArticle article={item} key={item.slug} />
        ))}
      </div>

      {items.length > itemNumber ? (
        <Link href="/blog">
          <button
            className="btn btn--medium btn--turquoise"
            onClick={increaseNumber}
          >
            See more
          </button>
        </Link>
      ) : null}
    </section>
  );
}
