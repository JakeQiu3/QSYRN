
JSon文件：只能传递配置信息，无法表达逻辑； JavaScript： 不仅可以传递配置信息，还可以表达逻辑信息。

从app的动态配置说起！ 动态配置3步：从服务端获取配置，解析文件，执行native代码。 本质：服务端和客户端
protocol，来动态更新客户端的图片、颜色、字体、最多也是在原有业务逻辑或界面的基础上做删改查，而无法涉及增：业务逻辑拓展。

1、前端开发（前端三剑客）:  HTML创建DOM，构建整个网页的布局、结构。 CSS控制DOM的样式：字体、尺寸、颜色、格式等 用JavaScript接受用户事件，动态操控的DOM。

如：动态修改一个btn ：保证html中的function必须 和 js中的function一样，要。 html中： <button type="button" id="button369"
onclick="onClick"> old button </button> JS中的动态操控： <script>  function onClick() {
document.getElementById('button369').innerHTML='new button'; } </script>


2、React开发：将html中的语法XML整合到了JavaScript中。JS中的XML标签不仅可以写HTML，而且可以写CSS。 // 见 style的设置宽高属性 CSS    <View
style={{top:20, left: 50, width: 50, height: 50, backgroundColor: 'powderblue'}} />

// 写HTML  var MyComponent = React.createClass({   handleClick: function() {
this.refs.myTextInput.focus();   },   render: function() {     return (       <div>         <input
type="text" ref="myTextInput" />         <input type="button" value="Focus the text input"
onClick={this.handleClick} />       </div>     );   } }); 这就形成了React的JSX：本质上是对 JavaScript 语法的一种拓展。

到底React是什么？ React 是一套可以用JSX语法高效绘制 DOM 的框架。 （JSX语法：整合了html和css进入JavaScript的构造中； 搞笑： React 独创了 Virtual
DOM 机制-> Virtual DOM 是一个存在于内存中的 JavaScript 对象，它与 DOM 是一一对应的关系,（挖空填写内容）有了Virtual
DOM，内存中就有了JavaScript，也就能渲染出DOM。好处是什么？ 当界面发生变化时，得益于高效的 DOM Diff 算法，我们能够知道 Virtual DOM 的变化，从而高效的改动
DOM，避免了重新绘制 DOM）

3、从大家最熟悉的MVC说起吧。React可以理解成View层的处理，再直白就是大家每天都在做的，搭界面。

像用React 写网页那样，用 React Native 写移动端应用。

4、原理

4、1原理理论分析（以iOS开发为例）：书写的JavaScript代码来执行的，执行Object-C的原生框架的原生代码，JavaScript 只是辅助，它只是提供了配置信息和逻辑的处理结果。 。那问题来了
，那JavaScript代码是如何让Object-C代码执行的呢，这2者通过什么样的交互呢？

 （C 系列的语言，经过编译、链接需要的库等最后生成一个可执行的二进制文件。  JavaScript 是一种脚本语言，不经过编译、链接库等操作，而由   JavaScript 引擎负责
在运行时才动态的进行词法、语法分析，生成抽象语法树(AST)和字节码，然后由解释器负责执行或者使用 JIT 将字节码转化为机器码再执行。） 写过iOS的都知道：JavaScript Core
的框架。这个就是 JavaScript 引擎。

互调的解释： JavaScript 不知道 Objective-C 有哪些方法可以调用？ React-natie做法：Objective-C 和 JavaScript
两端都保存了一份配置表。里面标记了所有 Objective-C 暴露给 JavaScript 的模块和方法。 JavaScript实际上传递的数据只有 ModuleId、MethodId 和
Arguments 这三个元素，它们分别表示类、方法和方法参数。然后Objective-C 接收到这三个值后，就可以通过 runtime 唯一确定要调用的是哪个函数，然后调用这个函数。

调用不得不提 回调：Objective-C 来说，执行完 JavaScript代码, 再执行 Objective-C 回调毫无难度; JavaScript 代码调用 Objective-C
之后，如何在 Objective-C 的代码中，回调执行 JavaScript 代码?在 JavaScript 调用 Objective-C 代码时，注册要回调的 Block，并且把 BlockId
作为参数发送给 Objective-C，Objective-C 收到参数时会创建 Block，调用完 Objective-C 函数后就会执行这个刚刚创建的 Block。Objective-C 会向
Block 中传入参数和 BlockId，然后在 Block 内部调用 JavaScript 的方法，随后 JavaScript 查找到当时注册的 Block 并执行
4、2原理 React Native 源码分析
APPDelegat里面：
RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                    moduleName:@"FirstRN"
                                             initialProperties:nil
                                                 launchOptions:launchOptions];

