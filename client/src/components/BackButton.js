import React, { Component } from 'react';

class BackButton extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <button className='left waves-effect blue-grey-text text-darken-4 white btn'>
          Back
        </button>
      </div>
    );
  }
}

export default BackButton;
