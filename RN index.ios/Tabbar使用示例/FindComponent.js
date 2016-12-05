/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 'use strict';
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  AlertIOS,
  TouchableHighlight,
  Text,
} from 'react-native';


export default class FindComponent extends Component {
  loginWithFacebook = () => { 
    AlertIOS.alert('我要发现了');
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.loginWithFacebook}>
           <Text>发现页,点我</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'red',
  },
});
