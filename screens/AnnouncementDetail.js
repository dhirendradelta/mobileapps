import React, { Component } from 'react';
import { Dimensions , ImageBackground, Image, StyleSheet, Platform, View, Text, YellowBox } from 'react-native';
import {imgurl} from './config/urlManager.js';
import womens_image from './images/womens_image.png'

const win = Dimensions.get('window');

export default class AnnouncementDetail extends Component {
  constructor(props) {
    super(props);
    const {state} = props.navigation;
    this.state = {
      postData: state.params.postData
    }
  }
  render(){
     const {title, image_url, description} = this.state.postData;
      return(
         <View style = { styles.MainContainer }>
          <ImageBackground resizeMode="contain" source={womens_image} style={styles.imgcontainer}>
            <Text style={styles.title}>{title}</Text>
            <Image style={styles.cntimg} source={{uri: image_url}} />
            <Text style={styles.desc}>{description}</Text>
          </ImageBackground>
         </View>
      );
  }
}

const styles = StyleSheet.create({ 
  MainContainer :{
    flex:1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    backgroundColor: "#a6efff",
    alignItems: 'center'
  },
  imgcontainer: {
    flex: 1,
    justifyContent: 'center',
    width: null,
    height: null,
  },
  title: {
    marginTop: 5,
    fontWeight: "bold", 
    fontSize: 18,
    color: '#000',
  },
  desc: {
     marginTop: 10,
     fontSize: 14,
     color: '#000',
  },
  cntimg: {
    margin: 10,
    width: 300,
    height: 200,
  }
});