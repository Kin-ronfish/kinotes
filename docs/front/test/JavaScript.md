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

四则运算：数值连接字符串=>字符串；数组与字符串连接只取[]内的内容

## 函数定义

```javascript
function fun(name, age=2){} // 设置默认值(ES6)，不能油同名参数
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

### Object

创建及调用方式

```javascript
obj = {name: 'Kin', age: 15}
obj.name = 'Lin' // 直接调用
obj['name'] = 'Lin' //key值调用
obj.sex = '男' // 加key并赋值
test = {test: '1', ...obj} //(ES6)对象解构
Object.assign(obj,{email: '1451@de.com'}) // (ES6)对象加值
Object.is("1","1") // (ES6)与'==='类似
```

> ES6属性名与属性值相同时只写一个
>
> ES6函数名以变量显示需加[]
>
> prototype对象是原始对象，可通过此对象添加属性和方法
>
> 每个对象都有 `__proto__` 属性，对象可以通过 `__proto__` 来寻找不属于该对象的属性，`__proto__` 将对象连接起来组成了原型链

### Number

数值类型的转换，默认为浮点型

```javascript
parseFloat() // 转浮点型
parseInt() // 转整型
isNaN() //是否为空
```

### String

字符串操作

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

### Date

获取时间

> [dayjs时间处理插件](https://dayjs.fenxianglu.cn/)

### Array

数组操作

```javascript
array.concat(arr,arr) //参数：两个数组，合并数组
array.pop() //删除数组尾部
array.shift() //删除数组头部
array.push(val) //数组尾部追加
array.splice(index,num) //参数：索引、个数，删除指定索引的数值
array.sort(arr) //排序
array.reverse(arr) //转置
array.toString(arr) //数组转字符串
array.join(str|num) //参数：字符串或数值，以指定内容为连接符将数组转化为字符串

for(let item of arr){} // 便利数组，类数组的对象
for(let item in obj){} // 便利对象
array.forEach(function) //数组循环，无返回值
array.map(function) // 处理数组每一项并返回一个数组，例：对数组每一项加上1
array.filter(function) // 过滤不符合条件的内容，即：return一个true的结果
array.reduce(function) // 数组每处理好一项，返回一个值
array.of(param) //(ES6)将输入的参数合为一个数组
array.from(arr) //(ES6)将类数组对象或可迭代对象转化为数组
arr = {0:'1',1:'2',2:'3',length:3}; //类数组对象写法
array.find(function) //(ES6)查找符合条件的元素，如有多个，只返回第一个
array.findIndex(function) //(ES6)同上，但只返回索引
array.fill(startindex,val,endindex) //(ES6)根据索引区间跟换值
array.every(function) //(ES6)数组中所有项都满足某条件
array.some(function) //(ES6)数组中是否有某一项满足条件
array.entries() //(ES6)遍历键值对
array.keys() //(ES6)遍历键名
array.values() //(ES6)遍历键值
array.includes() //(ES6)数组是否包含指定值，减少if的使用
...arr //(ES6)数组解构
```

### Math

```javascript
Math.round() //四舍五入
Math.floor(Math.random()*10) //生成 [0,9] 的随机数
Math.floor(Math.random()*10)+n //生成 [0+n,9+n] 的随机数
Math.floor(Math.random()*n*10) //生成 [0,n*10-1] 的随机数
Math.floor(Math.random()*(n-m+1))+m //生成 [m,n] 的随机数
```

### RegExp

```javascript
var pat=new RegExp("e")
pat.test("The best things") //搜索字符串指定的值，返回真或假
pat.exec("The best things") //检索字符串指定的值，返回被找到的值或返回null
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



## 数据存储

```javascript
localStorage.setItem(key,value); //保存数据
localStorage.getItem(key); //读取数据
localStorage.removeItem(key); //删除单个数据
localStorage.clear(); //删除所有数据
localStorage.key(index); //得到某个索引的key
```

> sessionStorage与localStorage相同

## DOM

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

## 函数方法

### 数组操作

> 判断数组中的所有值是否都满足条件

```js
const all = (arr, fn = Boolean) => arr.every(fn);
```

```js
all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
```

> 判断数组中是否存在一个满足条件的值

```js
const any = (arr, fn = Boolean) => arr.some(fn);
```

```js
any([0, 1, 2, 0], x => x >= 2); // true
any([0, 0, 1, 0]); // true
```

> 判断数组的所有值是否都相同

```js
const allEqual = arr => arr.every(val => val === arr[0]);
```

```js
allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
```

> 判断数组的所有值是否都相同，加入数学格式公式

```js
const allEqualBy = (arr, fn) => {
  const eql = fn(arr[0]);
  return arr.every(val => fn(val) === eql);
};
```

```js
allEqualBy([1.1, 1.2, 1.3], Math.round); // true
allEqualBy([1.1, 1.3, 1.6], Math.round); // false
```

> 判断数组是否为递增式数组

```js
const allUnique = arr => arr.length === new Set(arr).size;
```

```js
allUnique([1, 2, 3, 4]); // true
allUnique([1, 1, 2, 3]); // false
```

> 判断数组是否为递增式数组，加入数学格式公式

