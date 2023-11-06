// export { default } from "next-auth/middleware"
// export const config = { matcher: ['/movie', '/popular', '/upcoming'] }

import {withAuth} from "next-auth/middleware"
import {NextResponse} from "next/server";

// Define routes that require authentication
const authPrefixes = ['/movie', '/popular', '/upcoming']

export default withAuth(
    function middleware(req) {
        // Store app path to headers for shared use server-side
        const requestHeaders = new Headers(req.headers)
        requestHeaders.set("x-pathname", req.nextUrl.pathname)
        return NextResponse.next({
            request: {
                headers: requestHeaders,
            },
        })
    },
    {
        callbacks: {
            authorized: ({req, token}) => {
                if (!token && authPrefixes.some(prefix => req.nextUrl.pathname.startsWith(prefix))) {
                    return false
                }
                return true
            }
        }
    }
)
