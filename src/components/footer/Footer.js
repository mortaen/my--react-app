import { useState } from "react"
import "./Footer.css"

function Footer({ activeHouse, onHouseButtonClick }) {
  return (
    <footer className="Footer">
      <button
        className={
          activeHouse === "Gryffindor"
            ? "Footer__button--active"
            : "Footer__button red"
        }
        onClick={() => onHouseButtonClick("Gryffindor")}
      >
        Gryffindor
      </button>
      <button
        className={
          activeHouse === "Hufflepuff"
            ? "Footer__button--active"
            : "Footer__button yellow"
        }
        onClick={() => onHouseButtonClick("Hufflepuff")}
      >
        Hufflepuff
      </button>
      <button
        className={
          activeHouse === "Ravenclaw"
            ? "Footer__button--active"
            : "Footer__button blue"
        }
        onClick={() => onHouseButtonClick("Ravenclaw")}
      >
        Ravenclaw
      </button>
      <button
        className={
          activeHouse === "Slytherin"
            ? "Footer__button--active"
            : "Footer__button green"
        }
        onClick={() => onHouseButtonClick("Slytherin")}
      >
        Slytherin
      </button>
    </footer>
  )
}

export default Footer
