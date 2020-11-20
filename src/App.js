import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AddPicture from "./AddPicture";
import Home from "./Home";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact component={Home} path='/' />
          <Route exact component={AddPicture} path='/addpicture' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
