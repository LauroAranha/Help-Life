import React, { Component } from "react";
import Nav from "../../components/props/Nav";
import Footer from "../../components/props/Footer";
import ContentMain from "../../components/main/ContentMain";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <ContentMain />
        <Footer />
      </div>
    );
  }
}
