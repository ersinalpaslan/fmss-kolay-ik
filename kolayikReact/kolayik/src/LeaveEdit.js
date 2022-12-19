import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavBar from './AppNavBar';
export default class LeaveEdit extends Component {
    emptyItem = {
        leaveType:'',
        totalDay:'',
        startDate:'',
        endDate:'',
        leaveDescription:''
    };
    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async componentDidMount() {
        const leave = await (await fetch(`/leaves/${this.props.match.params.id}`)).json();
        console.log(leave);
        this.setState({item: leave});
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
        
        await fetch('/leaves/' + item.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/leaves');
    }
    
    render() {
        const {item} = this.state;
        const title = <h2>Edit Leave</h2>;
    
        return <div>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="leaveType">Leave Type</Label>
                        <Input type="text" name="leaveType" id="leaveType" value={item.leaveType || ''}
                               onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="totalDay">Total Day</Label>
                        <Input type="text" name="totalDay" id="totalDay" value={item.totalDay || ''}
                               onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="startDate">Start Date</Label>
                        <Input type="date" name="startDate" id="startDate" value={item.startDate || ''}
                               onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="endDate">End Date</Label>
                        <Input type="date" name="endDate" id="endDate" value={item.endDate || ''}
                               onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="leaveDescription">Leave Description</Label>
                        <Input type="text" name="leaveDescription" id="leaveDescription" value={item.leaveDescription || ''}
                               onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/leaves">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}
