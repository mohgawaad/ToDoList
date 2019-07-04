

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
//import { IMAGES } from '../common'
import Icon from 'react-native-vector-icons/FontAwesome5';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { TextStyle, ViewStyle, containerStyle } = styles;


        return (
            <View style={containerStyle}>
                <View style={{ marginLeft: 10 }}>
                    <Text style={TextStyle}>
                        &lt; &#32;
                    </Text>
                </View>
                <View >
                    <Text style={TextStyle}>{this.props.children}</Text>

                </View>
                <View style={{ marginRight: 10 }}>
                    <Icon
                        name="bars"
                        size={25}
                        color={'white'}
                        onPress={() => alert('hiiiii')}
                    />
                </View>
            </View>
        );
    }
}
const styles = {

    TextStyle: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',


    },
    containerStyle: {
        backgroundColor: '#f542b3',
        justifyContent: 'space-between',

        flexDirection: 'row',
        height: 100,
        paddingTop: 50,


    }
}


export { Header }