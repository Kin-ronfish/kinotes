# uniapp

- 方法实现

[canvas事件手写签名](https://blog.csdn.net/qq_32289849/article/details/106571184)

[html5调用摄像头实现拍照](https://blog.csdn.net/lishundi/article/details/80604747)

- 微信小程序不支持对象遍历

```html
<view v-for="(value, key, index) in obj" :key="index"></view><!-- 不生效 -->
```

- 生命周期

应用层：初始化(onLaunch)，进入前台(onShow) ，进入后台(onHide)，报错(onError)

页面层：页面加载(onLoad)，完成渲染(onReady)，页面卸载(onUnload)，下拉刷新(onPullDownRefresh)

- 页面跳转

```javascript
uni.navigateTo({url:''}) //打开新页面
uni.redirectTo({url:''}) //页面重定向
uni.navigateBack() //页面返回
```

- 数据存取

```javascript
uni.setStorage({key: 'name',data: 'kin'})// 保存
uni.getStorage({key: 'name'}) // 获取
uni.removeStorage({key: 'name'}) // 清除
uni.clearStorage() // 清空
```

- 解决方案

webView通讯

```html
<!--html页面-->
<script type="text/javascript" src="https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js"></script>
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
```

```html
<!--组件-->
<web-view ref="webview" src="test.html" @message="handleMessage"></web-view>
<script>
export default {
  created() {
      // #ifdef APP-PLUS
	var currentWebview = this.$mp.page.$getAppWebview()
    setTimeout(function() {
        const wv = currentWebview.children()[0]
        if(!wv) return
        wv.setStyle({width:'100%',height:'100%',background: 'transparent'})
        wv.evalJS(`javascript:islog("${flag}")`) //执行html里的函数
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

- webView层级问题

通过动态改变webview的宽度可以实现页面显示与隐藏的效果(width宽度最小设置1px)

- h5跨域处理

```json
// manifest.json
"h5" : {
    "devServer" : {
        "port" : 8080, // 本地端口号
        "disableHostCheck" : true,
        "proxy" : {
            "/api" : {
                "target" : "http://192.168.1.1:4000", // 代理路径
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

- uniapp-app去掉原生导航栏

```json
// page.json
"style": {
	"app-plus": { "titleNView": false } //去除导航栏
}
```

- 离线打包

下载[appSDK](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/android)导入示例项目HBuilder-Integrate-AS，登录uniapp开发者中心获取Android-AppKey

```xml
<!-- AndroidManifest.xml -->
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

keystore为证书文件，放置于当前路径，[证书生成](https://ask.dcloud.net.cn/article/35777)

```json
// build.gradle
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

在hbuildX里 发行 / 原生App-本地打包 / 生成本地打包App资源

将生成的文件夹替换 simpleDemo/src/main/assets/apps/_UNI_A

把 simpleDemo/src/main/assets/data/dcloud_control.xml 下的appid改为本项目appid

安卓离线打包(包含视频播放)，须在proguard-rules.pro文件内添加以下混淆规则

> -keep class tv.danmaku.ijk.media.player.** {*;}

- [uniapp使用安卓原生插件](https://nativesupport.dcloud.net.cn/UniMPDocs/Extension/android)

[百度文档](https://wenku.baidu.com/view/285ec401cfbff121dd36a32d7375a417876fc14c.html)

1.new > Module > Android Library > next

module的build.gradle添加以下配置

```
 //导入aar需要的配置
 repositories {
     flatDir {
         dirs 'libs'
     }
 }
 dependencies {
     //必须添加的依赖
     compileOnly 'com.android.support:recyclerview-v7:27.1.0'
     compileOnly 'com.android.support:support-v4:27.1.0'
     compileOnly 'com.android.support:appcompat-v7:27.1.0'
     compileOnly 'com.alibaba:fastjson:1.1.46.android'

     compileOnly fileTree(include: ['uniapp-release.aar'], dir: '../app/libs')
 }
```

> SDK需要将compileSdkVersion调高至29+

2.在app模块的assets中的dcloud_uniplugins.json⽂件中注册组件

```json
{
  "nativePlugins": [
    {
      "plugins": [
        {
          "type": "module",
          "name": "插件名",
          "class": "packageName"
        }
      ]
    }
  ]
}
```

3.在app模块下添加新建的组件

```
implementation project(':插件名')
```

4.uniapp-Android通讯事件

```java
String TAG = "TestModule";
@UniJSMethod(uiThread = true)
public void  getMessage(JSONObject options) {
	Log.i(TAG, String.valueOf(options));
}
```

