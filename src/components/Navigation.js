import React, { Component } from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
class Navigation extends Component {
  render() {
    return (
      <>
        <div className="bg-gray-800 text-center bg-local">
          <ul className="text-white inline-grid grid-cols-3 gap-x-4 text-xl">
            <Link to="/">
              <li className="hover:text-yellow-400 hover:underline">Home</li>
            </Link>
            <Link to="/About">
              <li className="hover:text-yellow-400 hover:underline">About</li>
            </Link>
            <Link to="/Tools">
              <li className="hover:text-yellow-400 hover:underline">Tools</li>
            </Link>
            <Link to="/Login">
              <li className="hover:text-yellow-400 hover:underline">Login</li>
            </Link>
            <Link to="/Register">
              <li className="hover:text-yellow-400 hover:underline">
                Register
              </li>
            </Link>
          </ul>
        </div>
      </>
    );
  }
}

export default Navigation;
