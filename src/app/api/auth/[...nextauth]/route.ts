import {authenticate} from "@/services/auth"
import NextAuth from "next-auth"
import type {AuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {label: "Username", type: "text"},
                password: {label: "Password", type: "password"}
            },

            async authorize(credentials, req) {
                if (credentials) {
                    const res = await authenticate(credentials.username, credentials.password)
                    if (res) {
                        return res
                    } else {
                        return null
                    }
                } else {
                    return null
                }
            }
        })
    ],
/*    callbacks: {
        async redirect({url, baseUrl}) {
            // Redirect to homepage after signout
            // console.log(baseUrl, url)
            url = '/'
            if (url.startsWith('/')) {
                if (url.includes('signin')) url = '/'
                return `${baseUrl}${url}`
            } else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        }
    },*/
    session: {strategy: "jwt"},
    theme: {
        colorScheme: 'dark',
        brandColor: '#39a4a4',
        logo: '/img/movie-friends-logo.png',
        buttonText: 'white'
    }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}