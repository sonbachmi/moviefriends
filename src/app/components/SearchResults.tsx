import {Movie, MovieData} from "@/app/models/Movie"
import {imgBaseUrl} from "@/services/tmdb";

import './SearchResults.scss'

export default function SearchResults({results}: { results: any }) {
    const movies: Movie[] = results?.results.map((movieData: MovieData) => {
        return new Movie(movieData)
    })
    return (
        <div className="SearchResults">
            {movies.map(movie => {
                return <a className="result" key={movie.id} href={movie.url} target="_blank">
                    <div className="poster">
                        {movie.posterPath && <img src={`${imgBaseUrl}/w92${movie.posterPath}`}
                             alt="Poster"/>}
                    </div>
                    <div className="meta">
                        <div className="title">{movie.title}</div>
                        <div className="overview">{movie.overview}</div>
                    </div>
                </a>
            })}
        </div>

    )
}