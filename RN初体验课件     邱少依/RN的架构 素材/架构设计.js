
React 编程思想：面向状态编程 OC是面向对象变成，万物皆对象。
语法结构：JSX
RN的架构是什么？该架构是如何设计的？
一、
架构：是有关软件整体结构与组件的抽象描述，用于指导大型软件系统各个方面的设计。相当于 设计图纸。
Reactive 的架构： Redux。

A、
Redux的3个设计思路：（示意图） 
1、应用中所有的state 都是以一个 object tree 形式存储在唯一的一个store中。 store作用：维持应用的state；提供 getState() 方法获取 state；
提供 dispatch(action) 方法分发请求来更新 state；门面模式，要求所有的请求满足统一的格式【可以进行路由、监控、日志等】，统一的调用方式。
通过 subscribe(listener) 注册监听器监听state的变化，用connect将state绑定到component。
2、state是只读的，无法直接修改，唯一可以改变state的办法是 触发action。（解决方案：创建state树副本，更新后，直接替换旧的state树）。
3、通过reducers 描述事件是如何改变state的object tree。

B、
一个独立完整的组件\页面一般由以下元素构成：
1、root组件，1个，
负责初始化state
负责提供对外props列表
负责组合子view组件形成页面效果
负责注册业务逻辑对象提供的业务逻辑方法
负责管理业务逻辑对象
2、view子组件，0-n个，
根据props进行视图的渲染
3、业务逻辑对象，0-n个，
提供业务逻辑方法接口

C、
完整的RN APP文件结构：         对应的文件或代码                   作用
 入口文件                    ios（或android）.index.js文件       
 Actions文件                 actions.js                                     
 Reducers文件                
 容器组件文件
 展示组件文件
