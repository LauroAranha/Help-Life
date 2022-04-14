import React, { Component } from "react";
import Nav from "../../components/props/Nav";
import Footer from "../../components/props/Footer";
import ContentOng from "../../components/ong/ContentOng";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <ContentOng />
        <Footer />
      </div>
    );
  }
}
