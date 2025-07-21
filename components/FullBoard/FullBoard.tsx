"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './FullBoard.module.css';

const tempTimes = [
  {"departure_time":"06:12:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
];

const initialDisplay = [
  {
    "departure_time":"00:00:00",
    "stop_headsign":"Loading...",
    "trip_headsign":"Loading..."
  }
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

// TODO: Keep this?
type Departure = {
  departure_time: string;
  stop_headsign: string;
  trip_headsign: string;
}

/* Move this hook to a separate file */
/**
 * Custom hook to get the current screen orientation.
 * @returns The current screen orientation ("portrait" or "landscape").
 * To use this hook, call it in your component:
 *   const orientation = useOrientation();
 *   console.log(`Current orientation: ${orientation}`);
 */
function useOrientation() {
  const [orientation, setOrientation] = useState(window.matchMedia("(orientation: portrait)").matches ? "portrait" : "landscape");

  useEffect(() => {
    const handler = () => setOrientation(window.matchMedia("(orientation: portrait)").matches ? "portrait" : "landscape");
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return orientation;
}

// Checking orientation without the hook:
// if window.matchMedia("(orientation: portrait)").matches {
//    //  console.log("Portrait");
// } else {
//    //  console.log("Landscape");
// }

export default function FullBoard(
  { stopId, stopName }: { stopId: string, stopName: string }) {

  const [currentTimeString, setCurrentTimeString] = useState<string>("");
  const [currentCalendarDate, setCurrentCalendarDate] = useState<string>("0");
  // FIXME: Use Departure type?
  const [departureTimes, setDepartureTimes] = useState(tempTimes);
  const [nextRows, setNextRows] = useState(initialDisplay);
  const [lastDeparture, setLastDeparture] = useState(
    {
      // Initial values
      "departure_time":"00:00:00",
      "stop_headsign":"101 EmX EUGENE STATION",
      "trip_headsign":"101 EmX EUGENE STATION"
    }
  );
  const rowsNeedUpdating = useRef(false);
  const orientation = useOrientation();

  // Clock.
  useEffect(() => {
    const timer = setInterval(() => {
      let now = new Date().toLocaleString('en-US', timeOptions);
      setCurrentTimeString(now);
      setCurrentCalendarDate(now.split(" ")[2]); // Trigger an API fetch every day
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Fetch initial departure times.
  useEffect(() => {
    console.log('Initial load for stop:', stopId);
    getDepartureTimes(stopId)
      .then((times) => {
        // console.log(`Fetched departure times for stop ${stopId}:`, times);
        setDepartureTimes(times);
        setLastDeparture(times.slice(-1)[0]);
        setNextRows(getNextRows(3));
      })
      .then(() => {
        rowsNeedUpdating.current = true;
      })
      .catch((error) => {
        console.error(`Error fetching departure times for stop ${stopId}:`, error);
        setDepartureTimes(tempTimes);
        setLastDeparture(tempTimes.slice(-1)[0]);
        setNextRows(getNextRows(3));
      });

  }, []);

  // FIXME: update the rows without triggering a re-render
  useEffect(() => {
    console.log(`Current time: ${currentTimeString} for stop ${stopId}. Update? ${rowsNeedUpdating.current}`);
    if (rowsNeedUpdating.current) {
      setNextRows(getNextRows(6));
      rowsNeedUpdating.current = false;
    }
  // }, [getNextRows, rowsNeedUpdating]);
  }, [currentTimeString, departureTimes]);
    
  /**
   * From the previously fetched departure times, get the next n rows
   * of departure times that are after the current time.
   * @param numRows How many rows to return
   * @returns An array of the next n rows of departure times
   */
  function getNextRows(numRows: number) {
    rowsNeedUpdating.current = false;
    const currentTime = new Date().toLocaleTimeString('en-US', 
    { hour12: false,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    const remainingRows = departureTimes.filter((row) => row.departure_time > currentTime);
    const nextRows = remainingRows.slice(0, numRows);
    // console.log(`totalRows = ${departureTimes.length}, remainingRows = ${remainingRows.length}, nextRows = ${nextRows.length}`);
    // console.log(`Next ${numRows} rows for stop ${stopId}:`, nextRows);
    // Fill empty rows with empty strings
    while (nextRows.length < numRows) {
      nextRows.push({departure_time: "", stop_headsign: "", trip_headsign: ""});
    }
    return nextRows;
  }

  function getLastDeparture() { // TODO: Unused
    return departureTimes.slice(-1);
  }

  function timeRemaining(time: string) {
    if (time === "") return "";
    const now = new Date();
    const then = new Date(now.toDateString() + " " + time);
    const diff = then.getTime() - now.getTime();
    const minutes = Math.floor(diff / 1000 / 60);
    if (minutes < -2) rowsNeedUpdating.current = true; // Remove this row.
    if (minutes < 0) return "(DEP)"; // Display if the bus has departed in th last 2 minutes.
    if (minutes === 0) return "(NOW)"; // Display if the bus is departing in less than a minute.
    if (minutes < 60) return `(${minutes} min)`; // Display if the bus is departing in less than an hour.
    if (minutes < 120) return `(${1}h ${minutes - 60}m)`; // Display if the bus is departing in less than 2 hours.
    return `(${Math.floor(minutes / 60)} hrs)`; // Display if the bus is departing in more than 2 hours.
  }

  return (
    <div className={styles.card}>
      <div className={styles["card-title"]}><Link href="/favorites">{stopName} ({stopId})</Link></div>
      <div className={styles["card-body"]}>

        <div className={styles.datetime}>{currentTimeString}</div>

        {nextRows.map((row, idx) => {
          return (
            <div className={styles.row} key={idx}>
              <div className={styles.headsign}>{row.stop_headsign}</div>
              <div className={styles.remain}>{timeRemaining(row.departure_time)}</div>
              <div className={styles.tod}>{row.departure_time.slice(0,5)}</div>
            </div>
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

/**
 * Fetches the departure times for a given stop ID for the current date from the API.
 * @param stopId The ID of the stop to fetch departure times for
 * @returns A promise that resolves to the departure times for the stop
 */
async function getDepartureTimes(stopId: string) {
  console.log(`Fetching departure times for stop ${stopId}`);
  // const url = `api/departures?stop=${stopId}&date=today`; // Relative URL would be ideal
  // const url = `${process.env.API_URL}/api/departures?stop=${stopId}&date=20250609`; // For testing
  const url = `${process.env.API_URL}/api/departures?stop=${stopId}&date=today`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}