# JavaScript

基础熟练程度：⭐⭐

## 学习工具

[学习网址](http://caibaojian.com/fedbook/learning/js.html)

[学习工具](http://caibaojian.com/fedbook/tools/js.html)

[JavaScript学习手册](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)

[实用工具](https://tool.ityuan.com/)

- json格式化
- logo设计
- 图片转svg
- base64加密、解密
- 码表
- 二维码、条形码生成

[前后端项目模板自动生成](http://coderd.adjustrd.com/)

[前端页面自动生成平台](http://www.magicalcoder.com/)

[bootstrap页面自动生成平台](http://www.ibootstrap.cn/)

## 简单算法

### 位运算

- `&` 与运算符，全为真，才是真

```js
4&5 = 4 // 0100 & 0101 = 0100
```

- `|` 或运算符，全为假，才是假

```javascript
4|5 = 5 // 0100 | 0101 = 0101
```

- `^` 异或运算符，异为真，同为假

```javascript
4^5 = 1 // 0100 ^ 0101 = 0001
```

- `~` 非运算符，取反

```javascript
~4 = -5 // ~0100 = 1011
```

- `>>` 右移，原数值除以移位乘以2，左移同理

```
4>>1 = 2 // 0100 = 0010, num / (count x 2)
```
### 阶乘

```javascript
function n(num) {
  let res = 1;
  for(let i = i;i <= num; i++){
    res *= 1;
  }
  return res;
}
```

## 笔记提示

- 数值连接字符串结果为字符串；数组与字符串连接只取[]内的内容
- this: 函数中所属的对象；单独使用为全局对象；严格模式未定义；箭头函数表示为外层对象
- 对象实例：new Foo() 的优先级大于 new Foo
- for...of 便利数组，类数组的对象，for...in 便利对象

一次性函数：初始函数只执行一次

```javascript
function Func() {
    console.log("x");
    Func = function() {
        console.log("y");
    }
}
```

数组空值过滤：undefined,null,””,0,false,NaN

```javascript
const arr = [undefined, null, "", 0, false, NaN, 1, 2].filter(Boolean);
```

### Object

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

### Number

- !!num : 将数值强制转换为布尔值等同于Boolean(num)

### String

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

### RegExp

| 修饰符          | 描述                            |
| :----------- | ----------------------------- |
| [0-9], [a-z] | 查找任何从 0 至 9 的数字，a至z的字符        |
| ^, $         | 开始位置，结束位置                     |
| {n}          | n 是一个非负整数。匹配确定的 n 次           |
| \d           | 匹配一个（）非数字字符，等价于 [0-9]         |
| w            | 匹配字母、数字、下划线。等价于'[A-Za-z0-9_]' |

- 获取字符串中的数字

```javascript
var s ="价格4500元";
var num= s.replace(/[^0-9]/ig,"");
alert(num);//4500
```

### Date

- 计算时间差

```javascript
export function getTimeDiff(old_time) {
  let new_date = new Date();
  let difftime = (new_date - old_date)/1000;
  let days = parseInt(difftime/86400);
  let hours = parseInt(difftime/3600)-24*days;
  let minutes = parseInt(difftime%3600/60);
  let seconds = parseInt(difftime%60);
  return days+"天"+hours+"时"+minutes+"分"+seconds+"秒";
}
```

### Promise

- Promise是**ES6**新增加的类，目的是更加优雅地书写复杂的异步任务

```javascript
const p1 = new Promise(function(resolve,reject){    
    resolve('success'); //成功时返回的函数    
    reject('fail'); //失败时返回的函数
});
p1.then(function(value){ //then方法接收resolve和reject函数
    console.log(value);
});
```

> promise执行时无法中途取消

### Generator

在function后有个*，函数内部有yield表达式，**ES6方法**

函数通过next()方法调用，函数执行至yieId时停止执行并返回一个指向内部状态对象的指针

```javascript
function* fun(){  
    console.log('one');  
    yieId '1';  
    console.log("two");  
    yield '2';  
    console.log("three");  
    return '3';
}
var f = fun();
f.next();
```

### async

async 函数返回一个Promise对象，可以使用 then 方法添加回调函数，**ES6方法**

await 操作符用于等待一个 Promise 对象, 它只能在异步函数 async function 内部使用

```javascript
async function fun(){
    const data = await get('xx')
}
```

- 接口异步请求后要判空

## 数据存储

> sessionStorage与localStorage相同

```javascript
localStorage.setItem(key,value); //保存数据
localStorage.getItem(key); //读取数据
localStorage.removeItem(key); //删除单个数据
localStorage.clear(); //删除所有数据
localStorage.key(index); //得到某个索引的key
```

## 防抖节流

在第一次触发事件时，不立即执行函数，而是给出一个期限值比如200ms

如果短时间内大量触发同一事件，只会执行一次函数

```javascript
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

函数执行一次后，在某个时间段内暂时失效，过了这段时间后再重新激活

```javascript
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

debounce

- search搜索联想，用户在不断输入值时，用防抖来节约请求资源
- window触发resize的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖来让其只触发一次

throttle

- 鼠标不断点击触发，mousedown(单位时间内只触发一次)
- 监听滚动事件，比如是否滑到底部自动加载更多，用throttle来判断

## ES6特性

- class类、extends继承、super

```javascript
class Animal {
    constructor() {
    	this.type = 'animal';
	}
}
class Cat extends Animal {
    constructor() {
        super();
        this.type = 'cat';
    }
}
```

- 字符串传变量

```javascript
let str = `数值为${num}`
```

- 数组、对象解构
- 函数定义默认参数
- 对象简写，对象新方法 `assign`

```javascript
let obj = {str: str}; // 等同于 obj = {str}
```

**require与import的区别**

- require/exports 是运行时动态加载，import/export 是静态编译
- require/exports 输出的是一个值的拷贝，import/export 模块输出的是值的引用
- 用法不一致，import/export 不能对引入模块重新赋值/定义；import/export 只能在模块顶层使用，不能在函数、判断语句等代码块之中引用；import/export 导出的模块默认调用严格模式
