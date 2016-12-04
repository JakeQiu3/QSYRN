/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
 AppRegistry,
 ListView,
 Fetch,
 Text,
 View
} from 'react-native';
// Fetch 执行Networking:常用的方式有2种：
// 方式1、fetch('https://mywebsite.com/mydata.json')
// 方式2、fetch('https://mywebsite.com/mydata.json',{
// 	method: 'POST',
// 	headers: {
// 		'Accept': 'application/json',
// 		'Content-Type': 'application/json',
// 	},
// 	body: JSON.stringify({
// 		firstParam: 'yourValue',
// 		secondParam: 'yourOtherValue',
// 	})
// })
// 
	// 异步加载
 function getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  }
	// 异步加载:不要忘了catch 这些error，否则会被丢弃。
  async function getMoviesFromApiAsync() {
  	try {
  		let response = await fetch('https://facebook.github.io/react-native/movies.json');
  		let responseJson = await response.json();
  		return responseJson.movies;
  	} catch(error) {
  		console.error(error);
  	}
  } 
//  XMLHttpRequest API 被添加到RN中，可以用第三方的库，like : frisbee or axios .
var requset = new XMLHttpRequest();
require.onreadystatechange = (e) => {
	if (request.readyState !== 4) {
		return;
	}
	if (request.status == 200) {
		console.log('success',request.responseText);
	} else {
		console.warn('error');
	}
};
request.open('GET', 'https://mywebsite.com/endpoint/');
request.send();


// WebSocket 使用
var ws = new WebSocket('ws://host.com/path');
ws.onopen = () => {
	ws.send('something');
}
ws.onmessage = (e) => {
	console.log(e.data);
}
ws.onerror = (e) => {
	console.log(e.message);
}
ws.onclose = (e) => {
	console.log(e.code, e.reason);
}

AppRegistry.registerComponent('FirstRN', () => ListViewBasics);