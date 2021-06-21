import React from "react";
import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from './Components/Chat'
import Page from "./Components/Page";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/chat">
            <Chat />
          </Route>

          <Route path="/page">
            <Page />
          </Route>

          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
