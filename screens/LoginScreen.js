import React, { Component } from 'react';
import { Alert, ImageBackground , CheckBox, Redirect, StyleSheet, Platform, Button, TextInput,View, Text, YellowBox } from 'react-native';
import apiManager from './config/apiManager.js';
import axios from 'axios';
import storageManager from './config/storageManager.js';
import {loginStatusKey,tokenKey,userKey} from './config/keyManager.js';
import womens_image from './images/womens_image.png'
import Loader from './Loader'

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textlogin: '',
      textpwd: '',
      checksignin: false,
      loading: false
    }
  }
  submitLogin = async ()=> {
    const that = this;
    //that.setState({loading: true});
    const {textlogin, textpwd} = this.state;
    apiManager.login(textlogin, textpwd, function(response){
      that.setState({loading: false});
      const {status, token, user, msg} = response.data;
      if(status){
        storageManager.setData(loginStatusKey, 'login');
        storageManager.setData(tokenKey, token);
        storageManager.setJsonData(userKey, user);
        that.props.navigation.navigate('stackNav');
      }else{
        Alert.alert(msg);
      }
    }, function(res){
      Alert.alert('Error');
    });
    //fetch("http://13.232.38.222/api/user/login", {
      /*fetch("http://13.232.38.222/test", {
          method: 'GET',
       }).then((response) => { 
          Alert.alert('done');
       }).catch((error) => {
          Alert.alert('error');
       })*/
    /*axios.post(`http://13.232.38.222/api/user/login`, {
          email: textlogin,
          password: textpwd,
      },{
          headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
          }
      }).then((response) => {
        const {status, token, user, msg} = response.data;
        Alert.alert(res);
      }).catch((error) =>{
        //cb2(error);
        Alert.alert('error');
      });*/
    
  }
  goToFP = () => {
    this.props.navigation.navigate('ForgotPasswordScreen');
  }
  dismiss() {
    this.props.unmountMe();
  } 
  render(){
      return(
         <View style = { styles.MainContainer }>
          <ImageBackground resizeMode="contain" source={womens_image} style={styles.imgcontainer}>
            <Loader
              loading={this.state.loading} />
            <Text style={{fontSize:30, textAlign: 'center', marginBottom: 30}}>Login</Text>
            <View style = {styles.cntText}>
              <TextInput
                placeholder="Email Address"
                editable = {true}
                style={styles.inputtxt}
                onChangeText={(text) => this.setState({textlogin: text})}
                value={this.state.textlogin}
              />
            </View>
            <View style = {styles.cntText}>
              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                editable = {true}
                style={styles.inputtxt}
                onChangeText={(text) => this.setState({textpwd: text})}
                value={this.state.textpwd}
              />
            </View>
            <View style = {styles.cntText}>
              <View style={{ flexDirection: 'column'}}>
                <View style={{ flexDirection: 'row' }}>
                  <CheckBox
                    value={this.state.checksignin}
                    onValueChange={() => this.setState({ checksignin: !this.state.checksignin })}
                  />
                  <Text style={{fontSize: 14, marginTop: 5}}> Keep me signed in</Text>
                  <Text  onPress={this.goToFP.bind(this)}  style={{textAlign: 'right', fontSize: 14, marginTop: 5}}> Forgot Password</Text>
                </View>
              </View>
            </View>
            <View style = {styles.footerCntText}>
              <Button
               onPress = {this.submitLogin.bind(this)}
                title="Login"
                color="red"
                style = {{fontSize: 16, width: 140}}
              />
              <View style={styles.gaper} />
              <Text style={styles.footerText}>Miss call your registered mobile on</Text>
              <Text style={styles.footerText}>+966 - 1234512345 to receive  your password</Text>
            </View>
          </ImageBackground>
         </View>
      );
  }
}

const styles = StyleSheet.create({ 
  MainContainer :{
    flex:1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    justifyContent: 'center',
    backgroundColor: "#a6efff"
  },
  imgcontainer: {
    flex: 1,
    justifyContent: 'center',
    width: null,
    height: null,
  },
  cntText: {
    height: 50,
    margin: 10, 
    marginTop: 10
  },
  gaper: {
    height: 20
  },
  footerCntText: {
    height: 50,
    margin: 10, 
    marginTop: 20,

    justifyContent: 'center',
  },
  footerText: {
    textAlign: 'center',
    marginTop: 5
  },
  inputtxt: {
    flex: 1,
    backgroundColor: '#fff',
    height: 50,
    fontSize: 16,
    borderRadius: 5, 
    paddingLeft: 10,
    color: '#000',
    opacity: .7
  }
});