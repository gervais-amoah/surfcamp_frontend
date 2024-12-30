import SignupForm from '@/app/_components/Events/SignupForm';
import FeaturedItems from '@/app/_components/FeaturedItems/FeaturedItems';
import { REVALIDATE_TIME } from '@/utils/constants';
import {
  fetchAllFutureEvents,
  fetchDataFromAPI,
  fetchSingleEvent,
} from '@/utils/strapi.utils';
import ReactMarkdown from 'react-markdown';

export default async function SingleEventPage({ params }) {
  const { eventID } = params;
  const {
    name,
    description,
    startingDate,
    endDate,
    singlePrice,
    sharedPrice,
    imageUrl,
  } = await fetchSingleEvent(eventID);

  const otherFutureEvents = await fetchAllFutureEvents(7, Number(eventID), {});

  const infoText = (
    <ReactMarkdown className="copy">{description}</ReactMarkdown>
  );

  const pricing = {
    singlePrice,
    sharedPrice,
  };

  const date = {
    start: startingDate,
    end: endDate,
  };

  return (
    <div className="events-page">
      <SignupForm
        headline={name}
        infoText={infoText}
        btnLabel="Sign up"
        pricing={pricing}
        date={date}
        featuredImage={imageUrl}
        eventID={Number(eventID)}
      />
      <FeaturedItems
        headline="Explore other events"
        items={otherFutureEvents}
        type="events"
      />
    </div>
  );
}

export async function generateStaticParams() {
  try {
    const events = await fetchDataFromAPI('events');

    return events.map((event) => ({
      eventID: String(event.id),
    }));
  } catch (error) {
    console.error('Error fetching IDs for blog events', error);
  }
}

export const revalidate = REVALIDATE_TIME; // 24 hours
