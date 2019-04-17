import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, StyleSheet,TouchableHighlight, Image} from 'react-native';
import {StackNavigator } from 'react-navigation';
import {imgurl} from './config/urlManager.js';
import storageManager from './config/storageManager.js';
import {userKey} from './config/keyManager.js';
import announcement from './images/announcement.png'
import download from './images/download.png'
import hr_complaint from './images/hr_complaint.png'
import hr_service from './images/hr_service.png'
import policies from './images/policies.png'
import usericon from './images/user-icon.png'
import news from './images/news.png'

class SideMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null
    }
  }
  componentDidMount(){
    const that = this;
    storageManager.getData(userKey)
      .then((value) => {
        console.log(value);
        that.setState({user: JSON.parse(value)});
        console.log(that.state.user);
    });
  }
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    const { user } = this.state
    //var imgur = 'https://www.t-nation.com/system/publishing/articles/10005529/original/6-Reasons-You-Should-Never-Open-a-Gym.png';
    //if(user != null && user.profile_image.length > 0){
    //  imgur = `${imgurl}user.profile_image`;
    //}    
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <TouchableHighlight style={[styles.profileImgContainer]}  >
              <Image source={usericon} style={styles.profileImg} />
            </TouchableHighlight>
          </View>
          <View style={styles.profile_txt_cnt}>
            <Text style={styles.txtBold}>
              {user != null? user.display_name: '' }
            </Text>
            <Text style={styles.txtNormal}>
              {user != null? user.designation: '' }
            </Text>
            <Text style={styles.txtNormal}>
              {user != null? user.useremail: '' }
            </Text>
          </View>
          <View>
            <TouchableHighlight style={styles.navSectionStyle} underlayColor='white' onPress={this.navigateToScreen('AnnouncementScreen')}>
              <View style={{flex: 1, flexDirection:'row'}}>
                <Image source={announcement} style={styles.li_img} />
                <Text style={styles.navItemStyle} >
                  Announcement
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.navSectionStyle} underlayColor='white' onPress={this.navigateToScreen('NewsScreen')}>
              <View style={{flex: 1, flexDirection:'row'}}>
                <Image source={news} style={styles.li_img} />
                <Text style={styles.navItemStyle} >
                  News/IT
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.navSectionStyle} underlayColor='white' onPress={this.navigateToScreen('PolicyCategory')}>
              <View style={{flex: 1, flexDirection:'row'}}>
                <Image source={policies} style={styles.li_img} />
                <Text style={styles.navItemStyle} >
                  Policies
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.navSectionStyle} underlayColor='white' onPress={this.navigateToScreen('HRServiceScreen')}>
              <View style={{flex: 1, flexDirection:'row'}}>
                <Image source={hr_service} style={styles.li_img} />
                <Text style={styles.navItemStyle} >
                  HR Service
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.navSectionStyle} underlayColor='white' onPress={this.navigateToScreen('HRComplaintScreen')}>
              <View style={{flex: 1, flexDirection:'row'}}>
                <Image source={hr_complaint} style={styles.li_img} />
                <Text style={styles.navItemStyle} >
                  HR Complaint
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.navSectionStyle} underlayColor='white' onPress={this.navigateToScreen('DownloadScreen')}>
              <View style={{flex: 1, flexDirection:'row'}}>
                <Image source={download} style={styles.li_img} />
                <Text style={styles.navItemStyle} >
                  Download
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};


export default SideMenu;