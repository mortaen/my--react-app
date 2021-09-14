import "./App.css"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import Card from "../card/Card"
import data from "../../data.json"

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        {data.map((character) => (
          <Card
            characterName={character.name}
            house={character.house}
            ancestry={character.ancestry}
            dateOfBirth={character.dateOfBirth}
            patronus={`Patronus: ${character.patronus}`}
            imgUrl={character.image}
            key={character.name}
          />
        ))}
      </main>
      <Footer />
    </div>
  )
}

export default App
