import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TouchableOpacity,
  Linking,
  NavigatorIOS,
  Dimensions
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Camera from 'react-native-camera';

class StageScan extends React.Component {
  static navigationOptions = {
    title: 'Stages',
    header: false
  };
  onSuccess(e) {
    Linking.openURL(e.data).catch(err => console.error('An error occured', err));
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Camera
            ref={cam => {
              this.camera = cam;
            }}
            onBarCodeRead={this.onBarCodeRead.bind(this)}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}
          />
        </View>
        <View style={styles.bottomViewContainer}>
          <Text style={styles.capture} onPress={() => navigate('sDetails')}>
            NEXT ?
          </Text>
          <Text style={{ textAlign: 'center', letterSpacing: 2, fontSize: 12, fontWeight: '200' }}>
            After scanning Barcode press {'\n'} the above button to proceed further
          </Text>
          <Text style={{ paddingTop: 25 }}> BarCode : _____ </Text>
        </View>
      </View>
    );
  }

  onBarCodeRead(e) {
    console.log('Barcode Found!', 'Type: ' + e.type + '\nData: ' + e.data);
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera
      .capture({ metadata: options })
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  container: {
    height: '50%',
    flexDirection: 'row'
  },
  bottomViewContainer: { height: '50%', alignItems: 'center' },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    borderRadius: 15,
    borderWidth: 2,
    color: '#000',
    padding: 4,
    margin: 20,
    textAlign: 'center',
    width: '20%',
    height: '8%',
    letterSpacing: 2,
    fontWeight: '400'
  }
});
export default StageScan;
