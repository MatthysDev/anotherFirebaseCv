import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Acceuil from "./pages/Acceuil";
import Presentation from "./pages/Presentation";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Tools from "./pages/Tools";
import SignupModal from "./components/SignupModal";
import LoginModal from "./components/LoginModal";


class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Navigation />
          <Route path="/" exact component={Acceuil} />
          <Route path="/About" component={Presentation} />
          <Route path="/Tools" component={Tools} />
          <Route path="/Register" component={SignupModal} />
          <Route path="/Login" component={LoginModal} />
        </Router>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
