import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavbarNav, NavItem, NavLink, Fa } from 'mdbreact';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      collapse: false
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { collapse } = this.state;
    this.setState({ collapse: !collapse })
  }

  render() {
    const url = location.hash.slice(1);
    const { onClick } = this;
    const { collapse } = this.state;
    return (
      <div>
        <Navbar style={styles.bgColor} dark expand='md'>
          <NavbarBrand href='/'>
            <strong>Jeremy Grubard</strong>
          </NavbarBrand>
          <NavbarToggler onClick={onClick} />
          <Collapse isOpen={collapse} navbar>
            <NavbarNav left>
              <NavItem active={url === '/'}>
                <NavLink to='/'>Home</NavLink>
              </NavItem>
              <NavItem active={url === '/portfolio'}>
                <NavLink to='/portfolio'>Portfolio</NavLink>
              </NavItem>
              <NavItem active={url === '/about'}>
                <NavLink to='/about'>About Me</NavLink>
              </NavItem>
              <NavItem active={url === '/contact'}>
                <NavLink to='/contact'>Contact</NavLink>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                <a href="http://www.github.com/jgrubard" style={styles.icons} target='_blank'><Fa icon="github" /></a>
              </NavItem>
              <NavItem>
                <a href="http://www.linkedin.com/in/jgrubard" style={styles.icons} target='_blank'><Fa icon="linkedin" /></a>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Nav;

const styles = {
  bgColor: {
    backgroundColor: 'darkgray'
  },
  icons: {
    margin: '0 10',
    fontSize: '25',
    color: 'white'
  }
}