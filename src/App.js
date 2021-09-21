import { Route, Switch } from "react-router"
import { BrowserRouter as Router } from "react-router-dom"
import FormApp from "./components/FormApp/FormApp"
import HarryPotterApp from "./components/harry-potter-app/HarryPotterApp"

function App({ harryPotterData }) {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/form">
            <FormApp />
          </Route>
          <Route exact path="/harrypotter">
            <HarryPotterApp data={harryPotterData} />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
