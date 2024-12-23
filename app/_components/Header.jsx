import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const navItems = [
    { display: 'The Camp', slug: '/' },
    { display: 'The Experience', slug: '/experience' },
    { display: 'The Blog', slug: '/blog' },
  ];
  return (
    <header className="header">
      <Image
        className="header__logo"
        alt="Logo"
        src="/assets/logo.svg"
        width={50}
        height={78}
      />

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
