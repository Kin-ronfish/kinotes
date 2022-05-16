# other

## element

> [element](https://element.eleme.cn/#/zh-CN/component/installation) UI框架，主要用于PC端

```js
// main.js
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
```

element：在el-checkbox-group内写的div字体默认大小为0

```html
<el-checkbox-group v-model="aimList">
    <div style="font-size:14px">这里添加的东西不起效果</div>
    <el-checkbox label="复选框 A"></el-checkbox>
    <el-checkbox label="复选框 B"></el-checkbox>
</el-checkbox-group>
```

## vant

> [vant官方文档](https://vant-contrib.gitee.io/vant/#/zh-CN/home) UI框架，主要用于app端

```js
// main.js
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
```

## uView

> [uView](https://www.uviewui.com/components/intro.html) UI框架，主要用于app端(uniapp)

```shell
npm i node-sass -D
npm i sass-loader@10 -D
npm install uview-ui
```

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
	},
	
	// 此为本身已有的内容
	"pages": [
		// ......
	]
}
```

## three

> [tree](http://www.webgl3d.cn/threejs/docs/) 3D渲染框架

## electron

> [electron](https://www.electronjs.org/zh/docs/latest) 跨平台桌面应用程序

## matter

> [matter](https://brm.io/matter-js/demo/#stack) 2D物理引擎

## axios

> [axios](http://www.axios-js.com/zh-cn/docs/) Ajax请求插件

## jQuery

> [jQuery](https://www.jquery123.com/) DOM整合插件

```javascript
$("p").append("追加文本");
$("img").after("在后面添加文本");
$("img").before("在前面添加文本");
$("#div").remove();
```

## sass

> [sass/scss](https://www.sass.hk/) css预编译器

- 属性可以嵌套编写
- 可以插入变量及函数

## less

> [less](https://less.bootcss.com/) css预编译器

## bootstrap

> [bootstrap](https://v3.bootcss.com/css/) UI框架，用于适配多端页面

## dayjs

> [dayjs](https://dayjs.fenxianglu.cn/) 时间处理插件

```javascript
dayjs.format('YYYY-MM-DD HH:mm:ss') // 格式转换
dayjs.add(1, 'day') // 添加时间，week，day，month，year，hour，minute，second
dayjs.subtract(1, 'year') // 减去时间
```

## html2canvas

> [html2canvas](http://html2canvas.hertzen.com/) 自定义区域html标签转canva

截取网页指定区域，保存为图片

```javascript
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

> [printjs](https://printjs.crabbly.com/) 自定义打印对应区域

截取网页特定区域作为打印区域

```javascript
print({
    printable: 'print_area', // 标签的id，用于确定范围
    type: 'html',
    style: style, // 亦可使用引入的外部css;
    scanStyles: false
})
```

## animate

> [animate](http://www.animate.net.cn/) 动画插件

使用方法
```html
<div class="animate__animated animate__fadeIn"></div>
```
animate设置修改原有动画
```css
#id { /*通过id获取后直接设置*/
	animation-delay: 2s;
	animation-during: 1s;
}
```

## particles

> [particles](https://vue-particles.netlify.app/) 动态粒子插件

```html
<!-- 导入组件模板 -->
<vue-particles
    class="login-bg"
    color="#39AFFD"
    :particleOpacity="0.7"
    :particlesNumber="100"
    shapeType="circle"
    :particleSize="4"
    linesColor="#8DD1FE"
    :linesWidth="1"
    :lineLinked="true"
    :lineOpacity="0.4"
    :linesDistance="150"
    :moveSpeed="3"
    :hoverEffect="true"
    hoverMode="grab"
    :clickEffect="true"
    clickMode="push"
</vue-particles>
```

| 属性            | 类型      | default   | 描述                                                   |
| --------------- | --------- | --------- | ------------------------------------------------------ |
| color           | `String`  | ’#dedede’ | 粒子颜色                                               |
| particleOpacity | `Number`  | 0.7       | 粒子透明度                                             |
| particlesNumber | `Number`  | 80        | 粒子数量                                               |
| shapeType       | `String`  | ’circle’  | “circle”,“edge”,“triangle”, “polygon”,“star”           |
| particleSize    | `Number`  | 80        | 单个粒子大小                                           |
| linesColor      | `String`  | ’#dedede’ | 线条颜色                                               |
| linesWidth      | `Number`  | 1         | 线条宽度                                               |
| lineLinked      | `boolean` | true      | 连接线是否可用                                         |
| lineOpacity     | `Number`  | 0.4       | 线条透明度                                             |
| linesDistance   | `Number`  | 150       | 线条距离                                               |
| moveSpeed       | `Number`  | 3         | 粒子运动速度                                           |
| hoverEffect     | `boolean` | true      | 是否有hover特效                                        |
| hoverMode       | `String`  | true      | 可用hover模式有: “grab”, “repulse”, + “bubble”         |
| clickEffect     | `boolean` | true      | 是否有click特效                                        |
| clickMode       | `String`  | true      | 可用click模式有: “push”, “remove”, “repulse”, “bubble” |

## md5

>  [md5](https://www.npmjs.com/package/js-md5) 字符串加密插件

```javascript
// 在文件内使用是直接引入
import md5 from 'js-md5'
md5('str')
// 在vue的main.js中使用引入
import md5 from 'js-md5'
Vue.prototype.$md5 = md5
this.$md5('str')
```

## webpack

> [webpack](https://webpack.docschina.org/) 项目打包工具

## glup

> [glup](https://www.gulpjs.com.cn/docs/getting-started/quick-start/) 自动化构建工具

## babel

> [babel](https://www.babeljs.cn/docs/) Babel 是一个 JavaScript 编译器，将ES6代码转为ES5代码

## git

```shell
git stash # 保存工作目录
git stash pop # 恢复工作目录

git submodule init --update # 更新模块
git checkout branch # 分支切换

git merge master # 合并master分支代码
git rebase master # 合并master分支代码

git tag -a v1.0 -m 'v1.0 release' # 打tag
git push origin --tags # 推送tag

git revert branch #切换分支后形成一个历史提交，可用于历史提交记录还原
```

> 出现冲突时，rebase需要解决多个冲突，但是 merge 出现冲突只需要解决一次。
