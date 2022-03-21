import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Acceuil from "./pages/Acceuil";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

import SignupModal from "./components/SignupModal";
import LoginModal from "./components/LoginModal";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Navigation />
          <Route path="/" exact component={Acceuil} />

          <Route path="/Register" component={SignupModal} />
          <Route path="/Login" component={LoginModal} />
        </Router>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
