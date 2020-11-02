import React from 'react';
import Api from "../utils/API.js"

function EmployeeTable(props) {
    const { employees } = props;
    return (
        <table>
            <caption>Our employees</caption>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee => (
                    <tr key={employee.id.value}>
                        <td><img src={employee.picture.thumbnail}></img></td>
                        <td>{employee.name.first}</td>
                        <td>{employee.name.last}</td>
                        <td>{employee.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default EmployeeTable;