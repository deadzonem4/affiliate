import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import './styles/main.css';
import LogModal from './LogModal.js';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import {
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
  } from 'reactstrap';


class MobileMenu extends React.Component {
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
      <div className="mobile-menu">
        <Link className="navbar-brand-mobile" to="/">
          <img className="logo" src={logo}  alt="Affiliate"/>
        </Link>
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
              <NavItem>
                <a className="nav-link" rel="noopener noreferrer" target="_blank" href="https://affiliates.winbetaffiliates.bg/signup.php">
                    <span>{this.props.regButton}</span>
                </a>
              </NavItem>
              <NavItem>
                <LogModal
                  className="log-modal-box"
                  button={this.props.signButton}
                  logButton={this.props.logButton}
                  title={this.props.title}
                  user={this.props.user}
                  password={this.props.password}                
                />
              </NavItem>
            </Nav>
          </Collapse>
      </div>
    );
  }
}

export default MobileMenu;


            