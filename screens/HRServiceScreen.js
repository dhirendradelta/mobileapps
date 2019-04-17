import React, { Component } from 'react';
import { ImageBackground, TextInput,Picker, Button, ScrollView, TouchableHighlight, Image, StyleSheet, Platform, View, Text, YellowBox } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import editprofile from './images/editprofile.png'
import womens_image from './images/womens_image.png'
import storageManager from './config/storageManager.js';
import {userKey} from './config/keyManager.js';

class HRServiceScreen1 extends Component {
  constructor(props) {
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
    });
  }
  render(){
      const {user} = this.state;
      if(user != null){
        const {display_name, gender, EMPLOYEE_NUMBER, JOB_NAME, STORE_NAME, LOCATION, TYPE, country,   Passport_EXPIRY_DATE, Iqama_Saudi_ID_EXPIRY_DATE, LAST_UPDATE_DATE, NATIONAL_IDENTIFIER, REGION, Line_Manager} = this.state.user;
        return(
          <View style = { styles.MainContainer }>
                           <ImageBackground resizeMode="contain" source={womens_image} style={styles.imgcontainer}>

            <ScrollView>
            <View style = {styles.rowCnt}>
              <Text style = {styles.txtLabel}>Display Name</Text>
              <Text style = {styles.txtValue}>{display_name}</Text>
            </View>
            <View style = {styles.rowCnt}>
              <Text style = {styles.txtLabel}>Gender</Text>
              <Text style = {styles.txtValue}>{gender}</Text>
            </View>
            <View style = {styles.rowCnt}>
              <Text style = {styles.txtLabel}>Employee Num</Text>
              <Text style = {styles.txtValue}>{EMPLOYEE_NUMBER}</Text>
            </View>
            <View style = {styles.rowCnt}>
              <Text style = {styles.txtLabel}>Job Name</Text>
              <Text style = {styles.txtValue}>{JOB_NAME}</Text>
            </View>
            <View style = {styles.rowCnt}>
              <Text style = {styles.txtLabel}>Store Name</Text>
              <Text style = {styles.txtValue}>{STORE_NAME}</Text>
            </View>
            <View style = {styles.rowCnt}>
              <Text style = {styles.txtLabel}>Location</Text>
              <Text style = {styles.txtValue}>{LOCATION}</Text>
            </View>
            <View style = {styles.rowCnt}>
              <Text style = {styles.txtLabel}>Type</Text>
              <Text style = {styles.txtValue}>{TYPE}</Text>
            </View>
            <View style = {styles.rowCnt}>
              <Text style = {styles.txtLabel}>Nationality</Text>
              <Text style = {styles.txtValue}>{country}</Text>
            </View>


            <View style = {styles.rowCnt}>
              <Text style = {styles.txtLabel}>Passport Expiry date</Text>
              <Text style = {styles.txtValue}>{Passport_EXPIRY_DATE}</Text>
            </View>
            <View style = {styles.rowCnt}>
              <Text style = {styles.txtLabel}>Iqama Saudi ID Expiry date</Text>
              <Text style = {styles.txtValue}>{Iqama_Saudi_ID_EXPIRY_DATE}</Text>
            </View>
            <View style = {styles.rowCnt}>
              <Text style = {styles.txtLabel}>Last update date</Text>
              <Text style = {styles.txtValue}>{LAST_UPDATE_DATE}</Text>
            </View>
            <View style = {styles.rowCnt}>
              <Text style = {styles.txtLabel}>National Identifier</Text>
              <Text style = {styles.txtValue}>{NATIONAL_IDENTIFIER}</Text>
            </View>
            <View style = {styles.rowCnt}>
              <Text style = {styles.txtLabel}>Region</Text>
              <Text style = {styles.txtValue}>{REGION}</Text>
            </View>
            <View style = {styles.rowCnt}>
              <Text style = {styles.txtLabel}>Line Manager</Text>
              <Text style = {styles.txtValue}>{Line_Manager}</Text>
            </View>
            </ScrollView>

           </ImageBackground>
          </View>
        )
      }else{
        return(
         <View style = { styles.MainContainer }>
                          <ImageBackground resizeMode="contain" source={womens_image} style={styles.imgcontainer}>

           </ImageBackground></View>
        )
      }
      
  }
}

