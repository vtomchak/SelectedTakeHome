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
      firstSubject: '',
      secondSubject: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.addSubjectOne = this.addSubjectOne.bind(this);
    this.addSubjectTwo = this.addSubjectTwo.bind(this);
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
  addSubjectOne = (value) => {
    const firstSubject = value;
    firstSubject !== this.state.secondSubject
      ? this.setState({ firstSubject })
      : this.setState({ firstSubject: '' });
  };
  addSubjectTwo = (value) => {
    const secondSubject = value;
    secondSubject !== this.state.firstSubject
      ? this.setState({ secondSubject })
      : this.setState({ secondSubject: '' });
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
      <div style={{ padding: '5% 0px 5% 0px' }}>
        <div className='card'>
          <div className='card-tabs'>
            <ul
              class='tabs tabs-fixed-width teal darken-4 z-depth-1'
              style={{ height: '64px' }}
            >
              {this.state.tabName.map((tab) => {
                return (
                  <li className='tab'>
                    {this.state.value === tab.name ? (
                      <a
                        href='#!'
                        className='tab teal darken-4 col s12 m6'
                        value={tab.name}
                        style={{ padding: '2% 0px 5% 0px' }}
                      >
                        <div className='row'>
                          <h6
                            className='col s6 offset-s2 white-text text-darken-2'
                            style={{
                              fontWeight: 'bold',
                              padding: '2% 0px 2% 0px',
                            }}
                          >
                            <span
                              className='new badge teal-text text-darken-4 white left col s3'
                              data-badge-caption=''
                              style={{
                                fontWeight: 'bold',
                                padding: '2% 2% 8% 6%',
                              }}
                            >
                              {tab.id}
                            </span>
                            {tab.name}
                          </h6>
                        </div>
                      </a>
                    ) : (
                      <a
                        href='#!'
                        class=' tab  offset-s2 white hide-on-small-and-down col m6'
                        value={tab.name}
                        style={{
                          height: '64px',
                          fontWeight: 'bold',
                          padding: '5% 0px 2% 0px',
                        }}
                      >
                        <div className='row blue-grey-text text-lighten-2'>
                          <h6 className='col s6 offset-s2 hide-on-small-only '>
                            <span
                              className='new badge white blue-grey-text text-lighten-2 left col s3 z-depth-1'
                              data-badge-caption=''
                              style={{
                                fontWeight: 'bold',
                                padding: '2% 2% 8% 6%',
                              }}
                            >
                              {tab.id}
                            </span>
                            {tab.name}
                          </h6>
                        </div>
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='card-content white z-depth-1'>
            {this.state.value === 'About You' && (
              <AboutYouForm props={this.state} />
            )}
            {this.state.value === 'Subjects' && (
              <div className='blue-grey-text text-darken-4'>
                <h6
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    padding: '2% 0px 2% 0px',
                  }}
                >
                  Subjects
                </h6>
                <text
                  className='flow-text blue-grey-text text-lighten-2'
                  style={{ fontSize: '1rem' }}
                >
                  Select 2 Subjects you're most qualified to teach. You can edit
                  these or add more subjects later.
                </text>
                <div className='row  ' style={{ padding: '2% 0px 5% 0px' }}>
                  <label
                    className='blue-grey-text text-darken-4 col s12 m6 blue-grey-text text-darken-4'
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                    }}
                  >
                    Subject
                  </label>
                  <label
                    className=' blue-grey-text text-darken-4 col s12 m6 offset-s6 hide-on-small-only'
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                    }}
                  >
                    Courses
                  </label>

                  <select
                    className='browser-default col s12 m6'
                    onChange={(event) => this.addSubjectOne(event.target.value)}
                  >
                    <option value='' disabled selected>
                      Choose your subject
                    </option>
                    <option value='Foreign Language'>Foreign Language</option>
                    <option value='Math'>Math</option>
                    <option value='Science'>Science</option>
                  </select>
                  <label
                    className=' blue-grey-text text-darken-4 col s6 hide-on-med-and-up'
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                      padding: '2% 0px 5% 0px',
                    }}
                  >
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
                  <label
                    className='blue-grey-text text-darken-4 col s12 blue-grey-text text-darken-4'
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                    }}
                  >
                    Subject
                  </label>
                  <select
                    className='browser-default col s12 m6 left'
                    onChange={(event) => this.addSubjectTwo(event.target.value)}
                  >
                    <option value='' disabled selected>
                      Choose your subject
                    </option>
                    <option value='Foreign Language'>Foreign Language</option>
                    <option value='Math'>Math</option>
                    <option value='Science'>Science</option>
                  </select>
                </div>
                {this.state.firstSubject.length &&
                this.state.secondSubject.length ? (
                  <div></div>
                ) : (
                  <label className='browser-default col right s6'>
                    pick two unique subjects to continue
                  </label>
                )}
              </div>
            )}
            {this.state.value === 'Subject Details' && (
              <div id='test6'>Subject Details</div>
            )}
          </div>
        </div>
        <div style={{ padding: '3% 0px 5% 0px' }}>
          <BackButton value={this.state.value} />
          <ContinueButton value={this.state} />
        </div>
      </div>
    );
  }
}

export default Card;
