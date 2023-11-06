// Movie data as fetched from TMDB API
export interface MovieData {
    id: string
    original_language: string
    title: string
    overview: string
    poster_path: string
}

export class Movie {
    id: string
    lang: string
    title: string
    overview: string
    posterPath: string
    url: string

    constructor(data: MovieData) {
        const {id, title, overview, poster_path, original_language} = data
        this.id = id
        this.title = title
        this.overview = overview
        this.posterPath = poster_path
        this.lang = original_language
        this.url = `/movie/${id}`
    }
}

export interface MovieDetailsData extends MovieData {
    tagline: string
    genres: { name: string } []
    release_date: string
    popularity: number
    imdb_id: string
    backdrop_path: string
}

export class MovieDetails extends Movie {
    tagline: string
    genres: string[]
    releaseDate: string
    popularity: number
    imdbId: string
    backdropPath: string

    constructor(data: MovieDetailsData) {
        super(data)
        const {tagline, genres, release_date, popularity, imdb_id, backdrop_path} = data
        this.tagline = tagline
        this.genres = genres.map(({name}) => name)
        this.releaseDate = release_date
        this.popularity = popularity
        this.imdbId = imdb_id
        this.backdropPath = backdrop_path
    }
}