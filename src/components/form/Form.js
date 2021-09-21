function Form({ onCreateCharacter }) {
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label>
        Character Name:
        <input type="text" name="characterName" required></input>
      </label>
      <label>
        House:
        <input type="text" name="house"></input>
      </label>
      <label>
        Ancestry:
        <input type="text" name="ancestry"></input>
      </label>
      <label>
        Date of birth:
        <input type="text" name="dateOfBirth"></input>
      </label>
      <button>create</button>
    </form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { characterName, house, ancestry, dateOfBirth } = form.elements

    onCreateCharacter({
      name: characterName.value,
      house: house.value,
      ancestry: ancestry.value,
      dateOfBirth: dateOfBirth.value,
    })

    form.reset()
    characterName.focus()
  }
}
export default Form
