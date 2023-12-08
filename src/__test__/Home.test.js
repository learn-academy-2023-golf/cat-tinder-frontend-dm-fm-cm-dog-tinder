import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';
import { BrowserRouter } from 'react-router-dom'

describe("<Home />", () => {
  it("renders a greeting", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    screen.logTestingPlaygroundURL()

    const home = screen.getByText("Introducing Dog Tinder - the ultimate place to let you dogs be dawgs!")
    expect(home).toBeInTheDocument()
  })
})