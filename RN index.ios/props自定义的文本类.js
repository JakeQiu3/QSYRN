/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
 AppRegistry, 
 Text,
 View
} from 'react-native';
                                                      													// 自定义类
class HelloMyIOS extends Component {
  render () {
  	return (
       	<Text> Hello ThisWorld! 开始： {this.props.name}! </Text>                         		     //this.props 就是这个自定义的类的各种属性
  		);
  }
}

class FirstRN extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
      <HelloMyIOS name='测试0' />
      <HelloMyIOS name='测试1' />
      <HelloMyIOS name='测试2' />
      </View>	
    );
  }
}

AppRegistry.registerComponent('FirstRN', () => FirstRN);
