import React, { Component } from 'react';

class BackButton extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <button className='left waves-effect waves-light btn'>Back</button>
      </div>
    );
  }
}

export default BackButton;
