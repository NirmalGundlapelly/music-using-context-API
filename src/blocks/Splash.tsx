import {Dimensions, Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

import RadialGradient from 'react-native-radial-gradient';

import splashLogo from '../images/splashLogo.png';

const {height, width} = Dimensions.get('screen');

interface IProps {
  navigation: any;
}

interface IState {}

export default class Splash extends Component<IProps, IState> {
  componentDidMount(): void {
      setTimeout(() => {
          this.props.navigation.navigate('MainApp')
      }, 2000);
  }

  render() {
    return (
      <>
      <StatusBar backgroundColor={"#100724"}/>
      <View style={styles.bgContainer}>
        <View style={styles.splashLogoContainer}>
          <RadialGradient
            style={{width: 200, height: 200}}
            colors={['#7A61B0']}
            stops={[0.2, 0.4, 0.3, 0.75]}
            center={[100, 100]}
            radius={100}>
            {<Image style={styles.splashLogo} source={splashLogo} />}
            <Text style={styles.splashText}>Home of Music</Text>
          </RadialGradient>
        </View>
      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  bgContainer: {
    height: height,
    backgroundColor: '#100724',
  },
  splashLogoContainer: {
    shadowColor: 'white',
    height: height / 1.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashLogo: {
    alignSelf: 'center',
    marginTop: 50,
  },
  splashText:{
    color:'#FFFFFF',
    fontWeight:'600',
    fontSize:20,
    textAlign:'center',
    marginTop:20
  }
});
