/**
 * Author: aBen
 * Date: 2018/1/11
 * Time: 16:07
 */
'use strict';

import React, {Component} from 'react';
import {StyleSheet, View, Button, TouchableOpacity, Text, ToastAndroid} from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = { qrDetail:''};
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate("QRScanner",{
                            // 跳转的时候携带一个参数去下个页面
                            callback: (data)=>{
                                this.setState({qrDetail:data});
                            }
                        })
                    }}>
                    <Text style={{padding:20,backgroundColor:'#f00'}}>扫描二维码</Text>
                </TouchableOpacity>

                <Text>{'扫描结果'+this.state.qrDetail}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({});
