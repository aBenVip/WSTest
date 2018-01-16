/**
 * Author: aBen
 * Date: 2018/1/11
 * Time: 16:07
 */
import React from 'react';

import {StackNavigator, TabNavigator} from "react-navigation";
import App from "./start-up";
import QRScanner from "./ui/home/QRScanner";
import Home from "./ui/home/home";
import Board from "./ui/board/board";
import User from "./ui/user/user";
import Work from "./ui/work/work";
import {Image} from "react-native";

const Tab = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({focused, tintColor}) => (
                <Image
                    resizeMode='contain'
                    source={focused ? require('./resources/imgs/bg_find_select.png') : require('./resources/imgs/bg_find_normal.png')}
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
                    source={focused ? require('./resources/imgs/bg_find_select.png') : require('./resources/imgs/bg_find_normal.png')}
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
                    source={focused ? require('./resources/imgs/bg_project_select.png') : require('./resources/imgs/bg_project_naomal.png')}
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
                    source={focused ? require('./resources/imgs/bg_mine_select.png') : require('./resources/imgs/bg_mine_normal.png')}
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


export default Navigator = StackNavigator({
    App: {screen: App},//欢迎页，两秒后跳转底部导航
    Main: {screen: Tab},//底部导航页面
    QRScanner: {screen: QRScanner},
}, {
    headerMode: 'none',
});
