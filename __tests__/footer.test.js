import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '../components/footer/Footer.jsx'


describe('Footer', () => {
    beforeEach(() => {
        render(<Footer />)
    })
    it('renders the credit', () => {
        const credits = screen.getByText(/website by:/i)
        expect(credits).toBeInTheDocument()
    })

    it("doesn't render any error", () => {
        const error = screen.queryByText(/error/i)
        expect(error).not.toBeInTheDocument()
    })

    it("it renders 3 contact links", () => {
        const contacts = screen.getAllByRole('link')
        expect(contacts.length).toBe(3)
    })
})