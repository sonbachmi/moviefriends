'use server'

import {fetchApi} from "@/services/tmdb";
import {createUser} from "@/services/auth";

/**
 * Server Action to search movies by title, keywords using TMDB API
 * @param query search string
 */

export async function search(query: string) {
    // console.log('Searching for', query)
    const res: any = await fetchApi(`/search/movie?query=${query}`)
    if (!res.ok) {
        // console.log(res)
        throw new Error('API fetch')
    }
    return res.json()
}

/**
 * Server Action to handle user registration form
 * @param state feedback state
 * @param formData FormData submitted
 */

export async function registerSubmit(state: any, formData: FormData) {
    const username = formData.get('username') as string
    const password = formData.get('password') as string

    const user:any = createUser({username, password})
    if (user.error) {
        return {
            error: user.error,
            message: user.message
        }
    }
    return user
}