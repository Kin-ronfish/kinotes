# 试题笔记

## JavaScript

1. var、let、const的区别

  var定义的是全局变量，let定义的是局部变量，const定义的是不可改变的局部变量。

2. 数据类型有哪几种

  Number、String、Boolean、object、null、undefined、symbol(es6)

3. 事件循环

  JavaScript引擎会不停的检查，同步任务执行完后就去检查挂起的异步任务

4. 什么是闭包

  闭包是外部函数调用函数内部的函数来访问内部申明的属性

5. 页面居中有多少种方法

  margin：auto；弹性布局

## Vue

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

# 代码编写

1. Promise是什么

  Promise是es6中的一个构造函数，也是一个对象，主要编写异步函数
```javascript
new promise((resolve,reject) => {
resolve(“成功”)
}).then(res => {})
```