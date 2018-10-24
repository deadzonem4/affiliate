import React from 'react';
import { Link } from 'react-router-dom';
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
        <Navbar color="custom-header" expand="md">
          <div className="container">
            <Link className="navbar-brand" to="/">

            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
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





            