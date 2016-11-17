/**
 * Flavio Simonettis Aufbaushakes
 * author: Benjamin Jeschke
 * date: 15.11.2016
 * class: App
 */

import React, {Component} from 'react'
import {
  Navigator,
  Plattform,
} from  'react-native'

import MainScreen from './MainScreen'
import ListScreen from './ListScreen'
import DetailScreen from './DetailScreen'

class App extends Component{
  constructor(props){
    super(props)
  }

  _renderScene(route, navigator) {
    switch(route.name){
      case 'ListScreen':
        return <ListScreen navigator={navigator} {...route.passProps} />
      case 'DetailScreen':
        return <DetailScreen navigator={navigator} {...route.passProps} />
      case 'MainScreen':
      default:
        return <MainScreen navigator={navigator} />
    }
  }
  render() {
    return(
      <Navigator
        style={{ flex:1 }}
        initialRoute={{ name: 'MainScreen' }}
        renderScene={ this._renderScene } />
    )
  }
}

export default App
