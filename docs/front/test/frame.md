# 前端框架

## Vue

> [Vue框架官网文档](https://cn.vuejs.org/v2/guide/)

- Vue是用于构建用户界面的渐进式框架。

- Vue核心：减少不必要的DOM操作(虚拟DOM)，数据双向绑定。
- MVVM模式：View和Model用Vue关联起来。

### Vue安装方法

1. npm insatll -g vue 安装脚手架。
2. vue create <项目名> 创建vue框架。
3. vue脚手架安装jQuery，在webpack.dev.conf.js中的plugins加入以下语句。

```javascript
new webpack.ProvidePlugin({
  $: "jquery",
  jQuery: "jquery",
  "windows.jQuery": "jquery"
})
```

### 页面渲染

- `v-if`, `v-else` 设置此标签是否被渲染
- `v-show` 设置标签是否显示
- `v-for` 循环输出内容，key值可为每个item绑定一个标识
- `v-model` 数据双向绑定，即数据和页面渲染同时进行
- `v-bind` 绑定属性，简写为 ':'
- `v-on` 绑定事件，简写为 '@'

```html
<template>
    <div v-if="true">content</div>
    <div v-else>none</div>
    <div v-show="true">content</div>
    <div v-for="(item, index) in list" :key="index"><!-- 遍历数组 -->
        {{item}}
    </div>
    <div v-for="(value, key, index) in object" :key="index"><!-- 遍历对象 -->
    	{{index}}: {{item}}: {{value}}
    </div>
    <div v-for="num in nums" :key="num"><!-- 遍历数值 -->
        {{num}}
    </div>
    <div v-model="num">{{ num }}</div>
    <div :class="red" :style="color">title</div>
    <button @click="function">按钮</button>
</template>
<script>
export default {}
</script>
<style></style>
```

### 生命周期

Vue[生命周期](https://v3.cn.vuejs.org/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA)共有八个执行函数：

- beforeCreate 数据和事件方法还未绑定到app对象上,此时可执行Ajax
- created 数据和事件方法已绑定到app对象上
- beforeMount 渲染前数据还未生成的DOM对象
- mounted 渲染后可以获取数据生成的DOM对象
- beforeUpdate,updated 组件更新时触发
- beforeDestroy,destroyed 组件销毁时触发

```javascript
export default {
    beforeCreate(){}
    created(){}
    beforeMount(){}
    mounted(){}
    beforeUpdate(){}
    updated(){}
    beforeDestroy(){}
    destroyed(){}
}
```

### 内置常用对象

- props 用于组件间的数据传输对象
- data 用于放置当前组件可使用的数据
- components 在导入组件时需要在此对象内映射组件
- methods 组件的所有函数方法都可在此对象中申明
- computed 在标签中如果定义的函数较长且只取返回值的话，就可以使用计算属性
- watch 放置监听函数的对象，在学习当中此对象不常用

```javascript
export default {
	props: {},
	data() { return{} },
	components: {},
	methods: {},
	computed: {},
	watch: {}
}
```

### 插槽slot

插槽类似于模板属性的补充，在子组件中设置插槽标签，父组件间继承子组件后，可在标签内插入新的标签属性

#### 匿名、具名插槽

- 匿名插槽：未命名插槽，父组件引入子组建后直接编写新的新签属性
- 具名插槽：父组件使用子组件插槽时需要绑定插槽名，即：`slot="name"`

 **注：在父组件中不能直接访问到子组件中的数据。**

*parent.vue*

```html
<template>
  <div class="parent">
    <child>
      <div slot="header">头部</div>
      <div #header>插槽缩写</div>
      <div>未命名部分</div>
      <div slot="footer">尾部</div>
    </child>
  </div>
</template>
<script>
import child from './child.vue'
export default {
  components: { child }
}
</script>
```

*child.vue*

```html
<template>
  <div class="container">
    <header>
      <h2>具名插槽</h2>
      <slot name="header"></slot>
    </header>
    <main>
      <h2>匿名插槽</h2>
      <slot></slot>
    </main>
    <footer>
      <h2>具名插槽</h2>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
```

#### 利用插槽编写按钮组件

- 在插槽内插入新标签可自定义按钮文本的形式
- 在子组件中的 `button` 绑定一个 `props` 对象，父组件在使用子组件时传入对应达样式名可改变按钮的样式

*lin-button.vue*

```html
<template> 
  <button :class="['my-btn',btnStyle]">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    btnStyle: String
  }
}
</script>
<style>
.my-btn {
  height: 34px;
  padding: 0 15px;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: #000;
  color: #fff;
}
.btn-success {
  color: #fff;
  background-color: #5cb85c;
}
</style>
```

*parent.vue*

```html
<template>
  <div class="parent">
    <lin-button btnStyle="btn-success">
      <span>点击</span>
    </lin-button>
  </div>
</template>
<script>
import LinButton from './lin-button.vue'
export default {
  components: { LinButton }
}
</script>
```

#### 作用域插槽

在子组件 `slot` 中绑定一个数据，父组件通过 `slotProps` 可访问到子组件的数据
*parent.vue*

```html
<child slot="{item}">
	 <template v-slot="slotProps">
	   <span>{{slotProps.item}}</span>
	 </template>
</child>
```

使用ES6对插槽Props进行解构，作用与以上相同

```html
<template v-slot="{item}">
  <span>{{item}}</span>
</template>
```

*child.vue*

```html
<div class="container">
    <slot :item="item"></slot>
</div>
<script>
export default {
  data() {
    return { item: '1' }
  }
}
</script>
```

### Vuex状态管理组件

***

此组件相当于定义了一个全局的data，在多个组件同时需要要到同组数据时可使用。

- `Store`  数据仓库对象
- `state` 用于存储数据
- `getters` 调用方法
- `mutations` 更改store中的状态的唯一方法，类似于事件
- `actions` 提交mutation,不变更状态,可含异步操作
- `modules` 数据模块太多可以分离使用

```javascript
import Vue from ‘vue’;
import Vuex from ‘vuex’; //导入模块，此模块为状态式管理模块
Vue.use(Vuex);
const store = new Vuex.Store({
	state: {Name: "xxx"},
	getters:{},
	mutations:{},
	actions:{}
	modules:{}
});
```

在外部使用store管理仓库内数据的方法。

- `mapState()` , `mapGetters()` , `mapMutations()` 都为映射函数，只有返回值。
- `$store.commit()` , `$store.dispatch` 分别是 `mutations` , `actions` 的触发函数。

```javascript
mapState(['Name' ]),
mapGetters(['functionName']),
mapMutations(['functionName'])
$store.commit('functionName')
$store.dispatch('functionName')
```

## Nuxt

> [Nuxt框架官网文档](https://www.nuxtjs.cn/)

Nuxt是一个基于Vue.js的服务端渲染应用框架。

### 框架安装

npx create-nuxt-app <项目名> 

### 框架结构

- assets，static目录放置静态文件。 
- components放置页面自定义组件。
- layouts放置自定义视图。
- middleware路由中间件，在页面渲染前被调用。
- pages框架页面主入口目录。
- plugins自定义插件。
- store设定Vuex.store状态管理。

### router路由类型

框架内置了路由自动生成模块，在page目录下创建新目录，路由名称直接写目录名即可，路由跳转通过 `<nuxt-link>` 来进行。

- 静态路由：page/user/index.vue
- 动态路由：page/user/_id.vue

> 网页访问地址：localhost:端口号/user，localhost:端口号/user/id

```html
<nuxt-link to="/user">用户</nuxt-link><!--静态-->
<nuxt-link to="/user/:id=">用户</nuxt-link><!--动态-->
```

嵌套路由：page/user/_id.vue, page/user/index.vue，需要在标签中加入 `<nuxt-child>`。

```html
<nuxt-link to="/user">
	<nuxt-child />用户
</nuxt-link>
```

### layout 视图

默认视图都在layouts目录下创建，在页面中通过以下形式导入。

*newLayout.vue*

```html
<template>
	<div>默认视图</div>
	<Nuxt />
</template>
<style>
div {
  color:aquamarine;
}
</style>
```

*user.vue*

- `layout` 引用layouts根目录下的布局文件。
- `asyncData()` 支持数据异步处理，在组件初始化前被调用，`asyncData()` 的数据与 `data()`的数据一并返回给当前组件。
- `fetch()` 在组件加载前被调用，与 `asyncData()` 相似，但没有设置组件的数据。 
- `head()` 用于设置页面头部标签属性。
- `key()` 在动态页面和不同路径中进行标识，不同key值会使页面组件重新渲染。
- `loading` 路由跳转时是否显示的页面加载进度条。
- `scrollToTop` 控制页面渲染前是否滚动至页面顶部。
- `middleware` 应用已定义好的中间件。 
- `transition` 使用vue原先定义好的过度属性。 
- `vavalidate` 用于校验动态路由参数的有效性。
- `watchQuery` 参数更改时执行组件方法。

```html
<template>
  <div>
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  layout: 'newLayout',
  loading: false,
  scrollToTop: true,
  middleware: 'authenticated',
  transition: '',
  watchQuery: ['page'],
  asyncData (context) {
    return {
      name: 'World'
    }
  },
  fetch () {},
  key() {},
  head () {
	return {
      title: '标题',
      meta: [{ name: 'description' }]
    }
  },
  validate ({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id)
  }
}
</script>
```

### store Vuex状态树

在store目录内的index.vue文件下编写方法，编写模块则需新建一个js文件，项目编译会将store目录下的文件加入到Store管理仓库并格式化。

*store/index.vue*

```javascript
export const state = () => ({ list: [] })
export const mutations = {
  add (state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  remove (state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle (state, todo) {
    todo.done = !todo.done
  }
}
```

*pages/todos/todos.vue*

```html
<template>
  <div>
    <div v-for="(todo, index) in todos" :key="index">
      <input type="checkbox" @change="toggle(todo)">
      <span>{{ todo.text }}</span>
    </div>
    <input placeholder="please input?" @keyup.enter="addTodo">
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  computed: {
    todos () {
      return this.$store.state.list
    }
  },
  methods: {
    addTodo (e) {
      this.$store.commit('add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'toggle'
    })
  }
}
</script>
```

## React

> [React框架官方文档](https://react.docschina.org/)

框架特点：最大限度的减少DOM的操作；JSX(在JS里写HTML，JavaScript语法扩展)；组件化，模块化；单项数据流，没有双向绑定数据（数据-视图-事件-数据）。
JSX优点：执行更快，编译为JavaScript代码时进行优化；类型更安全，编译过程中能发现错误；编写模板更加简单快捷。(其性能次于vue)

### 安装方法

- `npm install -g create-react-app` 安装脚手架
- `create-react-app <文件名>` 创建react框架

### 框架语法

```javascript
import React from 'react'; //React的核心库
import ReactDOM from 'react-dom'; //提供与 DOM 相关的功能
let root = document.querySelector('#root'); //获取根标签
let app = <div> //JSX中必须只有一个根元素
      		<h1>xx</h1> // 小写是普通HTML元素
		  <Child/> // 大写默认是组件
		</div>;
ReactDOM.render(app,root); //标签渲染
```

函数式组件，用于静态没有交互事件内容的组件页面

```javascript
function Childcom(props){//props父传递给子组件数据、函数，单项流动，不能反向
  return (
	<div>
	<h1>天气：{props.weather}</h1>
	{/* 变量、属性、HTML、表达式和注释用{}插入 */}
      <h1 className={title} style={Styles}>函数式组件</h1>
      {/* 标签内多单词的需使用驼峰命名，{}内为变量 */}
    </div>
  )
}
```

类组件，用于有交互或数据修改操作的组件页面

```javascript
class Hello extends React.Component{
constructor(props){
    super(props)
    //构造函数初始化数据，将需要改变的数据在state中初始化
    this.state = { //state：相当于vue的data
      time: new Date()
    }
  }
  render(){
    return (
      <div>
        <h1>类组件</h1>
        <h1>{this.props.name}</h1>
		{/* props父传子的name值 */}
		<Childcom weather={this.props.weather}/>
		{/* 复合组件：类组件内嵌套函数式组件 */}
		<h1>时间:{this.state.time}</h1>
		{/* 当前对象的state */}
      </div>
    )
  }
}
ReactDOM.render(
  // <Childcom weather={this.props.weather}/>,
<Hello name="lin" weather="出太阳"/>，
  document.querySelector('#root')
)
```

事件

```javascript
class Tab extends React.Component{
  constructor(props){
    super(props)
    this.state = {//设置状态、数据
      dispaly:'content'
    }
    // this.clickEvent = this.clickEvent.bind(this)绑定点击事件
  }
  clickEvent = (e) =>{ //使用ES6箭头函数不用在构造函数内绑定事件,可传递多个参数
    console.log(e.target.dataset.index) //输出标签索引
    this.setState({ //修改state数据的方法，数据会被重新渲染
         display:'content active',
      })
  }
  render(){
    return (
      <div>
        <button data-index="1" onClick={this.clickEvent}>显示</button>
        {/* 绑定事件的命名要用驼峰命名法 */}
        <div className={this.state.display}>内容</div>
      </div>
    )
  }
}
ReactDOM.render(
  <Tab/>,
  document.querySelector('#root')
)
```

子组件传值给父组件的方法就是调用父元素传递进来的父元素函数

```javascript
class ParentCom extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      childData: null
    }
  }
  render(){
    return(
      <div>
        <h1>{this.state.childData}</h1>
        <ChildCom setChildData={this.setChildData}/>//传入函数
      </div>
    )
  }
  setChildData = (data) =>{
    this.setState({
      childData:data
    })
  }
}
class ChildCom extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      msg:"helloworld"
    }
  }
  render(){
    return(
      <div>
        <button onClick={this.sendData}>传递给父元素</button>
      </div>
    )
  }
  sendData = () =>{
    this.props.setChildData(this.state.msg)//使用父组件函数
  }
}
ReactDOM.render(
  <ParentCom/>,
  document.querySelector('#root')
)
```

列表渲染：使用数组的map方法，对每一项数据按照JSX的形式进行加工，最终得到一个每一项都是JSX对象的数组，将数组渲染到模板中，Key值需要放置到每一项中。

```javascript
let listArr = this.state.list.map((item,index)=>{ //list为数组
   return (
    <ListItem key={index} data={item} index={index}></ListItem>
  )
})
```

生命周期是组件从实例化到渲染到最终从页面中销毁。在周期中可以调用事件。
生命周期的3个状态:

1. Mounting:将组件插入到DOM中
2. Updating:将数据更新到DOM中
3. Unmounting;:将组件移除DOM中

生命周期中七个钩子函数（方法，事件)

```javascript
class ParentCom extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      msg: "hello"
    }
    console.log("构造函数")
  }
  componentWillMount(){
    console.log("组件将要渲染")
  }
  componentDidMount(){
    console.log("组件渲染完毕")
  }
  componentWillReceiveProps(){
    console.log("组件将要接收新的state和props")
  }
  shouldComponentUpdate(){
    console.log("组件接收到新的state或者 props,判断是否更新")
    return true
  }
  componentWillUpdate(){
    console.log("组件将要更新")
  }
  componentDidUpdate(){
    console.log("组件更新完毕")
  }
  componentWillUnmount(){
    console.log("组件将要卸载")
  }
  render(){
    console.log("渲染函数")
    return(
      <div>
        <h1>hello</h1>
      </div>
    )
  }
}
```

> [vuepress官网](https://vuepress.vuejs.org/zh/)

