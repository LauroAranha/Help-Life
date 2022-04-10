import React, { Component } from "react";

import ContentMain from "./../components/main/ContentMain";
import Footer from "../components/props/Footer";

export default class Main extends Component {
  render() {
    return (
      <div>
        <ContentMain />
        <Footer />
      </div>
    );
  }
}
