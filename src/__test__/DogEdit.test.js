import { render, screen } from '@testing-library/react';
import DogEdit from '../pages/DogEdit';
import { Route, Routes, MemoryRouter} from 'react-router-dom';
import mockDogs from '../mockDogs';

describe("<DogEdit />", () => {
  beforeEach(() => {
    render(

        <MemoryRouter initialEntries={["/dogedit/1"]}>
        <Routes>
          <Route path="dogedit/:id" element={<DogEdit dogs={mockDogs} />} />
        </Routes>
      </MemoryRouter>
    )

    screen.logTestingPlaygroundURL()

  })
  it("renders the DogEdit page for the user", () => {
    const element = screen.getByText(/Edit Dog/i)
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent("Edit Dog")
  })

  it("has a form with entries for name, age, enjoys, and image", () => {
    const formName = screen.getByText(/name/i)
    expect(formName.getAttribute("for")).toEqual("name")

    const formAge = screen.getByText("Age")
    expect(formAge.getAttribute("for")).toEqual("age")

    const formEnjoys = screen.getByText("Enjoys")
    expect(formEnjoys.getAttribute("for")).toEqual("enjoys")

    const formImage = screen.getByText("Add Image")
    expect(formImage.getAttribute("for")).toEqual("image")

    expect(screen.getByRole('button', {
        name: /submit/i
      })).toBeInTheDocument()
   })
})