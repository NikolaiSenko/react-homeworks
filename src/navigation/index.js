import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Posts from "../components/Posts";
import Post from "../components/Post";
import NavBar from "../components/NavBar";
import Figure from "../components/Figure";

export default function App() {
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
        {/* <Route path="/posts/:postId">
          <Post/>
          </Route>
          <Route path="/posts">
          <Posts />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}
