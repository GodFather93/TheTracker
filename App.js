import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/components/Home.js';
import CreateJob from './src/components/job.js';
import JobDetails from './src/components/jobdetails.js';
import StageScan from './src/components/stageScan.js';
import StageDetails from './src/components/stageDetails.js';

const NavigationApp = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Jobs: { screen: CreateJob },
    Details: { screen: JobDetails },
    Stage: { screen: StageScan },
    sDetails: { screen: StageDetails }
  },
  {
    headerMode: 'screen'
  }
);

export default class App extends Component {
  render() {
    return <NavigationApp />;
  }
}
