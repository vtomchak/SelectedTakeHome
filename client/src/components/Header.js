import React, { Component } from 'react';
import logoselect from './logoselect.png';
class Header extends Component {
  render() {
    return (
      <nav className='white'>
        <div className='nav-wrapper'>
          <a className='left brand-logo white'>
            <img height='45' align='center' src={logoselect} />
          </a>
          <ul className='right'>
            <li>
              <a>Sign Up</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
