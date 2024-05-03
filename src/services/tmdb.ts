export const apiUrl = 'https://api.themoviedb.org/3'
export const imgBaseUrl = 'https://image.tmdb.org/t/p'
export const imgWidth = 960
export const imgHeight = 1440
export const thumbWidth = 92
export const thumbHeight = 138

export function fetchApi(endpoint: string) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`
        }
    }
    try {
        return fetch(`${apiUrl}${endpoint}`, options)
    } catch(err) {
        // Throw API error to Next error boundary
        throw new Error('API fetch', {cause: err})
    }
}