import MovieListing from "@/app/components/MovieListing";
import '../MovieListingPage.scss'

export default async function PopularMovies() {
    return (
        <div className="MovieListingPage">
            <MovieListing category="popular"/>
        </div>
    )
}
