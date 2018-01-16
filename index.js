import {AppRegistry, ToastAndroid} from 'react-native';
import Navigator from './src/navigator';
import React, {Component} from "react";
import * as BackHandler from "react-native/Libraries/Utilities/BackHandler.android";

class step extends Component {
    componentWillMount(){
        BackHandler.addEventListener('hardwareBackPress', this._onBackAndroid );
    }


    componentWillUnmount(){
        BackHandler.addEventListener('hardwareBackPress', this._onBackAndroid);
    }

    _onBackAndroid=()=>{
        let now = new Date().getTime();
        if(now - this.lastBackPressed < 2000) {
            return false;
        }
        this.lastBackPressed = now;
        ToastAndroid.show('再点击一次退出应用',ToastAndroid.SHORT);
        return true;
    };
    render() {
        return <Navigator/>
    }
}
AppRegistry.registerComponent('WS', () => step);
