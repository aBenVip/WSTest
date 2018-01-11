/**
 * Author: aBen
 * Date: 2018/1/11
 * Time: 16:07
 */
'use strict';

import React, {Component} from 'react';
import {ToolbarAndroid, StyleSheet, View, Button, ToastAndroid, Text, ActivityIndicator} from 'react-native';

export default class Work extends Component {

    render() {
        return (
            <View>
                <ToolbarAndroid
                    titleColor="#fff"
                    title="首页">
                </ToolbarAndroid>
            </View>
        );
    }
}

const styles = StyleSheet.create({});
