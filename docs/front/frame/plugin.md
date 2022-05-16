# 常用插件

## lodash

插件熟练程度：⭐⭐

> [lodash](https://www.lodashjs.com/) 数据操作函数整合库

## dayjs

插件熟练程度：⭐⭐⭐

> [dayjs](https://dayjs.fenxianglu.cn/) 时间处理插件

```javascript
dayjs.format('YYYY-MM-DD HH:mm:ss') // 格式转换
dayjs.add(1, 'day') // 添加时间，week，day，month，year，hour，minute，second
dayjs.subtract(1, 'year') // 减去时间
```

## axios

插件熟练程度：⭐⭐

> [axios](http://www.axios-js.com/zh-cn/docs/) Ajax请求插件

## amimate

插件熟练程度：⭐⭐⭐

> [animate](http://www.animate.net.cn/) 动画插件

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

插件熟练程度：⭐⭐

> [git官方文档](https://git-scm.com/book/zh/v2) 代码托管工具

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

## 不常用

- [matter](https://brm.io/matter-js/demo/#stack) 2D物理引擎
- [jQuery](https://www.jquery123.com/) DOM整合插件

```javascript
$("p").append("追加文本");
$("img").after("在后面添加文本");
$("img").before("在前面添加文本");
$("#div").remove();
```

- [sass/scss](https://www.sass.hk/) css预编译器
- [less](https://less.bootcss.com/) css预编译器
- [html2canvas](http://html2canvas.hertzen.com/) 自定义区域html标签转canva

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

- [printjs](https://printjs.crabbly.com/) 自定义打印对应区域

```javascript
// 截取网页特定区域作为打印区域
print({
    printable: 'print_area', // 标签的id，用于确定范围
    type: 'html',
    style: style, // 亦可使用引入的外部css;
    scanStyles: false
})
```

- [particles](https://vue-particles.netlify.app/) 动态粒子插件
- [md5](https://www.npmjs.com/package/js-md5) 字符串加密插件

```javascript
// 在文件内使用是直接引入
import md5 from 'js-md5'
md5('str')
// 在vue的main.js中使用引入
import md5 from 'js-md5'
Vue.prototype.$md5 = md5
this.$md5('str')
```

- [webpack](https://webpack.docschina.org/) 项目打包工具
- [glup](https://www.gulpjs.com.cn/docs/getting-started/quick-start/) 自动化构建工具
- [eslint](https://eslint.bootcss.com/docs/user-guide/getting-started) 代码校验工具
- [babel](https://www.babeljs.cn/docs/) Babel 是一个 JavaScript 编译器，将ES6代码转为ES5代码