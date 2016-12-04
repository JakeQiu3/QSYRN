/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
 AppRegistry,
 ListView,
 Text,
 View
} from 'react-native';
// ListView 2个属性： dataSource 和 renderRow，必须设置
class ListViewBasics extends Component {
  constructor(props) {
	super(props);
	const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !==r2 });
	this.state = {
		dataSource: ds.cloneWithRows([
 			'邱少依', '邱少一', '邱少以', '邱少已', '邱少1⃣️', '邱少啥来着', '邱少。。', '去啦...'
			])
	};
  }
  render () {
    return (
    	<View style={{top: 20, left: 50, width: 100, paddingTop: 22, backgroundColor: 'blue'}}>
    		<ListView style={{backgroundColor: 'gray'}}
    		dataSource={this.state.dataSource}
    		renderRow={(rowData) => <Text>{rowData}</Text>} 
    		/>
    	</View>
       );
  }
}

AppRegistry.registerComponent('FirstRN', () => ListViewBasics);