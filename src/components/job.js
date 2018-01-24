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
      <NavigatorIOS
        initialRoute={{
          component: QRCodeScanner,
          title: 'Scan Code',
          navigationBarHidden: true,
          passProps: {
            onRead: this.onSuccess.bind(this),
            cameraStyle: styles.cameraContainer,
            topContent: <Text style={styles.centerText}>Scan Product BarCode.</Text>,
            bottomContent: (
              <TouchableOpacity style={styles.buttonTouchable} onPress={() => navigate('Details')}>
                <Text style={styles.buttonText}>Next!</Text>
              </TouchableOpacity>
            ),
            containerStyle: {
              marginTop: 10
            }
          }
        }}
        style={{ flex: 1 }}
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'black',
    marginTop: -25
  },
  cameraContainer: {
    marginTop: 10,
    height: '92%'
  }
});
export default CreateJob;
