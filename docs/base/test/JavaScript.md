# JavaScript
## 变量定义
var函数作用域，常用于变量申明，定义全局变量。
```javascript
var str = "";
var num = 0;
var arr = [];
```
let块作用域，**不能在定义之前访问该变量，不能被重新定义，无法在作用域外调用**，定义局部变量。(ES6)
```javascript
{
  console.log(num); //报错
  let num = 0;
  let num = 2; //报错
}
console.log(num); //报错
```
const定义的值**不可修改，不能被重新定义**，定义常量。(ES6)
```javascript
{
  console.log(NUM); //报错
  const NUM = 0;
  const NUM = 2; //报错
  NUM = 1; //报错
}
console.log(NUM); //报错
```
## 函数定义
普通函数定义
```javascript
function fun(param1,param2...) {
    console.log("hello,Kin" + param1);
}
```
设置默认参数，**不能有同名参数** (ES6)

```javascript
function fun1(name,age=2){
  console.log(name,age);
}
fun1("Jim",5); //输出Jim5
fun1("Jim",null); //输出Jimnull，只有为传递参数或传递undefined时才会使用默认参数
function fun2(...values){ //利用数组解构法传递多个参数
  console.log(values.length);
}
fun(1,2); //输出2
fun(1,2,3); //输出3
```

箭头函数(Lambda函数)，简化原始函数，省去function字段。

```javascript
//两种方法同理
var fun = a => a;
var fun = function(a){return a;}
var fun = (a,b) => a+b; //无参或多参要用()
var fun = (id,name) =>({id,name}); //返回对象时须在外围加上()用于区分代码块，属性名和属性值相同可简写
```

> 在函数中，this表示该方法所属的对象。
>
> 单独使用或在函数中，this表示全局对象。
>
> 在函数的严格模式下，this是未定义的(undefined)。
>
> 在事件中，this表示接收事件的元素。
>
> 箭头函数中的this指向的是定义的时候外层的this对象。

报错调试函数

