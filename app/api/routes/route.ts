import { NextRequest, NextResponse } from 'next/server';

// A cache of the GET routes response is created when the app is built.
// Route data is only updated twice per year.
export async function GET(req: NextRequest) {
  let routes = await fetch(`${process.env.API_URL}/api/routes`,
    { next: { tags: ['schedule'] } }
  );
  let routesJson = await routes.json();
  return NextResponse.json(routesJson);
}