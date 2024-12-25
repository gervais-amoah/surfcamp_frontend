import React from 'react';
import HighlightArcticle from '@/app/_components/Blog/HighlightArcticle';
import SubscribeToNewsletter from '@/app/_components/Blog/SubscribeToNewsletter';
import FeaturedItems from '@/app/_components/FeaturedItems/FeaturedItems';

export default function BlogPage() {
  const highlightArticliData = {
    headline: '3 tips for a super fast takeoff',
    excerpt: (
      <>
        Improving your take-off phase in surfing is a fundamental step toward
        riding waves with more confidence and style. Improving your take-off
        phase is a gradual process, and it may take time to master. Be patient,
        stay committed to practice, and enjoy the journey of becoming a better
        surfer. With dedication and persistence, you&apos;ll see progress and
        have more enjoyable rides. Here is how:
      </>
    ),
    slug: 'post-slug',
    featuredImage: '/assets/hero-experience.png',
  };

  const featuredItems = [
    {
      headline:
        'surfboard shaping and design behind the scenes of crafting the perfect board',
      slug: 'takeoff',
      date: 'Monday, June 05, 2023',
      featuredImage: '/assets/hero-experience.png',
    },
  ];

  return (
    <div className="blog-page">
      <HighlightArcticle data={highlightArticliData} />
      <SubscribeToNewsletter />
      <FeaturedItems items={featuredItems} />
    </div>
  );
}
