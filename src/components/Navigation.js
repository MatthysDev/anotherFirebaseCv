import React, { Component } from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
class Navigation extends Component {
  render() {
    return (
      <>
        <div className="bg-gray-900 text-center bg-local py-8 text-3xl">
          <ul className="text-white inline-grid grid-cols-3 gap-x-4 ">
            <Link to="/">
              <li className="hover:text-purple-300 hover:underline">Home</li>
            </Link>

            <Link to="/Login">
              <li className="hover:text-purple-300 hover:underline">Login</li>
            </Link>
            <Link to="/Register">
              <li className="hover:text-purple-300 hover:underline">
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
