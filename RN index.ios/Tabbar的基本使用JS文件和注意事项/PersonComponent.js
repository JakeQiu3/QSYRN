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
  Text
} from 'react-native';


export default class PersonComponent extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>个人页</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'green',
  },
});
