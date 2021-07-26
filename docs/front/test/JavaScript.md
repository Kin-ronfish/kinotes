# JavaScript

## 变量定义

var（全局变量），let（局部变量），const（常量）

> let 不能在定义之前访问该变量，不能被重新定义，无法在作用域外调用
>
> const定义的值不可修改，不能被重新定义
>
> !!num : 将数值强制转换为布尔值

## 类型转换

内置数据类型： `null`，`undefined`，`boolean`，`number`，`string`，`symbol`

typeof对于基本类型，除了 `null` 都可以显示正确的类型

Boolean除了 `undefined`， `null`， `false`， `NaN`， `''`， `0`， `-0`，其他值都转为 true

四则运算：数值连接字符串结果为字符串；数组与字符串连接只取[]内的内容

## 函数定义

```javascript
function fun(name, age=2){} // 设置默认值(ES6)，不能有同名参数
(a,b) => {a+b} // 箭头函数，同一行可省略{}，单参数可省略()，无参数必须保留
```

> this: 函数中所属的对象；单独使用为全局对象；严格模式未定义；箭头函数外层this对象

## 关键字

### new

运算符优先级

```javascript
function Foo() {
    return this;
};
Foo.getName = function () {
    console.log('1');
};
Foo.prototype.getName = function () {
    console.log('2');
};

new Foo.getName();   // -> 1，执行getName()
new Foo().getName(); // -> 2，执行Foo()产生实例，再通过原型链找到getName()
```

> new Foo() 的优先级大于 new Foo

## 内置对象

instanceof判断对象的类型

```javascript
const arr = [];
const obj = {};
const str = '';
arr instanceof Array // true
obj instanceof Array // false
```

### Object

#### 基础方法

创建及调用方式

```javascript
obj = {name: 'Kin', age: 15}
obj.name = 'Lin' // 直接调用
obj['name'] = 'Lin' //key值调用
obj.sex = '男' // 加key并赋值
test = {test: '1', ...obj} //(ES6)对象解构
Object.assign(obj,{email: '1451@de.com'}) // (ES6)对象加值
Object.is("1","1") // (ES6)与'==='类似
Object.keys(obj) // (ES5)将对象中的key值整合为数组
```

> ES6属性名与属性值相同时只写一个
>
> prototype对象是原始对象，可通过此对象添加属性和方法
>
> 每个对象都有 `__proto__` 属性，对象可以通过 `__proto__` 来寻找不属于该对象的属性，`__proto__` 将对象连接起来组成了原型链

#### 场景案例

- 对象判空

```javascript
JSON.stringify(data) == "{}"
```

- 遍历对象

```javascript
Object.keys(obj).forEach(key => {
 console.log(obj[key]) // foo
})
```

- 传入一个**特定位置**含有对应字段的值，判断该值属于哪个类型

```javascript
const str = 'note.txt'
const file: any = {pdf: '演示稿',doc: '文档',xls: '表格',txt: '文本'}
const tmpStr: string = str.split('.')[name.split('.').length - 1] //文件截取后缀名
const result = file[tmpStr]
```

### Array

#### 基础方法

```javascript
array.concat(arr1,arr2) //参数：两个数组，合并数组
array.pop() //删除数组尾部
array.shift() //删除数组头部
array.push(val) //数组尾部追加
array.splice(index,num) //参数：索引、个数，删除指定索引的数值
array.sort(arr) //排序
array.reverse(arr) //转置
array.toString(arr) //数组转字符串
array.join(str|num) //参数：字符串或数值，以指定内容为连接符将数组转化为字符串
array.includes(val) //(ES6)数组是否包含指定值，减少if的使用
```

```javascript
for(let item of arr){
    console.log(item)
} // 便利数组，类数组的对象

for(let item in obj){
    console.log(item)
} // 便利对象
```

```javascript
arr.forEach((item, index) => {
    console.log(item, index)
}) //数组循环，无返回值
```

```javascript
arr.map((item, index) => {
    console.log(item, index)
}) // 处理数组每一项并返回一个数组
```

