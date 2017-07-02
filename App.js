/**
 * Flavio Simonettis Aufbaushakes
 * author: Benjamin Jeschke
 * date: 02.07.2017
 * class: App.js
 */

import React from 'react';
import { StackNavigator } from 'react-navigation';
import MainScreen from './components/MainScreen'
import ListScreen from './components/ListScreen'
import DetailScreen from './components/DetailScreen'

const App = StackNavigator({
  Main: { screen: MainScreen },
  List: { screen: ListScreen },
  Detail: { screen: DetailScreen }
});

export default App;
