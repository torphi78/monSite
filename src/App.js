import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Accueil from "./components/pages/Home";



function App() {
  return (
    <Router>
        <Switch>
              <Route exact path="/" component={Accueil} />
              
        </Switch>
    </Router>
  );
}

export default App;
