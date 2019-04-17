import React, { Component } from 'react';
import { AsyncStorage, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import SideMenu from './screens/SideMenu'
import stackNav from './screens/StackNav';
import LoginScreen from './screens/LoginScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import AuthSCreen from './screens/AuthScreen';

console.disableYellowBox = true;
const drawernav = createDrawerNavigator({
      stackNav: stackNav,
  }, {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 80,  
});


var defaultRoute = 'AuthSCreen';

const Project = createSwitchNavigator({
 ForgotPasswordScreen: {screen: ForgotPasswordScreen},
 LoginScreen: { screen: LoginScreen },
 AuthSCreen: { screen: AuthSCreen },
 drawernav: { screen: drawernav }
},{
  initialRouteName : defaultRoute
});

//export default createAppContainer(drawernav);

export default createAppContainer(Project);
/*
const drawernav = createDrawerNavigator({
      stackNav: stackNav,
      LoginScreen: LoginScreen,
  }, {
    initialRouteName: 'LoginScreen',
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 120,  
});
export default createAppContainer(drawernav);
*/


/*import React, { Component } from 'react';
import { Platform, View, Text, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';



class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Notifications: {
    screen: HomeScreen,
  },
});

//const AppContainer = createAppContainer(AppNavigator);
const AppContainer = createAppContainer(MyDrawerNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
*/