```javascript
arr.filter((item, index) => {
    console.log(item, index)
}) // 过滤不符合条件的内容，即：return一个true的结果
```

```javascript
arr.reduce((prev, next) => {
    console.log('存储值' + prev, '当前值' + next)
}) // 数组每处理好一项，返回一个值
```

```javascript
Array.of(1,2,3) //(ES6)将输入的参数合为一个数组
// [1,2,3]
```

```javascript
let arr = new Set([{a:1},{b:2},{c:3}])
arr = {0:'1',1:'2',2:'3',length:3}; //类数组对象写法
Array.from(arr) //(ES6)将类数组对象或可迭代对象转化为数组
```

```javascript
arr.find((item, index) => {
    return item > 0
}) //(ES6)查找符合条件的元素，如有多个，只返回第一个

arr.findIndex(function) //(ES6)同上，但只返回索引
```

```javascript
arr.fill(val,start,end) //(ES6)填充数组
[1,5,2,6].fill(1) // [1,1,1,1]
```

```javascript
arr.every((item, index) => {
    return item > 0
}) //(ES6)数组中所有项都满足某条件
```

```javascript
array.some((item, index) => {
    return item > 0
}) //(ES6)数组中是否有某一项满足条件
```

```javascript
// 以下返回的是generator函数，可通过next()输出对应的值
const tmp = arr.entries() //(ES6)遍历键值对
const tmp = arr.keys() //(ES6)遍历键名
const tmp = arr.values() //(ES6)遍历键值
tmp.next() //输出
```

```javascript
...arr //(ES6)数组解构
```

#### 场景案例

- 数组包装

```javascript
array.map((item, index) => {
	return 'newVal:' + item + index
}) // 改变数组每个值
```

- 数组去重

```javascript
[...new Set(arr)]
```

```javascript
Array.from(new Set(arr))
```

```javascript
arr.filter((item, index, arr) => return arr.indexOf(item, 0) === index
```

- 数组过滤

```javascript
// 提取两个数组中的相同值和不同值
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
let arr2 = [1, 2, 6]
arr1.filter((item) => {
    return !arr2.includes(item) // [3,4,5,7,8],arr2.includes(item)->[1,2,6]
})
```

```javascript
// 
let arr1 = [{num: 1},{num: 2},{num: 6}]
let arr2 = [1, 2, 3, 4]
arr1.filter((item) => {
    return arr2.includes(item.num) // [{num: 1},{num: 2}]
})
```



- 根据字段分组

```javascript
let arr = [
    {
        groupCheckBasis: 3,
        groupNumber: "bb"
    },
    {
        groupIndex: 2,
        groupNumber: "bb"
    },
    {
        groupCheckBasis: 3,
        groupNumber: "cc"
    },
    {
        groupIndex: 2,
        groupNumber: "aa"
    },
    {
        groupIndex: 1,
        groupNumber: "aa"
    },
    {
        groupCheckBasis: 3,
        groupNumber: "cc"
    }
]
let obj = {}
arr.forEach(item => {
    if (!obj[item.groupNumber]) {
    	obj[item.groupNumber] = []
    }
    obj[item.groupNumber].push(item)
})
```

- 根据字段去重

```javascript
let data = [
    {
        name: 'ZYTX'
    },
    {
        name: 'ZYTA'
    },
    {
        name: 'ZYTX'
    }
]
let hash = {}
let newData=[]
data.forEach(item => {
    if (!hash[item.name]) {
        hash[item.name] = true
        newData.push(item)
    }
})
```

- 数组求平均数

```javascript
const average = (...nums) =>
nums.reduce((acc, val) => acc + val, 0) / nums.length;
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
```

- 求对象数组中的平均数

```javascript
const averageBy = (arr, fn) =>
  arr
    .map(typeof fn === 'function' ? fn : val => val[fn])
    .reduce((acc, val) => acc + val, 0) / arr.length;
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
```

- 根据日期排序

