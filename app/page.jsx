import HeroSection from '@/app/_components/HeroSection';
import InfoBlock from '@/app/_components/InfoBlock';
import { HOME_HEADLINE } from '@/constants/headlines';
import { fetchInfoBlocks } from '@/utils/strapi.utils';

export default async function Home() {
  const infoBlocks = await fetchInfoBlocks();

  return (
    <>
      <HeroSection headline={HOME_HEADLINE} />
      {infoBlocks.map((block) => (
        <InfoBlock data={block} key={block.id} />
      ))}
    </>
  );
}
