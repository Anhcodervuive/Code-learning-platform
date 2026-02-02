import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"
import { env } from "./env"

export async function middleware(req: NextRequest) {
    const token = await getToken({
        req,
        secret: env.AUTH_SECRET,
    })

    const { pathname } = req.nextUrl

    // ❌ Chưa đăng nhập
    if (!token) {
        return NextResponse.redirect(new URL("/login", req.url))
    }

    // ❌ Không đủ quyền
    if (pathname.startsWith("/admin") && token?.role !== "ADMIN") {
        return NextResponse.redirect(new URL("/403", req.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        "/admin/:path*",
    ],
}