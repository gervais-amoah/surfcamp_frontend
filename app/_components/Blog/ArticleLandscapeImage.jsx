import { getImageUrl } from '@/utils/strapi.utils';
import React from 'react';

export default function ArticleLandscapeImage({ content }) {
  const { image, imageCaption } = content;
  const imageUrl = getImageUrl(image);
  return (
    <div className="article-image">
      <img src={imageUrl} alt={imageCaption} />
      {imageCaption && (
        <p className="article-image__caption copy-small">{imageCaption}</p>
      )}
    </div>
  );
}
