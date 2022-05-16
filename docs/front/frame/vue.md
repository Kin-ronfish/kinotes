# Vue

框架熟练度：⭐⭐⭐

[Vue框架官网文档](https://cn.vuejs.org/v2/guide/)

> 优点：数据双向绑定、模块化、组件化、插件化
>
> 缺点：Vue 不支持 IE8 及以下版本

页面语法⭐⭐⭐

- 数据绑定`v-model`
- 类绑定`:class`
- 样式绑定`:style`
- 事件绑定`@click`
- 条件渲染`v-if`
- 循环渲染`v-for`
- 插槽(组件中嵌入可编辑的标签) `slot`
- ...

> 组件v-for绑定key值，可以通过修改key值再重新渲染组件

逻辑方法⭐⭐⭐

- 数据对象`data`
- 计算方法`computed`
- 组件`components`
- 监听函数 `watch`
- 方法`methods`

> vue中的data必须是函数是为了保证组件的独立性和可复用性

组件通讯⭐⭐⭐

- 父传值给子`props`
- 子传事件给父`$emit()`
- 父调用子的值及方法`refs`
- 组件间传值`eventBus`

> 父组件在使用子组件的时候带参数需添加$event，用于获取子组件传来的值
>
> keep-alive抽象组件，用于提高性能的缓存组件

生命周期⭐⭐⭐

- 数据创建前 `beforecreate`
- 数据完成创建 `created`
- 页面渲染前 `beforemount`
- 页面完成渲染 `mounted`
- 组件更新 `beforeUpdate`，`updated`
- 组件销毁 `beforeDestroy`，`destroyed`

## Vuex

插件熟练度：⭐⭐⭐

[vuex插件文档](https://vuex.vuejs.org/zh/)

- `Store`  数据仓库对象
- `state` 用于存储数据
- `getters` 调用方法
- `mutations` 更改store中的状态的唯一方法，类似于事件
- `actions` 提交mutation,不变更状态,可含异步操作
- `modules` 数据模块太多可以分离使用
- `mapState()` , `mapGetters()` , `mapMutations()` 都为映射函数，只有返回值
- `$store.commit()` , `$store.dispatch()` 分别是 `mutations` , `actions` 的触发函数

## Router

组件熟练度：⭐⭐

[router组件文档](https://router.vuejs.org/zh/guide/)

- 标签声明式跳转
- 函数编程式跳转

```html
<router-link to="/foo">Go to Foo</router-link>
<router-link to="/foo" replace>Go to Foo</router-link>
<script>
    $router.push('home') //有存储历史记录
    $router.push({ path: 'register', query: { plan: 'private' }})
    $router.replace('home') //新路由代替旧路由，没有历史记录
    $router.go(1) //在历史记录里前进后退
  	$router.back() //后退
</script>
```

- 设置为hash模式。网址后有个#，设置为history则没有

```javascript
const router = new VueRouter({
  mode: 'history' | 'hash',
  routes
})
```

## Nuxt

框架熟练度：⭐

[Nuxt框架官网文档](https://www.nuxtjs.cn/)

Nuxt是一个基于Vue.js的服务端渲染应用框架

## 跨域问题

1. vue-h5跨域处理

>  在调用接口时在接口前将目标地址替换成api即可。

- 在根目录下创建 `vue.config.js` 文件，添加以下代码。

```javascript
module.exports = {
    devServer: {
      proxy: {
        '/api': {
            target: url, // 目标地址，例：http://192.168.1.1:4000/
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
          }
        }
      }
    }
}
```

- 安装[axios](http://www.axios-js.com/zh-cn/docs/)插件，在 `main.js` 文件下添加以下代码，同时也需要设置以上代码。

```javascript
// main.js
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'
axios.defaults.headers.common['Authorization'] = 'xxx' //根据情况添加请求头
```
