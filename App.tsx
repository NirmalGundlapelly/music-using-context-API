import {Text, View} from 'react-native';
import React, {Component} from 'react';
import MainApp from './src/blocks/MainApp';
import StackNavigation from './src/navigation/StackNavigation';

export default class App extends Component {
  render() {
    return <StackNavigation />;
  }
}
