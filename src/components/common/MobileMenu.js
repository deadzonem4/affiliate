import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import './styles/main.css';
import LogModal from './LogModal.js';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import {
  Collapse, NavbarToggler, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu
  } from 'reactstrap';


class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.state = {
      isOpen: false,
      dropdownOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  toggleDropdown() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
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
                <NavLink tag={RRNavLink} className="nav-link" to={this.props.lang + "/"} activeClassName="active" exact path="/">{this.props.home}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} className="nav-link" to={this.props.lang + "/news"} activeClassName="active" exact path="/news">{this.props.news}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} className="nav-link" to={this.props.lang + "/about-us"} activeClassName="active" exact path="/about-us">{this.props.about}</NavLink>
              </NavItem>
              <NavItem>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                  <DropdownToggle caret>
                    {this.props.information}
                  </DropdownToggle>
                  <DropdownMenu>
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


            