


import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { ButtonStyle, textStyle } = styles;
        return (
            <TouchableOpacity onPress={this.props.whenClicked} style={[ButtonStyle, this.props.style]} >
                <Text style={[textStyle,this.props.textStyle]}>{this.props.children}</Text>
            </TouchableOpacity>
        );
    }
}
const styles = {
    ButtonStyle: {
        //flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        borderBottom:10

        //paddingTop:10
    },
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    }

}


export { Button }