# JavaScript

> 绝大多数数据处理都是字符串，数字，数组，对象等

for...of 便利数组、类数组的对象，for...in 便利对象

数值连接字符串结果为字符串；数组与字符串连接只取[]内的内容

对象实例：new Foo() 的优先级大于 new Foo

!!num : 将数值强制转换为布尔值等同于Boolean(num)

- 函数传入多个值

```javascript
function arr(...args) {
  console.log(args); // [1,2,3]
}
arr(1,2,3)
```

- 一次性函数：初始函数只执行一次

```javascript
function Func() {
    console.log("x");
    Func = function() {
        console.log("y");
    }
}
```

> 代码规范：未完成的功能要加上TODO防止忘记；属性的定义用驼峰命名法；函数需要写清楚方法的功能、接收的参数、各个参数的意义

## this

箭头函数中的this指向的是最外层的this

普通函数中的this指向的是当前函数的this

闭包中的this指向window

严格模式下的this显示未定义

## 对象

`Map`：Map是一组键值对的字典结构，具有极快的查找速度

`Set`：Set与Map类似，也是一组key的集合，但不存储value

> 通过ES6解构就是个数组

`Object`：Object是一个构造函数，用于创建对象

- `'a' in {'a':1}` ：通过键名判断是否存在对象
- `hasOwnProperty` ：判断是否为对象自身属性
- `with(obj)` ：操作当前对象下所有存在的属性

`Promise`：promise的回调函数不是正常的异步任务，而是微任务，执行时间一定早于正常任务，执行时无法中途取消(**ES6方法**)

`async`：返回一个Promise对象，可在函数内部使用await 操作符用于等待一个 Promise 对象(**ES7方法**)

```javascript
async function fun(){
    const data = await get('xx')
}
```

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

delete：删除数组内的值，不影响数组长度，只是索引下的值变为空位

Array.isArray(arr)判断是否为数组，弥补`typeof`的不足

`boolean`：对象前加不加new，结果都不一样

`string`

字符串转base64：`btoa(encodeURIComponent(str))`

base64转字符串：`decodeURIComponent(atob(str))

## 正则

> 正则表达式在处理字符串方面可以提高效率

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

闭包就是将一些重要的，不能轻易修改的变量隐藏起来，不设置为全局变量，再对外提供对这些变量的调用方式

```javascript
function fun() {
  let name = 'kin'
  return function() {
    return name
  }
}
let func = fun()
console.log(func()) // kin
```

IIFE(自执行函数)，闭包表达式不能以花括号结尾

```javascript
(function(){
  let name = "kin"
  let fun = function() {
    return name
  }
  //直接在自执行函数里面调用func，将fun作为参数传入
  func(fun)
}());
function func(f) {
  // 将函数作为参数传入
  console.log(f()) //执行函数
}
```

## 函数示例

- 对象遍历

```javascript
Object.keys(obj).forEach(key => {
 console.log(obj[key]) // foo
})
```

- 根据键值查找对应键名

```javascript
const ages = { Leo: 20, Zoey: 21, Jane: 20};
let val = 20;
export function findKeys(obj, val) {
    return Object.keys(obj).filter(key => obj[key] === val);
}
```

- 获取字符串中重复子串的次数

```js
const str = 'tiktok tok tok tik tok tik';
const searchValue = 'tik';
export function countSubstrings(str, searchValue) {
  let count = 0,i = 0;
  while (true) {
    const r = str.indexOf(searchValue, i);
    if (r !== -1) [count, i] = [count + 1, r + 1];
    else return count;
  }
}
```

- 获取字符串中的数字

```javascript
var s ="价格4500元";
var num= s.replace(/[^0-9]/ig,"");
alert(num);//4500
```

- Promise写法

```javascript
const p1 = new Promise(function(resolve,reject){    
    resolve('success'); //成功时返回的函数    
    reject('fail'); //失败时返回的函数
});
p1.then(function(value){ //then方法接收resolve和reject函数
    console.log(value);
});
```

- 阶乘

```javascript
function n(num) {
  let res = 1;
  for(let i = i;i <= num; i++){
    res *= 1;
  }
  return res;
}
```

- 上拉加载

```javascript
window.onscroll = ()=> {
  //变量scrollTop是滚动条滚动时，距离顶部的距离
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  //变量windowHeight是可视区的高度
  let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
  //变量scrollHeight是滚动条的总高度
  let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  //滚动条到底部的条件
  //scrollTop!=0是由于其他功能在body上设置了最小高度100vh，切换tab的时候body高度位100vh。
  if ((Math.ceil(scrollTop + windowHeight)== parseInt(scrollHeight))&&scrollTop!=0) {
  	this.param.current += 1
  	this.getList()
  }
}
```

- 防抖

```javascript
// 短时间内大量触发同一事件，只会执行一次函数
function debounce(fn,delay){
    let timer = null //借助闭包
    return function() {
        if(timer){
            clearTimeout(timer) 
        }
        timer = setTimeout(fn,delay) // 简化写法
    }
}
```

- 节流

```javascript
// 执行一次后失效，过段时间后再激活
function throttle(fn,delay){
    let valid = true
    return function() {
       if(!valid){
           //休息时间 暂不接客
           return false 
       }
       // 工作时间，执行函数并且在间隔期内把状态位设为无效
        valid = false
        setTimeout(() => {
            fn()
            valid = true;
        }, delay)
    }
}
```

- 在确定范围生成随机数

```js
/**
 * 在确定范围生成随机数
 * @param {*} m 开始
 * @param {*} n 结束
 * @returns 
 */
