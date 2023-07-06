import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

type ServiceInfo = { 
  agency_id?: string;
  name?: string;
  url?: string;
  timezone?: string;
  language?: string;
  start_date?: string;
  end_date?: string;
  utc_time?: string;
  server_time?: string;
  local_time?: string;
};

type Favorite = {
  stop_id: string;
  route_id?: string;
}

async function getServiceInfo() {
  const res = await fetch(`${process.env.API_URL}/api/info`,
    { next: { tags: ['schedule'] } }
  );
  // TODO: Handle errors
  return res.json();
}

export default async function Home() {
  let now = new Date();
  let serviceInfo: ServiceInfo = await getServiceInfo();
  let errorStatus = false;

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Page last updated:&nbsp;
          <code className={styles.code}>{now.toLocaleString()}</code>
        </p>
      </div>

      <div className={styles.center}>
        {errorStatus ? (
          <p className={styles.error}>Error: Could not connect to API.</p>
        ) : (
          <div>
            <div className={styles.blurb}>
              <h1>Portable Departure Boards</h1>
              <p>View your transit departure board wherever you are.</p>
            </div>
            <div className={styles.blurb}>
              <h2>Serving {serviceInfo.agency_id} ({serviceInfo.name})</h2>
              <p>Calendar dates: {serviceInfo.start_date} - {serviceInfo.end_date}</p>
            </div>
          </div>
        )}
      </div>

      {/* Favorites */}
      <div className={styles.grid}>
        <Link className={styles.card} href="./favorites">
          <h2>
            Favorites <span>-&gt;</span>
          </h2>
          <p>View your most-used departure boards</p>
        </Link>

        
        <Link className={styles.card} href="./alerts">
          <h2>
            Alerts <span>-&gt;</span>
          </h2>
          <p>Cancelations, delays, route changes, etc.</p>
        </Link>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        {/* API */}
        <a
          href="https://transit-board-be.up.railway.app/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            API <span>-&gt;</span>
          </h2>
          <p>
            Go to the deployed version of the API.
          </p>
        </a>
      </div>
    </main>
  )
}
