# uniapp

> [uni-app官网](https://uniapp.dcloud.io/)

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

# 代码区别

小程序代码与html的区别

## 对比

- html：div、[span,font]、a、img、select、iframe、事件@click、页面在route里注册、导航栏底部栏在vue页面创建

- uniapp：view、text、navigator、image、picker、web-view、事件@tap、页面在page.json里注册、导航栏底部栏在也在page.json创建

## 改动

- html中的input包含多种功能，在uniapp里只是输入框，里面的功能被拆分出来成独立的组件
- 在uniapp中ul、li用view替代，audio改成api方式，form、button、label、textarea、canvas、video 等还在
- 浏览器专用的window、document、navigator、location对象，cookie、session等存储，只有在浏览器中才有，app和小程序都不支持。local.storage 改成 uni.storage
- alert,confirm 改成 uni.showmodel，ajax 改成 uni.request
- css不支持*选择器，body改为page，px单位改为rpx单位

## 新增

- 新组件：scroll-view可区域滚动视图容器、swiper可滑动区域视图容器、icon图标、rich-text富文本、progress进度条、slider滑块指示器、switch开关选择器、camera相机、live-player直播、map地图、cover-view可覆盖原生组件的视图容器

# 资源引入

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
</style>
```



# 生命周期

## 应用生命周期

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

## 页面生命周期

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

## 组件生命周期

uni-app组件生命周期与vue的周期相同，除了beforeUpdate、updated仅支持H5平台。

# 页面路由

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

# 运行环境

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