randomNum(m,n) {
  return Math.floor(Math.random()*(n-m+1)+m);
}
```

- 字符串正则验证

```javascript
/**
 * 字符串验证
 * @param {*} str 待测字符串
 * @param {*} type phone手机号，email邮箱，idCard身份证
 * @returns 
 */
regStr(str, type) {
  switch(type) {
    case 'phone':
      this.patt = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
      break;
    case 'email':
      this.patt = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
      break;
    case 'idCard':
      this.patt = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
      break;
  }
  const pattern = new RegExp(this.patt)
  return pattern.test(str);
}
```

- 对象深度克隆

```javascript
/**
 * 深度克隆
 * @param {*} obj 对象
 * @returns 
 */
copy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
```

- 数组去重

```javascript
/**
 * 数组去重
 * 1. 数值数组[1,2,3,4,2,6,5]
 * 2. 对象数组[{value:1},{value:2},{value:1},{value:'xx'}], 'value'
 * @param {*} arr 数组
 * @param {*} key 对象数组键名
 * @returns 
 */
setArr(arr=[],key='') {
  if(key) {
    arr.forEach(item => {
      if(!this.obj[item[key]]) {
        this.obj[item[key]] = true
        this.data.push(item)
      }
    })
    return this.data
  }
  return [...new Set(arr)]
}
```

- 数组过滤

```javascript
/**
 * 数组过滤
 * 1. 数值数组[1,2,3,4,5], 2
 * 2. 数值数组[1,2,3,4,5], [2,4]
 * 3. 对象数组[{num: 1},{num: 2},{num: 3}], 3, 'num'
 * 4. 对象数组[{num: 1},{num: 2},{num: 3}], [1,3], 'num'
 * 5. 对象数组[{num: 4},{num: 5},{num: 6}], [{num: 5}], 'num'
 * @param {*} arr 主要数组
 * @param {*} val 操作值
 * @param {*} key 对象数组键名
 * @returns 
 */
filterArr(arr=[], val, key='') {
  if(!key && typeof val === 'number') { // 1
    return arr.filter(item => item!=val)
  }
  if(!key && val instanceof Array) { // 2
    return arr.filter(item => !val.includes(item))
  }
  if(key && typeof val === 'number') { // 3
    return arr.filter(item => item[key]!=val)
  }
  if(key && val instanceof Array && typeof val[0] === 'number') { // 4
    return arr.filter(item => !val.includes(item[key]))
  }
  if(key && val instanceof Array && val[0] instanceof Object) { // 5
    let tmpArr = val.map(item => item[key])
    return arr.filter(item => !tmpArr.includes(item[key]))
  }
}
```

- 数组生成树形结构

```javascript
/**
 * 数组转树形结构
 * @param {*} array 主要数组
 * @param {*} id 子节点id
 * @param {*} parent_id 父节点id
 * @param {*} name 根节点键名
 * @returns 
 */
