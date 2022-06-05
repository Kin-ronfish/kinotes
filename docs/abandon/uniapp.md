# uniapp

> [uni-app官网](https://uniapp.dcloud.io/)

> uniapp适用于做微信等跨平台小程序，cordova适用于单纯开发手机app

通过命令行创建uni-app

```shell
npm install -g @vue/cli
vue create -p dcloudio/uni-preset-vue my-project
```

项目运行与发行

```shell
npm run dev:%PLATFORM%
npm run build:%PLATFORM%
```

%PLATFORM%对应的值：h5-H5，mp-weixin-微信小程序等

## 代码区别

小程序代码与html的区别

### 对比

- html：div、[span,font]、a、img、select、iframe、事件@click、页面在route里注册、导航栏底部栏在vue页面创建
- uniapp：view、text、navigator、image、picker、web-view、事件@tap、页面在page.json里注册、导航栏底部栏在也在page.json创建

> **微信小程序不支持对象遍历**

```html
<view v-for="(value, key, index) in obj" :key="index"></view><!-- 不生效 -->
```

### 改动

- html中的input包含多种功能，在uniapp里只是输入框，里面的功能被拆分出来成独立的组件
- 在uniapp中ul、li用view替代，audio改成api方式，form、button、label、textarea、canvas、video 等还在
- 浏览器专用的window、document、navigator、location对象，cookie、session等存储，只有在浏览器中才有，app和小程序都不支持。local.storage 改成 uni.storage
- alert,confirm 改成 uni.showmodel，ajax 改成 uni.request
- css不支持*选择器，body改为page，px单位改为rpx单位

### 新增

- 新组件：scroll-view可区域滚动视图容器、swiper可滑动区域视图容器、icon图标、rich-text富文本、progress进度条、slider滑块指示器、switch开关选择器、camera相机、live-player直播、map地图、cover-view可覆盖原生组件的视图容器

## 资源引入

```html
<image class="logo" src="/static/logo.png"></image>
<script>
    import add from '@/common/add.js'
</script>
<style>
    @import url('../../common/uni.css'); //相对路径
    div{
        background-image: url(@/static/logo.png);
    }
    @font-face {
         font-family: test1-icon;
         src: url('~@/static/iconfont.ttf'); // ~@为绝对路径 
     }
</style>
```



## 生命周期

### 应用层

初始化(onLaunch)，进入前台(onShow) ，进入后台(onHide)，报错(onError)

```javascript
export default {
    onLaunch: function() {
        console.log('App Launch')
    },
    onShow: function() { //监听页面显示
        console.log('App Show')
    },
    onHide: function() { //监听页面隐藏
        console.log('App Hide')
    }
}
```

### 页面层

页面加载(onLoad)，完成渲染(onReady)，页面卸载(onUnload)，下拉刷新(onPullDownRefresh)

```javascript
export default {
    onLoad: function() { //监听页面加载，用于页面传参
        console.log('App Load')
    },
    onReady: function() { //监听页面初次渲染完成
        console.log('App Ready')
    },
    onUnload: function() { //监听页面卸载
        console.log('App Unload')
    },
    onPullDownRefresh: function() { //下拉刷新
        console.log('App PullDownRefresh')
    }
}
```

### 组件层

uni-app组件生命周期与vue的周期相同，除了beforeUpdate、updated仅支持H5平台。

## 页面路由

页面路由在page.json里填写

```json
{
    "pages": [
        {
            "path": "pages/index/index", 
            "style": { ... }
        }, {
            "path": "pages/login/login",
            "style": { ... }
        }
    ]
}
```

页面跳转

```javascript
uni.navigateTo({url:''}) //打开新页面
uni.redirectTo({url:''}) //页面重定向
uni.navigateBack() //页面返回
```

## 运行环境

`uni-app` 可通过 `process.env.NODE_ENV` 判断当前环境是开发环境还是生产环境。

```javascript
if(process.env.NODE_ENV === 'development'){
    console.log('开发环境')
}
if (process.env.NODE_ENV === 'production') {
    console.log('生产环境')
}
```

运行平台判断

```javascript
switch(uni.getSystemInfoSync().platform){
    case 'android':
       console.log('运行Android上')
       break;
    case 'ios':
       console.log('运行iOS上')
       break;
    default:
       console.log('运行在开发者工具上')
       break;
}
```

## 数据存取

```javascript
uni.setStorage({ // 保存
    key: 'name',
    data: 'kin',
    success: function () {
        console.log('success');
    }
})
uni.getStorage({ // 获取
    key: 'name',
    success: function (res) {
        console.log(res.data);
    }
})
uni.removeStorage({  // 清除
    key: 'name',
    success: function (res) {
        console.log('success');
    }
})
uni.clearStorage() // 清空
```

## 组件学习

1. `mescroll-uni` 组件学习

- mescrollInit：初始化回调函数

- refreshChange：下拉回调函数

- loadChange：上拉回调函数

- up、down：传入一个布尔值，用于设置初始状态是否调用上拉函数、下拉函数

```html
<mescroll-uni ref="mescrollRef" @init="mescrollInit" @down="refreshChange" @up="loadChange" :down="down" :up="up" :fixed="true">
  <view class="name">name</view>
</mescroll-uni>
```

## 方法案例

解决输入框被遮挡时的问题

```html
<scroll-view class="content" :scroll-y="true" :scroll-top="scrollTop">
    <view>
        <view class="message" v-for="(item,index) in records" :key="index">
            <input placeholder="请输入" />
        </view>
    </view>
</scroll-view>
<script>
export default {
  data() {
    return {
      scrollTop: 1000
    }
  }
};
</script>

<style lang="less">
@left-right-margin: 40rpx;
.content {
    flex-grow: 1;
    overflow: auto;
}
</style>
```

## webView

1. 页面嵌入html文件

- 在组件内通过 wv.evalJS('')方法调用html文件里绑定的islog事件。
- 在html文件里通过uni.postMessage()方法传值给组件。

> webView的层级是最高的，会遮挡页面内的所有组件。

```html
<!--html页面-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js"></script>
    <title>Document</title>
</head>
<body>
    <button id="btn">点击</button>
    <script type="text/javascript">
    	window.islog = function(value) {
            console.log(value)
        }
        document.getElementById('btn').addEventListener('click', function () {
            uni.postMessage({ //发送消息到外部
                data: '数据'
            }, '*');
        })
    </script>
</body>
</html>
```

```html
<!--组件-->
<template>
    <view>
        <web-view ref="webview" src="test.html" @message="handleMessage"></web-view>
    </view>
</template>
<script>
export default {
  created() {
      // #ifdef APP-PLUS
	var currentWebview = this.$mp.page.$getAppWebview()
    setTimeout(function() {
        const wv = currentWebview.children()[0]
        if(!wv) return
        wv.setStyle({
            width:'100%',
            height:'100%',
            background: 'transparent'
        })
        wv.evalJS(`islog("${flag}")`) //执行html里的函数
    }, 500) //如果是页面初始化调用时，需要延时一下
    // #endif
  },
  methods: {
      handleMessage(value) {
          console.log(value)
      }
  }
}
</script>
```

## 跨域问题

1. uniapp-h5跨域处理

- 在manifest.json源码试图内添加以下代码。

```json
"h5" : {
    "devServer" : {
        "port" : 8080, // 本地端口号
        "disableHostCheck" : true,
        "proxy" : {
            "/api" : {
                "target" : "http://192.168.1.1:4000",
                "changeOrigin" : true,
                "secure" : false,
                "pathRewrite" : {
                    "^/api" : "/"
                }
            }
        }
    }
}
```

2. uniapp-app全屏显示

- 在page.json里给路由样式添加以下代码，去掉uniapp原生导航栏。

```json
"style": {
	"app-plus": { "titleNView": false } //去除导航栏
}
```

## 离线打包

- 下载[appSDK](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/android)导入示例项目HBuilder-Integrate-AS
- 登录uniapp开发者中心获取Android-AppKey，配置AndroidManifest.xml

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="填入包名">
    <provider
              android:name="io.dcloud.common.util.DCloud_FileProvider"
              android:authorities="填入包名.dc.fileprovider"
              android:exported="false"
              android:grantUriPermissions="true">
        <meta-data
              android:name="android.support.FILE_PROVIDER_PATHS"
              android:resource="@xml/dcloud_file_provider" />
    </provider>
    <meta-data
        android:name="dcloud_appkey"
        android:value="填入appKey" />
</manifest>
```

- 打开build.gradle文件，配置以下参数

> keystore为证书文件，放置于当前路径，[证书生成](https://ask.dcloud.net.cn/article/35777)

```json
defaultConfig {
    applicationId "包名"
    minSdkVersion 21
    targetSdkVersion 28
    versionCode 1
    versionName "1.0"
    multiDexEnabled true
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }
}
signingConfigs {
    config {
        keyAlias 'keystore别名'
        keyPassword '密码'
        storeFile file('keystore文件名称')
        storePassword '密码'
        v1SigningEnabled true
        v2SigningEnabled true
    }
}
```

- 在hbuildX里 发行 / 原生App-本地打包 / 生成本地打包App资源
- 将生成的文件夹替换 simpleDemo/src/main/assets/apps/_UNI_A
- 把 simpleDemo/src/main/assets/data/dcloud_control.xml 下的appid改为本项目appid