```javascript
arr = [{
  id: 1,
  time:'2021-07-6 18:21:00'
},
{
  id: 2,
  time:'2021-07-08 17:53:00'
},
{
  id: 3,
  time:'2021-07-05 09:28:00'
},
{
  id: 4,
  time:'2021-05-19 19:38:00'
},
{
  id: 5,
  time:'2021-06-19 17:11:00'
}]
dateData(property) {
    return function(a, b) {
        const value1 = a[property]
        const value2 = b[property]
        return Date.parse(value2) - Date.parse(value1)
    }
}
arr.sort(this.dateData('time'))
```

### Number

数值类型的转换，默认为浮点型

#### 基础方法

```javascript
Number() // 转数值型
parseFloat() // 转浮点型
parseInt() // 转整型
isNaN() //是否为空
```

#### 场景案例

```javascript
// 布尔型转数值型
bool = true
num = bool ? 1 : 0
num = +bool
num = Number(bool)
// 数值型转布尔型
num = 1
bool = Boolean(num)
bool = !!num
```

### String

#### 基础方法

```javascript
str.charAt(index) //获取指定索引的字符
str.concat(string) //连接多个字符串
str.indexOf(char) //获取字符串中指定子串的索引
str.replace(string, string) //字符串的替换
str.substr() //参数：索引、长度，截取字符串长度，长度为选填参数
str.split(string) //以指定子串将字符串分割为数组
str.includes("hello") //(ES6)判断是否存在字符串
str.startsWith("he") //(ES6)判断头部是否为此字符串
str.endsWith("Kin") //(ES6)判断尾部
str.repeat(3) //(ES6)字符串重复
```

> 字符串反引号可以传入一个变量值

### RegExp

#### 基础方法

| 修饰符       | 描述                                         |
| :----------- | -------------------------------------------- |
| [0-9], [a-z] | 查找任何从 0 至 9 的数字，a至z的字符         |
| ^, $         | 开始位置，结束位置                           |
| {n}          | n 是一个非负整数。匹配确定的 n 次            |
| \d           | 匹配一个（）非数字字符，等价于 [0-9]         |
| w            | 匹配字母、数字、下划线。等价于'[A-Za-z0-9_]' |

```javascript
var pat = new RegExp("e")
pat.test("The best things") //搜索字符串指定的值，返回真或假
pat.exec("The best things") //检索字符串指定的值，返回被找到的值或返回null
```

#### 场景案例

- 验证手机号

```javascript
const pattern = new RegExp(/^1+(3|4|5|6|7|8|9)\\d{9}$/)
pattern.test('12345678947')
```

- 验证邮箱

```javascript
const pattern = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)
pattern.test('kin@12.com')
```

- 验证身份证号码

```javascript
const pattern = new RegExp(/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/)
pattern.test('11010519880605371X')
```

### Date

#### 基础方法

```javascript
const date = new Date()
console.log(date.getFullYear(),date.getMonth()+1,date.getDate()); // 年月日
console.log(date.getHours(),date.getMinutes(),date.getSeconds()); // 时分秒
```

### Math

#### 基础方法

```javascript
Math.round() //四舍五入
Math.floor(Math.random()*10) //生成 [0,9] 的随机数
Math.floor(Math.random()*10)+n //生成 [0+n,9+n] 的随机数
Math.floor(Math.random()*n*10) //生成 [0,n*10-1] 的随机数
Math.floor(Math.random()*(n-m+1))+m //生成 [m,n] 的随机数
```

### Symbol

symbol(ES6)定义的属性值都是不相等的，有多种写法

```javascript
let sy = Symbol("key")
let syObject = {}
syObject[sy] = "kk"
console.log(syObject) // {Symbol(key1): "kk"}
```

### Promise

#### 基础方法

Promise是ES6新增加的类，目的是更加优雅地书写复杂的异步任务

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

### Generator函数

在function后有个*，函数内部有yield表达式

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

### async函数

async 函数返回一个Promise对象，可以使用 then 方法添加回调函数

await 操作符用于等待一个 Promise 对象, 它只能在异步函数 async function 内部使用

```javascript
async function fun(){
    const data = await get('xx')
}
```

接口调用规范

- 调用接口要采用异步的方式

- 接口调用后要判断返回值是否为空

- 在页面数据显示有问题时，可以从接口得到的数据这开始找原因

