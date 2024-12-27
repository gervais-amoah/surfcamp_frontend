import { getImageUrl } from '@/utils/strapi.utils';
import ArticleHeadline from './ArticleHeadline';
import ArticleLandscapeImage from './ArticleLandscapeImage';
import ArticleParagraph from './ArticleParagraph';
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

  console.log('component:', component);

  if (!componentType) {
    return <p>No component found</p>;
  }

  switch (componentType) {
    case componentTypeList.headline:
      return <ArticleHeadline content={content} />;

    case componentTypeList.paragraph:
      return <ArticleParagraph content={content} />;

    case componentTypeList.paragraphWithImage:
      return <ParagraphWithImage content={content} />;

    case componentTypeList.image:
      return <img src={getImageUrl(content.image)} alt={content.image.alt} />;

    case componentTypeList.landscapeImage:
      return <ArticleLandscapeImage content={content} />;

    default:
      return <p>No component found</p>;
  }
}
