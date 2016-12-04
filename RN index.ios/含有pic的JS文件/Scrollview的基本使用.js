/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
 AppRegistry,
 ScrollView,
 Image,
 Text,
 View
} from 'react-native';
// scrollview
class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render () {
    return (
 <ScrollView>
 	<Text style={{fontSize: 36}}>ScrollView me plz</Text>
 	<Image source={require('./img/favicon.png')} />
 	<Image source={require('./img/favicon.png')} />
 	<Image source={require('./img/favicon.png')} />
 	<Image source={require('./img/favicon.png')} />
 	<Image source={require('./img/favicon.png')} />
 	<Image source={require('./img/favicon.png')} />
 	<Text style={{fontSize: 36}}> If you like </Text>
 	<Image source={require('./img/favicon.png')} />
    <Image source={require('./img/favicon.png')} />
    <Image source={require('./img/favicon.png')} />
    <Image source={require('./img/favicon.png')} />
    <Image source={require('./img/favicon.png')} />
    <Text style={{fontSize: 36}}> ScrollViewing down </Text>
    <Image source={require('./img/favicon.png')} />
    <Image source={require('./img/favicon.png')} />
    <Image source={require('./img/favicon.png')} />
    <Image source={require('./img/favicon.png')} />
    <Image source={require('./img/favicon.png')} />
    <Text style={{fontSize: 36}}> What’s the best </Text>
    <Image source={require('./img/favicon.png')} />
    <Image source={require('./img/favicon.png')} />
    <Image source={require('./img/favicon.png')} />
    <Image source={require('./img/favicon.png')} />
    <Image source={require('./img/favicon.png')} />
    <Text style={{fontSize: 36}}> Framework around? </Text>
    <Image source={require('./img/favicon.png')} />
    <Image source={require('./img/favicon.png')} />
    <Image source={require('./img/favicon.png')} />
    <Image source={require('./img/favicon.png')} />
    <Image source={require('./img/favicon.png')} />
    <Text style={{fontSize: 36}}> React Native </Text>
 </ScrollView>
       );
  }
}

AppRegistry.registerComponent('FirstRN', () => IScrolledDownAndWhatHappenedNextShockedMe);