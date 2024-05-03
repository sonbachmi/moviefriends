import '../../MovieListingPage.scss'
import MovieListing from '@/app/components/MovieListing'
export default async function UpcomingMoviesByPage({ params }: { params: { page: string } }) {
    return (
        <div className="MovieListingPage">
            <MovieListing category="upcoming" page={+params.page}/>
        </div>
    )
}
