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

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <View
          style={{
            height: '20%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#454747',
            borderWidth: 1,
            borderRadius: 2,
            borderColor: 'black',
            borderBottomWidth: 0,
            shadowColor: 'black',
            shadowOffset: { width: 15, height: 10 },
            shadowOpacity: 0.8,
            shadowRadius: 2
          }}
        >
          <Text style={{ fontSize: 25, color: 'white' }}> FILL JOB DETAILS </Text>
        </View>
        <View style={{ borderBottomColor: 'white', borderBottomWidth: 1 }} />
        <View style={styles.ViewContainer}>
          <View style={{ height: '100%', width: '80%', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ alignSelf: 'flex-start' }}>WIDTH IN MM</Text>
            <TextInput
              style={styles.CustomTextBox}
              onChangeText={width => this.setState({ width })}
              value={this.state.width}
            />
          </View>
        </View>
        <View style={styles.ViewContainer}>
          <View style={{ height: '100%', width: '80%', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ alignSelf: 'flex-start' }}>LENGTH IN MM</Text>
            <TextInput
              style={styles.CustomTextBox}
              onChangeText={length => this.setState({ length })}
              value={this.state.length}
            />
          </View>
        </View>
        <View style={styles.ViewContainer}>
          <View style={{ height: '100%', width: '80%', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ alignSelf: 'flex-start' }}> NO. OF FINS</Text>
            <TextInput
              style={styles.CustomTextBox}
              onChangeText={fins => this.setState({ fins })}
              value={this.state.fins}
            />
          </View>
        </View>
        <View style={styles.ViewContainer}>
          <View style={{ height: '100%', width: '80%', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ alignSelf: 'flex-start' }}>ORDER QTY.</Text>
            <TextInput
              style={styles.CustomTextBox}
              onChangeText={qty => this.setState({ qty })}
              value={this.state.qty}
            />
          </View>
        </View>
        <View style={styles.ViewContainer}>
          <View style={{ height: '100%', width: '80%', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ alignSelf: 'flex-start' }}>JOB NO.</Text>
            <TextInput
              style={styles.CustomTextBox}
              onChangeText={job => this.setState({ job })}
              value={this.state.job}
            />
          </View>
        </View>
        <View style={{ height: '10%', alignItems: 'center', backgroundColor: 'grey' }}>
          <TouchableOpacity style={styles.buttonTouchable} onPress={this._onPressButton}>
            <Text style={{ textAlign: 'center', color: 'black', padding: 0 }}> STORE DATA </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ViewContainer: {
    height: '14%',
    alignItems: 'center',

    backgroundColor: 'grey'
  },
  CustomTextBox: {
    height: '25%',
    width: '100%',
    borderColor: 'white',
    borderWidth: 1,
    shadowOffset: { height: 6, width: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.8,
    backgroundColor: 'white',
    borderRadius: 5,
    color: 'black'
  },
  buttonTouchable: {
    marginTop: 10,
    borderWidth: 1.5,
    borderRadius: 8,
    borderColor: 'black',
    alignItems: 'center',
    height: '30%',
    width: '50%',
    backgroundColor: 'white',
    shadowOffset: { height: 5, width: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.8
  }
});

export default JobDetails;
