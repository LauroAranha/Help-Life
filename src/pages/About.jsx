import React, { Component } from "react";

import ContentAbout from "../components/about/ContentAbout";
import Footer from "../components/props/Footer";

export default class Main extends Component {
  render() {
    return (
      <div>
        <ContentAbout />
        <Footer />
      </div>
    );
  }
}
