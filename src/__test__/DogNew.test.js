import { render, screen } from '@testing-library/react';
import DogNew from '../pages/DogNew';
import { BrowserRouter } from 'react-router-dom'

describe("<DogNew />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <DogNew />
      </BrowserRouter>
    )

  })
  it("renders the DogNew page for the user", () => {
    const element = screen.getByText(/Add a new Dog/i)
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent("Add a new Dog")
  })

  it("has a form with entries for name, age, enjoys, and image", () => {
    const formName = screen.getByText(/name/i)
    expect(formName.getAttribute("for")).toEqual("name")

    const formAge = screen.getByText("Age")
    expect(formAge.getAttribute("for")).toEqual("age")

    const formEnjoys = screen.getByText("Enjoys")
    expect(formEnjoys.getAttribute("for")).toEqual("enjoys")

    const formImage = screen.getByText("Image")
    expect(formImage.getAttribute("for")).toEqual("image")
  })
})