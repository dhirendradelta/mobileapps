import React, { Component } from 'react';
import { Alert, ImageBackground, ScrollView, Image, Dialog, Picker, Button, TextInput, StyleSheet, Platform, View, Text, YellowBox } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import apiManager from './config/apiManager.js';
import womens_image from './images/womens_image.png'


export default class HRComplaintScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: '', 
      complain_desc: '', 
      complain_employee: '', 
      complain_product: '', 
      complain_category: '',
      height: 40,
      loading: false,
    }
  }
  
  submitcomplain = ()=> {
    const that = this;
    that.setState({loading: true});
    const {photo, complain_desc, complain_employee, complain_product, complain_category} = this.state;
    apiManager.addComplain(photo, complain_desc, complain_employee, complain_product, complain_category, function(response){
      that.setState({loading: false});
      const {status, msg} = response.data;
      if(status){
        Alert.alert(msg);
      }else{
        Alert.alert(msg);
      }
    });
  }
  updateSize = (height) => {
    this.setState({
      height
    });
  }
  render(){
      const {photo, complain_desc, complain_employee, complain_product, complain_category, height} = this.state;

      let newStyle = {
        height
      }
      return(
         <View style = { styles.MainContainer }>
                 <ImageBackground resizeMode="contain" source={womens_image} style={styles.imgcontainer}>

          <ScrollView  style = {styles.scroll}>
            <Text style={styles.heading}> HR Complaint </Text>
            <View style={styles.txtrow}>
              <Text style={styles.label}>Enter your complaint </Text>
              <TextInput
                placeholder="Enter your complaint"
                onChangeText={(value) => this.setState({complain_desc: value})}
                style={styles.txtBig}
                editable
                multiline
                value={complain_desc}
                onContentSizeChange={(e) => this.updateSize(e.nativeEvent.contentSize.height)}
              />
            </View>
            <View style={styles.txtrow}>
              <Text style={styles.label}>Select Employee</Text>
              <Picker
                selectedValue={this.state.complain_employee}
                style={styles.sel_form}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({complain_employee: itemValue})
                }>
                <Picker.Item label="Select Employee" value="" />
                <Picker.Item label="Employee 1" value="employee 1" />
                <Picker.Item label="Employee 2" value="employee 2" />
              </Picker>
            </View>
            <View style={styles.txtrow}>
              <Text style={styles.label}>Product</Text>
              <Picker
                selectedValue={this.state.complain_product}
                style={styles.sel_form}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({complain_product: itemValue})
                }>
                <Picker.Item label="Select product" value="" />
                <Picker.Item label="Product 1" value="product 1" />
                <Picker.Item label="Product 2" value="product 2" />
              </Picker>
            </View>
            <View style={styles.txtrow}>
              <Text style={styles.label}>Category</Text>
              <Picker
                selectedValue={this.state.complain_category}
                style={styles.sel_form}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({complain_category: itemValue})
                }>
                <Picker.Item label="Select category" value="" />
                <Picker.Item label="Category 1" value="category 1" />
                <Picker.Item label="Category 2" value="category 2" />
              </Picker>
            </View>
            <View style={styles.txtrow2}>
              <Button
                onPress = {this.submitcomplain.bind(this)}
                title="Submit"
                color="red"
                style = {{fontSize: 16, width: 140}}
              />
            </View>

           </ScrollView>
           </ImageBackground>
         </View>
      );
  }
}

const styles = StyleSheet.create({ 
  MainContainer :{
    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    backgroundColor: "#a6efff",
  }
  ,
  imgcontainer: {
    flex: 1,
    justifyContent: 'center',
    width: null,
    height: null,
  },
  scroll: {
    padding: 20
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
  profileImg: {
    height: 100,
    width: 100,
    borderRadius: 50,
  }
});