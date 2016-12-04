import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';

export default class MyScene extends Component {
	static propTypes = { //声明一堆属性和function。名字为title 、onForward 和 onBack
		title: PropTypes.string.isRequired,
		onForward: PropTypes.func.isRequired,
		onBack: PropTypes.func.isRequired,
	}

	render() {
		return (
			<View >
			<Text> Current Scene: { this.props.title } </Text>
			<TouchableHighlight onPress={this.props.onForward}>
			<Text style={{backgroundColor: 'blue'}}> Tap me to load the next scene </Text>
			</TouchableHighlight>
			<TouchableHighlight onPress={this.props.onBack}>
			<Text style={{backgroundColor: 'green'}}> Tap me to go back </Text>
			</TouchableHighlight>
			</View>
			)
	}
}