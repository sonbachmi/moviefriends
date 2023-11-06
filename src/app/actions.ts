'use server'

import {fetchApi} from "@/services/tmdb";

export async function search(query: string) {
    'use server'
    console.log('Searching for', query)
    const res: any = await fetchApi(`/search/movie?query=${query}`)
    if (!res.ok) {
        console.log(res)
        throw new Error('API fetch')
    }
    return res.json()
}