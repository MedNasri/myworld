import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <nav className='navbar navbar-expand-lg navbar-dark default-color'>
      <img src='{Logo}' alt='logo' className='logo img-fluid' />
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link className='nav-link' push to='/pseudo'>Home <span className='sr-only'></span></Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' push to='/notes'>My Notes</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' push to='/weather'>Weather Today !</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' push to='/teams'>Teams</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
