import MovieListing from "@/app/components/MovieListing";
import '../MovieListingPage.scss'

export default async function UpcomingMovies() {
    return (
        <div className="MovieListingPage">
            <MovieListing category="upcoming"/>
        </div>
    )
}
