import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text
} from 'react-native';

export default class MyScene extends Component {
  static get defaultProps() {                                 // 自定义的一个属性：title ，赋值为 我是新场景
    return {
      title: '我是新场景'
    };
  }
  render() {
      return (
        <View>
        <Text> Hi! My name is {this.props.title} </Text>
        </View>
        )
  }
}

class UsingNavigators extends Component {
  render() {
    return (                                                   // 返回一个MyScene 对象
      <MyScene />
      )
  }
}

AppRegistry.registerComponent('FirstRN', () => UsingNavigators);