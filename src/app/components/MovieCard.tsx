import Image from 'next/image'

import {Movie} from '@/app/models/Movie'
import {imgBaseUrl, imgHeight, imgWidth} from '@/services/tmdb'
import './MovieCard.scss'

export default function MovieCard({movie}: { movie: Movie }) {
    return (
        <div className="uk-card uk-card-default MovieCard">
            <div className="uk-card-header header">
                <a className="poster" href={movie.url}>
                    <Image src={`${imgBaseUrl}/original/${movie.posterPath}`}
                         width={imgWidth} height={imgHeight} alt="Poster"/>
                </a>
                <div className="meta">
                    <div className={`title${movie.title.length > 35 ? ' small' : ''}`}>
                        <h3>{movie.title}</h3>
                    </div>
                </div>
            </div>
            <div className="uk-card-body overview">
                <div className="overview-text">
                    {movie.overview}
                </div>
            </div>
            <div className="uk-card-footer">
                <a href={movie.url} className="uk-button uk-button-text">View more</a>
            </div>
        </div>
    )
}