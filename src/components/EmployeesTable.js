import React, { useState } from "react";
import "../styles/EmployeesTable.css";

function EmployeesTable(props) {
  const { employees } = props;
  const [sortConfig, setSortConfig] = useState(null);
  let sortedEmployees = [...employees];
  if (sortConfig !== null) {
    employees.sort((a, b) => {
      let forward = sortConfig[sortConfig.field + "Forward"];
      let multiplier = 1;
      if (!forward) multiplier = -1;
      if (a.name[sortConfig.field] < b.name[sortConfig.field]) {
        return -1 * multiplier;
      }
      if (a.name[sortConfig.field] > b.name[sortConfig.field]) {
        return 1 * multiplier;
      }
      return 0;
    });
    console.log(sortedEmployees);
    console.log(sortConfig);
  }
  return (
    <table>
      <caption>Employees</caption>
      <thead>
        <tr>
          <th>Image</th>
          <th>
            <button
              type="button"
              onClick={() =>
                setSortConfig({
                  field: "first",
                  firstForward: !sortConfig?.firstForward ?? true,
                })
              }
            >
              First Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() =>
                setSortConfig({
                  field: "last",
                  lastForward: !sortConfig?.lastForward ?? true,
                })
              }
            >
              Last Name
            </button>
          </th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id.value}>
            <td>
              <img src={employee.picture.thumbnail} alt=""></img>
            </td>
            <td>{employee.name.first}</td>
            <td>{employee.name.last}</td>
            <td>{employee.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeesTable;
