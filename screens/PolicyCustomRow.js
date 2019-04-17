import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginTop: 8,
        borderBottomWidth: 1,
        borderColor: '#5d6060'
    },
    title: {
        flex: 1,
        fontSize: 18,
        color: 'red'
    },
    container_text: {
        flex: 1,
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

class PolicyCustomRow extends React.PureComponent {
  _onPress = () => {
    const {id, title, description} = this.props;
    this.props.onPressItem({id: id, title: title, description: description});
  };

  render() {
    const {image_url, title, description} = this.props;
    return (
      <TouchableHighlight style={styles.navSectionStyle} underlayColor='#58d6f0' onPress={this._onPress}>
        <View style={styles.container}>
          <View style={styles.container_text}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.description}>
                {description}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default PolicyCustomRow;