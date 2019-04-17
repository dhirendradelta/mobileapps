import React from 'react';
import { Button, View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        marginTop: 8,
    	justifyContent: 'center',
    },
    title: {
        flex: 1,
        fontSize: 18,
        color: 'red'
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        flex: 1,
        color: '#000',
        fontSize: 14,
    },
});

class PolicyCatCustomRow extends React.PureComponent {
  _onPress = () => {
    const {catid, catname} = this.props;
    this.props.onPressItem({catid: catid, catname: catname});
  };

  render() {
    const {catid, catname} = this.props;
    return (
      <TouchableHighlight style={styles.navSectionStyle} >
      <View style={styles.container}>
        <Button
           onPress = {this._onPress}
            title={catname+""}
            color="red"
            style = {{fontSize: 16, flex: 1}}
          />
          </View>
      </TouchableHighlight>
    );
  }
}

export default PolicyCatCustomRow;