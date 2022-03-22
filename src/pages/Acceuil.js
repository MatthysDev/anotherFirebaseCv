import React, { Component } from "react";
import Storage from "../components/Storage";
import Layout from "../components/Layout";
import Gravatar from "react-gravatar";

export default class Acceuil extends Component {
  render() {
    return (
      <>
        <Layout>
          <div
            className="App pt-32"
            style={{
              color: "black",
              textAlign: "center",
              fontFamily: "PT Sans",
            }}
          >
            <h1 className="text-white py-8 text-5xl font-bold">
              Matthys Firebase
            </h1>
            <Gravatar
              email="ducrocq.matthys@gmail.com"
              size={128}
              className=" m-auto mb-12 h-64 w-64 border-8 border-blue-500 hover:border-purple-400 rounded-full bg-gradient-to-b from-gray-200 to-gray-400 "
            />
            <Storage />
          </div>
        </Layout>
      </>
    );
  }
}
