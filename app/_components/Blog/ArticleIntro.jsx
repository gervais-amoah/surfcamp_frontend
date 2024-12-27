import React from 'react';

export default function ArticleIntro({ article }) {
  console.log(article);
  return (
    <div className="article-intro">
      <div className="article-intro__background">
        <img src={article.featuredImage} alt={article.headline} />
      </div>

      <h3 className="article-intro__headline">{article.headline}</h3>
      <p className="copy-small bold">{article.date}</p>
      <p className="copy-small">{article.author}</p>
    </div>
  );
}
