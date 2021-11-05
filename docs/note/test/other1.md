# other

## element

> [element官方文档](https://element.eleme.cn/#/zh-CN/component/installation) UI框架

### 安装方法

```shell
npm i element-ui --save
```

### 要点提示

element：在el-checkbox-group内写的div字体默认大小为0

```html
<el-checkbox-group v-model="aimList">
    <div style="font-size:14px">这里添加的东西不起效果</div>
    <el-checkbox label="复选框 A"></el-checkbox>
    <el-checkbox label="复选框 B"></el-checkbox>
</el-checkbox-group>
```

## vant

> [vant官方文档](https://vant-contrib.gitee.io/vant/#/zh-CN/home) UI框架

### 安装方法

```shell
npm install vant --save
```

## axios

> [axios官方文档](http://www.axios-js.com/zh-cn/docs/) Ajax请求插件

### 安装方法

```shell
npm install axios --save
```

## jQuery

> [jQuery官方文档](https://www.jquery123.com/) DOM整合插件

### 安装方法

```shell
npm install jQuery --save
```

### 基本用法

```javascript
$("p").append("追加文本");
$("img").after("在后面添加文本");
$("img").before("在前面添加文本");
$("#div").remove();
```

## sass

> [sass官方文档](https://www.sass.hk/) css预编译器

- 属性可以嵌套编写
- 可以插入变量及函数

### 安装方法

```shell
npm install sass --save
```

## less

> [less官方文档](https://less.bootcss.com/) css预编译器

### 安装方法

```shell
npm install less --save
```

## bootstrap

> [bootstrap官方文档](https://www.bootcss.com/) UI框架

### 安装方法

```shell
npm install bootstrap --save
```

## dayjs

> [dayjs官方文档](https://dayjs.fenxianglu.cn/) 时间处理插件

### 安装方法

```shell
npm install dayjs --save
```

### 基本用法

```javascript
dayjs.format('YYYY-MM-DD') // 格式转换
dayjs.add(1, 'day') // 添加时间，week，day，month，year，hour，minute，second
dayjs.subtract(1, 'year') // 减去时间
```

## html2canvas

> [html2canvas官方文档](http://html2canvas.hertzen.com/) 自定义区域html标签转canva

### 安装方法

```shell
npm install html2canvas --save
```

### 方法案例

- 截取网页指定区域，保存为图片

```javascript
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

> [printjs官方文档](https://printjs.crabbly.com/) 自定义打印对应区域

### 安装方法

```shell
npm install print-js --save
```

### 基本用法

- 截取网页特定区域作为打印区域

```javascript
print({
    printable: 'print_area', // 标签的id，用于确定范围
    type: 'html',
    style: style, // 亦可使用引入的外部css;
    scanStyles: false
})
```

## animate

> [animate官方文档](http://www.animate.net.cn/) 动画插件

### 安装方法

```shell
npm install animate --save
```

### 基本用法

animate设置修改原有动画

```css
#id { /*通过id获取后直接设置*/
	animation-delay: 2s;
	animation-during: 1s;
}
```

## particles

> 动态粒子插件

### 安装方法

```shell
npm install particles --save
```

### 基本用法

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

### 属性声明

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

>  字符串加密插件

### 安装方法

```shell
npm install js-md5 --save
```

### 基本用法

```javascript
// 在文件内使用是直接引入
import md5 from 'js-md5'
md5('str')
// 在vue的main.js中使用引入
import md5 from 'js-md5'
Vue.prototype.$md5 = md5
this.$md5('str')
```

