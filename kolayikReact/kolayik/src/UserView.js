import React, { Component } from 'react'
import { Button, Container, Form, FormGroup, Input, Label, Table } from 'reactstrap';
import AppNavBar from './AppNavBar';
export default class UserView extends Component {
    emptyItem = {
        name: '',
        lastName:'',
        idNumber:'',
        salary:'',
        title:'',
        department:'',
        birthDate:'',
        dateOfStart:'',
        mail:'',
    };
    emptyAddress = {
        addressLine:'',
        city:'',
        country:'',
        postCode:'',
        telephone:''
    }
    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem,
            address: this.emptyAddress
        };
    }

    async componentDidMount() {
        const user = await (await fetch(`/users/${this.props.match.params.id}`)).json();
        this.setState({item: user});
        const userAddress = await (await fetch(`/address/${this.props.match.params.id}`)).json();
        this.setState({address: userAddress});
    }

  render() {
    const {item} = this.state;
    const {address} = this.state;
    const title = <h2>View User</h2>;
    return(
    <div>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>{item.name} {item.lastName}</h2>
                <div className='card'>
                    <div className='card-header'>
                        <ul className='list-group list-group-flush'>
                             <li className='list-group-item'>
                                <b>Name:</b>
                                {item.name}
                             </li>
                             <li className='list-group-item'>
                                <b>Last Name:</b>
                                {item.lastName}
                             </li>
                             <li className='list-group-item'>
                                <b>Email:</b>
                                {item.mail}
                             </li>
                             <li className='list-group-item'>
                                <b>TC:</b>
                                {item.idNumber}
                             </li>
                             <li className='list-group-item'>
                                <b>Salary:</b>
                                {item.salary}
                             </li>
                             <li className='list-group-item'>
                                <b>Title:</b>
                                {item.title}
                             </li>
                             <li className='list-group-item'>
                                <b>Department:</b>
                                {item.department}
                             </li>
                             <li className='list-group-item'>
                                <b>Birt Date:</b>
                                {item.birthDate}
                             </li>
                             <li className='list-group-item'>
                                <b>Date of Start:</b>
                                {item.dateOfStart}
                             </li>
                             <li className='list-group-item'>
                                <b>Address Line:</b>
                                {address.addressLine}
                             </li>
                             <li className='list-group-item'>
                                <b>City:</b>
                                {address.city}
                             </li>
                             <li className='list-group-item'>
                                <b>Country:</b>
                                {address.country}
                             </li>
                             <li className='list-group-item'>
                                <b>PostCode:</b>
                                {address.postCode}
                             </li>
                             <li className='list-group-item'>
                                <b>Telephone:</b>
                                {address.telephone}
                             </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
  }
}
