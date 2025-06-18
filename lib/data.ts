// This file contains static data for the Springfield EmX app.
// It simulates network requests to fetch departure times and alerts.
// It is for testing purposes only.

const delay = (milliseconds: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, milliseconds);
  });
}

// Simulate a network request
export const getStaticTimes = async () => {
  await delay(1000);
  return tempTimes;
}

// Simulate a network request
export const getStaticAlerts = async () => {
  await delay(1000);
  return tempAlertFeed;
}

// This currently contains all Springfield weekday departure times
export const tempTimes = [
{"departure_time":"06:12:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"06:21:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"101 EmX EUGENE STATION"},
{"departure_time":"06:41:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"06:55:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"07:06:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"07:12:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"07:26:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"07:37:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"07:44:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"07:58:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"08:08:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"08:18:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"08:28:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"08:38:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"08:48:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"08:58:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"09:07:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"09:17:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"09:27:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"09:36:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"09:47:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"09:56:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"10:07:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"10:16:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"10:27:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"10:36:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"10:47:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"11:01:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"11:17:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"11:31:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"11:47:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"12:01:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"12:17:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"12:26:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"12:42:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"12:57:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"13:12:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"13:28:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"13:38:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"13:53:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"14:08:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"14:23:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"14:38:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"14:53:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"15:03:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"15:13:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"15:28:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"15:43:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"15:57:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"16:12:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"16:27:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"16:42:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"16:57:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"17:12:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"17:27:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"17:37:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"17:48:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"17:58:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"18:08:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"18:20:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"18:27:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"18:37:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"18:47:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"18:56:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"19:07:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"19:15:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"19:25:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"19:40:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"20:25:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"20:40:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"19:55:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
{"departure_time":"20:09:00","stop_headsign":"101 EmX EUGENE STATION","trip_headsign":"103 EmX WEST 11TH <> COMMERCE STATION"},
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

export const tempAlertFeed = {"version":"https://jsonfeed.org/version/1","title":"LTD Service Alerts Feed","home_page_url":"https://www.ltd.org/service_alerts_rss.php","description":"LTD service alerts updates","items":[{"guid":"https://www.ltd.org/service_alerts_rss.php","url":"https://www.ltd.org/service-alerts/?1784","title":"EmX - Construction Detour","content_html":"Due to construction, EmX will not serve the bus stop on 10th Ave. &amp; High Street until June 30. Please proceed to the alternate stop at 11th Ave. &amp; Hilyard Street.","summary":"Due to construction, EmX will not serve the bus stop on 10th Ave. &amp; High Street until June 30. Please proceed to the alternate stop at 11th Ave. &amp; Hilyard Street."},{"guid":"https://www.ltd.org/service_alerts_rss.php","url":"https://www.ltd.org/service-alerts/?1783","title":"Routes 12, 13, 24, 91, and 96: Construction Detour","content_html":"Due to construction, Routes 12, 13, 24, 91, and 96 will not serve the bus stop on 8th Ave. between Oak and Willamette, beginning June 1 through project completion. For routes 12, 13, 91, and 96, please proceed to the alternate stop on 8th Ave. &amp; High Street. For route 24, please proceed to Oak St. &amp; Broadway.","summary":"Due to construction, Routes 12, 13, 24, 91, and 96 will not serve the bus stop on 8th Ave. between Oak and Willamette, beginning June 1 through project completion. For routes 12, 13, 91, and 96, please proceed to the alternate stop on 8th Ave. &amp; High Street. For route 24, please proceed to Oak St. &amp; Broadway."},{"guid":"https://www.ltd.org/service_alerts_rss.php","url":"https://www.ltd.org/service-alerts/?1779","title":"Saturday Market Detour - Routes 12, 13, 40, 66, 91, 95, and 96","content_html":"Due to the Saturday Market, Routes 12, 13, 40, 66, 91, 95, and 96 will not be able to serve bus stops on Oak St. between 11th and 5th Ave. on Saturdays from 7:00 AM to 6:00 PM. For buses leaving Eugene Station, use alternate stops on High Street. For buses arriving at Eugene Station, use alternate stops on Pearl Street.","summary":"Due to the Saturday Market, Routes 12, 13, 40, 66, 91, 95, and 96 will not be able to serve bus stops on Oak St. between 11th and 5th Ave. on Saturdays from 7:00 AM to 6:00 PM. For buses leaving Eugene Station, use alternate stops on High Street. For buses arriving at Eugene Station, use alternate stops on Pearl Street."},{"guid":"https://www.ltd.org/service_alerts_rss.php","url":"https://www.ltd.org/service-alerts/?1504","title":"EmGo - Service Canceled Until Further Notice","content_html":"EmGo services are canceled until further notice.","summary":"EmGo services are canceled until further notice."}]};