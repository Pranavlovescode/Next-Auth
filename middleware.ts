import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const publicPath = path ==='/' ||path==='/login' || path === '/signup' || path === '/verifyemail'
    const token = request.cookies.get('signin_cookie')?.value
    console.log(token);
    if (publicPath && token) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }
    if (!publicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/login',
        '/dashboard'
    ]
}