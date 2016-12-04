/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  AlertIOS,
  Text,
  TabBarIOS,
  NavigatorIOS
} from 'react-native';

var Icon = require('react-native-vector-icons/FontAwesome');  //该Icon 含有 Button 和TabBarItem2个props。
import FindComponent from './FindComponent';
import SearchComponent from './SearchComponent';
import PersonComponent from './PersonComponent';


class Demo extends Component {
  state = {
    selectedTab: 'findNew',
  };

  loginWithFacebook = () => {                                 //定义2个该该文件可用的，按钮后触发的function
    AlertIOS.alert('恭喜！登录facebook成功');
  }
  logoutWithFacebook = () => {
    AlertIOS.alert('已退出登录')
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon
          name='apple' 
          size={30}  
          color='black'
          />

        <Icon.Button    
          name='facebook'
          backgroundColor='#3b5998'
          onPress={this.loginWithFacebook}                   //点击该button触发的方法
          >
          点击该按钮,完成登录
        </Icon.Button>

        <Icon.Button
          name='facebook'
          backgroundColor='green'
          onPress={this.logoutWithFacebook}                 //点击该button触发的方法
          >
          <Text style={{fontFamily: 'Arial', fontSize: 12}}>
          点击该按钮,完成退出
          </Text>
        </Icon.Button>


        <TabBarIOS
         tintColor='#4977f0'
         barTintColor='#E6E6E6'>

         <Icon.TabBarItem                                 //tabbar条 注： Icon.TabBarItem 代替 TabBarIOS.Item,分别添加3个tabbar和3个navigationbar
           title='首页'
           iconName='home'
           selectedIconName='home'
           selected = {this.state.selectedTab === 'findNew'} // 少 设置该selected的tabbarItem名字。
           onPress={() => {
             this.setState({
               selectedTab: 'findNew',
             });
           }}>
           <NavigatorIOS                                  //导航栏。标签外不能注释
             style={styles.container}
             tintColor='#FFFFFF'
             barTintColor='#4977f0'
             initialRoute={{
               title: '首页',
               titleTextColor: 'white',
               component: FindComponent
             }}/>
         </Icon.TabBarItem>


         <Icon.TabBarItem
           title='搜索'
           iconName='search'
           selectedIconName='search'
           selected = {this.state.selectedTab === 'searchNew'}
           onPress={() => {
             this.setState({
               selectedTab: 'searchNew',
             });
           }}>
           <NavigatorIOS
             style={styles.container}
             tintColor='#FFFFFF'
             barTintColor='#4977f0'
             initialRoute={{
               title: '搜索',
               titleTextColor: 'white',
               component: SearchComponent
             }}/>
         </Icon.TabBarItem>


         <Icon.TabBarItem
           title='个人中心'
           iconName='rocket'
           selectedIconName='rocket'
           selected = {this.state.selectedTab === 'rocketNew'}
           onPress={() => {
             this.setState({
               selectedTab: 'rocketNew',
             });
           }}>
           <NavigatorIOS
             style={styles.container}
             tintColor='#FFFFFF'
             barTintColor='#4977f0'
             initialRoute={{
               title: '个人中心',
               titleTextColor: 'white',
               component: PersonComponent
             }}/>
         </Icon.TabBarItem>

        
       </TabBarIOS>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('HHHHHHHH', () => Demo);
