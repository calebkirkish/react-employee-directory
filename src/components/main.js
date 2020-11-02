import React, { Component } from 'react'
import EmployeesTable from './table.js'
import API from '../utils/API.js'

export default class Main extends Component {
    state = { employees: [] }
    componentDidMount() {
        API.getUsers().then(res => {
            this.setState({employees: res.data.results})

        })
    }

    render() {
        return (
            <>
                <EmployeesTable
                    employees={this.state.employees} />
            </>
        )
    }
}