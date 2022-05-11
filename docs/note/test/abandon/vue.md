# Vue

> [Vue框架官网文档](https://cn.vuejs.org/v2/guide/)

## 优缺点

优点：简洁、轻量、快速、指令、数据驱动、双向数据绑定、模块友好、组件化、插件化。

缺点：部分功能还不够完善，支持的库和拓展的丰富性还有待提升，老浏览器的支持不太好，数据复杂起来不好维护。

## 语法

- `v-if`, `v-else` 设置此标签是否被渲染
- `v-show` 设置标签是否显示
- `v-for` 循环输出内容，key主要作用是提高渲染性能，key属性可以避免出现数据混乱
- `v-model` 数据双向绑定，是一个语法糖，绑定数据并且监听数据改变
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

> 组件绑定key值，可以通过修改key值在重新渲染组件

> vue中的data必须是函数是为了保证组件的独立性和可复用性

## 生命周期

Vue[生命周期](https://v3.cn.vuejs.org/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA)共有八个执行函数：

- beforeCreate() 数据和事件方法还未绑定到app对象上,此时可执行Ajax
- created() 数据和事件方法已绑定到app对象上
- beforeMount() 渲染前数据还未生成的DOM对象
- mounted() 渲染后可以获取数据生成的DOM对象
- beforeUpdate(), updated() 组件更新时触发
- beforeDestroy(), destroyed() 组件销毁时触发

## 内置对象

- props 用于组件间的数据传输对象
- data 用于放置当前组件可使用的数据
- components 在导入组件时需要在此对象内映射组件
- methods 组件的所有函数方法都可在此对象中申明
- computed 在标签中如果定义的函数较长且只取返回值的话，就可以使用计算属性
- watch 放置监听函数的对象，在学习当中此对象不常用

```javascript
this.$emit('eventName',param) // 子组件传值给父组件的连接事件
```

> 当用emit从子组件传出来的事件，父组件在使用子组件的时候不能带参数，否则会将原有传出的参数覆盖

```html
<button @eventName="handlePrint">打印</button>
<button @eventName="handlePrint('str')">打印</button>
<script>
	export default {
        methods: {
            handlePrint(param) {
                console.log(param) // 按钮1输出param，按钮2输出str
            }
        }
    }
</script>
```

## 内置组件

`<keep-alive>` 会缓存不活动的组件实例，这是一个抽象组件，自身不会渲染成一个DOM元素。缓存的组件可以防止重复渲染DOM，提高性能。

内置props

- include - 字符串或正则表达式。只有名称匹配的组件会被缓存。
- exclude - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。
- max - 数字。最多可以缓存多少组件实例。

使用方法

```html
<keep-alive include='test'>
	<router-view/> <!-- 将缓存name为test的组件 -->
</keep-alive>
<keep-alive include='a,b'>
    <router-view/> <!-- 将缓存name为a或者b的组件，结合动态组件使用 -->
</keep-alive>
<keep-alive :include='includedComponents'>
    <router-view/> <!-- 动态判断 -->
</keep-alive>
<keep-alive exclude='test'>
    <router-view/> <!-- 将不缓存name为test的组件 -->
</keep-alive>
```

## 插槽slot

1. 匿名、具名插槽

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

2. 利用插槽编写按钮组件

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

3. 作用域插槽

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

## 组件通讯

1. 父组件通过改变传入子组件的状态来调用子组件的函数

```html
<!-- 父组件 -->
<template>
	<div>
        <child :flag="flag"></child>
        <button @click="flag=!flag">点击</button>
	</div>
</template>
<script>
    import child from '../components/child.vue'
    export default {
        data() {
            return {
                flag: true
            }
        }
    }
</script>
```

```html
<!-- 子组件 -->
<template>
	<div v-if="show">内容</div>
</template>
<script>
    export default {
        props: {
            flag: {
                type: Boolean,
                default: () => {return false}
            }
        },
        data() {
            return {
                show: false
            }
        },
        watch: {
            flag(newVal,oldVal) {
                this.print()
            }
        },
        methods: {
            print() {
                console.log('事件触发')
                this.show = true
            }
        }
    }
</script>
```

2. 子组件通过事件调用父组件的函数

```html
<!-- 父组件 -->
<template>
	<view>
        <child @event="getValue"></child>
	</view>
</template>
<script>
    import child from '../components/child.vue'
    export default {
        methods: {
            getValue(value) {
                console.log('事件触发',value)
            }
        }
    }
</script>
```

```html
<!-- 子组件 -->
<template>
    <button @click="print">点击</button>
</template>
<script>
    export default {
        methods: {
            print() {
                this.$emit('event',0) // 子组件传出的事件
            }
        }
    }
</script>
```

3. 父子组件通过状态及事件控制内容显示和隐藏

> 如果子组件中的状态是由父组件传进来的，需要通过事件改变父组件的状态来同步修改。
>
> 在子组件里修改flag，父组件里的flag不会随之改变。

```html
<!-- 父组件 -->
<template>
  <div>
    <child :flag="flag" @event="getValue"></child>
    父组件内容：<span v-if="show">{{content}}</span>
    <button @click="setValue">父组件按钮</button>
  </div>
</template>
<script>
import child from './components/child.vue'
export default {
  data() {
      return {
          flag: true,
          content: '新增内容',
          show: false
      }
  },
  components: {
    child
  },
  methods: {
      setValue() {
          this.flag = !this.flag
      },
      getValue(value) {
          this.show = value
          console.log('显示或隐藏父组件内容')
      }
  }
}
</script>
```

```html
<!-- 子组件 -->
<template>
    <div>
        子组件内容：<span v-if="show">{{content}}</span>
        <button @click="setValue">子组件按钮</button>
    </div>
</template>
<script>
    export default {
        props: {
            flag: {
                type: Boolean,
                default: () => {return false}
            }
        },
        data() {
            return {
                show: false,
                content: '新增内容',
                val: false
            }
        },
        watch: {
            flag(newVal, oldVal) {
                console.log(newVal, oldVal)
                this.setVal(newVal)
            }
        },
        methods: {
            setVal(val) {
                this.show = val
                console.log('显示或隐藏子组件内容')
            },
            setValue() {
                this.val = !this.val
                this.$emit('event',this.val) // 子组件传出的事件
            }
        }
    }
</script>
```

## Vuex

此组件相当于定义了一个全局的data，在多个组件同时需要要到同组数据时可使用。

- `Store`  数据仓库对象
- `state` 用于存储数据
- `getters` 调用方法
- `mutations` 更改store中的状态的唯一方法，类似于事件
- `actions` 提交mutation,不变更状态,可含异步操作
- `modules` 数据模块太多可以分离使用

在外部使用store管理仓库内数据的方法。

- `mapState()` , `mapGetters()` , `mapMutations()` 都为映射函数，只有返回值。
- `$store.commit()` , `$store.dispatch()` 分别是 `mutations` , `actions` 的触发函数。

```javascript
mapState(['Name' ]),
mapGetters(['functionName']),
mapMutations(['functionName'])
$store.commit('functionName')
$store.dispatch('functionName')
```

> vue组件化设计的作用是将页面中相同的代码块抽出并整合成一个组件，这样可以减少多余的重复代码，优化代码的数量。

## Router

路由嵌套

```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/user/:id', //动态路由
      component: User,
      children: [
        {
          path: 'profile',
          component: UserProfile,
          redirect: '/new' //路由重定向
        },
        {
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
})
```

视图嵌套

- 通过设置视图名来定义不同视图

- 确保正确使用components配置（加上s）

```html
<router-view/>
<router-view name="helper"/>
<script>
	const router = new VueRouter({
        routes: [
            {
                path: 'profile',
                components: {
                    default: UserProfile,
                    helper: UserProfilePreview
                }
            }
        ]
    })
</script>
```

路由跳转

- 标签声明式跳转
- 函数编程式跳转

```html
<router-link to="/foo">Go to Foo</router-link>
<router-link to="/foo" replace>Go to Foo</router-link>
<script>
    router.push('home') //有存储历史记录
    router.push({ path: 'register', query: { plan: 'private' }})
    router.replace('home') //新路由代替旧路由，没有历史记录
    router.go(1) //在历史记录里前进后退
</script>
```

组件传参

- 通过props传递对象，函数

```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/promotion/from-newsletter',
      component: Promotion,
      props: { newsletterPopup: false }
    }
  ]
})
```

设置路由模式

- 设置为hash模式。网址后有个#，设置为history则没有

```javascript
const router = new VueRouter({
  mode: 'history' | 'hash',
  routes
})
```

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

- 安装[axios](http://www.axios-js.com/zh-cn/docs/)插件，在 `main.js` 文件下添加以下代码

```javascript
// main.js
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'
axios.defaults.headers.common['Authorization'] = 'xxx' //根据情况添加请求头
```
