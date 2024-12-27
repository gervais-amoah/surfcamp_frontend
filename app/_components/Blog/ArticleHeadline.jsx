import React from 'react';

export default function ArticleHeadline({ headline, slug }) {
  return (
    <h3 className="article-headline" id={slug}>
      {headline}
    </h3>
  );
}
