/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
 AppRegistry,
 StyleSheet,
 Text,
 View
} from 'react-native';
// style 相当于 CSS
//  表现HTML（标准通用标记语言的一个应用）或XML（标准通用标记语言的一个子集）等文件样式的计算机语言,主要用于 颜色字体格式等的样式显示。
class FirstRN extends Component {
  render () {
    return (
 <View>
   <Text style={styles.qsyRed}> just qsyRed </Text>
   <Text style={styles.qsyBigblue}> just bigblue </Text>
   <Text style={[styles.qsyBigblue, styles.qsyRed]}> bigblue and red </Text>
   <Text style={[styles.qsyRed, styles.qsyBigblue]}> red and bigblue </Text>
   <Text style={{color: 'red'}}>我是红色<Text style={{color: 'gray'}}>我是灰色<Text style={{color: 'blue'}}>我是蓝色</Text></Text></Text>
 </View>
 /*若是数组式的设置，最后一次设置为准,若设置 内嵌模式 */
      );
  }
}

const styles = StyleSheet.create(
  qsyBigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  qsyRed: {
    color: 'red',
  },
);

AppRegistry.registerComponent('FirstRN', () => FirstRN);