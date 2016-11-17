/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';

import App from './components/App';

 class shakes extends Component {
  render() {
    return (
      <App />
    )
  }
}

AppRegistry.registerComponent('shakes', () => shakes);
