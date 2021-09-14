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
}) {
  const houseColor = tellMeClassName(house)
  return (
    <section className={`Card ${houseColor}`}>
      <img className="Card__image" src={imgUrl} alt="portrait" />
      <div className="Card--wrapper">
        <h2 className="Card__header">{characterName}</h2>
        <ul className="Card__info">
          <li>{house}</li> <li>{ancestry}</li> <li>{dateOfBirth}</li>
          <li>{patronus}</li>
        </ul>
      </div>
      <button className="Card__button">more</button>
    </section>
  )
}

export default Card
