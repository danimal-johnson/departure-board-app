import styles from './page.module.css';

// TODO: Use API instead of this import of static data
import { tempAlertFeed } from '../../lib/data';

async function getAlerts() {
  // FIXME: Not working: const res = await fetch("/api/alerts");
  // Only works in dev: const res = await fetch(`http://localhost:3000/api/alerts`);
  return tempAlertFeed;
}

export default async function Alerts() {
  let alerts = await getAlerts();

  return (
    <div>
      <h1 className={styles.pageTitle}>⚠️ Alerts ⚠️</h1>
      <div className={styles.pageDesc}>{alerts.description}</div>
      <div className={styles.alertList}>
        {alerts.items.map((alert: any) => (
          <div key={alert.url} className={styles.alert}>
            <h2 className={styles.alertTitle} ><a href={alert.url}>🚧 {alert.title}</a></h2>
            <p>{alert.content_html}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
