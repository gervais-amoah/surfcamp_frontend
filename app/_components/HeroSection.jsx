import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function HeroSection({ headline, imgSrc, theme = 'turquoise' }) {
  return (
    <section className="hero">
      <div className="hero__background">
        <img src={imgSrc ?? '/assets/hero-home.jpg'} alt="Hero Image" />
      </div>
      <div className={`hero__headline hero__headline--${theme}`}>
        <h1>{headline ?? 'Headline missing...'}</h1>
      </div>
      <Link href="/events">
        <button className={`btn btn--medium btn--${theme}`}>BOOK NOW</button>
      </Link>

      <Image
        className={`hero__logo hero__logo--${theme}`}
        src="/assets/logo.svg"
        width={120}
        height={185}
        alt="Logo"
      />
    </section>
  );
}
