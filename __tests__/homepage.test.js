import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import feedbacks from '../__mocks__/feedbacks.js'
import Home from '../pages'



describe('Homepage', () => {
    const prop = feedbacks.data
    const mockIntersectionObserver = jest.fn()
    beforeEach(() => {
        mockIntersectionObserver.mockReturnValue({
          observe: () => null,
          unobserve: () => null,
          disconnect: () => null
        });
        window.IntersectionObserver = mockIntersectionObserver;
        render(<Home data={prop} />)
      });
    it('displays the title', () => {
        expect(screen.getByText(/ThinkThaiThai/i)).toBeInTheDocument()
    })
})

