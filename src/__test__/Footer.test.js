import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer'
import { BrowserRouter } from 'react-router-dom'

describe("<Footer />", () => {
  it("has a copyright", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )

    screen.logTestingPlaygroundURL()

    const footer = screen.getByText(/&copy; 2023 Dog Tinder | Derek & Franz \|/i)
    expect(footer).toBeInTheDocument()
  })
})