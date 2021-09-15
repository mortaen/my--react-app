import { useState } from "react"
import "./Footer.css"

function Footer() {
  const [activeHouse, setActiveHouse] = useState("")
  return (
    <footer className="Footer">
      <button
        // className={`${
        //   activeHouse === "Gryffindor" ? "FooterButtonActive" : ""
        // } Footer__button red`}
        className={activeHouse === "Gryffindor" ? "FooterButtonActive" : ""}
        onClick={() => setActiveHouse("Gryffindor")}
      >
        Gryffindor
      </button>
      <button
        // className="Footer__button yellow"
        className={activeHouse === "Hufflepuff" ? "FooterButtonActive" : ""}
        onClick={() => setActiveHouse("Hufflepuff")}
      >
        Hufflepuff
      </button>
      <button
        // className="Footer__button blue"
        className={activeHouse === "Ravenclaw" ? "FooterButtonActive" : ""}
        onClick={() => setActiveHouse("Ravenclaw")}
      >
        Ravenclaw
      </button>
      <button
        // className="Footer__button green"
        className={activeHouse === "Slytherin" ? "FooterButtonActive" : ""}
        onClick={() => setActiveHouse("Slytherin")}
      >
        Slytherin
      </button>
    </footer>
  )
}

export default Footer
