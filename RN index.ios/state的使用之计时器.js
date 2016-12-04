
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
                                      //两种数据来控制一个组件：props(父组件中指定，生命周期不变)和state（可变的数据）     
class Blink extends Component {
  constructor(props) {                             //在constructor中初始化state
   super(props);
   this.state = { showText: true };

   setInterval(() => {

    this.setState( {showText : !this.state.showText }); //设置state，较为低级方式。可用 Redux 来统一控制state。

   }, 2000);// 毫秒数
  }

  render () {
    let display = this.state.showText ? this.props.text : '我是邱少依';// 若是固定的文本用 this.props. 但可以通过state来控制。
    return (
      <Text>{display}</Text>
      );
  }
}

class FirstRN extends Component {
  render() {
    return (
      <View>
      <Blink text='I love to blink' />
      <Blink text='Yes blinking is so great' />
      <Blink text='Why did they ever take this out of HTML' />
      <Blink text='Look at me look at me look at me' />
      </View>	
    );
  }
}

AppRegistry.registerComponent('FirstRN', () => FirstRN);