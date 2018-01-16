/**
 * Author: aBen
 * Date: 2018/1/11
 * Time: 16:07
 */
'use strict';

import React, {Component} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import QRScanner from "./QRScanner";


export default class Home extends Component {

    render() {

        return (
            <View>
                <Button title="扫描二维码"
                        onPress={() => {
                            console.log(this.props);
                            this.props.navigation.navigate('QRScanner');
                        }}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({});
