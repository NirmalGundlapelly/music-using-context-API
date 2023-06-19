import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

export default class Feed extends Component {
  render() {
    return (
      <View style={styles.homeContainer}>
        <Text style={{color:'white', fontWeight:'600', fontSize:30}}>Feed</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    homeContainer:{
        backgroundColor:'#100724',
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
})