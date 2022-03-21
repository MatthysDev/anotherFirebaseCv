import React, { Component } from "react";
import Storage from "../components/Storage";
import Layout from "../components/Layout";

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
            <h1 className="text-white py-8 text-2xl">Matthys Firebase</h1>
            <Storage />
          </div>
        </Layout>
      </>
    );
  }
}
