import HeroSection from '@/app/_components/HeroSection';
import InfoBlock from '@/app/_components/InfoBlock';
import { EXPERIENCE_HEADLINE } from '@/constants/headlines';
import { fetchDataFromAPI, formatInfoBlocks } from '@/utils/strapi.utils';

export default async function ExperiencePage() {
  const data = await fetchDataFromAPI('infoblocks-experience?populate=deep');
  const infoBlocks = formatInfoBlocks(data);

  return (
    <>
      <HeroSection
        headline={EXPERIENCE_HEADLINE}
        theme="orange"
        imgSrc="/assets/hero-experience.png"
      />
      {infoBlocks.map((block) => (
        <InfoBlock data={block} key={block.id} />
      ))}
    </>
  );
}
