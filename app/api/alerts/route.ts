import { NextRequest, NextResponse } from 'next/server';

// LTD's Service Alert RSS feed
// Passed through Toptal's RSS to JSON API
// Consider using npm package rss-parser
export async function GET(req: NextRequest) {
  let alerts = await fetch(`https://www.toptal.com/developers/feed2json/convert?url=https%3A%2F%2Fwww.ltd.org%2Fservice_alerts_rss.php`,
    { next: { revalidate: 600 } }
  );
  let alertsJson = await alerts.json();
  return NextResponse.json(alertsJson);
}
