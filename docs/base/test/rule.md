# 代码规范

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