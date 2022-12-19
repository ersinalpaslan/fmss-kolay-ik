import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table, Row, Col } from 'reactstrap';
import AppNavBar from './AppNavBar';
import './App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = { users: [] };
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/users')
            .then(response => response.json())
            .then(data => this.setState({ users: data }));
    }

    async remove(id) {
        await fetch(`/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedUsers = [...this.state.users].filter(i => i.id !== id);
            this.setState({ users: updatedUsers });
        });
    }

    render() {
        const { users, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const userList = users.map(user => {
            console.log(user.id);
            return <tr key={user.id}>
                <td style={{ whiteSpace: 'nowrap' }}>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.mail}</td>
                <td>{user.salary}</td>
                <td>{user.title}</td>
                <td>{user.department}</td>
                <td>{user.dateOfStart}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="success" outline tag={Link} to={"/leavesfromuser/" + user.id}>Add Leave</Button>
                        <Button size="sm" color="info" outline tag={Link} to={"/viewleaves/" + user.id}>View Leaves</Button>
                    </ButtonGroup>
                </td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="success" outline tag={Link} to={"/expensesfromuser/" + user.id}>Add Expense</Button>
                        <Button size="sm" color="info" outline tag={Link} to={"/viewexpenses/" + user.id}>View Expenses</Button>
                    </ButtonGroup>
                </td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="info" outline tag={Link} to={"/viewuser/" + user.id}>View</Button>
                        <Button size="sm" color="success" outline tag={Link} to={"/users/" + user.id}>Edit</Button>
                        <Button size="sm" color="danger" outline onClick={() => this.remove(user.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col
                            className="bg-light border"
                            xs="6"
                        >
                            <h3>Users</h3>
                        </Col>
                        <Col
                            className="bg-light border"
                            xs="6"
                        >
                            <Button color="success" style={{ float: "right" }} outline tag={Link} to="/adduser">Add User</Button>
                        </Col>
                    </Row>
                    <Table className="col-md-6 border rounded p-4 mt-2 shadow">
                        <thead>
                            <tr>
                                <th >Name</th>
                                <th >Last Name</th>
                                <th >Email</th>
                                <th >Salary</th>
                                <th >Title</th>
                                <th >Department</th>
                                <th >Date Of Start</th>
                                <th >Leaves</th>
                                <th >Expenses</th>
                                <th >Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}
export default UserList;
