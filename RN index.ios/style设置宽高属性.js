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
// 设置宽和高，通过style : 父视图 flex: 1，只要 >0 即可,填充所在的空间。其上子视图的flex:数值表示所占父视图的比例。如下：1/6,2/6,3/6
class FixDimensionBasics extends Component {
  render () {
    return (
 <View>
   <View style={{top:20, left: 50, width: 50, height: 50, backgroundColor: 'powderblue'}} />
   <View style={{left: 50, width: 100, height: 100, backgroundColor: 'skyblue'}} />
   <View style={{left: 50, width: 150, height: 150, backgroundColor: 'steelblue'}} />
 </View>
       );
  }
}

AppRegistry.registerComponent('FirstRN', () => FixDimensionBasics);