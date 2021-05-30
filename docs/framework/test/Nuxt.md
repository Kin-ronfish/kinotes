# Nuxt
Nuxt是一个基于Vue.js的服务端渲染应用框架。
## 框架安装
npx create-nuxt-app <项目名>
## 框架结构
- assets，static目录放置静态文件。
- components放置页面自定义组件。
- layouts放置自定义视图。
- middleware路由中间件，在页面渲染前被调用。
- pages框架页面主入口目录。
- plugins自定义插件。
- store设定Vuex.store状态管理。
## router路由
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
## layout视图
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
## store Vuex状态树
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

## 代理设置方法
`npm i @nuxtjs/proxy -D`
```javascript
//nuxt.config.js
modules: [
  '@nuxtjs/axios',
  '@nuxtjs/proxy'
],
axios: {
  proxy: true
},
proxy: {
  '/api': {
    target: 'http://example.com',
    pathRewrite: {
      '^/api' : '/'
    }
  }
}
```
> [Nuxt框架官网文档](https://www.nuxtjs.cn/)