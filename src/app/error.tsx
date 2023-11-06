'use client'

import {useEffect} from 'react'

import './error.scss'

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.log('Error:', error)
    }, [error])

    return (
        <div className="error">
            <h2>Oopsie Daisie!</h2>
            {error.message === 'fetch failed' ?
                <p>Cannot fetch the data. Make sure you&lsquo;re connected to the internet and try again.</p>
                : <p>Something unexpected just happened. Please wait a few minutes then try again.</p>}
            <button className="uk-button uk-button-primary"
                    onClick={
                        () => reset()
                    }
            >
                Try again
            </button>
        </div>
    )
}