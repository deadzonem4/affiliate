import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
  } from 'reactstrap';

const styles = {};

styles.fill = {
  background: '#222222'
};

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
        <Navbar color="custom-header" expand="md"  style={{...styles.fill}}>
          <div className="container">
            <Link className="navbar-brand" to="/">
              <p>Logo</p>
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link className="nav-link" to="/">Home</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/about-us">About us</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/information">Information</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/promotions">Promotions</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/news">News</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/contact">Contacts</Link>
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





            