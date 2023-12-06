import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';


const Footer = () => {
  return (
    <>
    <Nav>  
        <NavItem>
          <NavLink
            active
            href="#"
          >
            Link
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            Another Link
          </NavLink>
        </NavItem>
      </Nav>
    </>
  )
}

export default Footer