```js
const allUniqueBy = (arr, fn) => arr.length === new Set(arr.map(fn)).size;
```

```js
allUniqueBy([1.2, 2.4, 2.9], Math.round); // true
allUniqueBy([1.2, 2.3, 2.4], Math.round); // false
```

> 把一维数组转为二维数组

```js
const aperture = (n, arr) => // n为内部数组长度
  n > arr.length
    ? []
    : arr.slice(n - 1).map((v, i) => arr.slice(i, i + n));
```

```js
aperture(2, [1, 2, 3, 4]); // [[1, 2], [2, 3], [3, 4]]
aperture(3, [1, 2, 3, 4]); // [[1, 2, 3], [2, 3, 4]]
aperture(5, [1, 2, 3, 4]); // []
```

> 创建一个指定公差和指定结束值的等差数列

```js
const arithmeticProgression  = (n, lim) =>
  Array.from({ length: Math.ceil(lim / n) }, (_, i) => (i + 1) * n );
```

```js
arithmeticProgression(5, 25); // [5, 10, 15, 20, 25]
```

> 数组转CSV格式

```js
const arrayToCSV = (arr, delimiter = ',') =>
  arr
    .map(v =>
      v.map(x => (isNaN(x) ? `"${x.replace(/"/g, '""')}"` : x)).join(delimiter)
    )
    .join('\n');
```

```js
arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'
arrayToCSV([['a', '"b" great'], ['c', 3.1415]]);
// '"a","""b"" great"\n"c",3.1415'
```

> 数组求平均数

```js
const average = (...nums) =>
  nums.reduce((acc, val) => acc + val, 0) / nums.length;
```

```js
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
```

```js
const converge = (converger, fns) => (...args) =>
  converger(...fns.map(fn => fn.apply(null, args)));
```

```js
const average = converge((a, b) => a / b, [
  arr => arr.reduce((a, v) => a + v, 0),
  arr => arr.length
]);
average([1, 2, 3, 4, 5, 6, 7]); // 4
```

> 求对象数组中的平均数

```js
const averageBy = (arr, fn) =>
  arr
    .map(typeof fn === 'function' ? fn : val => val[fn])
    .reduce((acc, val) => acc + val, 0) / arr.length;
```

```js
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
```

> 根据传入的数组和判断数组，输出一个二维数组，并将原数组里显示false索引的值取出，放到另外一个数组中

```js
const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [
    [],
    [],
  ]);
```

```js
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]);
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```

> 与上面的效果相同，只是加入了条件

```js
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [
    [],
    [],
  ]);
```

```js
bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b');
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```

> 将字符串数组转为数值数组

```js
const binary = fn => (a, b) => fn(a, b);
```

```js
['2', '1', '0'].map(binary(Math.max)); // [2, 1, 2]
```

> 传入一个值，返回其索引值

```js
const binarySearch = (arr, item) => {
  let l = 0,
    r = arr.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const guess = arr[mid];
    if (guess === item) return mid;
    if (guess > item) r = mid - 1;
    else l = mid + 1;
  }
  return -1;
};
```

```js
binarySearch([1, 2, 3, 4, 5], 1); // 0
binarySearch([1, 2, 3, 4, 5], 5); // 4
binarySearch([1, 2, 3, 4, 5], 6); // -1
```

> 第n项等于前面所有项的累加 n = n + Sn

```js
const accumulate = (...nums) =>
  nums.reduce((acc, n) => [...acc, n + +acc.slice(-1)], []);
```

```js
accumulate(1, 2, 3, 4); // [1, 3, 6, 10]
accumulate(...[1, 2, 3, 4]); // [1, 3, 6, 10]
```

### 字符操作

> 将字符串转换成base64格式

```js
const atob = str => Buffer.from(str, 'base64').toString('binary');
```

```js
atob('Zm9vYmFy'); // 'foobar'
```

> 将base64格式转换成字符串

```js
const btoa = str => Buffer.from(str, 'binary').toString('base64');
```

```js
btoa('foobar'); // 'Zm9vYmFy'
```

> 输出字符串长度

```js
const byteSize = str => new Blob([str]).size;
```

```js
byteSize('😀'); // 4
byteSize('Hello World'); // 11
```

> 字符编码移位

```js
const caesarCipher = (str, shift, decrypt = false) => {
  const s = decrypt ? (26 - shift) % 26 : shift;
  const n = s > 0 ? s : 26 + (s % 26);
  return [...str]
    .map((l, i) => {
      const c = str.charCodeAt(i);
      if (c >= 65 && c <= 90)
        return String.fromCharCode(((c - 65 + n) % 26) + 65);
      if (c >= 97 && c <= 122)
        return String.fromCharCode(((c - 97 + n) % 26) + 97);
      return l;
    })
    .join('');
};
```

```js
caesarCipher('Hello World!', -3); // 'Ebiil Tloia!'
caesarCipher('Ebiil Tloia!', 23, true); // 'Hello World!'
```

> 将单词的首字母转为大写

```js
const capitalizeEveryWord = str =>
  str.replace(/\b[a-z]/g, char => char.toUpperCase());
```

```js
capitalizeEveryWord('hello world!'); // 'Hello World!'
```

## 笔记

1. if嵌套，判错return