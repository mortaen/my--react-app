import "./App.css"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import Card from "../card/Card"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="card--wrapper">
        <Card characterName="Dedric Ciggory" house="Ravenclaw" imgUrl="" />

        <Card characterName="Perry Hotter" house="Gryffindor" imgUrl="" />

        <Card characterName="Germione Hranger" house="Gryffindor" imgUrl="" />

        <Card characterName="Won Reasley" house="Gryffindor" imgUrl="" />

        <Card characterName="Maco Dralfoy" house="Slytherin" imgUrl="" />
      </div>
      <Footer />
    </div>
  )
}

export default App
