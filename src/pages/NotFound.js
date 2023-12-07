import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';
import notFoundImage from '../assets/dog-notfound.png'

const NotFound = () => {
  return (
<div className="not-found-position"> 
      <h2>Oops, that page does not exist!</h2>
      <img src={notFoundImage} alt="dog wearing a wig"/>
    </div>
  )
}

export default NotFound