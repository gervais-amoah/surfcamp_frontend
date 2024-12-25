import React from 'react';
import HighlightArcticle from '@/app/_components/Blog/HighlightArcticle';

export default function BlogPage() {
  const highlightArticliData = {
    headline: 'Headline',
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

  return (
    <div>
      <HighlightArcticle data={highlightArticliData} />
    </div>
  );
}
