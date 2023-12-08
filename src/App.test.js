import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

describe("<App />", () => {
  it("renders a greeting", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    const greeting = screen.getByText("Get ready to let the dawgs out!")
    expect(greeting).toBeInTheDocument()
  })

  it("has a heading", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    const heading = screen.getByRole('heading', {
      name: /Get ready to let the dawgs out!/i
    })
    expect(heading).toBeInTheDocument()
  })
})