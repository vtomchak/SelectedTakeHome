import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className='white'>
        <div className='nav-wrapper'>
          <a className='left brand-logo black'>Selected</a>
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
