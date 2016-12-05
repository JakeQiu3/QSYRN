//
//  ViewController.m
//  IngretionWithEixstingApps
//
//  Created by 邱少依 on 16/10/25.
//  Copyright © 2016年 QSY. All rights reserved.
//

#import "ViewController.h"
#import "RCTRootView.h"
@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
}

//原生的加载RNView的component module
- (IBAction)setRNView:(id)sender {
    // setjsCode的url: 本机的IP->如 10.9.0.59 或者 本地的host -> localhost
    NSURL *jsCodeLocation;
    jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios"];
//    加载RCTRootView
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation moduleName:@"RNHighScores" initialProperties:@{@"scores":@[@{@"name":@"邱少",@"value":@"9分"},@{@"name":@"秋衣",@"value":@"96分"}]} launchOptions:nil];
    UIViewController *rnVC = [[UIViewController alloc] init];
    rnVC.view = rootView;
    [self.navigationController pushViewController:rnVC animated:YES];
    
//    Note that RCTRootView initWithURL starts up a new JSC VM. To save resources and simplify the communication between RN views in different parts of your native app, you can have multiple views powered by React Native that are associated with a single JS runtime. To do that, instead of using [RCTRootView alloc] initWithURL, use RCTBridge initWithBundleURL to create a bridge and then use RCTRootView initWithBridge.
    
    
//  或者通过创建桥接多个View
//    RCTBridge *rctBridge = [[RCTBridge alloc] initWithBundleURL:jsCodeLocation moduleProvider:^NSArray<id<RCTBridgeModule>> *{
//        return  [[NSArray alloc] initWithObjects:@"View1",@"View2",@"View3", nil];
//    } launchOptions:nil];
//    RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:rctBridge moduleName:@"IngretionWithEixstingApps" initialProperties:nil];
   
//    When moving your app to production, the NSURL can point to a pre-bundled file on disk via something like [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];. You can use the react-native-xcode.sh script in node_modules/react-native/packager/ to generate that pre-bundled file.
}

- (IBAction)setLowRNView:(id)sender {
    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios"];
    //    加载RCTRootView
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation moduleName:@"RNHighScores" initialProperties:@{@"scores":@[@{@"name":@"邱少",@"value":@"6分"},@{@"name":@"秋衣",@"value":@"66分"}]} launchOptions:nil];
    UIViewController *rnVC = [[UIViewController alloc] init];
    rnVC.view = rootView;
    [self.navigationController pushViewController:rnVC animated:YES];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
