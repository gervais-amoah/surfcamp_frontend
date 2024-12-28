import SignupForm from '@/app/_components/Events/SignupForm';
import { REVALIDATE_TIME } from '@/utils/constants';
import { fetchDataFromAPI, fetchSingleEvent } from '@/utils/strapi.utils';

export default async function SingleEventPage({ params }) {
  const { eventID } = params;
  const { name, description, startingDate, endDate, imageUrl } =
    await fetchSingleEvent(eventID);

  return (
    <div className="events-page">
      <SignupForm headline={name} infoText={description} />
      <ul>
        <li>Start Date: {startingDate}</li>
        <li>End Date: {endDate}</li>
      </ul>
      <img src={imageUrl} alt={name} width={300} />
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
