import { withAuth } from "next-auth/middleware"

export default withAuth(

    {
        pages: {
            signIn: "/auth",
            signOut: "/auth"
        },
        callbacks: {
            authorized: ({ token }) => {
                return !!token
            },
        },
    }
)

export const config = { matcher: ["/"] }