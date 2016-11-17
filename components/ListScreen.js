/**
 * Flavio Simonettis Aufbaushakes
 * author: Benjamin Jeschke
 * date: 15.11.2016
 * class: Screen to list the shakes
 */

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ListView,
  Image,
} from 'react-native';

import strings from '../strings/default'
import categories from './categories'

 class ListScreen extends Component {
   constructor(props){
     super(props)
     var dataSource = new ListView.DataSource({rowHasChanged:(r1,r2) => r1.guid != r2.guid});
     this.category = '';

    categories.forEach((category) => {
      if (category.name == this.props.name)
      {
        this.state = {dataSource:dataSource.cloneWithRows(category.component)};
        this.category = category.name;
      }
    });
   }

   renderRow(rowData){

     return (
      <View style={styles.buttonView} >
        <TouchableHighlight style={styles.button} onPress={() => this._navigate(this.category,rowData.name)}>
            <View>
              <Text style={styles.buttonText} numberOfLines={1}>{rowData.name}</Text>
            </View>
        </TouchableHighlight>
      </View>
     );
   }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../img/logo.png')} />
      </View>
        <View style={styles.titleView}>
          <Text id={'listTitle'} style={styles.title}>
            {strings.list[this.props.name]}
          </Text>
        </View>
        <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)} >
        </ListView>
      </View>
    );
  }

  _navigate(category,item){
    this.props.navigator.push({
      name: 'DetailScreen',
      passProps: {
        category: category,
        item:item
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
    marginBottom:10,
  },
  titleView:{
    marginBottom:10,
  },
  title:{
    color:'#555555',
    fontSize:18,
    marginLeft:20,
    fontWeight:'bold'
  },
  buttonView:{
      alignItems: 'flex-end'
  },
  button:{
    paddingTop:8,
    paddingBottom:8,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor:'#B2BB1C',
    width:240,
    marginBottom:10
  },
  buttonText: {
    color:'#ffffff',
    fontSize: 15,
  }
});

export default ListScreen
