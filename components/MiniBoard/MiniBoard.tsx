"use client";
import { useState, useEffect } from 'react';
import styles from './MiniBoard.module.css';

// TODO: Use API
const tempTimes = [
  {"departure_time":"06:12:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
  {"departure_time":"06:21:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"101 EmX EUGENE STATION"},
  {"departure_time":"06:41:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
  {"departure_time":"06:55:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
  {"departure_time":"07:06:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
  {"departure_time":"07:12:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
  {"departure_time":"07:26:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
  {"departure_time":"07:37:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
  {"departure_time":"20:56:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
  {"departure_time":"21:10:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
  {"departure_time":"21:26:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
  {"departure_time":"21:40:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
  {"departure_time":"21:56:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"101 EmX EUGENE STATION"},
  {"departure_time":"22:10:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
  {"departure_time":"22:26:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"101 EmX EUGENE STATION"},
  {"departure_time":"22:55:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
  {"departure_time":"23:25:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"101 EmX EUGENE STATION"}
];

const timeOptions: Intl.DateTimeFormatOptions = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour12: false,
  hour: 'numeric',
  minute: 'numeric',
}

// TODO: Use Interface, type, or just discard this?
type Departure = {
  departure_time: string;
  stop_headsign: string;
  trip_headsign: string;
}

export default function MiniBoard({ stopId }: { stopId: string }) {

  const [timeString, setTimeString] = useState<string>("");
  const [calendarDate, setCalendarDate] = useState<string>("0");
  // FIXME: Use Departure type?
  const [departureTimes, setDepartureTimes] = useState(tempTimes);
  const [nextRows, setNextRows] = useState([
    {
      "departure_time":"06:12:00",
      "stop_headsign":"101 EmX EUGENE STATION",
      "trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"
    }
  ]);
  const [lastDeparture, setLastDeparture] = useState(
    {
      "departure_time":"23:25:00",
      "stop_headsign":"101 EmX EUGENE STATION",
      "trip_headsign":"101 EmX EUGENE STATION"
    }
  );
  // const rowsNeedUpdating = useRef(false);

  // Clock.
  useEffect(() => {
    const timer = setInterval(() => {
      let now = new Date().toLocaleString('en-US', timeOptions);
      setTimeString(now);
      setCalendarDate(now.split(" ")[2]); // Trigger an API fetch every day
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Fetch departure times.
  useEffect(() => {
    setNextRows(getNextRows(3));
    if (calendarDate === "0") return;
    console.log(`Load stop #${stopId} times for ${calendarDate}`);
    // FIXME: Fetch today's departure times for this stop
    // const times = getDepartureTimes(stopId)
    const times = tempTimes;
    setDepartureTimes(tempTimes);
  }, [calendarDate, stopId]);

  function getNextRows(numRows: number) {
    const time = new Date().toLocaleTimeString('en-US', 
    { hour12: false,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    const allRows = departureTimes.filter((row) => row.departure_time > time);
    const rows = allRows.slice(0, numRows);
    // Fill empty rows with empty strings
    while (rows.length < numRows) {
      rows.push({departure_time: "", stop_headsign: "", trip_headsign: ""});
    }
    return rows;
  }

  function getLastDeparture() {
    // TODO: use actual list
    return departureTimes.slice(-1);
  }

  function timeRemaining(time: string) {
    const now = new Date();
    const then = new Date(now.toDateString() + " " + time);
    const diff = then.getTime() - now.getTime();
    const minutes = Math.floor(diff / 1000 / 60);
    if (minutes < 0) return "(DEP)";
    if (minutes === 0) return "(NOW)";
    if (minutes < 60) return `(${minutes} min)`;
    if (minutes < 120) return `(${1}h ${minutes - 60}m)`;
    return `(${Math.floor(minutes / 60)} hrs)`;
  }

  return (
    <div className={styles.card}>
      <div className={styles["card-title"]}>Stop ID: {stopId}</div>
      <div className={styles["card-body"]}>

        <div className={styles.datetime}>{timeString}</div>

        {nextRows.map((row) => {
          return (
            <>
            <div className={styles.headsign}>{row.trip_headsign}</div>
            <div className={styles.remain}>{timeRemaining(row.departure_time)}</div>
            <div className={styles.tod}>{row.departure_time.slice(0,5)}</div>
            </>
          )
        })}

        <div className={styles.headsign}></div>
        <div className={styles.remain}></div>
        <div className={styles.tod}></div>

        <div className={styles.headsign}>Last departure</div>
        <div className={styles.remain}>{timeRemaining(lastDeparture.departure_time)}</div>
        <div className={styles.tod}>{lastDeparture.departure_time.slice(0,5)}</div>
      </div>
    </div>
  )
}

async function getDepartureTimes(stopId: string) {
  const url = `${process.env.API_URL}?stop=${stopId}&date=today`;
  // const response = await fetch(url);
  // const data = await response.json();
  const now = new Date()
    .toLocaleDateString('en-GB', {timeZone: 'America/Los_Angeles'})
    .split('').reverse().join('');
  console.log(`Fetching ${stopId} times for ${now}`);
  
  return tempTimes;
}