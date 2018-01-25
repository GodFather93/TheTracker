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
class CreateJob extends React.Component {
  static navigationOptions = {
    title: 'Jobs',
    header: false
  };
  onSuccess(e) {
    Linking.openURL(e.data).catch(err => console.error('An error occured', err));
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Camera
          ref={cam => {
            this.camera = cam;
          }}
          onBarCodeRead={this.onBarCodeRead.bind(this)}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
        >
          <Text style={styles.capture} onPress={() => navigate('Details')}>
            [NEXT]
          </Text>
        </Camera>
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
    flex: 1,
    flexDirection: 'row'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});
export default CreateJob;
