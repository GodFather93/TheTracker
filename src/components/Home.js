import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, AppRegistry, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
    header: false
  };

  _renderTopView() {
    return (
      <View
        style={{
          width: '100%',
          height: '30%',
          backgroundColor: 'white',
          justifyContent: 'center',
          paddingTop: '5%',
          alignItems: 'center',
          marginBottom: '10%',
          backgroundColor: 'rgb(240,240,240)'
        }}
      >
        <Image source={require('./icon.png')} style={{ width: 60, height: 60, marginBottom: 20 }} />
        <Text
          style={{
            color: 'black',
            fontSize: 30,
            fontWeight: '800',
            textAlign: 'center'
          }}
        >
          JOB TRACKING
        </Text>
        <Text
          style={{
            marginTop: 5,
            color: 'black',
            fontSize: 13,
            fontWeight: 'bold'
          }}
        >
          Now track your jobs on the go!
        </Text>
      </View>
    );
  }

  _renderStageButton(title, onPress) {
    return (
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 150,
          width: 150,
          backgroundColor: 'rgb(68, 151, 225)',
          marginBottom: '2%'
        }}
        activeOpacity={1}
        onPress={onPress}
      >
        <Image source={require('./gear.png')} style={{ width: 50, height: 50, marginBottom: 20 }} />
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: '400'
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  }

  _renderMiddleView() {
    const { navigate } = this.props.navigation;

    return (
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
          }}
        >
          {this._renderStageButton('STAGE - I', () => navigate('Stage'))}
          <View style={{ width: '2%' }} />
          {this._renderStageButton('STAGE - II', () => navigate('Stage'))}
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
          }}
        >
          {this._renderStageButton('STAGE - III', () => navigate('Stage'))}
          <View style={{ width: '2%' }} />
          {this._renderStageButton('STAGE - IV', () => navigate('Stage'))}
        </View>
      </View>
    );
  }

  _renderBottomView() {
    const { navigate } = this.props.navigation;
    return (
      <View
        style={{
          width: '100%',
          height: '10%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          marginTop: '10%'
        }}
      >
        <TouchableOpacity
          style={{
            height: 40,
            borderRadius: 20,
            paddingHorizontal: 40,
            paddingVertical: 5,
            backgroundColor: 'rgb(20,220,154)',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onPress={() => navigate('Jobs')}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: '400'
            }}
          >
            CREATE A JOB
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 5,
            color: 'black',
            fontSize: 12,
            fontWeight: '600',
            textAlign: 'center'
          }}
        >
          Create a new job.
        </Text>
      </View>
    );
  }

  render() {
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
    flex: 1,
    backgroundColor: 'white',

    alignItems: 'center'
  },
  MainBtn: {
    color: 'white',
    borderRadius: 1,
    borderWidth: 2,
    padding: 10,
    paddingRight: 25,
    paddingLeft: 25,
    height: 40,
    shadowOffset: { height: 5, width: 8 },
    shadowColor: '#6F6D6C',
    shadowOpacity: 0.8,
    backgroundColor: '#6F6D6C',
    borderColor: 'black'
  },
  StageText: {
    color: 'white',
    borderRadius: 1,
    borderWidth: 1.5,
    padding: 10,
    paddingRight: 25,
    paddingLeft: 25,
    shadowOffset: { height: 7, width: 7 },
    shadowColor: 'black',
    shadowOpacity: 0.8,
    backgroundColor: '#454747',
    borderColor: 'black'
  }
});

export default HomeScreen;
