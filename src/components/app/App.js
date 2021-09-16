import "./App.css"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import Card from "../card/Card"
import { useState } from "react"

function App({ data }) {
  const [activeHouse, setActiveHouse] = useState("All")
  function handleHouseButtonClick(house) {
    setActiveHouse(house)
  }
  return (
    <div className="App">
      <Header />
      <main className="main">
        {data
          .filter(
            (character) =>
              character.house === activeHouse || activeHouse === "All"
          )
          .map((character) => (
            <Card
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
      </main>
      <Footer
        activeHouse={activeHouse}
        onHouseButtonClick={handleHouseButtonClick}
      />
    </div>
  )
}

export default App
