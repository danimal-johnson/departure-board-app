import styles from './page.module.css';
import MiniBoard from '../../components/MiniBoard/MiniBoard';

export default function Favorites() {
  // TODO: Add favorites to local storage
  const favorites = [
    { // Springfield Station Bay F
      stop_id: "02506",
      stop_name: "Springfield Station, Bay F",
    },
    { // Eugene Station Bay T
      stop_id: "02120",
      stop_name: "Eugene Station, Bay T",
    },
    { // Springfield Station Bay G
      stop_id: "02507",
      stop_name: "Springfield Station, Bay G",
    },
  ]
  return (
    <div className={styles.description}>
      <h1 className={styles.title}>Favorites</h1>
      <p className={styles.p}>
        Create and view your most-used departure boards here!
      </p>

      <div className={styles.boards}>
        <h2>Favorite Departure Boards</h2>
        {favorites.map((favorite) => (
          <MiniBoard 
            key={favorite.stop_id}
            stopId={favorite.stop_id}
            stopName={favorite.stop_name}
          />
        ))}

        <div className={styles.card}>
          <div className={styles["card-title"]}>&#43; Add a new favorite</div>
        </div>
      </div>
      <div className={styles.data}>
        <h2>Temporary data shortcuts</h2>
        <ul>
          <li>
            <a href={`${process.env.API_URL}/api/departures?stop=02507&date=today`}>
              EMX Springfield Bay G -&gt; Eugene (today)
            </a>
          </li>
          <li>
            <a href={`${process.env.API_URL}/api/departures?stop=02120&date=today`}>
              EMX Eugene Bay T -&gt; Springfield (today)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
