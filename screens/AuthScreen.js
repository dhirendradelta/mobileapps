import React, { Component } from 'react';
import {NetInfo , Image, StyleSheet, Platform, View, Text, YellowBox } from 'react-native';
import storageManager from './config/storageManager.js';
import {loginStatusKey} from './config/keyManager.js';
import womens_image from './images/womens_image.png'

export default class AuthScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true, isConnected: true};
  }

  componentDidMount(){
    var that = this;
    storageManager.removeAll();
    storageManager.getData(loginStatusKey).then((value) => {
      that.setState({ 'isLoading': false });
      setTimeout(function(){
        if(value == 'login'){
          that.props.navigation.navigate('stackNav');
        }else{
          that.props.navigation.navigate('LoginScreen');
        }
      }, 1000);
    });
    
     NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  };

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = isConnected => {
    if (isConnected) {
      this.setState({ isConnected });
    } else {
      this.setState({ isConnected });
    }
  }
  render(){
      const {isConnected} = this.state;
      return(
          <View style = { styles.MainContainer }>
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