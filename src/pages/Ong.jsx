import React, { Component } from "react";

import ContentOng from "./../components/ong/ContentOng";
import Footer from "../components/props/Footer";

export default class Main extends Component {
  render() {
    return (
      <div>
        <ContentOng />
        <Footer />
      </div>
    );
  }
}
