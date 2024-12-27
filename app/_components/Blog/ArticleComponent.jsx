import { getImageUrl, IMG_URL } from '@/utils/strapi.utils';
import React from 'react';
import ArticleHeadline from './ArticleHeadline';
import ParagraphWithImage from './ParagraphWithImage';

export default function ArticleComponent({ component, content }) {
  const componentType = component.split('.')[1];
  const componentTypeList = {
    headline: 'headline',
    paragraph: 'paragraph',
    paragraphWithImage: 'paragraph-with-image',
    image: 'image',
    landscapeImage: 'landscape-image',
  };

  if (!componentType) {
    return <p>No component found</p>;
  }

  switch (componentType) {
    case componentTypeList.headline:
      return (
        <ArticleHeadline headline={content.headline} slug={content.slug} />
      );

    case componentTypeList.paragraph:
      return <p>{content.paragraph}</p>;
    case componentTypeList.paragraphWithImage:
      return <ParagraphWithImage content={content} />;
    case componentTypeList.image:
      return <img src={getImageUrl(content.image)} alt={content.image.alt} />;
    case componentTypeList.landscapeImage:
      return <img src={getImageUrl(content.image)} alt={content.image.alt} />;
    default:
      return <p>No component found</p>;
  }

  return (
    <div>
      <h3>{componentType}</h3>
      <p>{JSON.stringify(content, null, 2)}</p>
    </div>
  );
}
