import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  const navItems = [
    { display: 'the camp.', slug: '/' },
    { display: 'the experience.', slug: '/experience' },
    { display: 'the blog.', slug: '/blog' },
    { display: 'the events.', slug: '/events' },
  ];

  const policyItems = [
    { display: 'Privacy Policy', slug: '/privacy' },
    { display: 'Terms and Conditions', slug: '/terms' },
    { display: 'Data Protection', slug: '/data-protection' },
  ];

  return (
    <footer className="footer">
      <nav className="footer__nav">
        <div className="footer__logo">
          <Image
            alt="Logo"
            src="/assets/logo.svg"
            fill={true}
            sizes="(max-width: 50px)"
          />
        </div>

        <ul className="footer__links">
          {navItems.map((item) => (
            <li key={item.display}>
              <Link href={item.slug}>
                <h5>{item.display}</h5>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="footer__policies">
        <ul className="footer__policies-nav">
          {policyItems.map((item) => (
            <li key={item.display}>
              <p className="copy">{item.display}</p>
            </li>
          ))}
        </ul>

        <p className="copy">© Sam’s Surfcamp - all rights reserved</p>
      </div>
    </footer>
  );
}
