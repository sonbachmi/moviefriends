import {fetchApi} from '@/services/tmdb'
import MovieGrid from '@/app/components/MovieGrid'
import {Movie, MovieData} from '@/app/models/Movie'
import './MovieListing.scss'

async function fetchMovies(category: string, page = 0) {
    let url = `/movie/${category}`
    if (page) url += `?page=${page}`
    const res = await fetchApi(url)
    if (!res.ok) {
        throw new Error('API fetch')
    }
    return res.json()
}

export default async function MovieListing({category, page = 0}: { category: string, page?: number }) {
    const data = await fetchMovies(category, page)
    const {total_pages = 1} = data
    // console.log(data)
    const movieData = data.results
    const movies: Movie[] = movieData.map((movieData: MovieData) => {
        return new Movie(movieData)
    })
    const currentPage = page || 1
    return (
        <div className="MovieListing">
            <MovieGrid movies={movies}/>
            <div className="pagination">
                <ul className="uk-pagination">
                    {currentPage > 1 &&
                        <li><a href={`/${category}/${currentPage - 1}`}>&laquo; Previous</a></li>}
                    {currentPage < total_pages &&
                        <li className="uk-margin-auto-left"><a href={`/${category}/${currentPage + 1}`}>Next &raquo;</a>
                        </li>}
                </ul>
            </div>
        </div>
    )
}