```javascript
async handleGetlist() {
  const { data, code, msg } = await apiGetlist()
  if (code !== this.$consts.RET_CODE.SUCCESS) {
    this.$toast(msg)
    return
  }
}
```

## 数据存储

#### 基础方法

```javascript
localStorage.setItem(key,value); //保存数据
localStorage.getItem(key); //读取数据
localStorage.removeItem(key); //删除单个数据
localStorage.clear(); //删除所有数据
localStorage.key(index); //得到某个索引的key
```

> sessionStorage与localStorage相同

## DOM

### 基础方法

```javascript
document.getElementById("id_name"); //获取单个ID
document.getElementsByTagName("p"); //返回HTMLCollection(标签)对象数组
document.getElementsByClassName("class_name"); //返回NodeList(类)对象数组
document.querySelector("#app");//内部所有的标签和属性
// 节点和属性操作
var tmp = document.getElementById("id_name")
tmp.createElement("p") //创建<p>元素
tmp.appendChild("a") //添加<a>元素
tmp.removeChild("a") //移除<a>元素
tmp.getAttribute //获取属性
tmp.setAttribute //设置属性
tmp.removeAttribute //删除属性
```

### 场景案例

- 原始内容复制到剪切板

```javascript
const inputTest = document.createElement('input') //创建一个输入框
inputTest.value = this.applyUrl //绑定一个待复制的值
document.body.appendChild(inputTest) //添加节点
inputTest.select()
document.execCommand('Copy') //设置复制指令
inputTest.className = 'oInput' //添加类名
inputTest.style.display = 'none' //销毁属性
```

## 防抖节流

### 基础方法

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

### 场景案例

debounce

- search搜索联想，用户在不断输入值时，用防抖来节约请求资源
- window触发resize的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖来让其只触发一次

throttle

- 鼠标不断点击触发，mousedown(单位时间内只触发一次)
- 监听滚动事件，比如是否滑到底部自动加载更多，用throttle来判断

## 代码规范笔记

工作进度定义：50%-页面完成， 60%-接完接口， 80%-完成业务逻辑， 90%-已自测可提测， 100%-测试通过

组件的导入，用驼峰命名法 `ButtonGroup`

组件使用属性名称为横线风格 `btn-text`

颜色代码都用小写，用#xxxx颜色显示

图片导入从this.$consts.FILE_HOST获取地址，拼接图片

方法命名handleXXX()，接口apiXXX()

接口方法需要写清楚方法的功能、接收的参数、各个参数的意义

静态变量用计算属性返回，标签判断较多也用计算属性返回

uniapp mescroll下拉加载，upOption.page会自动加一

组件内部用emit直接用事件名XXX

页面跳转参数用对象形式

uni-app取路由参数用onLoad

get请求传递的参数要加个{}，post请求传递的参数不用加{}

代码尽量不要超出500行

累计操作用reduce，每循环一次可以取到上一次处理后返回的值

未完成的功能要加上TODO防止忘记

标签绑定函数，没有传值时不加()

在if语句中凡是undefined、null、空字符串、NAN、0都是执行false语句

uniapp下拉刷新上拉加载列表代码应当模板化

solt插槽不可动态渲染

方法绑定后需要解绑，created、onLoad调用uni.$on，beforeDestory、onUnload调用uni.$off

api调用使用es6解构要考虑undefined的情况

uniapp里image标签必须指定mode属性

typescript 接口，类型注释，js对象注释等，注释写在字段上面

```typescript
/** 数量 */
number: number
```

调用接口前加加载图标，完成接口调用便取消

```javascript
// uniapp
this.$loading()
const { head } = await apiSave()
this.$hideLoading()
if (head.ret !== this.$consts.RET_CODE.SUCCESS) return
// html
this.loading = true
const { head } = await apiSave()
this.loading = false
if (head.ret !== this.$consts.RET_CODE.SUCCESS) return
```

curl发送方法：在Network/XHR下，右击有问题的接口，选择Copy/Copy as Curl(bash)

项目安装包时出问题，可以把yarn.lock，package-lock.json删除后重装
