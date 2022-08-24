# 使用提示

## axios

```javascript
// 封装附件上传
export function upload(file) {
  let param = new FormData()
  param.append('file', file)
  param.append('chunk', '0')
  axios.post(url,param, {
    headers: {
    	"content-type": "multipart/form-data;"
    }
  })
}
```

## dayjs

```javascript
dayjs.format('YYYY-MM-DD HH:mm:ss') // 格式转换
dayjs.add(1, 'day') // 添加时间，week，day，month，year，hour，minute，second
dayjs.subtract(1, 'year') // 减去时间
```

## amimate

```html
<div class="animate__animated animate__fadeIn"></div>
```

```css
#id { /*通过id获取后直接设置，修改原有动画*/
	animation-delay: 2s;
	animation-during: 1s;
}
```

## git

```shell
git init # 初始化
git add . # 添加当前目录到临时缓存
git commit -m "first commit" # 提交代码
git push # 更新远端仓库

git stash # 保存工作目录
git stash pop # 恢复工作目录

git checkout branch # 分支切换

git merge master # 合并master分支代码
git rebase master # 合并master分支代码

```

> 出现冲突时，rebase需要解决多个冲突，但是 merge 出现冲突只需要解决一次。

## jQuery

```javascript
$("p").append("追加文本");
$("img").after("在后面添加文本");
$("img").before("在前面添加文本");
$("#div").remove();
```

## html2canvas

```javascript
// 截取网页指定区域，保存为图片
import html2canvas from 'html2canvas';
const docArea: any = this.$refs.Image // 在标签里添加 ref="Image"作为截取区域
html2canvas(docArea, {
	useCORS: true // 允许在截取区域内部加载外部图片
}).then(canvas => {
    // 转成图片，生成图片地址
    this.imgUrl = canvas.toDataURL('image/png')
    // 以下调用网页自动下载文件
    const eleLink = document.createElement('a')
    eleLink.href = this.imgUrl
    eleLink.download = '图片名'
    document.body.appendChild(eleLink)
    eleLink.click()
    document.body.removeChild(eleLink)
})
```

## printjs

```javascript
// 截取网页特定区域作为打印区域
print({
    printable: 'print_area', // 标签的id，用于确定范围
    type: 'html',
    style: style, // 亦可使用引入的外部css;
    scanStyles: false
})
```

## md5

```javascript
// 在文件内使用是直接引入
import md5 from 'js-md5'
md5('str')
// 在vue的main.js中使用引入
import md5 from 'js-md5'
Vue.prototype.$md5 = md5
this.$md5('str')
```

## vue-markdown

```shell
npm install github-markdown-css@5.1.0
npm install highlight.js@11.6.0
npm install html-loader@1.3.0
npm install markdown-loader@5.1.0
```

```javascript
// main.js
// 配置markdown样式
import hljs from 'highlight.js'
import 'github-markdown-css'
Vue.use(hljs)
Vue.directive('highlight', function(el) {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})
```

```vue
<template>
  <div class="home">
    <div class="markdown-body" v-highlight v-html="msg"></div>
  </div>
</template>

<script>
import 'highlight.js/styles/github.css'
export default {
  name: 'Home',
  data() {
    return {
      msg: ''
    }
  },
  mounted() {
    this.msg = require('../markdown/JS.md')
  }
}
</script>
```

## element

```js
// main.js
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
```

- 在el-checkbox-group内写的div字体默认大小为0

```html
<el-checkbox-group v-model="aimList">
    <div style="font-size:14px">这里添加的东西不起效果</div>
    <el-checkbox label="复选框 A"></el-checkbox>
    <el-checkbox label="复选框 B"></el-checkbox>
</el-checkbox-group>
```

## vant

```js
// main.js
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
```

## uView

```js
// main.js
import uView from "uview-ui";
Vue.use(uView);
```

```css
/* uni.scss */
@import 'uview-ui/theme.scss';
```

```html
<!-- App.vue -->
<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
</style>
```

```json
// pages.json
{
	"easycom": {
		"^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
	}
}
```
## mqtt

[在vue中使用mqtt](https://www.emqx.com/zh/blog/how-to-use-mqtt-in-vue)

> webpack>5的vue项目需要安装node-polyfill-webpack-plugin插件

```shell
npm install node-polyfill-webpack-plugin
```

> 在vue项目中报buffer未定义的错误，需在vue.config.js中加入以下代码

```javascript
const webpack = require('webpack')
configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser', 
        Buffer: ['buffer', 'Buffer']
      })
    ]
 }
```

## 声网

[声网官网](https://docs.agora.io/cn)

创建客户端：`client=AgoraRTC.createClient()`

客户端初始化：`client.init()`

客户端加入频道：`client.join()`

客户端离开频道：`client.leave()`

客户端订阅频道中的视频流：`client.subscribe(strea)`

客户端取消订阅：`client.unsubscribe(strea)`

播放视频流：`stream.play()`

推视频流：`stream.publish()`

取消推视频流：`stream.unpublish()`

## three

> [three 3D](https://threejs.org/docs/index.html#manual/zh/introduction/Creating-a-scene)渲染框架

## babylon

> [babylon官方文档](https://www.babylonjs.com/) 前端3D渲染框架
>
> [babylon模型演示网站](https://sandbox.babylonjs.com/)
>
> 在vue项目中要导入三维模型，需要确认模型的**具体路径**，默认都是在public目录下
