# Vue

> 优点：数据双向绑定、模块化、组件化、插件化
>
> 缺点：Vue 不支持 IE8 及以下版本

vue[响应式原理](https://wenku.baidu.com/view/6ca3cedb07a1b0717fd5360cba1aa81144318f24.html)：通过 `Object.defineProperty()`  定义setter方法和getter方法实现数据劫持，设置一个监听器用于监听所有属性的变化，当数据发生改变时，监听器就会触发更新函数做相应的操作。

[Diff](https://blog.csdn.net/qq_34179086/article/details/88086427)：通过比较同层节点找出不同，使用优先判断和就地复用策略，提高diff算法效率

## vite工具

vite是一个可以快速创建主流框架模板的工具，服务启动极快

> nodejs版本大于14.18.0

## 生命周期

- 数据创建前 `beforecreate`
- 数据完成创建 `created`
- 页面渲染前 `beforemount`
- 页面完成渲染 `mounted`
- 组件更新 `beforeUpdate`，`updated`
- 组件销毁 `beforeDestroy`，`destroyed`

> vue中的周期函数不能使用箭头函数，箭头函数没有this，this作为变量向上级词法作用域查找，会报空值错误

## 数据渲染及事件处理

计算属性(computed)是基于它们的响应式来进行缓存的，只有值发生变化才会重新调用

> 相比方法(methods)的调用，可以避免多次的执行
>
> 相比监听属性(watch)，在多个数据发生改变时可减少多次的调用

> 计算属性默认只有getter方法get()，可以在里面添加setter方法set()来传值进去

类与样式的绑定：可传数组和对象

v-if在渲染时，如果存在相同的元素，不会再次渲染，可通过添加key值来再次渲染

> v-if是对DOM元素进行增删，v-show则是设置元素的CSS属性进行显隐

v-for可以遍历数组和对象，渲染加上key值，使用默认的”就地更新“策略来提高性能

@click="event(), handle()"多事件绑定(vue3)

> 若绑定的事件有返回值且需要传值进去，可以通过`$event`将值带出来event($event, 1)
>
> 事件修饰符once设置事件只触发一次，适用于防止多次提交

v-model是通过绑定值和监听事件来实现数据的双向绑定

> 值的绑定：标签外{{`value`}}，标签内:`value="value"`或:`[value]="value"`
>
> 事件绑定：`@click="event"`或@`[click]="event"`，修饰符@click<u>.enter</u>="event"

vue响应式系统无法检测某些对象和数组的变化：property的添加或移除，数组项的修改，长度修改

> vue3使用了Proxy修复了此问题

异步更新队列[$nextTick](https://blog.csdn.net/zhouzuoluo/article/details/84752280)(callback)，会在数据变化且DOM更新完成后被调用

## 组件

- data()必须是一个函数，并且返回一个对象，vue在创建组件实例的过程中会调用此函数，如果data不是一个函数，不同组件在修改data的值时会受到影响


- Vue组件通讯方式：`props，$emit，refs，eventbus，vuex，provide/inject，v-model`

> props是个单项数据流，父组件发生变更时，子组件的props都会刷新
>
> 子组件修改props中的对象或数组会影响到父组件的状态

- provide/inject用于父组件传值给子组件的方式，与props一样，但区别在于无论组件层次结构多深，都能拿到数据，因为传递是数据是静态的，所以需要搭配computed做数据响应(vue3)

> 组合式api `setup(props,context)`，props是响应式的，context非响应式，provide、inject等对象可以在里面使用

- 组件拓展：mixin方法，extends，composition api(vue3)，slot插槽(内容拓展)

> 在原生html元素插入组件受限，可用is引入 `is="vue:template"`

- 插槽有默认插槽，具名插槽和动态名插槽，也可缩写，相当于嵌入一个自定义组件的效果


- keep-alive是个缓存组件，不会被渲染成DOM，它保留了组件的状态，避免重新渲染。
- 异步组件以一个工厂函数的方式定义组件，返回的是一个promise：`Vue.component('name', function(resolve,reject))`

> vue3有一个defineAsyncComponent方法，可用于异步加载组件

> ref模板引用只会在渲染完成后生效

- vue组件渲染方法：createElement()，返回的是一个虚拟节点

> JSX语法：在JavaScript里写html的拓展语言，借助Babel插件，JSX语法可以更接近模板语法
>
> 在react中比较常见

- vue中可以定义过滤器用于处理文本格式化，可在双花括号插值和v-bind中使用
- 过渡动画：`<transition>，<transition-group>`(vue3)列表过渡

## Vue2&Vue3

[vue2和vue3的区别](https://blog.csdn.net/weixin_43638968/article/details/108800361)

> vue3在vue2上做了各种优化

生命周期：setup替换成beforeCreate、created，onBeforeUnmount、onUnmounted替换成beforeDestroy、destroyed，其他的在头部加上on

vue3组件支持多个根节点，修复vue2的警告问题

Vue2 响应式原理基础是Object.defineProperty；Vue3 响应式原理基础是 Proxy

v-if和v-for不要放在同一个元素上，vue2和vue3两者的优先级正好相反

## Vuex

- `Store`  数据仓库对象
- `state` 用于存储数据
- `getters` 调用方法
- `mutations` 更改store中的状态的唯一方法，类似于事件
- `actions` 提交mutation,不变更状态,可含异步操作
- `modules` 数据模块太多可以分离使用
- `mapState()` , `mapGetters()` , `mapMutations()` 都为映射函数，只有返回值
- `$store.commit()` , `$store.dispatch()` 分别是 `mutations` , `actions` 的触发函数

## Router

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

## 简单题记

1. Vue响应式原理

通过 Object.defineProperty() 定义setter方法和getter方法实现数据劫持，设置一个监听器用于监听所有属性的变化，当数据发生改变时，监听器就会触发更新函数做相应的操作。

2. Diff算法

通过比较同层节点找出不同，使用优先判断和就地复用策略，提高diff算法效率。

3. vue生命周期

数据创建前后beforecreate，created，页面渲染前后beforemount，mounted，DOM更新前后beforeupdate，updated，页面销毁前后beforedestroy，destroyed。

4. v-if与v-show的区别

v-if是对DOM元素进行增删，v-show则是设置元素的CSS属性进行显隐

5. computed与watch的区别

computed是基于它们的响应式来进行缓存，只有值发生变化才会重新调用；watch在数据发生改变时就会被调用，侦听的数据较多时会出现重复调用，消耗性能。

6. data为什么是个函数

data()必须是一个函数，并且返回一个对象，vue在创建组件实例的过程中会调用此函数，如果data不是一个函数，不同组件在修改data的值时会受到影响。

7. v-for中的key有什么作用

渲染加上key值，使用vue默认的”就地更新“策略来提高性能

8. 组件通讯有哪几种方式

props，$emit，eventbus，vuex，ref

9. vue2与vue3的区别

生命周期中的页面销毁函数不同，beforedestroy，destroyed换成beforeunmount，unmounted；v-if和v-for的优先级完全相反；vue3允许组件有多个根元素。

10. keep-alive是什么

keep-alive是个缓存组件，不会被渲染成DOM，它保留了组件的状态，避免重新渲染。