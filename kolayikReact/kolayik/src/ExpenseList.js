import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavBar from './AppNavBar';

export default class ExpenseList extends Component {

    constructor(props) {
        super(props);
        this.state = {expenses: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/expenses')
            .then(response => response.json())
           
            .then(data => this.setState({expenses: data}));
      }

    async remove(id) {
        await fetch(`/expenses/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedExpenses = [...this.state.expenses].filter(i => i.id !== id);
            this.setState({expenses: updatedExpenses});
        });
    }

    render() {
        const {expenses, isLoading} = this.state;
      
        if (isLoading) {
            return <p>Loading...</p>;
        }
      
        const expenseList = expenses.map(expense => {
                console.log(expense.id);
            return <tr key={expense.id}>
                <td style={{whiteSpace: 'nowrap'}}>{expense.expenseType}</td>
                <td>{expense.amount}</td>
                <td>{expense.receiptDate}</td>
                <td>{expense.spendingStatement}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/expenses/" + expense.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(expense.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });
      
        return (
            <div>
                <Container fluid>
                    <div className="float-right">
                        {/* <Button color="success" style={{ float: "right" }} tag={Link} to="/addexpense">Add Expense</Button> */}
                    </div>
                    <h3>Expenses</h3>
                    <Table  className="col-md-6 border rounded p-4 mt-2 shadow">
                        <thead>
                        <tr>
                            <th >Expense Type</th>
                            <th >Amount</th>
                            <th >Receipt Date</th>
                            <th >Spending Statement</th>
                            <th >Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {expenseList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
      }
}
