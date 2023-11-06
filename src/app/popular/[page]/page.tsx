import '../../MovieListingPage.scss'
import MovieListing from "@/app/components/MovieListing";
export default async function PopularMoviesByPage({ params }: { params: { page: string } }) {
    return (
        <div className="MovieListingPage">
            <MovieListing category="popular" page={+params.page}/>
        </div>
    )
}
