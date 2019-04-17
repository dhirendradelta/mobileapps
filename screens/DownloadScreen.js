import React, { Component } from 'react';
import {  FlatList, ImageBackground, StyleSheet, Platform, View, Text, YellowBox } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import DownloadCustomRow from './DownloadCustomRow'
import Loader from './Loader'
import apiManager from './config/apiManager.js';
import {imgurl} from './config/urlManager.js';
import womens_image from './images/womens_image.png'


class DownloadScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {videos: [], loading: true}
  }
  _keyExtractor = (item, index) => item.downloadid+"";
  componentDidMount(){
    const that = this;
    apiManager.getVideos(1, function(response){
      that.setState({loading: false});
      const {status, videos} = response.data;
      if(status){
        that.setState({videos: videos});
      }else{

      }
    })
  }  
  render(){
      var itemList = this.state.videos;
      return(
         <View style = { styles.MainContainer }>
                 <ImageBackground resizeMode="contain" source={womens_image} style={styles.imgcontainer}>

          <FlatList
              keyExtractor={this._keyExtractor}
              data={itemList}
              renderItem={({ item }) => <DownloadCustomRow
                  id={item.downloadid}
                  size={"40mb"}
                  title={item.title}
                  description={item.description}
                  image_url={imgurl+item.download_icon}
              />}
          />
          </ImageBackground>
       </View>
      );
  }
}

class DownloadScreen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {videos: [], loading: true}
  }  
  _keyExtractor = (item, index) => item.downloadid+"";
  componentDidMount(){
    const that = this;
    apiManager.getVideos(2, function(response){
      that.setState({loading: false});
      const {status, videos} = response.data;
      if(status){
        that.setState({videos: videos});
      }else{

      }
    })
  }  
  render(){
      var itemList = this.state.videos;
      return(
         <View style = { styles.MainContainer }>
         <ImageBackground resizeMode="contain" source={womens_image} style={styles.imgcontainer}>
          <FlatList
              keyExtractor={this._keyExtractor}
              data={itemList}
              renderItem={({ item }) => <DownloadCustomRow
                  id={item.downloadid}
                  size={"40mb"}
                  title={item.title}
                  description={item.description}
                  image_url={imgurl+item.download_icon}
              />}
          />
        </ImageBackground>
       </View>
      );
    }
}

const styles = StyleSheet.create({ 
  MainContainer :{
    flex:1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    backgroundColor: "#a6efff"
  },
  imgcontainer: {
    flex: 1,
    justifyContent: 'center',
    width: null,
    height: null,
  }
});

const TabNavigator = createMaterialTopTabNavigator({
  Download1: {
    screen: DownloadScreen,
    navigationOptions: ({navigation}) => ({
      title: "CRM Training Videos",
    })     
  },
  Download2: {
    screen: DownloadScreen2,
    navigationOptions: ({navigation}) => ({
      title: "Paused Training Videos",
    })     
  } 
},
{
    tabBarPosition: 'top',
    swipeEnabled: false,
    animationEnabled: true,
    gesturesEnabled: false,
    tabBarOptions: {
      upperCaseLabel: false,
      activeTintColor: '#000',
      inactiveTintColor: '#565555',
      style: {
        backgroundColor: '#ffffff',
      },
      labelStyle: {
        textAlign: 'center',
        fontSize: 12,
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 0,
      },
    },
  }
);

export default createAppContainer(TabNavigator);