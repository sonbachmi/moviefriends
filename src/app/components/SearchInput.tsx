'use client'

import {FormEvent, useEffect, useRef, useState} from 'react'

import './SearchInput.scss'

export default function SearchInput({onQuery}: { onQuery: any }) {

    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    const [query, setQuery] = useState<string>('')
    async function onInput(e: FormEvent<HTMLInputElement>) {
        const input = e.target as HTMLInputElement
        setQuery(input.value)
    }

    // Debounce within .5s before sending query
    useEffect(() => {
        const broadcastQuery = setTimeout(() => {
            onQuery(query)
        }, 500)
        return () => clearTimeout(broadcastQuery)
    }, [query])

    return (
        <div className="SearchInput">
            <input name="query" className="uk-input uk-form-width-large" ref={inputRef} data-testid="search-input" placeholder="Enter movie title or keywords"
                   onInput={onInput}/>
        </div>
    )
}