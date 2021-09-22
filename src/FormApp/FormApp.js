import { useState } from "react"
import Form from "./components/form/Form"

function FormApp() {
  // Form data

  const [newData, setNewData] = useState([])

  function handleCreateCharacter({ name, house, ancestry, dateOfBirth }) {
    const addData = [
      ...newData,
      {
        name: name,
        house: house,
        ancestry: ancestry,
        dateOfBirth: dateOfBirth,
      },
    ]
    setNewData(addData)
  }

  return (
    <>
      <Form onCreateCharacter={handleCreateCharacter} />
      {newData.map((character) => (
        <div className="newChar">
          {character.name} {character.house} {character.ancestry}
          {character.dateOfBirth}
        </div>
      ))}
    </>
  )
}

export default FormApp