该RCTRootView的 initWithBundleURL 内部初始化了一个RCTBridge对象（作用：Objective-C 与 JavaScript 交互的桥梁）
       RCTBridge *bridge = [[RCTBridge alloc] initWithBundleURL:bundleURL
                                            moduleProvider:nil
                                             launchOptions:launchOptions];
该RCTBridge的 initWithBundleURL 执行了 setup 方法
A、内部通过 createBatchedBridge方法 创建了BatchedBridge对象（作用：批量读取 JavaScript 对 Objective-C 的方法调用，同时它内部持有一个 JavaScriptExecutor，该对象的作用顾名思义：执行JavaScript代码）
B、内部通过 start 方法  该方法的5步曲：
1、读取 JavaScript 源码 -> 在index.ios.js中的 JSX 代码已经被转化成原生的 JavaScript 代码,JavaScript 代码加载进内存中 (那大小是多少，对于一个空的项目来说大约占用 1.5 Mb)。
2、初始化模块信息 -> BatchedBridge对象执行了initModulesWithDispatchGroup，内部执行了RCTBridgeModule，该类持有宏 RCT_EXPORT_MODULE，该宏定义了一个RCTRegisterModule和其的2个静态方法
RCT_EXTERN void RCTRegisterModule(Class); \
+ (NSString *)moduleName { return @#js_name; } \
+ (void)load { RCTRegisterModule(self); }，       由于该类的.m文件并没有暴露，根据参数具体实现把自身register后，然后添加到 RCTModuleClasses这个数组中，下一步操作是遍历这个数组，然后生成一个个 RCTModuleData 对象（该对象持有 所Module 的名字，常量等基本信息，和一个数组methodsArray：所有需要暴露给 JavaScript 的方法都在里面），并将 一个个 RCTModuleData 对象放进模块配置表 ：为了 找到所有需要暴露给 JavaScript 的类（又称为module），
Bridge 持有一个数组，数组中保存了所有的模块的 RCTModuleData 对象。只要给定 ModuleId 和 MethodId 就可以唯一确定要调用的JavaScript方法。
3、初始化 JavaScript 代码的执行器，即 RCTJSCExecutor 对象 ->RCTJSCExecutor执行过程中，内部的2个Block必须注意 ：a、 nativeRequireModuleConfig，它在 JavaScript 注册新的模块时调用：具体调用代码：（
    let module = RemoteModules[moduleName];
    const json = global.nativeRequireModuleConfig(moduleName); // 调用 OC 的 Block
    const config = JSON.parse(json); // 解析 json
    module = BatchedBridge.processModuleConfig(config, module.moduleID); // 注册 config
    return module;）  b、nativeFlushQueueImmediate  , 把已经被放进去到 MessageQueue 中等待 Objective-C 来调用外; 若 >5ms, JavaScript 还可以主动调用 Objective-C 的方法：（       
     RCT_PROFILE_BEGIN_EVENT(RCTProfileTagAlways, @"nativeFlushQueueImmediate", nil);
      [strongSelf->_bridge handleBuffer:calls batchEnded:NO];
      RCT_PROFILE_END_EVENT(RCTProfileTagAlways, @"js_call");
 handleBuffer 是方法调用的关键
）
4、生成模块列表并写入进 JavaScript 端 -> 执行了 moduleConfig 方法，让 JavaScript 获取所有模块的名字，作为字符串返回出去，并把该config的字符串 设置成 JavaScript 的一个全局变量，名字叫：__fbBatchedBridgeConfig
5、执行 JavaScript 源码 ->3中的Block 会被执行，从而向 JavaScript 端写入配置信息，执行加载到内存中JS代码。


总结： 
OC调用JS-> 通过- (void)_executeJSCall:(NSString *)method
             arguments:(NSArray *)arguments
              callback:(RCTJavaScriptCallback)onComplete 的OC方法调用 包含了参数 ModuleId、MethodId 和 Arguments的中转函数，中转函数通过3个参数查找自己的模块配置表中真正要调用的 JavaScript 函数。
JS调用OC-> JavaScript 会从模块配置表中解析出方法的 ModuleId、MethodId 和 Arguments， 并放入到 MessageQueue 中，等待 Objective-C 通过负责处理调用的方法 handleBuffer 来主动调用，或者超时后主动发送给 Objective-C调用。 

说白了，JS侧是 包含需要调用的JS函数名 的模块配置列表，OC侧是消息队列。




