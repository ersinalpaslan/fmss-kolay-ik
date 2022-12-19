import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label,Row,Col} from 'reactstrap';
import AppNavBar from './AppNavBar';

export default class UserAdd extends Component {
    emptyItem = {
        name: '',
        lastName: '',
        idNumber:'',
        salary: '',
        title: '',
        department: '',
        birthDate: '',
        dateOfStart: '',
        mail: '',
        addressLine: "",
        city: "",
        country: "",
        postCode: "",
        telephone: "",
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
        let item = { ...this.state.item };
        item[name] = value;
        this.setState({ item });
    }
    async handleSubmit(event) {
        event.preventDefault();
        const { item } = this.state;

        await fetch('/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/users');
    }
    render() {
        const { item } = this.state;
        const title = <h2>Add User</h2>;

        return <div>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col
                        className="bg-light border"
                        xs="6"
                        >
                    <FormGroup>
                        <Label for="name"></Label>
                        <Input type="text" name="name" id="name" placeholder='Name' value={item.name || ''}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email"></Label>
                        <Input type="text" name="lastName" id="lastName" placeholder='Last Lame' value={item.lastName || ''}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="name"></Label>
                        <Input type="text" name="mail" id="mail" placeholder='username@mail.com' value={item.mail || ''}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="idNumber"></Label>
                        <Input type="text" name="idNumber" id="idNumber" placeholder='TC No' value={item.idNumber || ''}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="name"></Label>
                        <Input type="text" name="salary" id="salary" placeholder='Salary' value={item.salary || ''}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <div>Title</div>
                    <FormGroup>
                    <Form>
                        <Input name='title' value={item.title} onChange={this.handleChange} type='select'>
                            <option >Please Choose Title</option>
                            <option value="SENIOUR">SENIOUR</option>
                            <option value="MID">MID</option>
                            <option value="JUNIOUR">JUNIOUR</option> 
                        </Input>
                    </Form>
                    </FormGroup>
                    <div>Department</div>
                    <FormGroup>
                    <Form>
                        <Input name='department' value={item.department} onChange={this.handleChange} type='select'>
                            <option >Please Choose Department</option>
                            <option value="SOFTWARE">SOFTWARE</option>
                            <option value="MANAGMENT">MANAGMENT</option>
                            <option value="HUMANRESOURCE">HUMANRESOURCE</option> 
                        </Input>
                    </Form>
                    </FormGroup>
                    <FormGroup>
                        <Label for="name">Birth Date</Label>
                        <Input type="date" name="birthDate" id="birthDate" value={item.birthDate || ''}
                            onChange={this.handleChange} />
                    </FormGroup>    
                    <FormGroup>
                        <Label for="name">Date Of Start</Label>
                        <Input type="date" name="dateOfStart" id="dateOfStart" value={item.dateOfStart || ''}
                            onChange={this.handleChange} />
                    </FormGroup>
                        </Col>

                        <Col
                        className="bg-light border"
                        xs="6"
                        >
                    <FormGroup>
                        <Label for="name"></Label>
                        <Input type="text" name="addressLine" id="addressLine" placeholder='Address Line' value={item.addressLine || ''}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="name"></Label>
                        <Input type="text" name="city" id="city" placeholder='City' value={item.city || ''}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="name"></Label>
                        <Input type="text" name="country" id="country" placeholder='Country' value={item.country || ''}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="name"></Label>
                        <Input type="text" name="postCode" id="postCode" placeholder='Post Code' value={item.postCode || ''}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="name"></Label>
                        <Input type="text" name="telephone" placeholder='+90 543 265 2564' id="telephone" value={item.telephone || ''}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <div >
                    <br></br>
                    <FormGroup>
                        <Label>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        
                        <Button color="secondary" tag={Link} to="/users">Cancel</Button>    
                        </Label>  
                    </FormGroup>
                    </div>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    }
}