```javascript
try{
    console.log('此处可能存在问题')
} catch(e){
    console.log('执行方法1')
} finally{
    console.loag('最终执行方法')
}
```
> !!Num：强制转换为布尔值
## object对象
object对象实例化
```javascript
person = new Object();
person.firstname = "John";
person.lastname = "Doe";
```
通过键值创建
```javascript
person={firstname:"John",lastname:"Doe",age:50,eyecolor:"blue"};
```
通过对象构造器创建
```javascript
function person (firstname,lastname) {
	this.firstname = firstname;
	this.lastname = lastname;
}
person.firstname = "John";
person.lastname = "Doe";
```
## prototype对象
1. 所有的JavaScript对象都会从一个prototype中继承属性和方法。
2. 使用prototype给对象添加属性和方法：
```javascript
person.prototype.nationality = "English"; //添加属性并赋值
person.prototype.name = function() { //添加方法
	return this.firstName + " " + this.lastName;
};
```
## Number对象
```javascript
console.log(Number.MAX_VALUE) //输出最大值
console.log(Number.MIN_VALUE) //输出最小值
console.log(Number.NaN) //输出NaN值
_.parseFloat() //将数据转换成浮点型。
_.parseInt() //将数据转换成整型。
_.isNaN() //判断是否为空值。
```
## String对象
```javascript
str = "hello,Kin";
str.charAt() //参数：数值，获取指定索引的字符
str.concat() //参数：字符串，连接多个字符串
str.indexOf() //参数：字符，获取字符串中指定子串的索引
str.match() //匹配正则表达式
str.replace() //两个参数：字符串，字符串的替换
str.search() //与indexOf相同
str.substr() //参数：索引、长度，截取字符串长度，长度为选填参数
str.split() //参数：字符串，以指定子串将字符串分割为数组
str.toLowerCase() //将字符串转换为大写
str.toUpperCase() //将字符串转换为小写
```
## Date对象
```javascript
let date = new Date();
date.getFullYear() //获取年份
date.getMouth()+1 //获取月份
date.getDate() //获取日期
date.getHours() //获取小时
date.getMinutes() //获取分钟
date.getSeconds() //获取秒钟
```
## Array对象
```javascript
var array = new Array();
array.concat() //参数：两个数组，合并数组
array.pop() //删除数组尾部
array.shift() //删除数组头部
array.push() //数组尾部追加
array.splice() //参数：索引、个数，删除指定索引的数值
array.sort() //排序
array.reverse() //转置
array.toString() //数组转字符串
array.join() //参数：字符串或数值，以指定内容为连接符将数组转化为字符串
```
### 数组操作
`for...of...` 可以用来便利数组，类数组的对象。
```javascript
let arr = [1,2,3,4,5,6,7,8];
for(let item of arr) {
    console.log(item);
}
```
`for...in...` `主要用于便利对象，不适用于遍历数组。
```javascript
let obj = {"user":"Kin","account":"Lkin","password":123};
for(let item in obj) {
    console.log(obj[item]);
}
```

`forEach()` 对数组直接进行循环,相当于直接for循环，没有返回值。
```javascript
let result = arr.forEach((item,index,arr)=>{
	console.log("值："+item);
	console.log("索引："+index);
	console.log(arr);
})
console.log(result);
```
`map()` 对数组每一项进行加工,加工完成之后返回1个新的数组。
```javascript
let arr2 = ['香蕉','苹果','雪梨'];
let result2 = arr2.map((item,index,arr)=>{
	let str = index + item + index;
	return str;
})
console.log(result2);
```
`filter()` 将想要的内容进行筛选,不要的内容去除,最终返回想要的内容。
```javascript
let arr3 = [1,2,3,4,5,6,7,8,9];
let result3 = arr3.filter((item,index)=>{
	if(item%2==0){// 通过返回true还是false进行选择
		return true; //true就是保留
	}else{
		return false; //false就是去除
	}
})
console.log(result3);
```
`reduce()` 对整个数组进行整合，比如要做一个将数组里所有的数字进行整合，将数组每一项内容整合后，返回1个内容。
```javascript
let arr4 = [1,2,3,4,5,6,7,8,9];
let result4 = arr4.reduce((pre,next,index)=>{
	console.log("累加值："+pre);
	console.log("值："+next);
	console.log("索引："+index);
	return pre+next;
},0);
console.log(result4);
```
## Math对象
```javascript
Math.round() //四舍五入
Math.random() //生成一个 [0,1) 的随机数
Math.max() //输出最大值
Math.min() //输出最小值
Math.floor(Math.random()*10) //生成 [0,9] 的随机数
Math.floor(Math.random()*10)+n //生成 [0+n,9+n] 的随机数
Math.floor(Math.random()*n*10) //生成 [0,n*10-1] 的随机数
Math.floor(Math.random()*(n-m+1))+m //生成 [m,n] 的随机数
```
## RegExp对象
`test()` 方法搜索字符串指定的值，根据结果并返回真或假。
```javascript
var pat=new RegExp("e");
pat.test("The best things");
```
`exec()` 方法检索字符串中的指定值，返回被找到的值，没有则返回null。
```javascript
var pat=new RegExp("e");
pat.exec("The best things");
```
## Location本地
```javascript
console.log(location.pathname); //返回URL的路径名。
console.log(location.href); //返回当前页面的URL。
```
## History历史
```javascript
history.back() //返回上一页。
history.forward() //跳到下一页。
```
## 弹窗
`alert()` 警告框，`confirm()` 确认框，`prompt() ` 提示框
## 计时函数
```javascript
setInterval(()=>{
    console.log("Kin");
},1000); //间隔指定的毫秒数不停地执行指定代码。
setTimeout(()=>{
    console.log("Kin");
},1000); //在指定的毫秒数后执行指定代码。
```
## Cookie
1. 用于存储web页面的用户信息
2. 创建 cookie: document.cookie = “user=John”
3. 读取 cookie: document.cookie
4. 修改 cookie: document.cookie = “user=Doe”
5. 删除 cookie: document.cookie = “user=”
### 本地存储
```javascript
localStorage.setItem(key,value); //保存数据
localStorage.getItem(key); //读取数据
localStorage.removeItem(key); //删除单个数据
localStorage.clear(); //删除所有数据
localStorage.key(index); //得到某个索引的key
```
### 临时存储
```javascript
sessionStorage.setItem(key,value); //保存数据
sessionStorage.getItem(key); //读取数据
sessionStorage.removeItem(key); //删除单个数据
sessionStorage.clear(); //删除所有数据
sessionStorage.key(index); //得到某个索引的key
```
## document
> **DOM操作只有在页面渲染后才能找到对应的标签属性。**
```javascript
document.getElementById("id_name"); //获取单个ID
document.getElementsByTagName("p"); //返回HTMLCollection(标签)对象数组
document.getElementsByClassName("class_name"); //返回NodeList(类)对象数组
document.querySelector("#app");//内部所有的标签和属性
```
## 节点操作
```javascript
var tmp = document.getElementById("id_name");
tmp.createElement("p"); //创建<p>元素
tmp.createTextNode("新段落"); //为<p>创建一个新的文本节点
para.appendChild(node); //添加元素至尾部
para.insertBefore(node); //添加元素至头部
para.removeChild(node);//移除元素
para.replaceChild(node);//替换元素
```
## 属性操作
```javascript
var tmp = document.getElementById("id_name");
tmp.getAttribute //获取属性
tmp.setAttribute //设置属性
tmp.removeAttribute //删除属性
```
## 文本操作
```javascript
var tmp = document.getElementById("id_name");
tmp.insertData(set,string) //从set指定的位置插入string
tmp.appendData(string) //尾部追加string
tmp.deleteData(set,count) //从set起删除count个字符
tmp.replaceData(set,count,string) //从set将count个字符用string替代
tmp.splitData(set) //从set起将文本节点分成两个节点
tmp.substring(set,count) //返回有set起的count个节点
```
## Ajax请求
**请求方法的特点**
- GET：用于查询数据，使用get方式所发送信息的数量有限制，只能发送普通格式的数据。
- POST：用于向服务器发送数据，对所发送的数据的大小理论上是没有限制，可以发送多种格式的数据。
```javascript
xmlhttp=new XMLHttpRequest(); //创建对象
xmlhttp.open(method,url,async); //发送请求
xmlhttp.send(); //数据接收
xmlhttp.responseText; //获得字符串形式的响应数据
xmlhttp.responseXML; //获得XML形式的响应数据
```

