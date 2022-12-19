import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label,Row,Col} from 'reactstrap';
import AppNavBar from './AppNavBar';
export default class AddExpenseFromUsers extends Component {
    emptyItem = {
        expenseType:'',
        amount:'',
        receiptDate:'',
        spendingStatement:''
    };
    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }
    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;
        
        await fetch(`/expenses/${this.props.match.params.id}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),

        });
        this.props.history.push('/expenses');
    }
    render() {
        const {item} = this.state;
        const title = <h2>Add Expense</h2>;
        return <Row>
        <Col
          className="bg-light border"
          md={{
            offset: 3,
            size: 6
          }}
          sm="12"
        >
          <div>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="expenseType">Expense Type</Label>
                        <Input type="text" name="expenseType" id="expenseType" value={item.expenseType || ''}
                               onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="amount">Amount</Label>
                        <Input type="text" name="amount" id="amount" value={item.amount || ''}
                               onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="receiptDate">Receipt Date</Label>
                        <Input type="date" name="receiptDate" id="receiptDate" value={item.receiptDate || ''}
                               onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="spendingStatement">Spending Statement</Label>
                        <Input type="text" name="spendingStatement" id="spendingStatement" value={item.spendingStatement || ''}
                               onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit" >Save</Button>{''}
                        <Button color="secondary" tag={Link} to="/expenses">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
        </Col>
      </Row>
    }
}
