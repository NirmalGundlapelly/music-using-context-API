import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { MusicContext } from '../../../context/MusicContext';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Playlist extends Component {
  static contextType = MusicContext;

  renderCarts = (product: any) => {
    const item = {...product, isFavorite:false}
    const image = item.artwork;
    const {playlist, handleDelete} = this.context
    return (
        <View
          style={{
            marginRight: 10,
            marginTop: 10,
            marginHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={{uri: image}}
              style={{height: 50, width: 50, borderRadius: 2, }}
            />
            <View style={{marginLeft: 20}}>
              <Text style={{color: 'white', textAlign: 'left'}}>
                {item.title}
              </Text>
              <Text style={{color: 'white', textAlign: 'left'}}>
                {item.artist}
              </Text>
            </View>
          </View>
          <View style={{flexDirection:'row', alignItems:'center'}}>

         
          <MaterialCommunityIcons
          onPress={() => handleDelete(product)}
            marginRight={10}
            name="delete"
            size={30}
            color={'#844DFB'}
          />
          <FontAwesome
            marginRight={10}
            name="arrow-circle-o-down"
            size={30}
            color={'#844DFB'}
          />
           </View>
        </View>
     
    );
  };

  render() {
    const {playlist}:any = this.context
    
    return (
      <View style={styles.homeContainer}>
        <Text style={{color:'white', fontWeight:'600', fontSize:30}}>Playlist</Text>
        <FlatList
              showsVerticalScrollIndicator={false}
              data={playlist}
              renderItem={({item}: any) => this.renderCarts(item)}
              keyExtractor={(item: any) => item.id}
            />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    homeContainer:{
        backgroundColor:'#100724',
        flex:1,
        padding:10
    }
})