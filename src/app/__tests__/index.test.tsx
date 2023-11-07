import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

import SearchButton from '../components/SearchButton'
import SearchInput from '../components/SearchInput'
import Search from '../components/Search'

/**
 * Only test client-side components, due to time constraints
 */

describe('Search button', () => {
    it('renders button', () => {
        render(<SearchButton/>)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
    })
})
describe('Search button', () => {
    it('opens search panel when clicked', async () => {
        render(<SearchButton/>)
        const button = screen.getByRole('button')
        fireEvent.click(button)
        const panel = await screen.getByTestId('search-panel')
        expect(panel).toBeInTheDocument()
    })
})

describe('Search panel', () => {
    it('renders close button', () => {
        render(<Search close={() => {
        }}/>)
        const button = screen.getByTestId('close-button')
        expect(button).toBeInTheDocument()
    })
})

describe('Search panel', () => {
    it('closes when clicking close button', async () => {
        let closed = false
        const close = () => {
            closed = true
        }
        render(<Search close={close}/>)
        const button = screen.getByTestId('close-button')
        fireEvent.click(button)
        const panel = await screen.getByTestId('search-panel')
        expect(closed).toBeTruthy()
    })
})

describe('Search input', () => {
    it('renders text input', () => {
        let show = false
        const onQuery = (query: string) => console.log(query)
        render(<SearchInput onQuery={onQuery}/>)
        const input = screen.getByTestId('search-input')
        expect(input).toBeInTheDocument()
    })
})