import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';

import '../styles/main.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
  } from 'reactstrap';

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {isOpen: false};
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="custom-header" expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={RRNavLink} className="nav-link" to="/" activeClassName="active" exact path="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} className="nav-link" to="/about-us" activeClassName="active" exact path="/about-us">About us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} className="nav-link" to="/information" activeClassName="active" exact path="/information">Information</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} className="nav-link" to="/promotions" activeClassName="active" exact path="/promotions">Promotions</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} className="nav-link" to="/news" activeClassName="active" exact path="/news">News</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} className="nav-link" to="/contact" activeClassName="active" exact path="/contact">Contacts</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
export default MainMenu;





            