# JavaScript

> 绝大多数数据处理都是字符串，数字，数组，对象等

in判断对象内是否存在键名 `key in obj`

函数传入多个值

```javascript
function arr(...args) {
  console.log(args); // [1,2,3]
}
arr(1,2,3)
```

## this

箭头函数中的this指向的是最外层的this

普通函数中的this指向的是当前函数的this

闭包中的this指向window

## 对象

`Map`：Map是一组键值对的字典结构，具有极快的查找速度

`Set`：Set与Map类似，也是一组key的集合，但不存储value

> 通过ES6解构就是个数组

`Object`：Object是一个构造函数，用于创建对象

- `'a' in {'a':1}` ：通过键名判断是否存在对象
- `hasOwnProperty` ：判断是否为对象自身属性
- `with(obj)` ：操作当前对象下所有存在的属性

`Promise`：promise的回调函数不是正常的异步任务，而是微任务，执行时间一定早于正常任务

`Number`：Number中的 `isNaN` 只对数值有效

`Date`：计算天数：通过`new Date().getTime()`获取两个时间戳相减，在相减之前都除以1000取整得到完整的秒数，最后根据分时算出天数

`prototype`：原型对象，所有引用型的`__proto__`属性指向它构造函数的prototype

> 原型链：由对象的`__proto__`属性和对象的构造函数的原型的`__proto__`属性构成的链式结构称为原型链

Object.defineProperty()定义一个属性描述对象

> 同时定义了`get`属性和`value`属性，以及将`writable`属性设为`true`，就会报错

`Proxy(ES6)`：创建对象代理拦截，调用对象前进行处理

```javascript
new Proxy({a:1}, {
  get: function(target, attr){},
  set: function(target, attr, value) {}
})
```

`Array`

> delete：删除数组内的值，不影响数组长度，只是索引下的值变为空位
>
> Array.isArray(arr)判断是否为数组，弥补`typeof`的不足

`boolean`：对象前加不加new，结果都不一样

`string`

> 字符串转base64：`btoa(encodeURIComponent(str))`
>
> base64转字符串：`decodeURIComponent(atob(str))

## 正则表达式

正则表达式在处理字符串方面可以提高效率

`'senu'.match(/se(?=nu)/g)`：判断se后面是否是nu，并返回判断值se

`'100doc'.match(/\d{3,4}/g)`：匹配连续的长度至少为3最多为4的数字并返回本身

`'ddfd'.match(/d+/g)`：匹配至少存在一个d的字符串并返回本身

`'isd'.match(/sd$/g)`：匹配以sd结尾的字符

`'isd'.match(/^is/g)`：匹配以is开头的字符

## DOM操作

创建标签节点：`document.createElement('div')`

绑定DOM0级标准事件：`document.querySelector('div').onclick= function(){}`

## 继承

原型链继承

> 无法传参和多继承

```javascript
childFun.prototype = new parentFun();// 将parentFun实例挂载到childFun的原型链上
```

构造继承

> 可传参，多继承；只继承非原型的属性和方法

```javascript
function childFun() {
  parentFun.call(this)
}
```

组合继承

> 原型链继承和构造继承的组合，弥补部分缺陷

```javascript
function childFun() {
  parentFun.call(this)
}
childFun.prototype = new parentFun();
childFun.prototype.constructor = childFun;
```

寄生式继承

> 创建一个构造函数，通过闭包的方式继承

```javascript
function childFun() {
  parentFun.call(this)
}
(function() {
  let Super = function() {};
  Super.prototype = parentFun.prototype;
  childFun.prototype = new Super();
})();
```

类继承(ES6)

> 子类通过super调用父类的构造函数

```javascript
class child extends parent {
  constructor() {
    super();
  }
}
```

## 事件循环

浏览器的事件循环分为同步任务和异步任务，异步任务有宏任务和微任务

setTimeout、setInterval会将指定代码移出当前循环，在下一轮循环时检查是否到指定时间

## 闭包

闭包就是通过函数内部的函数访问内部变量

函数表达式后需要加分号，函数的申明则可以忽略

闭包表达式不能以花括号结尾

```javascript
(function(){ /* code */ }());
// 或者
(function(){ /* code */ })();
```

# Vue

vue[响应式原理](https://wenku.baidu.com/view/6ca3cedb07a1b0717fd5360cba1aa81144318f24.html)：通过 `Object.defineProperty()`  定义setter方法和getter方法实现数据劫持，设置一个监听器用于监听所有属性的变化，当数据发生改变时，监听器就会触发更新函数做相应的操作。

[Diff](https://blog.csdn.net/qq_34179086/article/details/88086427)：通过比较同层节点找出不同，使用优先判断和就地复用策略，提高diff算法效率

## vite工具

vite是一个可以快速创建主流框架模板的工具，服务启动极快

> nodejs版本大于14.18.0

## 生命周期

vue生命周期：创建前后，渲染前后，更新前后，销毁前后

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

> 渲染数组时尽可能不要使用index，数组的长度一旦发生变化，key值就重叠了

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


- Vue组件通讯方式：`props，$emit，ref，eventbus，vuex，$parent(不推荐)，$root(不推荐)，$attrs`

> props是个单项数据流，父组件发生变更时，子组件的props都会刷新
>
> 子组件修改props中的对象或数组会影响到父组件的状态

- 组件拓展：mixin方法，extends，composition api(vue3)，slot插槽(内容拓展)

> 在原生html元素插入组件受限，可用is引入 `is="vue:template"`

- 插槽有默认插槽，具名插槽和动态名插槽，也可缩写，相当于嵌入一个自定义组件的效果
- provide/inject用于父组件传值给子组件的方式，与props一样，但区别在于无论组件层次结构多深，都能拿到数据，因为传递是数据是静态的，所以需要搭配computed做数据响应(vue3)

> 组合式api `setup(props,context)`，props是响应式的，context非响应式，provide、inject等对象可以在里面使用

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

## Vue2Vue3

[vue2和vue3的区别](https://blog.csdn.net/weixin_43638968/article/details/108800361)

> vue3在vue2上做了各种优化

生命周期：setup替换成beforeCreate、created，onBeforeUnmount、onUnmounted替换成beforeDestroy、destroyed，其他的在头部加上on

vue3组件支持多个根节点，修复vue2的警告问题

Vue2 响应式原理基础是Object.defineProperty；Vue3 响应式原理基础是 Proxy

v-if和v-for不要放在同一个元素上，vue2和vue3两者的优先级正好相反

# React

元素渲染必须只有一个根节点

路由安装

```shell
npm install react-router-dom --save
```

状态管理redux

```shell
npm install redux --save
npm install react-redux --save
```

> 项目共享数据较多时使用

store：数据仓库

state：数据存储对象

action：触发数据改变的方法

dispatch：触发action的方法

reducer：通过获取动作，改变数据



自开发项目：简单答题系统