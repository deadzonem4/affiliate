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
  background: '#222222',
  color: '#fff'
};

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
        <Navbar color="custom-header" expand="md"  style={{...styles.fill}}>
          <div className="container">
            <Link className="navbar-brand" to="/bg">
              <p>Лого</p>
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link className="nav-link" to="/">Начало</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/about-us">За нас</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/information">Информация</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/promotions">Промоции</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/news">Новини</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/contact">Контакти</Link>
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





            