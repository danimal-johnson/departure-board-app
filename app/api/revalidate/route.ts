import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
 
export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get('tag') || 'all'
  // TODO: test the 'all' condition
  revalidateTag(tag)
  // This is misleading. The revalidateTag() function does not return a boolean.
  return NextResponse.json({ revalidated: true, now: Date.now() })
}
