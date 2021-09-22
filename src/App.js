import { Link, Route, Switch } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import styled from "styled-components/macro"
import FormApp from "./FormApp/FormApp"

import HarryPotterApp from "./harry-potter-app/HarryPotterApp"

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            Startseite
            <StyledLink to="/form">Form</StyledLink>
            <StyledLink to="/harrypotter">Harry Potter App</StyledLink>
          </Route>
          <Route exact path="/form">
            <FormApp />
          </Route>
          <Route exact path="/harrypotter">
            <HarryPotterApp />
          </Route>
          <Route>404 NOT FOUND</Route>
        </Switch>
      </Router>
    </>
  )
}

const StyledLink = styled(Link)`
  display: inline-block;
  background-color: lightsalmon;
  padding: 5px;
  text-decoration: none;
  border-radius: 7px;
  color: darkcyan;
`

export default App
