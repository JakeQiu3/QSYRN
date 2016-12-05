/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
 AppRegistry,
 Text 
} from 'react-native';

class QsyFirst extends Component {
  render() {
    return (
      <Text>
      你好，我是邱少依!欢迎来到RN的世界，这是第1次的RN执行!{'\n'} 简单的爱，需要专注的持久！
      </Text>
    );
  }
}

AppRegistry.registerComponent('FirstRN', () => QsyFirst); //相当于注册rootviewController