import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const navItems = [
    { display: 'the camp.', slug: '/' },
    { display: 'the experience.', slug: '/experience' },
    { display: 'the blog.', slug: '/blog' },
  ];
  return (
    <header className="header">
      <div className="header__logo">
        <Image
          alt="Logo"
          src="/assets/logo.svg"
          fill={true}
          priority={true}
          sizes="(max-width: 50px)"
        />
      </div>

      <ul className="header__nav">
        {navItems.map((item) => (
          <li key={item.display}>
            <Link href={item.slug}>
              <h5>{item.display}</h5>
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/events">
        <button className="btn btn--black btn--small">BOOK NOW</button>
      </Link>
    </header>
  );
}
