/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
 AppRegistry,
 Text,
 TextInput,
 View
} from 'react-native';
//Text Input 有个props：onChangeText.
class PizzaTranslator extends Component {
  constructor(props) {
  	super(props);
  	this.state = {text: ''};
  }

  render () {
    return (
 <View style={{padding: 10}}>
 	<TextInput style={{height: 40,backgroundColor: 'gray'}} placeholder="我是占位符,请输入空格看结果!" onChangeText={(text) =>this.setState({text})} />
 	<Text style={{padding: 10, fontSize: 42}}>
 	{this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
 	</Text>
 </View>
       );
  }
}

AppRegistry.registerComponent('FirstRN', () => PizzaTranslator);