import { useState } from "react"
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
}) {
  const houseColor = tellMeClassName(house)

  const [showDetails, setShowDetails] = useState(false)
  const [emoji, setEmoji] = useState("")
  const [emoji2, setEmoji2] = useState("")
  const [emoji3, setEmoji3] = useState("")
  const [emoji4, setEmoji4] = useState("")

  // const handleEmojiButtonClick = (newEmoji) => {

  // }

  return (
    <section className={`Card ${houseColor}`}>
      <img className="Card__image" src={imgUrl} alt="portrait" />
      <div className="Card--wrapper">
        <div className="emoji-bar">
          <button
            className="emoji-button"
            onClick={() => {
              setEmoji(!emoji)
            }}
          >
            🤓
          </button>
          <button
            className="emoji-button"
            onClick={() => {
              setEmoji2(!emoji2)
            }}
          >
            🥸
          </button>
          <button
            className="emoji-button"
            onClick={() => {
              setEmoji3(!emoji3)
            }}
          >
            😇
          </button>
          <button
            className="emoji-button"
            onClick={() => {
              setEmoji4(!emoji4)
            }}
          >
            😵‍💫
          </button>
        </div>
        <h2 className="Card__header">
          {emoji && "🤓"}
          {emoji2 && "🥸"}
          {emoji3 && "😇"}
          {emoji4 && "😵‍💫"}

          {characterName}
          {characterName === "Harry Potter" ? "⚡" : ""}
          {characterName === "Hermione Granger" && "📚"}
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
        more
      </button>
    </section>
  )
}

export default Card
