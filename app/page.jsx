import HeroSection from './_components/HeroSection';

export default function Home() {
  const heroHeadline = (
    <>
      <span>barrel.</span>
      <span>your.</span>
      <span>happiness.</span>
    </>
  );

  return (
    <>
      <HeroSection headline={heroHeadline} />
    </>
  );
}
