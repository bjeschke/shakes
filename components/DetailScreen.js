/**
 * Flavio Simonettis Aufbaushakes
 * author: Benjamin Jeschke
 * date: 15.11.2016
 * class: Screen for detail Information about the shakes.
 */

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';

import strings from '../strings/default'
import categories from './categories'

 class DetailScreen extends Component {
   constructor(props){
     super(props)

     categories.forEach((category) => {
       if (category.name == this.props.category)
       {
         this.component = category.component;
       }
     });

     this.component.forEach((component) => {
       if (component.name == this.props.item)
       {
         this.item = component;
       }
     });
   }

  render() {

    var getBackgroundColor = function(i){
      if(i % 2 == 0)
        return {backgroundColor:'#ffffff'}
      else
       return {backgroundColor:'#cccccc'}
     };

    var recipeTable =[];
      this.item.recipe.forEach(function(recipe, i){
        recipeTable.push(
          <View key={i} style={[styles.tr, getBackgroundColor(i)]}>
            <Text style={styles.td1}>{recipe.name}</Text>
            <Text style={styles.td2}>{recipe.value}</Text>
          </View>);
    });

    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.logo} source={require('../img/logo_small.png')} />
          <View>
            <Text style={styles.category}>{strings.detail[this.props.category]}</Text>
          </View>
        </View>

        <View style={styles.timeView}>
          <Text style={styles.time}>{this.item.time}</Text>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.title}>{this.item.name}</Text>
        </View>
        <View style={styles.recipeTable}>
          <View style={styles.recipeTableHeader} >
            <Text style={styles.recipeTableHeaderText}>Zutaten</Text>
          </View>
          {recipeTable}
        </View>
        <View style={styles.descView}>
          <Text style={styles.desc}>{this.item.desc}</Text>
        </View>
        <View style={styles.nutritionBox}>
          <View style={styles.nutritionLine}>
            <Text style={styles.nutritionName}>{strings.detail.cal}</Text>
            <Text style={styles.nutritionValue}>{this.item.cal}</Text>
          </View>
          <View style={styles.nutritionLine}>
            <Text style={styles.nutritionName}>{strings.detail.protein}</Text>
            <Text style={styles.nutritionValue}>{this.item.protein}</Text>
          </View>
          <View style={styles.nutritionLine}>
            <Text style={styles.nutritionName}>{strings.detail.carb}</Text>
            <Text style={styles.nutritionValue}>{this.item.carb}</Text>
          </View>
          <View style={styles.nutritionLine}>
            <Text style={styles.nutritionName}>{strings.detail.fat}</Text>
            <Text style={styles.nutritionValue}>{this.item.fat}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingLeft:10,
    paddingRight:10,
  },
  imageContainer:{
    marginTop:40,
    flexDirection: 'row',
    flex: 1,
    justifyContent:'space-between',
  },
  category:{
    marginTop:31,
    fontWeight:'bold',
    color:'#555555'
  },
  logo:{
    marginRight:10,
  },
  timeView:{
    backgroundColor:'#B2BB1C',
    padding:5,
    alignItems:'center',
    marginTop:10,
    marginBottom:20
  },
  time:{
    color:'#ffffff',
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    color:'#555555',
  },
  recipeTable:{
    marginBottom:20,
    marginTop:10,
  },
  recipeTableHeader:{
    backgroundColor:'#555555',
  },
  recipeTableHeaderText:{
    color:'#ffffff',
    fontWeight: 'bold',
    paddingLeft:10,
    paddingTop:3,
    paddingBottom:3,
    fontSize:15,
  },
  tr:{
    flexDirection: 'row',
    flex: 1,
    justifyContent:'space-between'
  },
  td1:{
    paddingLeft:10,
    marginBottom:3,
    paddingTop:5,
    paddingBottom:3,
  },
  td2:{
    paddingRight:10,
    marginBottom:3,
    paddingTop:5,
    paddingBottom:3,
  },
  descView:{
    marginBottom:20
  },
  desc:{
    lineHeight:20,
    fontSize:15
  },
  nutritionBox:{
    backgroundColor:'#B2BB1C',
    padding:10,
  },
  nutritionLine:{
    flexDirection: 'row',
    flex: 1,
    justifyContent:'space-between'
  },
  nutritionName:{
    color:'#ffffff',
    marginBottom:6
  },
  nutritionValue:{
    color:'#ffffff',
    marginBottom:6
  }
});

export default DetailScreen
