import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    console.log("Portfolio container has rendered");
  }

  portfolioItems() {
    const data = ["Quip", "Eventbrite", "Ministry Safe", "SwingAway"];

    return data.map(item => {
      return <h1>{items}</h1>;
    });
  }

  render() {
    return (
      <div>
        <h2>Portfolio items updated...</h2>

        {this.portfolioItems()}
      </div>
    );
  }
}