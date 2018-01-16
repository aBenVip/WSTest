import React, {Component} from "react";
import
{
    StyleSheet,
    Text,
    ToastAndroid
} from 'react-native';
import QRScannerView from "../../components/QRScreenView";

export default class QRScanner extends Component {
    render() {
        return (
            <QRScannerView
                onScanResultReceived={QRScanner.barcodeReceived.bind(this)}

                renderTopBarView={() => QRScanner._renderTitleBar()}

                renderBottomMenuView={() => QRScanner._renderMenu()}
            />
        );
    }

    static _renderTitleBar() {
        return (
            <Text
                style={{color: 'white', textAlignVertical: 'center', textAlign: 'center', font: 20, padding: 12}}
            >这里添加标题</Text>
        );
    }

    static _renderMenu() {
        return (
            <Text
                style={{color: 'white', textAlignVertical: 'center', textAlign: 'center', font: 20, padding: 12}}
            >这里添加底部菜单</Text>
        )
    }

    static barcodeReceived(e) {
        ToastAndroid.show('Type: ' + e.type + '\nData: ' + e.data, ToastAndroid.SHORT);
        //console.log(e)
    }
}
const styles = StyleSheet.create({
    container: {},
});