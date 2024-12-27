import ReactMarkdown from 'react-markdown';

export default function ArticleParagraph({ content }) {
  return (
    <ReactMarkdown className="copy article-paragraph">
      {content.paragraph}
    </ReactMarkdown>
  );
}
