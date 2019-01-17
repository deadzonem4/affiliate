import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import './styles/main.css';
import LiveClock from '../common/LiveClock.js';
import {
  Collapse, Navbar, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu
  } 
from 'reactstrap';


class MainMenuBg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  render() {
    return (
      <div>
        <Navbar color="custom-header" expand="lg">
          <LiveClock/>
          <div className="container">
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
                  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                      {this.props.information}
                    </DropdownToggle>
                    <DropdownMenu>
                      <NavLink tag={RRNavLink} className="nav-link" to="/terms-and-coditions" activeClassName="active" exact path="/terms-and-coditions">{this.props.terms}</NavLink>
                      <NavLink tag={RRNavLink} className="nav-link" to="/commission" activeClassName="active" exact path="/commission">{this.props.commission}</NavLink>
                      <NavLink tag={RRNavLink} className="nav-link" to="/f-a-q" activeClassName="active" exact path="/f-a-q">{this.props.faq}</NavLink>
                      <NavLink tag={RRNavLink} className="nav-link" to="/responsible-betting" activeClassName="active" exact path="/responsible-betting">{this.props.betting}</NavLink>
                    </DropdownMenu>
                  </Dropdown>
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





            