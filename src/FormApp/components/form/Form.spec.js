import { screen, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Form from "./Form"

describe("Form", () => {
  it("renders form elements", () => {
    const mockOnCreateCharacter = jest.fn()

    render(<Form onCreateCharacter={mockOnCreateCharacter} />)

    const nameInput = screen.getByLabelText("Character Name:")
    expect(nameInput).toBeInTheDocument()

    const houseInput = screen.getByLabelText("House:")
    expect(houseInput).toBeInTheDocument()

    const ancestryInput = screen.getByLabelText("Ancestry:")
    expect(ancestryInput).toBeInTheDocument()

    const dateOfBirthInput = screen.getByLabelText("Date of birth:")
    expect(dateOfBirthInput).toBeInTheDocument()

    const createButton = screen.getByRole("button")
    expect(createButton).toBeInTheDocument()
  })

  it("sends input from the input fields to the onCreateCharacter function", () => {
    const mockOnCreateCharacter = jest.fn()
    render(<Form onCreateCharacter={mockOnCreateCharacter} />)

    const nameInput = screen.getByLabelText("Character Name:")
    userEvent.type(nameInput, "Steve")
    const houseInput = screen.getByLabelText("House:")
    userEvent.type(houseInput, "Hufflepuff")
    const ancestryInput = screen.getByLabelText("Ancestry:")
    userEvent.type(ancestryInput, "human")
    const dateOfBirthInput = screen.getByLabelText("Date of birth:")
    userEvent.type(dateOfBirthInput, "10.10.1910")
    const createButton = screen.getByRole("button")
    userEvent.click(createButton)

    expect(mockOnCreateCharacter).toHaveBeenCalledWith({
      name: "Steve",
      house: "Hufflepuff",
      ancestry: "human",
      dateOfBirth: "10.10.1910",
    })
  })
})
