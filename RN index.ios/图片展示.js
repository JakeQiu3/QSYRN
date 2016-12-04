/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
 AppRegistry, 
 View,
 Image
} from 'react-native';
// 网络图片必须带style，让developer管理体验更好；本地图片不需要设置尺寸，在图片装配时自动记录了size；
// 原生和混合的图片：<Image source={{uri: 'favicon.png'}} style={{width: 240, height: 240}} /> 
class FirstImagesRN extends Component {
  render() {
  	var bananaPic = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
  	};
    var icon1 = require('./img/favicon.png');
    return (
      <View>
      <Image source={bananaPic} style={{top: 30, left: 50, width: 193,height:100}} />
   	  <Image source={icon1} />
   	  </View>
    );
  }
}

AppRegistry.registerComponent('FirstRN888', () => FirstImagesRN);