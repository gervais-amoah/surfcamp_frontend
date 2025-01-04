import '../sass/main.scss';
import Footer from './_components/Layout/Footer';
import Header from './_components/Layout/Header';

export const metadata = {
  title: 'WaveRiders: Surfing Adventures & Events',
  description:
    'Join WaveRiders for thrilling surfing adventures and exclusive events. Dive into our blog for the latest surf tips, event updates, and stories from the surf community. Ride the wave with us!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
