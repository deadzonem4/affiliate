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
    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  onMouseEnter() {
    this.setState({dropdownOpen: true});
  }
  onMouseLeave() {
    this.setState({dropdownOpen: false});
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
                  <NavLink tag={RRNavLink} className="nav-link" to={this.props.lang + "/"} activeClassName="active" exact path="/">{this.props.home}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} className="nav-link" to={this.props.lang + "/news"} activeClassName="active" exact path="/news">{this.props.news}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} className="nav-link" to={this.props.lang + "/about-us"} activeClassName="active" exact path="/about-us">{this.props.about}</NavLink>
                </NavItem>
                <NavItem>
                  <Dropdown onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret onMouseOver={this.onMouseEnter}>
                      {this.props.information}
                    </DropdownToggle>
                    <DropdownMenu onMouseOver={this.onMouseEnter}>
                      <NavLink tag={RRNavLink} className="nav-link" to={this.props.lang + "/terms-and-coditions"} activeClassName="active" exact path="/terms-and-coditions">{this.props.terms}</NavLink>
                      <NavLink tag={RRNavLink} className="nav-link" to={this.props.lang + "/commission"} activeClassName="active" exact path="/commission">{this.props.commission}</NavLink>
                      <NavLink tag={RRNavLink} className="nav-link" to={this.props.lang + "/f-a-q"} activeClassName="active" exact path="/f-a-q">{this.props.faq}</NavLink>
                      <NavLink tag={RRNavLink} className="nav-link" to={this.props.lang + "/responsible-betting"} activeClassName="active" exact path="/responsible-betting">{this.props.betting}</NavLink>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} className="nav-link" to={this.props.lang + "/contact"} activeClassName="active" exact path="/contact">{this.props.contact}</NavLink>
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





            