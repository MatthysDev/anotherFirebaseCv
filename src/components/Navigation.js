import React, { Component } from "react";

import { Link } from "react-router-dom";
class Navigation extends Component {
  render() {
    return (
      <>
        <div className="bg-gray-900 text-center bg-local py-8 text-3xl">
          <ul className="text-white inline-grid grid-cols-3 gap-x-4 ">
            <Link to="/">
              <li className="hover:text-purple-300 ">Home</li>
            </Link>

            <Link to="/Login">
              <li className="hover:text-purple-300 ">Login</li>
            </Link>
            <Link to="/Register">
              <li className="hover:text-purple-300 ">Register</li>
            </Link>
          </ul>
        </div>
      </>
    );
  }
}

export default Navigation;
