/**
 * Author: aBen
 * Date: 2018/1/11
 * Time: 16:07
 */
import React from 'react';

import Main from "./ui/main";
import {StackNavigator} from "react-navigation";
import App from "./start-up";
import QRScanner from "./ui/home/QRScanner";
import Home from "./ui/home/home";
import Work from "./ui/work/work";
import User from "./ui/user/user";
import Board from "./ui/board/board";


export default Navigator = StackNavigator({
    App: {screen: App},
    Main: {screen: Main},
    Home: {screen: Home},
    Board: {screen: Board},
    Work: {screen: Work},
    User: {screen: User},
    QRScanner: {screen: QRScanner},
}, {
    headerMode: 'none',
});
