import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View, TouchableOpacity
} from 'react-native';

import { createStackNavigator, createAppContainer } from  'react-navigation';
import IOSIcon from "react-native-vector-icons/Ionicons";
import MainActivity from "./MainActivity";
import AnnouncementScreen from "./AnnouncementScreen";
import DownloadScreen from "./DownloadScreen";
import HRComplaintScreen from "./HRComplaintScreen";
import HRServiceScreen from "./HRServiceScreen";
import NewsScreen from "./NewsScreen";
import PolicyCategory from "./PolicyCategory";
import PoliciesScreen from "./PoliciesScreen";
import AnnouncementDetail from './AnnouncementDetail';
import NewsDetail from './NewsDetail';
import PolicyDetail from './PolicyDetail';
import womens_image from './images/womens_image.png'

class HamburgerIcon extends Component {
  toggleDrawer=()=>{
    this.props.navigationProps.toggleDrawer();
  }
 
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >
          <IOSIcon style= {{marginLeft: 10}} name="ios-menu" size={40} color="#000" />
        </TouchableOpacity>
      </View>
    );
  }
}

const stackNav = createStackNavigator({
  Main : {
    screen: MainActivity,
    navigationOptions: ({navigation}) => ({
      title: "ESS",
      headerLeft:(<HamburgerIcon navigationProps={ navigation }/>),
      /*headerStyle: { paddingRight: 0, paddingLeft: 15 }*/
    })
  },
  AnnouncementScreen: {
    screen: AnnouncementScreen,
    navigationOptions: ({navigation}) => ({
      title: "Announcement",
    })     
  },
  AnnouncementDetail: {
    screen: AnnouncementDetail,
    navigationOptions: ({navigation}) => ({
      title: "Announcement Detail",
    })     
  },
  DownloadScreen: {
    screen: DownloadScreen,
    navigationOptions: ({navigation}) => ({
      title: "Download",
    })     
  },
  HRServiceScreen: {
    screen: HRServiceScreen,
    navigationOptions: ({navigation}) => ({
      title: "HR Service",
    })     
  },
  HRComplaintScreen: {
    screen: HRComplaintScreen,
    navigationOptions: ({navigation}) => ({
      title: "HR Complain",
    })     
  },
  PolicyCategory: {
    screen: PolicyCategory,
    navigationOptions: ({navigation}) => ({
      title: "Policy Category",
    })     
  },
  PoliciesScreen: {
    screen: PoliciesScreen,
    navigationOptions: ({navigation}) => ({
      title: "Policies",
    })     
  },
  PolicyDetail: {
    screen: PolicyDetail,
    navigationOptions: ({navigation}) => ({
      title: "Policy Detail",
    })     
  },
  NewsScreen: {
    screen: NewsScreen,
    navigationOptions: ({navigation}) => ({
      title: "News/IT",
    })     
  },
  NewsDetail: {
    screen: NewsDetail,
    navigationOptions: ({navigation}) => ({
      title: "News Detail",
    })     
  }
},{
  defaultNavigationOptions: {
    headerTintColor: "#000",
    headerStyle: {
      backgroundColor: '#58d6f0',
    },
    headerTitleStyle: {
      fontWeight: 'normal'
    }
  }
});

export default stackNav;