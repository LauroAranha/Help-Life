import React, { Component } from "react";
import Nav from "../../components/props/Nav";
import Footer from "../../components/props/Footer";
import ContentAbout from "../../components/about/ContentAbout";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <ContentAbout />
        <Footer />
      </div>
    );
  }
}
