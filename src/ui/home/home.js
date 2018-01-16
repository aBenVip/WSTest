/**
 * Author: aBen
 * Date: 2018/1/11
 * Time: 16:07
 */
'use strict';

import React, {Component} from 'react';
import {StyleSheet, View, Button, TouchableOpacity, Text} from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate("QRScanner")
                    }}>
                    <Text>扫描二维码</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({});
