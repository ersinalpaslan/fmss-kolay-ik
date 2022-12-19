import React, {Component} from 'react';
import {Navbar, NavbarBrand, NavLink, Nav,NavItem} from 'reactstrap';
import {Link} from 'react-router-dom';

export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
return <Navbar
className="my-2"
color="dark"
dark
>
<NavbarBrand href="/users">
  Users
</NavbarBrand>
<NavbarBrand href="/leaves">
  Leaves
</NavbarBrand>
<NavbarBrand href="/expenses">
  Expenses
</NavbarBrand>
</Navbar>
    }
}
