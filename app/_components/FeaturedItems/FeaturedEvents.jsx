import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function FeaturedEvent({ event }) {
  return (
    <Link href={`/events/${event.id}`} className="featured-items__event">
      <div className="featured-items__event-img">
        <Image
          src={event.featuredImage}
          fill={true}
          sizes="100%"
          alt={`Open ${event.name} event`}
        />
      </div>
      <div className="featured-items__event-text">
        <h5 className="copy-small bold">{event.startingDate}</h5>
        <p className="copy-small">Prices starting at {event.startingPrice}</p>
      </div>
    </Link>
  );
}
