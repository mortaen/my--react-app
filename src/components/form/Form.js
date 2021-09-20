import "./Form.css"

function Form() {
  return (
    <form className="form" onSubmit={(event) => handleSubmit(event)}>
      <label>
        Character Name:
        <input type="text" name="characterName"></input>
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
    console.log("name of character: " + characterName.value)
    console.log("house: " + house.value)
    console.log("ancestry: " + ancestry.value)
    console.log("date of birth: " + dateOfBirth.value)
    form.reset()
    characterName.focus()
  }
}
export default Form
