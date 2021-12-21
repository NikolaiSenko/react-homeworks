import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from "../components/NavBar";
import Figure from "../components/Figure";

export default function Navigator() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path='/figure/:type/:color'>
            <NavBar/>
            <Figure/>
          </Route>
          <Route path='/'>
            <NavBar/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
