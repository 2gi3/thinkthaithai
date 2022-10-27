import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import MyBlog from '../pages/myblog'
import data from '../__mocks__/instagramVideos'

describe('Footer', () => {
    beforeEach(() => {
        render(<MyBlog feed={data} />)
    })
    it('renders the header', () => {
        const header = screen.getByText(/Start learning the basics of Thai language/i)
        expect(header).toBeInTheDocument()
    })
})