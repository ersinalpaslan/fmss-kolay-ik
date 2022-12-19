import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavBar from './AppNavBar';
export default class Leaves extends Component {

constructor(props) {
    super(props);
    this.state = {leaves: []};
    this.remove = this.remove.bind(this);
}

componentDidMount() {
  fetch('/leaves')
      .then(response => response.json())
      .then(data => this.setState({leaves: data}));
}

async remove(id) {
  await fetch(`/leaves/${id}`, {
      method: 'DELETE',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
  }).then(() => {
      let updatedLeaves = [...this.state.leaves].filter(i => i.id !== id);
      this.setState({leaves: updatedLeaves});
  });
}

render() {
  const {leaves, isLoading} = this.state;

  if (isLoading) {
      return <p>Loading...</p>;
  }

  const leaveList = leaves.map(leave => {
          console.log(leave.id);
      return <tr key={leave.id}>
          <td style={{whiteSpace: 'nowrap'}}>{leave.leaveType}</td>
          <td>{leave.totalDay}</td>
          <td>{leave.startDate}</td>
          <td>{leave.endDate}</td>
          <td>{leave.leaveDescription}</td>
          <td>
              <ButtonGroup>
                  <Button size="sm" color="primary" tag={Link} to={"/leaves/" + leave.id}>Edit</Button>
                  <Button size="sm" color="danger" onClick={() => this.remove(leave.id)}>Delete</Button>
              </ButtonGroup>
          </td>
      </tr>
  });

  return (
      <div>
          <Container fluid>
              <div className="float-right">
                  {/* <Button color="success" style={{ float: "right" }} tag={Link} to="/addleave">Add Leave</Button> */}
              </div>
              <h3>Leaves</h3>
              <Table  className="col-md-6 border rounded p-4 mt-2 shadow">
                  <thead>
                  <tr>
                      <th >Leave Type</th>
                      <th >Total Day</th>
                      <th >Start Date</th>
                      <th >End Date</th>
                      <th >Leave Description</th>
                      <th >Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  {leaveList}
                  </tbody>
              </Table>
          </Container>
      </div>
  );
}
}
