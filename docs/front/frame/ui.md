# UI框架

## element

框架熟练程度：⭐⭐⭐

> [element](https://element.eleme.cn/#/zh-CN/component/installation) 主要用于PC端开发

- 引入方式

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

框架熟练程度：⭐⭐⭐

> [vant官方文档](https://vant-contrib.gitee.io/vant/#/zh-CN/home) 主要用于H5、小程序端开发

- 引入方式

```js
// main.js
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
```

## uView

框架熟练程度：⭐⭐⭐

> [uView官方文档](https://v1.uviewui.com/components/intro.html) 主要用于app端(uniapp)开发

- 引入方式

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

## ant design

框架熟练程度：⭐

> [ant design官方文档](https://ant.design/docs/react/introduce-cn) 主要用于PC端开发

## electron

框架熟练程度：⭐

> [electron官方文档](https://www.electronjs.org/zh/docs/latest) 跨平台桌面应用程序

## bootstrap

框架熟练程度：⭐⭐⭐

> [bootstrap](https://v3.bootcss.com/css/) 适配多端开发