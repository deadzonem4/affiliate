import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import './styles/main.css';
import LiveClock from '../common/LiveClock.js';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
  } from 'reactstrap';


class MainMenuBg extends React.Component {
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
        <Navbar color="custom-header" expand="lg">
          <LiveClock/>
          <div className="container">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink tag={RRNavLink} className="nav-link" to="/" activeClassName="active" exact path="/">{this.props.home}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} className="nav-link" to="/news" activeClassName="active" exact path="/news">{this.props.news}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} className="nav-link" to="/about-us" activeClassName="active" exact path="/about-us">{this.props.about}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} className="nav-link" to="/contact" activeClassName="active" exact path="/contact">{this.props.contact}</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
            
          </div>
          
        </Navbar>
      </div>
    );
  }
}

export default MainMenuBg;





            