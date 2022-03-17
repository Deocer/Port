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

export default class Navibar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="md" style={{"font-weight":"bolder"}}>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="m-auto">
              <NavItem>
                <NavLink style ={{"color" : "black"}} href="/Home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style ={{"color" : "black"}} href="/Resume">Resume</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style ={{"color" : "black"}} href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>        
              <UncontrolledDropdown nav inNavbar>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}