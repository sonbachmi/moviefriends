import type {Metadata} from 'next'
import {Montserrat} from 'next/font/google'
import {getServerSession} from 'next-auth/next'
import {headers} from 'next/headers'
import React from 'react'
import Image from 'next/image'

import './globals.scss'
import './layout.scss'
import SearchButton from '@/app/components/SearchButton'
import logo from '@/img/movie-friends-logo.png'

const montSerrat = Montserrat({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'MovieFriends',
    description: 'Movie hub for enthusiasts',
}

export default async function RootLayout({children}: {
    children: React.ReactNode
}) {
    const session = await getServerSession()
    const headersList = headers()
    const path = headersList.get('x-pathname') ?? ''
    return (
        <html lang="en">
        <body className={montSerrat.className}>
        <header>
            <a className="logo">
                <Image src={logo} alt="MovieFriends Logo"/>
            </a>
            <nav>
                <a href="/" className={path === '/' ? 'active' : ''}>Home</a>
                <a href="/popular" className={path.startsWith('/popular') ? 'active' : ''}>Popular</a>
                <a href="/upcoming" className={path.startsWith('/upcoming') ? 'active' : ''}>Upcoming</a>
            </nav>
            <div className="search">
                <SearchButton/>
            </div>
            <div className="auth">
                {session ?
                    <a className="uk-button uk-button-primary" href="/api/auth/signout">Logout</a>
                    : <>
                        <a className="uk-button uk-button-primary" href="/api/auth/signin">Login</a>
                        <a className="uk-button uk-button-primary" href="/register">Register</a>
                    </>
                }
            </div>
        </header>

        <main>
            {children}
        </main>

        <footer>
            <a className="logo">
                <Image src={logo} alt="MovieFriends Logo"/>
            </a>
            <div className="text">
                <p>Next.js 14 app. Data provided by TMDB API</p>
                <p>For demo only</p>
            </div>
        </footer>
        </body>
        </html>
    )
}
