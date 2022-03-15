import React, { Component } from "react";
import Layout from "../components/Layout";
import iut from "../img/iut.png";
import CompoImg from "../components/CompoImg";

class Presentation extends Component {
  render() {
    return (
      <>
        <Layout>
          <div className="w-full">
            <div className="felx flex-col justify-center">
              <div className="">
                <CompoImg />
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}

export default Presentation;
