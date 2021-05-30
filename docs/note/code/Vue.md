# Vue框架
- Vue是用于构建用户界面的渐进式框架。
- Vue核心：减少不必要的DOM操作(虚拟DOM)，数据双向绑定。
- MVVM模式：View和Model用Vue关联起来。
## Vue安装
1. npm insatll -g vue 安装脚手架。
2. vue create <项目名> 创建vue框架。
3.  vue脚手架安装jQuery，在webpack.dev.conf.js中的plugins加入以下语句。
```javascript
new webpack.ProvidePlugin({
  $: "jquery",
  jQuery: "jquery",
  "windows.jQuery": "jquery"
})
```
## 页面渲染
- `v-if`  `v-else` 设置此标签是否被渲染
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
    <div v-for="(item, index) in list" :key="index">
        {{item}}
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
<vuemethod />

## 生命周期
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
## 内置对象
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
## 插槽slot
插槽类似于模板属性的补充，在子组件中设置插槽标签，父组件间继承子组件后，可在标签内插入新的标签属性
### 匿名、具名插槽
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
### 插槽编写组件
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
### 作用域插槽
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
# Vuex状态管理
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
> [Vue框架官网文档](https://cn.vuejs.org/v2/guide/)