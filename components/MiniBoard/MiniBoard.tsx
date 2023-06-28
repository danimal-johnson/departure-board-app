import styles from './MiniBoard.module.css';

export default function MiniBoard({ stopId }: { stopId: string }) {
  // console.log(props);
  // let stopId = props;
  return (
    // <h3>This is {stopId}</h3>
    <div className={styles.card}>
      <div className={styles["card-title"]}>Stop ID: {stopId}</div>
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

  )
}
