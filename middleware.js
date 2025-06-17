import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

export async function middleware(request) {
  const token = request.cookies.get('auth')?.value;
  const { pathname } = request.nextUrl;


  if (request.method === 'OPTIONS') {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}

  // Redirect to dashboard if logged in
  if (pathname === '/' || pathname === '/') {
    if (token) {
      try {
        verify(token, process.env.JWT_SECRET);
        return NextResponse.redirect(new URL('/pages/home', request.url));
      } catch (error) {
        // Token invalid, proceed to login
      }
    }
    return NextResponse.next();
  }

  // Protected routes
  if (!token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  try {
    verify(token, process.env.JWT_SECRET);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/', request.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/signup'],
};