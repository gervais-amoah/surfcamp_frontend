import React from 'react';

export default function ArticleHeadline({ content }) {
  return (
    <h3 className="article-headline" id={content.slug}>
      {content.headline}
    </h3>
  );
}
