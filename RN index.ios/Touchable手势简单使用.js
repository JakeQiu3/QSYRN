/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
 AppRegistry, 
 Text,
 TouchableHighlight,
 TouchableOpacity,
 TouchableWithoutFeedback
} from 'react-native';

//Tap: TouchableHighlight 点击高亮的gesture；TouchableOpacity是点击时允许用户看到View的背景色；TouchableWithoutFeedback单击时没有任何可显示效果。
//                                                 
class MyButtonTouch extends Component {
  _onPressButton(){
    console.log('You tapped the button');
  }

  render() {
    return (                //该组件Component有属性：onPress 按； onLongPress 长按
        <TouchableOpacity onPress={this._onPressButton}>
        <Text> Button</Text>
        </TouchableOpacity>
    );
  }
}

AppRegistry.registerComponent('FirstRN888', () => MyButtonTouch);