import {View} from 'react-native';
import React, {Component} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';




import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



import Home from '../blocks/bottomTab/Home';
import Search from '../blocks/bottomTab/Search';
import Feed from '../blocks/bottomTab/Feed';
import Playlist from '../blocks/bottomTab/Playlist';

const Tab = createBottomTabNavigator();

export default class BottomTabNavigation extends Component {

  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            paddingVertical: 10,
            height: 70,
            backgroundColor:'#100724'
          },
          tabBarActiveTintColor: '#844DFB',
        }}>
        <Tab.Screen
          options={{
            tabBarLabelStyle: {
              fontWeight: '800',
              fontSize: 13,
              paddingBottom: 10,
            },
            tabBarIcon: ({color}) => (
              <Entypo name="home" size={25} color={color} />
            ),
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarLabelStyle: {
              fontWeight: '800',
              fontSize: 13,
              paddingBottom: 10,
            },
            tabBarIcon: ({color}) => (
              <FontAwesome5 name="search" size={25} color={color} />
            ),
          }}
          name="Search"
          component={Search}
        />
        <Tab.Screen
          options={{
            tabBarLabelStyle: {
              fontWeight: '800',
              fontSize: 13,
              paddingBottom: 10,
            },
            tabBarIcon: ({color}) => (
              <MaterialIcons name="group" size={25} color={color} />
            ),
          }}
          name="Feed"
          component={Feed}
        />
        <Tab.Screen
          options={{
            tabBarLabelStyle: {
              fontWeight: '800',
              fontSize: 13,
              paddingBottom: 10,
            },
            tabBarIcon: ({color}) => (
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons name="library-music" size={32} color={color} />
              </View>
            ),
          }}
          name="Playlist"
          component={Playlist}
        />
      </Tab.Navigator>
    );
  }
}
