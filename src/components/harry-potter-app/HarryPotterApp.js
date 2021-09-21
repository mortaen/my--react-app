import Header from "../header/Header"
import Footer from "../footer/Footer"
import Card from "../card/Card"
import { useState } from "react"
import styled from "styled-components"
import appBackgroundImg from "../../img/harry_potter.jpg"

function HarryPotterApp({ data }) {
  // House Buttons
  const [activeHouse, setActiveHouse] = useState(() => {
    if (localStorage.getItem("activeHouseLocalStorage")) {
      return JSON.parse(localStorage.getItem("activeHouseLocalStorage"))
    } else {
      return "All"
    }
  })

  function handleHouseButtonClick(house) {
    setActiveHouse(house)

    localStorage.setItem("activeHouseLocalStorage", JSON.stringify(house))
  }

  const filteredData = data.filter((character) => {
    return character.house === activeHouse
  })

  const shownData = activeHouse === "All" ? data : filteredData

  // Favorites

  const [favorites, setFavorites] = useState(() => {
    if (localStorage.getItem("favoritesLocalStorage")) {
      return JSON.parse(localStorage.getItem("favoritesLocalStorage"))
    } else {
      return []
    }
  })

  function handleFavoriteButtonClick(characterName) {
    const isFavorite = favorites.includes(characterName)

    let newFavorites
    if (isFavorite) {
      // Remove from favorites
      newFavorites = favorites.filter((item) => {
        if (item === characterName) {
          return false
        } else {
          return true
        }
      })
    } else {
      // Add to favorites
      newFavorites = favorites.concat(characterName)
    }

    setFavorites(newFavorites)
    localStorage.setItem("favoritesLocalStorage", JSON.stringify(newFavorites))
  }

  return (
    <AppDiv>
      <Header />
      <Main>
        {shownData.map((character) => (
          <Card
            onFavoriteButtonClick={handleFavoriteButtonClick}
            isFavorite={favorites.includes(character.name)}
            characterName={character.name}
            house={character.house}
            ancestry={character.ancestry}
            dateOfBirth={character.dateOfBirth}
            patronus={character.patronus}
            imgUrl={character.image}
            key={character.name}
            species={character.species}
            yearOfBirth={character.yearOfBirth}
            eyeColour={character.eyeColour}
            hairColour={character.hairColour}
            wand={`${character.wand.wood} ${character.wand.core} ${character.wand.length}`}
            hogwartsStudent={character.hogwartsStudent}
            hogwartsStaff={character.hogwartsStaff}
            actor={character.actor}
            alive={character.alive}
          />
        ))}
      </Main>
      <Footer
        activeHouse={activeHouse}
        onHouseButtonClick={handleHouseButtonClick}
      />
    </AppDiv>
  )
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-image: url(${appBackgroundImg});
  background-size: cover;
`

export default HarryPotterApp
