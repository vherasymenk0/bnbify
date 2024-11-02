import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

import { NextResponse } from 'next/server'
import { isAdminUser } from '~/utils/helpers'

const isPublicRoute = createRouteMatcher(['/', '/properties(.*)'])
const isAdminRoute = createRouteMatcher(['/admin(.*)'])

export default clerkMiddleware(async (auth, req) => {
  if (isAdminRoute(req) && !isAdminUser(auth().userId)) return NextResponse.redirect(new URL('/', req.url))
  if (!isPublicRoute(req)) auth().protect()
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
