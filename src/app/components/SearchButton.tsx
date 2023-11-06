'use client'

import {createPortal} from "react-dom";
import {useState} from "react";

import Search from "./Search"
import './SearchButton.scss'

export default function SearchButton() {
    const [showSearch, setShowSearch] = useState(false)
    function toggleSearch() {
        setShowSearch(show => !show)
    }
    return (
        <div className="SearchButton">
            <button onClick={toggleSearch} aria-label="Search"></button>
            {showSearch && createPortal(<Search close={() => setShowSearch(false)} />, document.body)}
        </div>
    )
}