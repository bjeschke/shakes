/**
 * Flavio Simonettis Aufbaushakes
 * author: Benjamin Jeschke
 * date: 15.11.2016
 * class: Screen of Main menu
 */

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import strings from '../strings/default'

 class MainScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.logo}
            source={require('../img/logo.png')}
          />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button}  onPress={() => this._navigate('softgainer')}>
            <Text style={styles.buttonText}>{strings.main.softgainer}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button} onPress={() => this._navigate('hardgainer')}>
            <Text style={styles.buttonText}>{strings.main.hardgainer}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button} onPress={() => this._navigate('vitaminshakes')}>
            <Text style={styles.buttonText}>{strings.main.vitaminshakes}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _navigate(property){
    this.props.navigator.push({
      name: 'ListScreen',
      passProps: {
        name: property
      }
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  imageContainer:{
    alignItems:'center',
    marginTop:40,
    marginBottom:60,
  },
  buttonView:{
      alignItems: 'flex-end'
  },
  button:{
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:20,
    paddingRight:20,
    backgroundColor:'#B2BB1C',
    width:200,
    marginBottom:20
  },
  buttonText: {
    color:'#ffffff',
    fontSize: 17,
  }
});

export default MainScreen
