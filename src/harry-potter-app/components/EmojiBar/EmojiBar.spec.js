import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import EmojiBar from "./EmojiBar"

describe("EmojiBar", () => {
  it("renders 5 buttons", () => {
    const mockOnEmojiButtonClick = jest.fn()

    render(<EmojiBar onEmojiButtonClick={mockOnEmojiButtonClick}></EmojiBar>)

    // alle buttons finden

    const buttons = screen.getAllByRole("button")

    // Anzahl der buttons prüfen

    expect(buttons).toHaveLength(5)
  })

  it("shows specified emojis", () => {
    const mockOnEmojiButtonClick = jest.fn()

    render(<EmojiBar onEmojiButtonClick={mockOnEmojiButtonClick}></EmojiBar>)

    const emoji1 = screen.getByText("🤓")
    const emoji2 = screen.getByText("🥸")
    const emoji3 = screen.getByText("😇")
    const emoji4 = screen.getByText("😵‍💫")
    const emoji5 = screen.getByText("🦩")

    expect(emoji1).toBeInTheDocument()
    expect(emoji2).toBeInTheDocument()
    expect(emoji3).toBeInTheDocument()
    expect(emoji4).toBeInTheDocument()
    expect(emoji5).toBeInTheDocument()
  })

  it("calls the click function when button is clicked", () => {
    const mockOnEmojiButtonClick = jest.fn()

    render(<EmojiBar onEmojiButtonClick={mockOnEmojiButtonClick}></EmojiBar>)

    const buttons = screen.getAllByRole("button")

    const firstButton = buttons[0]

    expect(mockOnEmojiButtonClick).not.toHaveBeenCalled

    userEvent.click(firstButton)

    expect(mockOnEmojiButtonClick).toHaveBeenCalled()
  })
})
