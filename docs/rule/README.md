# 代码规范

>  [京东前端代码规范](https://guide.aotu.io/docs/)

html，script，style缩进都为4个空格（tab），每行代码不超过120个字符，代码行数不要超过500行。

组件的定义与导入单词首字母大写，在标签中写入以 `<xxx-xxx></xxx-xxx>` 形式。

图片以jpg格式为主，图片大小在电脑端不超过200KB，在手机端不超过100KB。

项目文件夹命名为全小写（projectname），样式文件夹（css），脚本文件夹（js），图片文件夹（img）。

图片名称为全小写，单词间用 `_ ` 分隔。

## html

无需闭合的标签不允许在末尾加 `/` ，需要闭合的标签则不允许省略，遵循标签的语义。

class必须有表示内容或功能的含义，单词间以 `_` 分隔。

标签内属性名必须为小写，属性值必须是双引号包围，自定义属性以xxx-为前缀。

有特殊符号引用，不推荐直接使用字符实体。

数字输入框根据情况填写对应类型。

内容注释都写在内容上部，模块注释则用起始注释包裹住。

引入图片不需要添加width、height 属性，alt 属性应该写上。

使用 `button` 元素时必须指明 `type` 属性值，不使用 `name` 属性。

表单提交时，如果条件允许，应使原生提交功能正常工作。

## JavaScript

属性的定义用驼峰命名法。

## css

图片引入不需要引号。

多个选择器要开启新行。

属性书写顺序：

1. 布局定位属性：display / position / float / clear / visibility / overflow
2. 自身属性：width / height / margin / padding / border / background
3. 文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word
4. 其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow

浏览器私有前缀在前，标准前缀在后。

```html
<template>
	<div class="title_box" style="width:100%;">
        <h1 class="title">
            标题
        </h1>
        <input type="tel" placeholder="输入手机号">
        <!-- &gt;相当于字符 > -->
        <div>
            点击&gt;
        </div>
        <num-form></num-form>
    </div>
</template>
<script>
    import NumForm from '../components/NumForm.vue'
    export defalut {
        data() {
            return {
                projectName: '小项目'
            }
        },
        components: {
            NumForm
        }
    }
</script>
<style lang="scss" scoped>
    .title_box {
        display: flex;
    }
    .title {
        color: blue;
    }
</style>
```



> 工作代码规范

工作进度定义：50%-页面完成， 60%-接完接口， 80%-完成业务逻辑， 90%-已自测可提测， 100%-测试通过

组件的导入，用驼峰命名法 `ButtonGroup`

组件使用属性名称为横线风格 `btn-text`

颜色代码都用小写，用#xxxx颜色显示

图片导入从this.$consts.FILE_HOST获取地址，拼接图片

方法命名handleXXX()，接口apiXXX()

接口方法需要写清楚方法的功能、接收的参数、各个参数的意义

静态变量用计算属性返回，标签判断较多也用计算属性返回

uniapp mescroll下拉加载，upOption.page会自动加一

组件内部用emit直接用事件名XXX

页面跳转参数用对象形式

uni-app取路由参数用onLoad

get请求传递的参数要加个{}，post请求传递的参数不用加{}

代码尽量不要超出500行

累计操作用reduce，每循环一次可以取到上一次处理后返回的值

未完成的功能要加上TODO防止忘记

标签绑定函数，没有传值时不加()

在if语句中凡是undefined、null、空字符串、NAN、0都是执行false语句

uniapp下拉刷新上拉加载列表代码应当模板化

solt插槽不可动态渲染

方法绑定后需要解绑，created、onLoad调用uni.$on，beforeDestory、onUnload调用uni.$off

api调用使用es6解构要考虑undefined的情况

uniapp里image标签必须指定mode属性

typescript 接口，类型注释，js对象注释等，注释写在字段上面

```typescript
/** 数量 */
number: number
```

调用接口前加加载图标，完成接口调用便取消

```javascript
// uniapp
this.$loading()
const { head } = await apiSave()
this.$hideLoading()
if (head.ret !== this.$consts.RET_CODE.SUCCESS) return
// html
this.loading = true
const { head } = await apiSave()
this.loading = false
if (head.ret !== this.$consts.RET_CODE.SUCCESS) return
```

curl发送方法：在Network/XHR下，右击有问题的接口，选择Copy/Copy as Curl(bash)

项目安装包时出问题，可以把yarn.lock，package-lock.json删除后重装
