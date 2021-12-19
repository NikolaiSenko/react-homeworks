import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserLogin from "../components/UserLogin";
import Posts from "../components/Posts";
import Post from "../components/Post"

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/posts/:postId">
          <Post/>
          </Route>
          <Route path="/posts">
          <Posts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
