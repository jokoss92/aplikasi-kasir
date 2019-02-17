import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class NavBar extends React.Component {
  
  render() {
    return (
      <div>
        <Navbar color="danger" light expand="md">
        <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink className="text-white">{this.props.Left}</NavLink>
              </NavItem>
            </Nav>
          <NavbarBrand href="/" className="mx-auto" className="text-white" href="/">{this.props.title}</NavbarBrand>
        
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="text-white">{this.props.Right}</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}
