import React, { Component } from "react";
import "../styles/Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p>
          Click on last name or first name to filter by heading and/ or use the
          search box to narrow your results.
        </p>
      </div>
    );
  }
}