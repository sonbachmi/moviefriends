import {Movie} from '@/app/models/Movie'
import MovieCard from '@/app/components/MovieCard'
import styles from './MovieGrid.module.scss'

export default function MovieGrid({movies}: { movies: Movie[] }) {
    return (
        <div className={styles.MovieGrid}>
            {movies.map((movie) =>
                <MovieCard movie={movie} key={movie.id}/>
            )}
        </div>
    )
}