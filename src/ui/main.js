/**
 * Author: aBen
 * Date: 2018/1/11
 * Time: 16:07
 */
'use strict';

import React, {Component} from 'react';
import {Image, ToastAndroid} from 'react-native';
import {
    TabNavigator,
} from 'react-navigation';
import Home from "./home/home";
import Board from "./board/board";
import Work from "./work/work";
import User from "./user/user";
import * as BackHandler from "react-native/Libraries/Utilities/BackHandler.android";


/*
* 底部导航组件
*/
export default class Main extends Component {
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }

    onBackAndroid = () => {
        if (this.props.navigation.state.routeName === "Main") {
            if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                //最近2秒内按过back键，可以退出应用。
                BackHandler.exitApp();
                return false;
            }
            this.lastBackPressed = Date.now();
            ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
            return true;
        } else {
            return true;
        }
    };

    render() {
        return <Tab/>
    };
}
const Tab = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({focused, tintColor}) => (
                <Image
                    resizeMode='contain'
                    source={focused ? require('../resources/imgs/bg_find_select.png') : require('../resources/imgs/bg_find_normal.png')}
                    style={{width: 22, height: 22, tintColor: tintColor}}
                />
            )
        }
    },
    Board: {
        screen: Board,
        navigationOptions: {
            tabBarLabel: '看板',
            tabBarIcon: ({focused, tintColor}) => (
                <Image
                    resizeMode='contain'
                    source={focused ? require('../resources/imgs/bg_find_select.png') : require('../resources/imgs/bg_find_normal.png')}
                    style={{width: 22, height: 22, tintColor: tintColor}}
                />
            )
        }
    },
    Work: {
        screen: Work,
        navigationOptions: {
            tabBarLabel: '工作',
            tabBarIcon: ({focused, tintColor}) => (
                <Image
                    resizeMode='contain'
                    source={focused ? require('../resources/imgs/bg_project_select.png') : require('../resources/imgs/bg_project_naomal.png')}
                    style={{width: 22, height: 22, tintColor: tintColor}}
                />
            )
        }
    },
    User: {
        screen: User,
        navigationOptions: {
            tabBarLabel: '用户',
            tabBarIcon: ({focused, tintColor}) => (
                <Image
                    resizeMode='contain'
                    source={focused ? require('../resources/imgs/bg_mine_select.png') : require('../resources/imgs/bg_mine_normal.png')}
                    style={{width: 22, height: 22, tintColor: tintColor}}
                />
            )
        }
    },
}, {
    animationEnabled: false, // 切换页面时是否有动画效果
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 是否可以左右滑动切换tab
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#0095EB', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片未选中颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {
            height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        style: {
            backgroundColor: '#fff', // TabBar 背景色
            height: 52
        },
        labelStyle: {
            fontSize: 10, // 文字大小
            margin: 0
        },
    },
});