class HRServiceScreen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sel_employee: '',
      txt_frm_date: '',
      txt_to_date: ''
    }
  }
  render(){
      const {txt_frm_date, txt_to_date , sel_employee} = this.state;
      return(
         <View style = { styles.MainContainer2 }>
                          <ImageBackground resizeMode="contain" source={womens_image} style={styles.imgcontainer}>

            <View style={styles.txtrow}>
              <Text style={styles.label}>Select Leave Type</Text>
              <Picker
                selectedValue={this.state.sel_employee}
                style={styles.sel_form}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({sel_employee: itemValue})
                }>
                <Picker.Item label="Earn Leave" value="java" />
                <Picker.Item label="Sick Leave" value="js" />
                <Picker.Item label="Paid Leave" value="js" />
              </Picker>
            </View>
            <View style={styles.txtrow}>
              <Text style={styles.label}>Enter From date </Text>
                <TextInput
                  placeholder="Enter your complaint"
                  onChangeText={(value) => this.setState({txt_frm_date: value})}
                  style={styles.txtBig}
                  editable
                  multiline
                  value={txt_frm_date}
                />
            </View>

            <View style={styles.txtrow}>
              <Text style={styles.label}>Enter To date </Text>
                <TextInput
                  placeholder="Enter your complaint"
                  onChangeText={(value) => this.setState({txt_to_date: value})}
                  style={styles.txtBig}
                  editable
                  multiline
                  value={txt_to_date}
                />
            </View>
            <View style={styles.txtrow2}>
              <Button
                title="Apply"
                color="red"
                style = {{fontSize: 16, width: 140}}
              />
            </View>
           </ImageBackground>
         </View>
      );
  }
}

const styles = StyleSheet.create({ 
  MainContainer2 :{
    flex: 1, 
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    backgroundColor: "#a6efff",
    padding: 20
  },
  imgcontainer: {
    flex: 1,
    justifyContent: 'center',
    width: null,
    height: null,
  },
  MainContainer :{
    flex: 1, 
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    backgroundColor: "#a6efff",
  },
  cntText: {
    height: 50,
    margin: 10, 
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
  },
  txtLabel: {
    flex: 1, 
    alignSelf: 'stretch' ,
    fontSize: 14,
    fontWeight: 'bold',
    width: 160,
  },
  txtValue: {
    fontSize: 14,
    flex: 1, 
    alignSelf: 'stretch' ,
  },
  profileImgContainer: {
    height: 100,
    flex: 1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  profileImg: {
    height: 100,
    width: 100,
    borderRadius: 50,
  }, 
  rowCnt: {
    flex: 1, 
    alignSelf: 'stretch', 
    flexDirection: 'row',
    padding: 20,
  },

  txtrow: {
    marginTop: 10,
  },
  txtrow2: {
    marginTop: 20,
  },
  heading: {
    marginTop: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  txtBig: {
    marginTop: 5,
    textAlignVertical: 'top',
    backgroundColor: "#fff",
    borderRadius: 6,
  },
  sel_form: {
    marginTop: 5,
    height: 40,
    backgroundColor: "#fff",
  },
});

const TabNavigator = createMaterialTopTabNavigator({
  HRServiceScreen1: {
    screen: HRServiceScreen1,
    navigationOptions: ({navigation}) => ({
      title: "View Profile",
    })     
  },
  HRServiceScreen2: {
    screen: HRServiceScreen2,
    navigationOptions: ({navigation}) => ({
      title: "Leave Balance",
    })     
  } 
},
{
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
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