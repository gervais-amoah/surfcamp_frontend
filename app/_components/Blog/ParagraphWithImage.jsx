import { getImageUrl } from '@/utils/strapi.utils';
import ReactMarkdown from 'react-markdown';

export default function ParagraphWithImage({ content }) {
  const { paragraph, image, imageOnRight, imageCaption, isLandscape } = content;
  const imageUrl = getImageUrl(image);
  return (
    <div
      className={`article-text-image
        ${!imageOnRight ? 'article-text-image--reversed' : ''}      
      ${!isLandscape ? 'article-text-image--portrait' : ''}
      `}
    >
      <ReactMarkdown className="copy article-text-image__text article-paragraph">
        {paragraph}
      </ReactMarkdown>
      <div className="article-text-image__container">
        <div className="article-text-image__image">
          {imageUrl && <img src={imageUrl} alt={imageCaption} />}
        </div>
        <p className="article-text-image__caption copy-small">{imageCaption}</p>
      </div>
    </div>
  );
}
