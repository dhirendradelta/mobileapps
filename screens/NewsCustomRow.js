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
        color: '#000',
        fontSize: 14,
    },
    view_details: {
        flex: 1,
        textAlign: 'right',
        marginTop: 5,
        color: '#000',
        fontSize: 12,
    },
    photo: {
        height: 100,
        width: 100,
    },
});

class NewsCustomRow extends React.PureComponent {
  _onPress = () => {
    const {id, title, description, image_url} = this.props;
    this.props.onPressItem({id: id, image_url: image_url, title: title, description: description});
  };

  render() {
    const {image_url, title, description} = this.props;
    return (
      <TouchableHighlight style={styles.navSectionStyle} underlayColor='#58d6f0' onPress={this._onPress}>
            <View style={styles.container}>
                <Image source={{uri: image_url}} style={styles.photo} />
                <View style={styles.container_text}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <Text style={styles.description}>
                        {description}
                    </Text>
                    <Text style={styles.view_details}>
                        View Details
                    </Text>
                </View>
            </View>
        </TouchableHighlight>
    );
  }
}


export default NewsCustomRow;