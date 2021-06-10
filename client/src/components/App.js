import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Card from './Card';
import BackButton from './BackButton';
import ContinueButton from './ContinueButton';
import Button from './Button';
import AboutYouForm from './AboutYouForm';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className='grey' style={{ height: '100vh' }}>
        <BrowserRouter>
          <div>
            <Header />
            <div className='container'>
              <Route exact path='/' component={Card} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
