/**
 * Flavio Simonettis Aufbaushakes
 * author: Benjamin Jeschke
 * date: 02.07.2017
 * class: Screen of Main menu
 */

import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import strings from '../strings/default'

 class MainScreen extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.logo}
            source={require('../img/logo.png')}
          />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button}
            onPress={() => navigate('List', { name: 'softgainer' })}>
            <Text style={styles.buttonText}>{strings.main.softgainer}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button} onPress={() => navigate('List', { name: 'hardgainer' })}>
            <Text style={styles.buttonText}>{strings.main.hardgainer}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button} onPress={() => navigate('List', { name: 'vitaminshakes' })}>
            <Text style={styles.buttonText}>{strings.main.vitaminshakes}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
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
