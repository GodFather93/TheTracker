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

class StageDetails extends React.Component {
  static navigationOptions = {
    title: 'StageDetails',
    header: false
  };

  constructor(props) {
    super(props);
    this.state = {
      width: '',
      length: '',
      fins: '',
      qty: '',
      job: '',
      comment: ''
    };
  }
  _renderTopView() {
    return (
      <View style={styles.TopViewContainer}>
        <Text style={{ fontSize: 25, color: 'black', fontWeight: '800', letterSpacing: 3 }}> STAGE DETAILS </Text>
        <Text style={{ textAlign: 'center', marginTop: '0.5%', fontSize: 12, fontWeight: '400', letterSpacing: 2 }}>
          Stage details {'\n'} of your current job
        </Text>
      </View>
    );
  }

  _renderPdtDetails(title, img) {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 15, fontWeight: '300', letterSpacing: 1.5, color: 'black' }}>{title}</Text>

        <Text
          style={{
            borderRadius: 8,
            backgroundColor: 'rgb(238,239,245)',
            height: '40%',
            width: '70%',
            paddingVertical: 7,
            fontWeight: '400'
          }}
        >
          <View style={{ height: '100%', width: '100%', flexDirection: 'row' }}>
            <View style={{ height: '33%', width: '70%', justifyContent: 'center', alignItems: 'flex-end' }}>
              <Image source={img} style={{ height: 25, width: 30, justifyContent: 'center', marginTop: 5 }} />
            </View>
            <View
              style={{
                height: '40%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 10
              }}
            >
              <Text> -- </Text>
            </View>
          </View>
        </Text>
      </View>
    );
  }
  _renderMiddleView() {
    return (
      <View style={styles.midViewContainer}>
        <View style={{ height: '16.66%', marginBottom: '-5%' }}>
          {this._renderPdtDetails('WIDTH IN MM', require('./width.png'))}
        </View>
        <View style={{ height: '16.66%', marginBottom: '-5%' }}>
          {this._renderPdtDetails('LENGTH IN MM', require('./length.png'))}
        </View>
        <View style={{ height: '16.66%', marginBottom: '-5%' }}>
          {this._renderPdtDetails('NO OF FINS', require('./fins.png'))}
        </View>
        <View style={{ height: '16.66%', marginBottom: '-5%' }}>
          {this._renderPdtDetails('ORDER QTY.', require('./qty.png'))}
        </View>
        <View style={{ height: '16.66%' }}>{this._renderPdtDetails('JOB NO', require('./job.png'))}</View>
        <View style={{ height: '16.66%' }}>
          <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 15, fontWeight: '300', letterSpacing: 1.5, color: 'black' }}>Comments.</Text>

            <TextInput
              multiline={true}
              style={{
                borderRadius: 8,
                backgroundColor: 'rgb(238,239,245)',
                height: '100%',
                width: '70%',

                paddingVertical: 5,
                paddingHorizontal: 5,

                marginTop: '0.5%',
                fontWeight: '400'
              }}
              onChangeText={comment => this.setState({ comment })}
              value={this.state.comment}
            />
          </View>
        </View>
      </View>
    );
  }

  _renderBottomView() {
    return (
      <View style={styles.bottomViewContainer}>
        <Text style={{ fontSize: 10, fontWeight: '500', letterSpacing: 2, color: 'black', paddingVertical: 5 }}>
          Comment above & Mark Your Job as Completed
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
          <Text style={{ color: 'white', fontWeight: '700', letterSpacing: 1 }}> Mark Final ? </Text>
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
export default StageDetails;
