/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
 AppRegistry,
 View
} from 'react-native';
// Flexbox 布局layout。flexDirection（伸缩的方向:row 和 column）、Justify Content（修正内容:space-between 、center）、Align Items（）格式段落
class FlexDirectionBasics extends Component {
  render () {
    return (
 <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center',alignItems: 'center'}}>
   <View style={{width: 50, height:50, backgroundColor: 'powderblue'}} />
   <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
   <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
 </View>
       );
  }
}

AppRegistry.registerComponent('FirstRN', () => FlexDirectionBasics);