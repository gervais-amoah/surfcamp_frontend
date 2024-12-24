import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function InfoBlock({ data }) {
  const { headline, text, button, imageUrl, reversed } = data;

  return (
    <div className={`info ${reversed ? 'info--reversed' : ''}`}>
      <div className="info__image">
        <Image src={imageUrl} fill={true} sizes="100%" alt="Info Block" />
      </div>

      <div className="info__text">
        <h2 className="info__headline">{headline}</h2>
        <p className="copy">{text}</p>
        {button && (
          <div className="info__button">
            <Link href={button.slug}>
              <button className={`btn btn--${button.color} btn--medium`}>
                {button.text}
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
