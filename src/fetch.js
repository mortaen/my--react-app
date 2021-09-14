function FetchData() {
  fetch("http://hp-api.herokuapp.com/api/characters")
    .then((response) => response.json())
    .then((characterData) => {
      console.log(characterData)
    })
    .catch((error) => {
      console.log("Error: ", error)
    })
  return characterData
}

FetchData()

export default FetchData
