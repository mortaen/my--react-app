import { useState } from "react"
import EmojiBar from "../EmojiBar/EmojiBar"
import "./Cards.css"

function tellMeClassName(house) {
  let houseColor
  if (house === "Gryffindor") {
    houseColor = "red"
  } else if (house === "Hufflepuff") {
    houseColor = "yellow"
  } else if (house === "Ravenclaw") {
    houseColor = "blue"
  } else if (house === "Slytherin") {
    houseColor = "green"
  }
  return houseColor
}

function Card({
  characterName,
  house,
  imgUrl,
  ancestry,
  dateOfBirth,
  patronus,
  species,
  yearOfBirth,
  eyeColour,
  hairColour,
  hogwartsStudent,
  hogwartsStaff,
  actor,
  alive,
  wand,
  isFavorite,
  onFavoriteButtonClick,
}) {
  const houseColor = tellMeClassName(house)

  const [showDetails, setShowDetails] = useState(false)
  const [emoji, setEmoji] = useState("")

  function handleEmojiButtonClick(newEmoji) {
    if (emoji === newEmoji) {
      setEmoji("")
    } else {
      setEmoji(newEmoji)
    }
  }

  return (
    <section className={`Card ${houseColor}`}>
      <img className="Card__image" src={imgUrl} alt="portrait" />
      <div className="Card--wrapper">
        <button
          onClick={() => {
            onFavoriteButtonClick(characterName)
          }}
        >
          add to favorites
        </button>

        <EmojiBar
          onEmojiButtonClick={(newEmoji) => handleEmojiButtonClick(newEmoji)}
        />

        <h2 className="Card__header">
          {emoji}

          {characterName}
          {characterName === "Ron Weasley" ? " aka Ronaldo Weaslinho" : ""}
          {characterName === "Harry Potter" ? "⚡" : ""}
          {characterName === "Hermione Granger" && "📚"}

          {isFavorite ? "⭐️" : ""}
        </h2>
        <ul className="Card__info">
          <li>{house}</li> <li>{ancestry}</li> <li>{dateOfBirth}</li>
          <li>{`Patronus: ${patronus}`}</li>
        </ul>
        {showDetails && (
          <ul className="Card__info">
            <li>{species}</li> <li>{yearOfBirth}</li> <li>{`wand: ${wand}`}</li>
            <li>Eye colour: {eyeColour}</li>
            <li>{`Hair colour: ${hairColour}`}</li> <li>{`actor: ${actor}`}</li>
            <li>{`alive: ${alive}`}</li>
            <li>{`Student: ${hogwartsStudent}`}</li>
            <li>{`Staff: ${hogwartsStaff}`}</li>
          </ul>
        )}
      </div>
      <button
        className="Card__button"
        onClick={() => {
          setShowDetails(!showDetails)
        }}
      >
        {showDetails ? "less" : "more"}
      </button>
    </section>
  )
}

export default Card
