/**
 * Author: aBen
 * Date: 2018/1/11
 * Time: 16:07
 */
import React from 'react';

import Main from "./ui/main";
import {StackNavigator} from "react-navigation";
import App from "./start-up";

const Navigator = StackNavigator({
        App: {screen: App},
        Main: {screen: Main},
    },{
        headerMode: 'none',
    })
;

module.exports = Navigator;