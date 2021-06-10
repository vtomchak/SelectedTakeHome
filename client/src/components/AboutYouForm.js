import React, { Component } from 'react';

class AboutYouForm extends Component {
  render() {
    return (
      <div>
        <input
          type='text'
          name='first'
          value={this.props.firstName}
          onChange={this.props.handleChange}
        />
        <input
          type='text'
          name='last'
          value={this.props.lastName}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default AboutYouForm;
