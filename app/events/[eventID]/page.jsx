import SignupForm from '@/app/_components/Events/SignupForm';
import { REVALIDATE_TIME } from '@/utils/constants';
import { fetchDataFromAPI, fetchSingleEvent } from '@/utils/strapi.utils';
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
