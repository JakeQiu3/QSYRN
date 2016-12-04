/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
 AppRegistry, 
 StyleSheet,
 View,
 Text,
 Image,
 Animated,
 TouchableHighlight
} from 'react-native';
// 布局动画：LayoutAnimation 和 交互动画 Animated                                          
class Playground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),//动画类型 spring（弹簧效果）
    };
  }
  _onPressImage(){
    console.log('You tapped the button');
  }

  render() {
    return (
      <TouchableHighlight onPress={this._onPressImage}>
      <Animated.Image                             // 可选的3组件类型 Base: Image, Text, View。
        source={require('./img/XMKOH81.jpg')}
        style={{
          flex: 1,
          transform: [                        // `transform` is an ordered array
            {scale: this.state.bounceValue},  // Map赋值 `bounceValue` to `scale`
          ]
        }}
      />
      </TouchableHighlight>
    );
  }
  componentDidMount() {
    this.state.bounceValue.setValue(1.5);     // Start large
    Animated.spring(                          // 可选的3动画类型 Base: spring（弹簧效果）, decay, timing
      this.state.bounceValue,                 // 2种类型的值： Value for single values（本例中：Animate `bounceValue`） and ValueXY for vectors（2个方向的矢量值）
      {
        toValue: 0.8,                         // Animate to smaller size
        friction: 0.6,                         // 摩擦力：default 7
        tension: 70                          // 控制速度的张力：default 40
      }
    ).start();                                // Start the animation
  }
}

AppRegistry.registerComponent('FirstRN888', () => Playground);

