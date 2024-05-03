import {getServerSession} from 'next-auth/next'

import {Movie, MovieData} from '@/app/models/Movie'
import MovieGrid from '@/app/components/MovieGrid'
import {Suspense} from 'react'

import {fetchApi} from '@/services/tmdb'
import './home.scss'

async function fetchMovies() {
    const url = '/movie/now_playing?page=1'
    const res = await fetchApi(url)
    if (!res.ok) {
        throw new Error('API fetch')
    }
    return res.json()
}

export default async function Home() {
    const session = await getServerSession()
    // Hide this page content if not authenticated
    if (!session) return (
        <div className="uk-margin uk-alert-primary auth-alert" uk-alert="true">
            <p>To demonstrate resource restriction by authorization, all content is currently hidden to unauthenticated users.</p>
            <p>You can <a href="/api/auth/signin">log in</a> with username <code>user</code> and
                password <code>user</code>, or <a href="/register">create an account</a>.</p>
        </div>
    )
    const data = await fetchMovies()
    const movies: Movie[] = data.results.map((movieData: MovieData) => {
        return new Movie(movieData)
    })
    return (
        <div className="home">
            <h1>Now Playing</h1>
            <Suspense fallback={<div>Loading movies...</div>}>
                <MovieGrid movies={movies}/>
            </Suspense>
        </div>
    )
}
