import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function InfoBlock({ data }) {
  const { headline, text, button, reversed } = data;

  return (
    <div className={`info ${reversed ? 'info--reversed' : ''}`}>
      <div className="info__image">
        <Image src="/info-blocks/rectangle.png" fill={true} alt="Info Block" />
      </div>

      <div className="info__text">
        <h2 className="info__headline">{headline}</h2>
        {text}
        <Link href="/">{button}</Link>
      </div>
    </div>
  );
}
