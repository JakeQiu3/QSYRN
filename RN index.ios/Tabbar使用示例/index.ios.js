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
  NavigatorIOS,
} from 'react-native';

var Icon = require('react-native-vector-icons/FontAwesome').default; //第三方的Component
import FindComponent from './FindComponent';
import SearchComponent from './SearchComponent';
import PersonComponent from './PersonComponent';

// Error :Element type is invalid: expected a String(for built-in components) or a class/function(for composite components) but got:object. check the render method of ‘….’
// ES5语法和ES6语法混乱搭配:Icon。 var Icon = require('react-native-vector-icons/FontAwesome').default;必须加default，要不然会出现导入 错误
class Demo extends Component {

  state = {
    selectedTab: 'findNew',
  };

  loginWithFacebook = () => {                                 //定义2个该该文件可用的，按钮后触发的function
    AlertIOS.alert('恭喜！登录facebook成功');
  }
  logoutWithFacebook = () => {
    AlertIOS.alert('已退出登录');
  }
  render() {
    return (
      <View style={styles.container}>
        <TabBarIOS
         tintColor='#4977f0'
         barTintColor='#E6E6E6'>

         <Icon.TabBarItem                                      //用 Icon.TabBarItem 代替 TabBarIOS.Item
           title='首页'
           iconName='home'
           selectedIconName='home'
           selected = {this.state.selectedTab === 'findNew'}
           onPress={() => {
             this.setState({
               selectedTab: 'findNew',
             });
           }}>
           <NavigatorIOS                                      //导航栏
             style={styles.container} 
             tintColor='#FFFFFF'
             barTintColor='#4977f0'
             initialRoute={{
               title: '首页',
               titleTextColor: 'white',
               component: FindComponent
             }}/>
         </Icon.TabBarItem>

         <Icon.TabBarItem  //用 Icon.TabBarItem 代替 TabBarIOS.Item
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

         <Icon.TabBarItem  //用 Icon.TabBarItem 代替 TabBarIOS.Item
           title='个人中心'
           iconName='rocket'
           selectedIconName='rocket'
           selected = {this.state.selectedTab === 'mineNew'}
           onPress={() => {
             this.setState({
               selectedTab: 'mineNew',
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


       // <Icon
       //    name="facebook"   //图片名连接,可以到这个网址搜索:http://ionicons.com/, 使用时:去掉前面的 "icon-" !!!!
       //    size={30}   //图片大小
       //    color="red"  //图片颜色
       //    />
       //    <Icon.Button    //在图片后加文字
       //    name="facebook"
       //    backgroundColor="white"
       //    onPress={this.loginWithFacebook} //点击该按钮后触发的方法
       //    >
       //    Login with Facebook
       //  </Icon.Button>
       //  
       //  <Icon.Button  //在图片后加, 自定义样式的文字
       //    name="facebook"
       //    backgroundColor="#3b5998">
       //    <Text style={{fontFamily: 'Arial', fontSize: 15}}>Login with Facebook</Text>
       //  </Icon.Button>

