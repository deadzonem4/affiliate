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
  background: '#23345c',
  boxShadow: '0px 2px 11px 1px rgba(0, 0, 0, 0.31)',
  borderBottom: 'solid 1px #98a3b7'
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
            <Link className="navbar-brand" to="/affiliate">
              <p>Logo</p>
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link className="nav-link" to="/affiliate">Home</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/affiliate/about-us">About us</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/affiliate/information">Information</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/affiliate/promotions">Promotions</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/affiliate/news">News</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/affiliate/contact">Contacts</Link>
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





            