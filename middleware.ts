import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    
    // Redirect root to dashboard if authenticated
    if (pathname === '/' && req.nextauth.token) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }
    
    // Redirect to login if accessing protected routes without auth
    if (pathname.startsWith('/dashboard') && !req.nextauth.token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
    
    // Redirect to dashboard if accessing login while authenticated
    if (pathname === '/login' && req.nextauth.token) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }
    
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: () => true, // Let the middleware function handle the logic
    },
  }
);

export const config = {
  matcher: ['/', '/dashboard/:path*', '/orders/:path*', '/login'],
};