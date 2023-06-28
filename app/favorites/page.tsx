import styles from './page.module.css';
import MiniBoard from '../../components/MiniBoard/MiniBoard';

export default function Favorites() {
  // TODO: Add favorites to local storage
  const favorites = [
    { // Springfield Station Bay G
      stop_id: "02507",
    },
    { // Eugene Station Bay T
      stop_id: "02120",
    },
  ]
  return (
    <div className={styles.description}>
      <h1 className={styles.title}>Favorites</h1>
      <p className={styles.p}>
        Soon, you will be able to create and view your most-used departure boards here!
      </p>

      <div className={styles.card}>
        <div className={styles["card-title"]}>Eugene Station Bay A</div>
        <div className={styles["card-body"]}>
          <div className={styles.datetime}>Tuesday, June 20, 2023, 16:28</div>
          <div className={styles.headsign}>101 EMX Springfield Station</div>
          <div className={styles.remain + styles.dep}>DEP</div>
          <div className={styles.tod}>16:45</div>
          <div className={styles.headsign}>101 EMX &lt;&gt; Springfield via PeaceHealth</div>
          <div className={styles.remain}>(17 min)</div>
          <div className={styles.tod}>17:30</div>
          <div className={styles.headsign}></div>
          <div className={styles.remain}></div>
          <div className={styles.tod}></div>
          <div className={styles.headsign}>Last departure</div>
          <div className={styles.remain}>(2h)</div>
          <div className={styles.tod}>21:30</div>
        </div>
      </div>
      <div className={styles.boards}>
        <h2>Boards (looping from favorites)</h2>
        {favorites.map((favorite) => (
          // <li key={favorite.stop_id}>{favorite.stop_id}</li>
          // <div key={favorite.stop_id}>
            <MiniBoard key={favorite.stop_id} stopId={favorite.stop_id} />
          // </div>
        ))}
      </div>
      <div className={styles.data}>
        <h2>Temporary data shortcuts</h2>
        <ul>
          <li>
            <a href={`${process.env.API_URL}/api/departures?stop=02507&date=20230627`}>
              EMX Springfield Station Bay G -&gt; Eugene Station (weekday)
            </a>
          </li>
          <li>
            <a href={`${process.env.API_URL}/api/departures?stop=02120&date=20230627`}>
              EMX Eugene Station Bay T -&gt; Springfield Station (weekday)
            </a>
          </li>

        </ul>
      </div>

    </div>
  );
}
