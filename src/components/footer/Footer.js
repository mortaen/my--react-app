import { useState } from "react"
import "./Footer.css"

function Footer() {
  const [activeHouse, setActiveHouse] = useState("")
  return (
    <footer className="Footer">
      <button
        className={
          activeHouse === "Gryffindor"
            ? "Footer__button--active"
            : "Footer__button red"
        }
        onClick={() => setActiveHouse("Gryffindor")}
      >
        Gryffindor
      </button>
      <button
        // className="Footer__button yellow"
        className={
          activeHouse === "Hufflepuff"
            ? "Footer__button--active"
            : "Footer__button yellow"
        }
        onClick={() => setActiveHouse("Hufflepuff")}
      >
        Hufflepuff
      </button>
      <button
        // className="Footer__button blue"
        className={
          activeHouse === "Ravenclaw"
            ? "Footer__button--active"
            : "Footer__button blue"
        }
        onClick={() => setActiveHouse("Ravenclaw")}
      >
        Ravenclaw
      </button>
      <button
        // className="Footer__button green"
        className={
          activeHouse === "Slytherin"
            ? "Footer__button--active"
            : "Footer__button green"
        }
        onClick={() => setActiveHouse("Slytherin")}
      >
        Slytherin
      </button>
    </footer>
  )
}

export default Footer
