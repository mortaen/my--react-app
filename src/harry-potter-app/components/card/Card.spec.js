import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Card from "./Card"

describe("Card", () => {
  it("renders card elements", () => {
    render(<Card />)

    const cardSection = screen.getByRole("article")
    expect(cardSection).toBeInTheDocument()

    const characterImg = screen.getByAltText("portrait")
    expect(characterImg).toBeInTheDocument()

    const favoriteButton = screen.getByText("add to favorites")
    expect(favoriteButton).toBeInTheDocument()

    const cardHeader = screen.getByRole("heading")
    expect(cardHeader).toBeInTheDocument()

    const list = screen.getByRole("list")
    expect(list).toBeInTheDocument()

    const detailsButton = screen.getByRole("switch")
    expect(detailsButton).toBeInTheDocument()
  })

  it("changes the background-color of the Cards based on the character's house", () => {
    const house = "Gryffindor"

    render(<Card house={house} />)

    const cardSection = screen.getByRole("article")

    expect(cardSection).toHaveStyle("background-color: #7f0909")
  })

  it("calls onFavoriteButtonClick function when favorite button is clicked", () => {
    const mockOnFavoriteButtonClick = jest.fn()

    render(<Card onFavoriteButtonClick={mockOnFavoriteButtonClick} />)

    const favoriteButton = screen.getByText("add to favorites")

    userEvent.click(favoriteButton)

    expect(mockOnFavoriteButtonClick).toHaveBeenCalled()
  })

  it("changes the text of the 'more-button' and shows a second list on click", () => {
    render(<Card />)

    const showDetailsButton = screen.getByRole("switch")

    userEvent.click(showDetailsButton)

    expect(showDetailsButton).toHaveTextContent("less")

    const lists = screen.getAllByRole("list")

    expect(lists).toHaveLength(2)

    userEvent.click(showDetailsButton)

    expect(showDetailsButton).toHaveTextContent("more")
  })
})
