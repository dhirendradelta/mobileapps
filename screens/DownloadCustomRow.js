import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import download from './images/download.png'

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

class DownloadCustomRow extends React.PureComponent {
  render() {
    const {id, image_url, title, description, size} = this.props;
    return (
        <TouchableHighlight style={styles.navSectionStyle} underlayColor='#58d6f0' >
            <View style={styles.container}>
                <Image source={{uri: image_url}} style={styles.photo} />
                <View style={styles.container_text}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <Text style={styles.description}>
                        {description}
                    </Text>
                    <View style={{flex: 1, marginTop: 10, flexDirection: 'row'}}> 
                        <Text style={{height: 25}}>
                            {size}
                        </Text>
                        <Image style = {{marginLeft: 'auto', width: 25, height: 25}} source={download} />
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    );
  }
}


export default DownloadCustomRow;