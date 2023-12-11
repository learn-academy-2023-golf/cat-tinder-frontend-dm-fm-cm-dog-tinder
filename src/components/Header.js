import React from 'react';
import {Nav, NavItem } from 'reactstrap'
import dogLogo from '../assets/dog-logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header> 
      <Nav justified>
        <NavItem>
          <NavLink to="/">
            <img 
              src={dogLogo} 
              alt="pitbull"
              height="40"
              width="60"
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/dogindex">
            Meet the Dawgs
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/dognew">
            Join the Dawg pound
          </NavLink>
        </NavItem>
      </Nav>
    </header>
  )
}

export default Header