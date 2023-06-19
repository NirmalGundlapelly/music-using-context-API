
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../blocks/Splash';
import MainApp from '../blocks/MainApp';
import MusicContextProvider from '../../context/MusicContextProvider';


const Stack = createNativeStackNavigator();

export default class StackNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <MusicContextProvider>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="MainApp" component={MainApp} />
        </Stack.Navigator>
        </MusicContextProvider>
      </NavigationContainer>
    );
  }
}
