import React, { Component } from 'react';
import AboutYouForm from './AboutYouForm';
import BackButton from './BackButton';
import ContinueButton from './ContinueButton';
import ReactChipInput from 'react-chip-input';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabName: [
        { id: 1, name: 'About You' },
        { id: 2, name: 'Subjects' },
        { id: 3, name: 'Subject Details' },
      ],
      value: 'Subjects',
      firstName: '',
      lastName: '',
      chips: [],
      subjects: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.addSubject = this.addSubject.bind(this);
  }
  addChip = (value) => {
    const chips = this.state.chips.slice();
    chips.push(value);
    this.setState({ chips });
  };
  removeChip = (index) => {
    const chips = this.state.chips.slice();
    chips.splice(index, 1);
    this.setState({ chips });
  };
  addSubject = (value) => {
    const subjects = this.state.subjects.slice();
    subjects.push(value);
    this.setState({ subjects });
    console.log(this.state);
    //add logic to remove duplicates on change
  };

  handleChange(event) {
    const target = event.target;
    target.name === 'first' && this.setState({ firstName: event.target.value });
    target.name === 'last' && this.setState({ lastName: event.target.value });

    // console.log(this.state);
  }

  render() {
    console.log(this.state);
    return (
      <div className='card'>
        <div className='card-tabs'>
          <ul class='tabs tabs-fixed-width'>
            {this.state.tabName.map((tab) => {
              return (
                <li className='tab'>
                  {this.state.value === tab.name ? (
                    <a href='#!' class='orange' value={tab.name}>
                      {tab.name}
                    </a>
                  ) : (
                    <a
                      href='#!'
                      class=' blue hide-on-small-only'
                      value={tab.name}
                    >
                      {tab.name}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className='card-content grey lighten-4'>
          {this.state.value === 'About You' && (
            <AboutYouForm props={this.state} />
          )}
          {this.state.value === 'Subjects' && (
            <div>
              <h5>Subjects</h5>
              <h6>
                Select 2 Subjects you're most qualified to teach. You can edit
                these or add more subjects later.
              </h6>
              <div className='row'>
                <label className='browser-default col s12 m6'>Subject</label>
                <label className='browser-default col s12 m6 offset-s6 hide-on-small-only'>
                  Courses
                </label>
                <select
                  className='browser-default col s12 m6'
                  subjects={this.state.subjects}
                  onChange={(event) => this.addSubject(event.target.value)}
                >
                  <option value='' disabled selected>
                    Choose your option
                  </option>
                  <option value='1'>Option 1</option>
                  <option value='2'>Option 2</option>
                  <option value='3'>Option 3</option>
                </select>
                <label className='browser-default col s6 hide-on-med-and-up'>
                  Courses
                </label>
                <div className='col s12 m6 mt-3'>
                  <ReactChipInput
                    classes=' col s3 ml-3 mb-1'
                    chips={this.state.chips}
                    onSubmit={(value) => this.addChip(value)}
                    onRemove={(index) => this.removeChip(index)}
                  />
                </div>
                <label className='browser-default col s6'>Subject</label>
                <select
                  className='browser-default'
                  subjects={this.state.subjects}
                  onChange={(event) => this.addSubject(event.target.value)}
                >
                  <option value='' disabled selected>
                    Choose your option
                  </option>
                  <option value='SNACKCKCKKCKCKC'>Option 1</option>
                  <option value='2'>Option 2</option>
                  <option value='3'>Option 3</option>
                </select>
              </div>
            </div>
          )}
          {this.state.value === 'Subject Details' && (
            <div id='test6'>Subject Details</div>
          )}
        </div>
        <BackButton value={this.state.value} />
        <ContinueButton value={this.state} />
      </div>
    );
  }
}

export default Card;
