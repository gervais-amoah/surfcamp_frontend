import { IMG_URL } from '@/utils/strapi.utils';
import React from 'react';

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
      return <h3 id={content.slug}>{content.headline}</h3>;
    case componentTypeList.paragraph:
      return <p>{content.paragraph}</p>;
    case componentTypeList.paragraphWithImage:
      return (
        <>
          <p>{content.paragraph}</p>
          <img
            src={IMG_URL + content.image.data.attributes.url}
            alt={content.image.alt}
          />
        </>
      );
    case componentTypeList.image:
      return (
        <img
          src={IMG_URL + content.image.data.attributes.url}
          alt={content.image.alt}
        />
      );
    case componentTypeList.landscapeImage:
      return (
        <img
          src={IMG_URL + content.image.data.attributes.url}
          alt={content.image.alt}
        />
      );
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
