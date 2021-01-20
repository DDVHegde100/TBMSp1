
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation' ;
import {createBottomTabNavigator} from 'react-navigation-tabs'
import TransactionScreen from './screens/Facebook'
import searchScreen from './screens/Instagram'
export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Appcontainer />
      </View>
    )
  }
}
const TabNavigator = createBottomTabNavigator({
  Transaction: {screen:TransactionScreen},
  search: {screen:searchScreen}
})
const Appcontainer = createAppContainer(TabNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

