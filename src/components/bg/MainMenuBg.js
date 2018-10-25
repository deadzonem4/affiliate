import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import '../styles/main.css';
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
                  <NavLink tag={RRNavLink} className="nav-link" to="/" activeClassName="active" exact path="/">Начало</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} className="nav-link" to="/about-us" activeClassName="active" exact path="/about-us">За нас</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} className="nav-link" to="/information" activeClassName="active" exact path="/information">Информация</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} className="nav-link" to="/promotions" activeClassName="active" exact path="/promotions">Промоции</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} className="nav-link" to="/news" activeClassName="active" exact path="/news">Новини</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} className="nav-link" to="/contact" activeClassName="active" exact path="/contact">Контакти</NavLink>
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





            