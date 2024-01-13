import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const publicRoutes = ['/','/dashboard','/login','/register']
 
export function middleware(request: NextRequest) {
 return NextResponse.next()
}
 
export const config = {
  matcher: '/:path*',
}