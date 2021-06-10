import React, { Component } from 'react';

class ContinueButton extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (this.props.value === 'About You') {
      this.setState(this.value === 'Subjects');
      console.log(this.state);
    }
  }
  render() {
    return (
      <div>
        {(this.props.value.value === 'About You' &&
          this.props.value.firstName.length &&
          this.props.value.lastName.length) ||
        (this.props.value.value === 'Subjects' &&
          this.props.value.subjects.length >= 2) ? (
          <div style={{ textAlign: 'center' }}>
            <button
              className='right waves-effect orange btn'
              onClick={this.handleClick}
            >
              Continue
            </button>
          </div>
        ) : (
          <button className='right waves-effect grey btn disabled'>
            Continue
          </button>
        )}
      </div>
    );
  }
}

export default ContinueButton;
