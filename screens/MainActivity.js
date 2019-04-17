import React, { Component } from 'react';
import { Image, StyleSheet, Platform, View, Text, YellowBox, StatusBar } from 'react-native';
import womens_image from './images/womens_image.png'

export default class MainActivity extends Component {
  constructor(props) {
    super(props);
  }
  render(){
      return(
         <View style = { styles.MainContainer }>
            <StatusBar backgroundColor="#048646" barStyle="light-content" />
            <Image source={womens_image} style={{ width: 240 }} resizeMode="contain"  />
         </View>
      );
  }
}

const styles = StyleSheet.create({ 
  MainContainer :{
    flex:1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#a6efff"
  }
});