import styles from './page.module.css';
import FullBoard from '../../components/FullBoard/FullBoard';

/**
 * The full-screen departure board page. (Kiosk Mode)
 * (Server-Side Rendered. Call as `/fullscreen?stop=02507`.)
 * @param stop = The stop ID to display the departure board for.
 * If no stop ID is provided, defaults to Springfield Station Bay G (02507).
 * @returns a full-screen departure board for the specified stop.
 */
export default async function Fullscreen({ searchParams }: { searchParams: { stop?: string } } ) {
  // Ex: /fullscreen?stop_id=02507
  const stop_id = searchParams.stop || "02507"; // Default to Springfield Station Bay G
  // TODO: Get the stop name and other details from the API.
  // Create a server-side function to fetch this data:
  const stopName = await getStopName(stop_id);
  
  return (
    <main className={styles.main}>
      <FullBoard 
        key={stop_id}
        stopId={stop_id}
        stopName={stopName}
      />
    </main>
  );
}

/**
 * Fetches the stop name from the API based on the stop ID.
 * @param stopId The ID of the stop to fetch departure times for
 * @returns A promise that resolves to the departure times for the stop
 */
async function getStopName(stopId: string) {
  const url = `${process.env.API_URL}/api/stops/${stopId}`;
  // Returns { index, stop_id, stop_name, stop_lat, stop_lon, parent_station, platform_code }
  const response = await fetch(url);
  const data = await response.json();
  console.log(`Fetched stop info for stop ${stopId}:`, data.stop_name);
  return data.stop_name;
}

