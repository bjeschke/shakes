import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Plattform,
} from 'react-native'

const NavBarRouteMapper = {
  LeftButton: (route,navigator,index,navState) => {
    if(index === 0) return null

    return (
      <TouchableOpacity onPress={() => {navigator.pop()}}>
        <Text style={[styles.navText, styles.backText]}>n</Text>
      </TouchableOpacity>
    )
  },
  RightButton:(route,navigator,index,navState) => {},
  Title: (route,navigator,index,navState) => {
    return(
      <Text style={styles.navText}>
        {(route.title ? route.title : route.name).toUpperCase()}
        </Text>
      )
  },
}

const styles = StyleSheet.create({
  navText:{
    color:'#4b70a7',
    letterSpacing:2,
    fontSize:16,
    fontWeight: '500',
    marginVertical: 10,
  },
  backText: {
    fontSize:36,
    marginTop: -5,
    marginLeft:10,
  },
})


export default NavBarRouteMapper
