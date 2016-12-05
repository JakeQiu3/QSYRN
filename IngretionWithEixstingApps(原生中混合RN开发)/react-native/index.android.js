'use-native'
import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Navigator,
    Text,
    NavigatorIOS
} from 'react-native';

import MyScene from './MyScene';

class SimpleNavigationApp extends Component {
  render() {
    return (//初始化一个route,并给以标示index； 然后再调用renderScene（是Navigator的一个function），形参：route（路径）和navigator（导航本身），返回值：object
      <Navigator
        initialRoute={{title: 'My Initial Scene', titleTextColor: 'red', index: 0}}
        renderScene={(route, navigator) => 
          <MyScene title={route.title}

          onForward={() => {
            const nextIndex = route.index + 1;
            navigator.push({
              title: 'Scene' + nextIndex,
              index: nextIndex,
            });
          }}
          onBack={() => {
            if (route.index > 0) {
              navigator.pop();
            }
          }}
          />
        }
      />
      )
  }
}

AppRegistry.registerComponent('IngretionWithEixstingApps', () => SimpleNavigationApp);