buildTree(array,id,parent_id, name) {
  for(let i in array) {// 先遍历数组，将数组的每一项添加到temp对象中
    this.temp[array[i][id]] = array[i];
  }
  for(let i in this.temp) {// 遍历temp对象，将当前子节点与父节点建立连接
    // 判断是否是根节点下的项
    if(this.temp[i][parent_id] !== name) {
      if(!this.temp[this.temp[i][parent_id]].children) {
        this.temp[this.temp[i][parent_id]].children = new Array();
      }
      this.temp[this.temp[i][parent_id]].children.push(this.temp[i]);
    } else {
      this.tree[this.temp[i][id]] = this.temp[i];
    }
  }
  return this.tree;
}
```

- 对象数组根据键值分组

```javascript
/**
 * 1.键值分组[{name:'a',val:2},{name:'c',val:5},{name:'a',val:6},{name:'b',val:1},{name:'c',val:4},{name:'b',val:7}], 'name'
 * @param {*} arr 
 * @param {*} key 
 * @returns 
 */
groupKey(arr, key) {
  arr.forEach(item => {
    if (!this.obj[item[key]]) {
      this.obj[item[key]] = []
    }
    this.obj[item[key]].push(item)
  })
  return this.obj
}
```

- 数组处理

```javascript
/**
 * 创建对象数组 ['a','b','c'],'objArr','value' //key可选
 * 化简对象数组 [{name: 'kin',age: 15},{name: 'lin',age: 18},{name: 'yin',age: 14}],'mapObjArr','name'
 * 对象数组求和 [{num: 5},{num: 1},{num: 3},{num: 8},{num: 4}],'sum','num'
 * 数组求和 [1,2,3,4,7,5,8],'sum'
 * 对象数组按时间排序 [{id:1,time:'2020-10-06 12:00:11'},{id:1,time:'2020-10-06 09:00:11'},{id:1,time:'2020-10-06 13:10:16'},{id:1,time:'2020-10-06 20:20:51'}],'time','time'
 * @param {*} arr
 * @returns 
 */
setArr(arr, type='', key='') {
  if(type==='objArr') {
    if(key) {
      const result = arr.map(item => {
        return {[key]: item}
      })
      return result
    }else {
      const result = arr.map(item => {
        return {[item]: ''}
      })
      return result
    }
  } else if(type==='mapObjArr') {
    const result = arr.map(item => {
      return {[key]: item[key]}
    })
    return result
  } else if(type==='sum') {
    if(key) {
      return arr.map(item => item[key]).reduce((pre,next) => pre+next)
    }else {
      return arr.reduce((pre,next) => pre+next)
    }
  } else if(type==='time') {
    let tmpArr = arr
    tmpArr.sort(function(a,b){
      return a.time > b.time ? 1 : -1
    })
    return tmpArr
  }
}
```

- 对象跟换键值

```javascript
/**
 * 1.更改键名{value: 2, name: 'xx'}, 'value', 'num'
 * @param {*} obj 
 * @param {*} oldKey 
 * @param {*} newKey 
 * @returns 
 */
changeKey(obj={}, oldKey='', newKey='') {
  obj[newKey] = obj[oldKey]
  delete obj[oldKey]
  return obj
}
```

- 文本复制

```javascript
/**
 * 文本复制
 * @param {*} str 待复制的值
 */
copyText(str) {
  const inputTest = document.createElement('input') //创建一个输入框
  inputTest.value = str //绑定一个待复制的值
  document.body.appendChild(inputTest) //添加节点
  inputTest.select()
  document.execCommand('Copy') //设置复制指令
  inputTest.className = 'oInput' //添加类名
  inputTest.style.display = 'none' //销毁属性
}
```

- 锚点定位

```javascript
/**
 * 锚点定位
 * @param {*} id 标签id
 */
position(id) {
  let height = document.getElementById(`${id}`).offsetTop //滚动条高度
  window.scrollTo({ 
    top: height, 
    behavior: "smooth" 
  })
}
```

- 获取链接参数

```javascript
getUrlParam(url) {
  let obj = {};
  url.match(/(\w+)=(\w+)/g).forEach(item => {
      Object.assign(obj, {
          [item.split('=')[0]]: item.split('=')[1]
      })
  })
  return obj;
}
```

- 数组深度扁平化

```javascript
flatten(arr) {
  return arr.flat(infinity);
  // `${arr}`.split(item => Number(item));
}
```

## 简单题记

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