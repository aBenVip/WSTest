/**
 * Author: aBen
 * Date: 2018/1/11
 * Time: 16:07
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    AppRegistry, Text,
    InteractionManager
} from 'react-native';

import { NavigationActions } from 'react-navigation'

export default class App extends Component<{}> {

    componentDidMount() {
        //延时跳转，使用定时器，定时器在页面跳转结束时需要销毁
        this.timer = setTimeout(
            () => {
                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Main'})
                    ]
                });
                this.props.navigation.dispatch(resetAction)
            },
            1000);
    }

    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{color: "#fff"}}>
                    全屏的Splash页面
                </Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0D8CE7',
    },
});


AppRegistry.registerComponent('WS', () => App);