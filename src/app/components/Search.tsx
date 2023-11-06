'use client'

import {useState} from "react";

import SearchInput from './SearchInput'
import SearchResults from './SearchResults'
import {MovieData} from "@/app/models/Movie";
import {search} from '../actions'

import './Search.scss'

export default function Search({close}: {close: any}) {

    const [message, setMessage] = useState<string|null>(null)
    const [results, setResults] = useState<{results:  MovieData[]}>({results: []})

    async function onQuery(query: string) {
        setMessage(null)
        try {
            const results = await search(query)
            setResults(results)
        } catch (err: any) {
            console.log(err)
            setMessage(err.message === 'API fetch' ?
                'Cannot fetch data from API. Check your connection and try again'
                : 'Something went wrong. Please try again later')
        }
    }
    return (
        <div className="Search" data-testid="search-panel">
            <div className="close">
                <button onClick={close} aria-label="Close" data-testid="close-button"></button>
            </div>
            <SearchInput onQuery={onQuery}/>
            {message &&
                <div className="uk-margin uk-alert-danger message" uk-alert="true">
                    {message}
                </div>}
            <SearchResults results={results}/>
        </div>
    )
}