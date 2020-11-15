import React, { Component } from "react";
import Nav from "./Nav.js";
import EmployeesTable from "./EmployeesTable.js";
import API from "../utils/API.js";
// import getUsers from '../utils/API.js'
// import * as API from '../util/API.js'

export default class Main extends Component {
  state = {
    employees: [],
    filteredEmployees: [],
  };

  handleSearchChange = (e) => {
    const searchedValue = e.target.value;
    let filteredTable = this.state.employees.filter((item) => {
      let values = Object.values(item).join("").toLowerCase();
      return values.indexOf(searchedValue.toLowerCase()) !== -1;
    });
    this.setState({ filteredEmployees: filteredTable });
  };
  componentDidMount() {
    API.getUsers().then((res) => {
      this.setState({
        employees: res.data.results,
        filteredEmployees: res.data.results,
      });
    });
  }

  render() {
    return (
      <>
        <Nav handleSearchChange={this.handleSearchChange}></Nav>
        <EmployeesTable employees={this.state.filteredEmployees} />
      </>
    );
  }
}
