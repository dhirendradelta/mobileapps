import React, { Component } from 'react';
import {FlatList, StyleSheet, ImageBackground,Platform, View, Text, YellowBox } from 'react-native';
import apiManager from './config/apiManager.js';
import {imgurl} from './config/urlManager.js';
import NewsCustomRow from './NewsCustomRow';
import Loader from './Loader'
import womens_image from './images/womens_image.png'

export default class NewsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {contents: [], loading: true}
  }
  componentDidMount(){
    const that = this;
    apiManager.getNewsItData(function(response){
      that.setState({loading: false});
      const {status, content} = response.data;
      if(status){
        that.setState({contents: content});
      }else{
        
      }
    })
  }
  _keyExtractor = (item, index) => item.content_id+"";

  _onPressItem = (objPost) => {
    this.props.navigation.navigate('NewsDetail', { postData: objPost });
  };

  render(){
    const itemList = this.state.contents;
    return(
       <View style = { styles.MainContainer }>
                        <ImageBackground resizeMode="contain" source={womens_image} style={styles.imgcontainer}>

          <Loader
            loading={this.state.loading} />
          <FlatList
              keyExtractor={this._keyExtractor}
              data={itemList}
              renderItem={({ item }) => <NewsCustomRow
                  onPressItem={this._onPressItem}
                  id={item.content_id}
                  title={item.title}
                  description={item.long_desc}
                  image_url={imgurl+item.content_image}
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