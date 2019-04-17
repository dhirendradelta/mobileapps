import React, { Component } from 'react';
import { AsyncStorage, ImageBackground , CheckBox, Redirect, StyleSheet, Platform, Button, TextInput,View, Text, YellowBox } from 'react-native';
import womens_image from './images/womens_image.png'

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'name': '',
      textlogin: 'Employee ID',
      textpwd: 'Password',
      checksignin: false
    }
  }

  submitLogin = async ()=> {
    console.log(44)
    var that = this;
    const logstate = "login";
    try {
      await AsyncStorage.setItem("@MySuperStore:loginKey1", logstate);
      this.props.navigation.navigate('stackNav');
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }
  goToFP = () => {
    console.log(44)
    this.props.navigation.navigate('ForgotPasswordScreen');
  }
  dismiss() {
    this.props.unmountMe();
  } 
  render(){
      return(
         <View style = { styles.MainContainer }>
          <ImageBackground resizeMode="contain" source={womens_image} style={styles.imgcontainer}>
            <View style = {styles.cntText}>
              <TextInput
                editable = {true}
                style={styles.inputtxt}
                onChangeText={(text) => this.setState({textlogin: text})}
                value={this.state.textlogin}
              />
            </View>
            <View style = {styles.cntText}>
              <TextInput
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
                  <Text  onPress={this.goToFP.bind(this)}  style={{textAlign: 'right', fontSize: 14, marginTop: 5}}>Forgot </Text>
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
              <Textstyle={styles.footerText}>Miss call your registered mobile on</Text>
              <Text style={styles.footerText}>+91 - 8005566700 to receive  your password</Text>
            </View>
          </ImageBackground >  
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
    opacity: .6
  }
});