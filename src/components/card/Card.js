import { useState } from "react"
import EmojiBar from "../EmojiBar/EmojiBar"
import styled from "styled-components"

function getHouseColor(house) {
  let houseColor
  if (house === "Gryffindor") {
    houseColor = "#7f0909"
  } else if (house === "Hufflepuff") {
    houseColor = "#eee117"
  } else if (house === "Ravenclaw") {
    houseColor = "#000a90"
  } else if (house === "Slytherin") {
    houseColor = "#0d6217"
  } else if (house === "") {
    houseColor = "grey"
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
  const houseColor = getHouseColor(house)

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
    <StyledCardSection color={getHouseColor(house)}>
      <CardImg src={imgUrl} alt="portrait" />
      <CardWrapperDiv>
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

        <CardHeader>
          {emoji}

          {characterName}
          {characterName === "Ron Weasley" ? " aka Ronaldo Weaslinho" : ""}
          {characterName === "Harry Potter" ? "⚡" : ""}
          {characterName === "Hermione Granger" && "📚"}

          {isFavorite ? "⭐️" : ""}
        </CardHeader>
        <CardInfoList>
          <li>{house}</li> <li>{ancestry}</li> <li>{dateOfBirth}</li>
          <li>{`Patronus: ${patronus}`}</li>
        </CardInfoList>
        {showDetails && (
          <CardInfoList>
            <li>{species}</li> <li>{yearOfBirth}</li> <li>{`wand: ${wand}`}</li>
            <li>Eye colour: {eyeColour}</li>
            <li>{`Hair colour: ${hairColour}`}</li> <li>{`actor: ${actor}`}</li>
            <li>{`alive: ${alive}`}</li>
            <li>{`Student: ${hogwartsStudent}`}</li>
            <li>{`Staff: ${hogwartsStaff}`}</li>
          </CardInfoList>
        )}
      </CardWrapperDiv>
      <CardButton
        onClick={() => {
          setShowDetails(!showDetails)
        }}
      >
        {showDetails ? "less" : "more"}
      </CardButton>
    </StyledCardSection>
  )
}

const StyledCardSection = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: auto;
  grid-template-areas: "image image info info";
  position: relative;
  border: 5px transparent;
  border-radius: 27px;
  margin-bottom: 3vh;
  color: white;
  width: 70%;
  padding: 2rem;
  background-color: ${({ color }) => color};
`

const CardWrapperDiv = styled.div`
  grid-area: info;
`

const CardHeader = styled.h2`
  font-size: xx-large;
  margin-top: 0;
`

const CardInfoList = styled.ul`
  font-size: 2rem;
`

const CardButton = styled.button`
  grid-area: info;
  position: absolute;
  bottom: -10%;
  right: 35%;
  padding: 0.5rem;
  font-size: larger;
  border: 5px transparent;
  border-radius: 27px;
`

const CardImg = styled.img`
  grid-area: image;
  width: 90%;
  border-radius: 27px;
`
export default Card
