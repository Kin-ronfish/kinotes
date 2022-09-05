# 微信小程序

- page.json

页面路由写在pages数组里

window对象设置全局导航栏样式

- 页面json

引入的组件写在usingComponents对象里

页面导航栏样式在当前对象设置

- 页面wxss

除了像素单位换成rpx，其他与css一样

- 页面wxml

标签内和标签外引用变量都需要加上{{}}

条件判断：wx:if、wx:elif、wx:else

```html
<block wx:if="{{flag===1}}">
  <view>xx</view>
</block>
<block wx:elif="{{flag===2}}">
  <view>xx</view>
</block>
<block wx:else>
  <view>xx</view>
</block>
```

循环渲染：wx:for、wx:for-item、wx:key

```html
<block wx:for="{{list}}" wx:for-item="item" wx:key="index">
  <text>{{index + 1}}. {{item.name}}</text>
</block>
```

绑定点击事件：bindtap="handleEvent"

- 页面js

```javascript
Page({
  data: {
    // 初始变量
    motto: 'Hello World'
  },
  // 逻辑函数
  handleEvent() {
    // 修改data数据的方法，与react一样
    this.setData({
      motto: 'hello kin'
    })
  }
})
```

- 生命周期

```javascript
onReady() {} // 页面初始化
onLoad() {} // 页面加载
onShow() {} // 页面显示
onHide() {} // 页面隐藏
onUnload() {} // 页面销毁
```

- 路由跳转与uniapp一样，对象换成wx