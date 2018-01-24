import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class JobDetails extends React.Component {
  static navigationOptions = {
    title: 'JobDetails',
    header: false
  };

  constructor(props) {
    super(props);
    this.state = {
      width: '',
      length: '',
      fins: '',
      qty: '',
      job: ''
    };
  }
  _renderTopView() {
    return (
      <View style={styles.TopViewContainer}>
        <Text style={{ fontSize: 25, color: 'black', fontWeight: '800', letterSpacing: 3 }}> FILL JOB DETAILS </Text>
        <Text style={{ textAlign: 'center', marginTop: '0.5%', fontSize: 12, fontWeight: '400', letterSpacing: 2 }}>
          Fill in all required details {'\n'} of your current job
        </Text>
      </View>
    );
  }

  _renderPdtDetails(title, type, onTextChange) {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 15, fontWeight: '300', letterSpacing: 1.5, color: 'black' }}>{title}</Text>

        <TextInput
          style={{
            borderRadius: 8,
            backgroundColor: 'rgb(238,239,245)',
            height: '35%',
            width: '70%',
            alignItems: 'center',
            paddingVertical: 5,
            paddingHorizontal: 5,
            textAlign: 'center',
            marginTop: '0.5%',
            fontWeight: '400'
          }}
          onChangeText={onTextChange}
          value={type}
        />
      </View>
    );
  }
  _renderMiddleView() {
    return (
      <View style={styles.midViewContainer}>
        <View style={{ height: '20%', marginBottom: '-7%' }}>
          {this._renderPdtDetails('WIDTH IN MM', this.state.width, text => this.setState({ width: text }))}
        </View>
        <View style={{ height: '20%', marginBottom: '-7%' }}>
          {this._renderPdtDetails('LENGTH IN MM', this.state.length, text => this.setState({ length: text }))}
        </View>
        <View style={{ height: '20%', marginBottom: '-7%' }}>
          {this._renderPdtDetails('NO OF FINS', this.state.fins, text => this.setState({ fins: text }))}
        </View>
        <View style={{ height: '20%', marginBottom: '-7%' }}>
          {this._renderPdtDetails('ORDER QTY.', this.state.qty, text => this.setState({ qty: text }))}
        </View>
        <View style={{ height: '20%', marginBottom: '-7%' }}>
          {this._renderPdtDetails('JOB NO', this.state.job, text => this.setState({ job: text }))}
        </View>
      </View>
    );
  }

  _renderBottomView() {
    return (
      <View style={styles.bottomViewContainer}>
        <Text style={{ fontSize: 10, fontWeight: '500', letterSpacing: 2, color: 'black', paddingVertical: 5 }}>
          Store your data for further stages
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'rgb(20,220,154)',
            borderRadius: 20,
            paddingVertical: 8,
            paddingHorizontal: 10,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center'
          }}
          onPress={this._onPressButton}
        >
          <Image source={require('./icon2.png')} style={{ width: 20, height: 20, marginBottom: 0 }} />
          <Text style={{ color: 'white', fontWeight: '700', letterSpacing: 1 }}> STORE DATA </Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.ViewContainer}>
        {this._renderTopView()}
        {this._renderMiddleView()}

        {this._renderBottomView()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ViewContainer: {
    height: '100%',
    backgroundColor: 'white'
  },
  TopViewContainer: {
    height: '13%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(240,240,240)'
  },
  midViewContainer: {
    height: '75%',
    backgroundColor: 'white'
  },
  bottomViewContainer: {
    height: '12%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default JobDetails;
