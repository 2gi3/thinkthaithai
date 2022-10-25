import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '../components/footer/Footer.jsx'


describe('Homepage', () => {
    it('renders the homepage', () => {
        render(<Footer />)
        const credits = screen.getByText(/website by:/i);
        expect(credits).toBeInTheDocument();
    })
})