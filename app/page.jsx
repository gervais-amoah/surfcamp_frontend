import HeroSection from '@/app/_components/HeroSection';
import InfoBlock from '@/app/_components/InfoBlock';
import { HERO_HEADLINE } from '@/constants/home';
import { fetchDataFromAPI, formatInfoBlocks } from '@/utils/strapi.utils';

export default async function Home() {
  const data = await fetchDataFromAPI('infoblocks-landing?populate=deep');
  const infoBlocks = formatInfoBlocks(data);

  return (
    <>
      <HeroSection headline={HERO_HEADLINE} />
      {infoBlocks.map((block) => (
        <InfoBlock data={block} key={block.id} />
      ))}
    </>
  );
}
