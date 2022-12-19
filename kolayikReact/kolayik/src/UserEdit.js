import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavBar from './AppNavBar';

class UserEdit extends Component {

    emptyItem = {
        mail: '',
        salary:'',
        title:'',
        department:'',
        dateOfStart:'',
        addressLine:'',
        city:'',
        country:'',
        postCode:'',
        telephone:''
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
        const user = await (await fetch(`/users/${this.props.match.params.id}`)).json();
        this.setState({item: user});
        const userAddress = await (await fetch(`/address/${this.props.match.params.id}`)).json();
        this.setState(prevState => ({
            item:{
                ...prevState.item,
                    addressLine:userAddress.addressLine
            }
        }));
        this.setState(prevState => ({
            item:{
                ...prevState.item,
                    country:userAddress.country
            }
        }));
        this.setState(prevState => ({
            item:{
                ...prevState.item,
                    city:userAddress.city
            }
        }));
        this.setState(prevState => ({
            item:{
                ...prevState.item,
                    postCode:userAddress.postCode
            }
        }));
        this.setState(prevState => ({
            item:{
                ...prevState.item,
                    telephone:userAddress.telephone
            }
        }));
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
        
        await fetch('/users/' + item.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/users');
    }

    render() {
        const {item} = this.state;
        const title = <h2>Edit User</h2>;
    
        return <div>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="mail">Mail</Label>
                        <Input type="text" name="mail" id="mail" value={item.mail || ''}
                               onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="salary">Salary</Label>
                        <Input type="text" name="salary" id="salary" value={item.salary || ''}
                               onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" name="title" id="title" value={item.title || ''}
                               onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="department">Department</Label>
                        <Input type="text" name="department" id="department" value={item.department || ''}
                               onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="dateOfStart">Date Of Start</Label>
                        <Input type="date" name="dateOfStart" id="dateOfStart" value={item.dateOfStart || ''}
                               onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="addressLine">Address Line</Label>
                        <Input type="text" name="addressLine" id="addressLine" defaultValue={this.state.item.addressLine} 
                               onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input type="text" name="city" id="city" defaultValue={this.state.item.city} 
                               onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="country">Country</Label>
                        <Input type="text" name="country" id="country" defaultValue={this.state.item.country} 
                               onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="postCode">PostCode</Label>
                        <Input type="text" name="postCode" id="postCode" defaultValue={this.state.item.postCode} 
                               onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="telephone">Telephone</Label>
                        <Input type="text" name="telephone" id="telephone" defaultValue={this.state.item.telephone} 
                               onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/users">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}
export default UserEdit;
