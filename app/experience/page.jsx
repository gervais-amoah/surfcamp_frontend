import HeroSection from '@/app/_components/HeroSection';
import InfoBlock from '@/app/_components/InfoBlock';

export default function ExperiencePage() {
  const heroHeadline = (
    <>
      <span>discover.</span>
      <span>your.</span>
      <span>spirit.</span>
    </>
  );

  const infoBlockData = {
    headline: 'the experience.',
    text: (
      <p className="copy">
        At Sam’s Surfcamp, we invite you to embark on an unforgettable surfing
        adventure. Nestled in the heart of [Location] our surf camp offers an
        exhilarating experience for beginners, intermediate surfers, and
        seasoned wave riders alike. Dive into the world of surfing with our
        expert instructors who have years of experience and a deep passion for
        the sport. Whether you&apos;re a first-time surfer looking to catch your
        first wave or a seasoned pro seeking to enhance your skills, our
        dedicated team is here to guide you every step of the way. Immerse
        yourself in the natural beauty of our surf camp&apos;s surroundings.
        Picture yourself waking up to the sound of crashing waves and feeling
        the warm sand beneath your feet. With pristine beaches and a vibrant
        coastal atmosphere, [Location] sets the perfect stage for your surf
        adventure.
      </p>
    ),
    button: (
      <button className="btn btn--turquoise btn--medium">BOOK NOW</button>
    ),
    reversed: false,
  };

  return (
    <>
      <HeroSection
        headline={heroHeadline}
        theme="orange"
        imgSrc="/assets/hero-experience.png"
      />
      <InfoBlock data={infoBlockData} />
      <InfoBlock data={{ ...infoBlockData, reversed: true }} />
      <InfoBlock data={infoBlockData} />
    </>
  );
}
