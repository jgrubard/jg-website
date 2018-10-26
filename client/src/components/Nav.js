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
    const isMobile = window.innerWidth <= 500;
    const url = location.hash.slice(1);
    const { onClick } = this;
    const { collapse } = this.state;
    if(url === '/') {
      return null
    }
    return (
      <div>
        <Navbar className='nav-bar' dark expand='md' scrolling fixed='top'>
          <NavbarBrand href='/'>Jeremy Grubard</NavbarBrand>
          <NavbarToggler onClick={onClick} />
          <Collapse isOpen={collapse} navbar>
            <NavbarNav left>
              <NavItem active={url === '/home'}>
                <NavLink to='/home' onClick={isMobile ? onClick : null}>Home</NavLink>
              </NavItem>
              <NavItem active={url === '/portfolio'}>
                <NavLink to='/portfolio' onClick={isMobile ? onClick : null}>Portfolio</NavLink>
              </NavItem>

              <NavItem active={url === '/contact'}>
                <NavLink to='/contact' onClick={isMobile ? onClick : null}>Contact</NavLink>
              </NavItem>

              {/* <NavItem active={url === '/resume'}>
                <NavLink to='/resume' onClick={isMobile ? onClick : null}>Resume</NavLink>
              </NavItem> */}
      
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                {/* <div className='resume'> */}
                  <a href='https://s3.us-east-2.amazonaws.com/jeremy-grubard-website/Jeremy_Grubard.pdf' target='_blank'>
                    <div className='resume'>
                      Resume
                    </div>
                  </a>
                {/* </div> */}
              </NavItem>
              <NavItem>
                <a href="http://www.github.com/jgrubard" target='_blank'><Fa className='icons' icon="github" /></a>
              </NavItem>
              <NavItem>
                <a href="http://www.linkedin.com/in/jgrubard" target='_blank'><Fa  className='icons' icon="linkedin" /></a>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Nav;

// const styles = {
//   bgColor: {
//     backgroundColor: 'darkgray'
//   },
//   icons: {
//     margin: '0 10',
//     fontSize: '25',
//     color: 'white'
//   },
//   resume: {
//     margin: '0 10',
//     fontSize: '18',
//     color: 'white'
//   }
// }