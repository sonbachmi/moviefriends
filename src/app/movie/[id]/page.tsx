import {MovieDetails} from '@/app/models/Movie'
import {fetchApi, imgBaseUrl} from '@/services/tmdb'
import './MoviePage.scss'

const imdbBaseUrl = 'https://www.imdb.com/title'
async function fetchMovie(id: string) {

    const res = await fetchApi(`/movie/${id}`)
    if (!res.ok) {
        throw new Error('API fetch')
    }
    return res.json()
}

export default async function MoviePage({ params }: { params: { id: string } }) {
    const {id} = params
    const data = await fetchMovie(id)
    const movie = new MovieDetails(data)
    return (
        <div className="MoviePage">
            <header>
                <div className="backdrop">
                    <img src={`${imgBaseUrl}/original${movie.backdropPath}`} alt="Backdrop" />
                </div>
                <div className="poster">
                    <img src={`${imgBaseUrl}/original${movie.posterPath}`} alt="Poster" />
                </div>
                <div className="meta">
                    <div className="title">
                        <h1>{movie.title}</h1>
                    </div>
                    <div className="release-date">{movie.releaseDate}</div>
                    <div className="genres">
                        {movie.genres.map(genre => <div className="uk-label genre" key={genre}>{genre}</div> )}
                    </div>
                    <div className="overview">{movie.overview}</div>
                    <div className="popularity">
                        <span className="label">Popularity</span>
                        { }<span className="uk-badge value">{Math.round(movie.popularity)}</span>
                    </div>
                    <div className="imdb">
                        <a href={`${imdbBaseUrl}/${movie.imdbId}`} target="_blank" title="View IMDb page" />
                    </div>
                </div>
            </header>
        </div>
    )
}
