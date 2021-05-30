# ES6
## let&const
1. let声明的变量为块作用域。
```javascript
{
  let num = 0;
  console.log(num); //输出0
}
console.log(num); //报错
```
2. let不可以在为定义前使用。
```javascript
console.log(num); //报错
let num = 0;
```
3. let不可以重复声明。
```javascript
let num = 0;
let num = 2; //报错
```
4. const定义块作用域常量，为不可修改的值。
```javascript
const NUM = 0;
NUM = 2; //报错
```
5. const除了定义的值不可变，其余的都与let相同。
```javascript
{
  const NUM = 0;
  console.log(NUM); //输出0
}
console.log(NUM); //报错
```
```javascript
console.log(num); //报错
const num = 0;
```
```javascript
const num = 0;
const num = 2; //报错
```
6. var、let、const三者的特点及区别。
- var可以申明全局变量，也可以申明局部变量，在编写代码时，几乎兼容各种情况。
- let在声明上限制了其作用域，在代码块内声明，外部便无法进行访问，声明前也无法进行访问，无法进行重复声明，与var相比，增加了代码的局限性，在使用变量时可以减少一些变量被重写的可能。
- const声明的是一个不可需改的常量，其他特性与let相似，其变量声明方式与前两者相比的最大好处就是值不可修改，这可以防止数据的赋值操作导致原有数据发生改变。
## 解构赋值
1. 数组解构，左右两边必须都有[]。
```javascript
let [z,x,c] = [1,2,3];
console.log(z);
console.log(x);
console.log(c);
```
2. 数组其他解构情况。
```javascript
let [z,[x]] = [4,[5]]; //嵌套
let [z,,c] = [1,2,3]; //忽略
let [z=1] = []; //设置默认值
let [z,...x] = [1,2,3,4]; //剩余运算符
let [a,b,c,d] = 'Green' //解构字符串
```
3. 对象解构，左边的键名必须对应右边的键名。
```javascript
let {name,age} = {name:'Jim',age:18};
```
4. 对象其他解构情况与数组相同，解构字符串除外。
```javascript
let {name:[mess,{name}]} = {name:['hello',{name:'Jim'}]}; //嵌套
let {name:[mess,{}]} = {name:['hello',{name:'Jim'}]}; //忽略
let {name='Jim'} = {}; //设置默认值
let {name,...rest} = {name:'Jim',age:18,sex:'',phone:123}; //剩余运算符
```
5. 数值解构在数组、对象等枚举赋值时有着较大的优势，在传统的数组提取赋值时，都是数组索引其值赋值给一个新的变量，数组多长，就写多少条代码，对象除了调用方式不痛，其余也是如此。ES6数值解构把多行代码的数组赋值压缩成一行代码的数组解构赋值，节省了代码量。
## Symbol类型
1. 用法与Number、String等一样。
```javascript
let sy = Symbol("Jim");
```
2. 使用场景：定义的属性值都是不相等的，所以有多种写法。
```javascript
let sy0 = Symbol("Jim");
let sy1 = Symbol("Jim");
console.log(sy0===sy1); //输出false
let sy = Symbol("key1");

// 写法1
let syObject = {};
syObject[sy] = "kk";
console.log(syObject);    // {Symbol(key1): "kk"}

// 写法2
let syObject = {
  [sy]: "kk"
};
console.log(syObject);    // {Symbol(key1): "kk"}

// 写法3
let syObject = {};
Object.defineProperty(syObject, sy, {value: "kk"});
console.log(syObject);   // {Symbol(key1): "kk"}
```
3. 全局搜索被登记的Symbol中是否有该字符串参数作为名称的Symbol值。
```javascript
let ys0 = Symbol.for("key");
let ys1 = Symbol.for("key");
console.log(ys0===ys1); //输出true
```
4. 检测该字符串参数作为名称的 Symbol 值是否已被登记。
```javascript
let ys0 = Symbol.for("key");
Symbol.keyFor(ys0); //输出key值
```
## 字符串拓展
1. includes() 判断是否找到字符串。
```javascript
let str = "abc def";
console.log(str.includes("abc"));//输出true
```
2. startsWith() 判断字符串是否在原字符串头部。
```javascript
let str = "abc def";
console.log(str.startsWith("abc"));//输出true
```
3. endsWith() 判断字符串是否在原字符串尾部。
```javascript
let str = "abc def";
console.log(str.endsWith("def"));//输出true
```
4. repeat() 字符串重复。
```javascript
let str = "abc";
console.log(str.repeat(3)); //输出abcabcabc
```
5. 字符串补全，在头部或尾部加对应字符串并控制整条字符串的长度为指定最大长度。
```javascript
let str = "abc";
console.log(str.padStart(6,"s"));//输出abcsss
console.log(str.padEnd(6,"s"));//输出sssabc
```
6. 模板字符串${变量名}，在字符串内插入一个变量字符串。
```javascript
let str = "Jim";
let info = `My name is ${str}`;
console.log(info);
```
## 对象拓展
1. 当属性名与属性值相同时，可以只写一个。
```javascript
const person = {name,age}; //等同于{name:name,age:age}
```
2. 方法名简写 (如果是Generator 函数，则要在前面加一个星号)。
```javascript
fun(){} //等同于fun:function(){}
```
3. 属性方法名，需要以方括号形式呈现。
```javascript
const name = "Sum";
const obj = {
  [name](){
    console.log('hello');
  }
}
obj.Sum(); //输出hello
```
4. 对象拓展运算符解构，取出参数对象然后拷贝到当前对象。
- **在拓展运算符后出现同名属性会被覆盖掉**
```javascript
let name = {name: "Jim"};
let age = {age: 18};
let person = {...name, ...age};
console.log(person); //输出{name: "Jim",age: 18}
```
5. assign() 在对象中插入所有可枚举的对象。
```javascript
let target = {name: "Jim"};
let age = {age: 18};
let sex = {sex: "man"};
Object.assign(target,age,sex);
console.log(target); //输出{name: "Jim",age: 18,sex: "man"}
```
6. is() 严格比较，与'==='类似。
```javascript
Object.is("1","1"); // true
Object.is("1",1); //false
```
## 数组拓展
1. of() 将所有参数归为一个数组。
```javascript
console.log(Array.of(1,2,3)); //输出[1,2,3]
```
2. from() 将类数组对象或可迭代对象转化为数组。
```javascript
let arr = {0:'1',1:'2',2:'3',length:3}; //类数组对象写法，属性名为数值并且有length属性。
console.log(Array.from(arr)); //输出['1','2','3']
let map = new Map(); //map迭代对象
map.set('key0','0');
map.set('key1','1');
console.log(Array.from(arr)); //输出[['key0','0'],['key1','1']]
let arr = [1,2,3];
let set = new Set(arr); //set迭代对象
console.log(Array.from(set)); //输出[1, 2, 3]
let str = 'str'; //字符串迭代对象
console.log(Array.from(str)); //输出["s","t","r"]
```
3. find() 查找符合条件的元素，如有多个元素，只返回第一个。
```javascript
let arr = [1,2,3];
console.log(arr.find(item => item > 1)); //输出2
```
4. findIndex() 查找符合条件的元素，如有多个元素，只返回第一个值的索引。
```javascript
let arr = [1,2,3];
console.log(arr.findIndex(item => item == 1)); //输出0
```
5. fill() 根据索引区间跟换值，参数1为填充值，参数2和参数3是索引区间。
```javascript
let arr = [1,2,3]
console.log(arr.fill(0,1,2)); //输出[1, 0, 3]
```
6. copyWithin() 将数组指定范围的内容用另外一指定范围的内容替换,参数1为被替换起始索引，参数2为替换起始索引。
```javascript
console.log([1, 2, 3, 4].copyWithin(0,2)); // [3, 4, 3, 4]
```
7. entries() 遍历键值对，keys() 遍历键名，values() 遍历键值。
```javascript
for(let [key,value] of ['a','b'].entries()){
  console.log(key,value); //输出 0 'a'  1 'b'
}
for(let key of ['a', 'b'].keys()){
    console.log(key); //输出 0 1
}
for(let value of ['a', 'b'].values()){
    console.log(value); // 输出 'a' 'b'
}
```
8. includes() 数值是否包含指定值，参数1为指定值，参数2为起始索引。
```javascript
let arr = [1,2,3];
arr.includes(1); // 输出true
arr.includes(1,2); //输出false
```
9. flat() 将嵌套数组转为一维数组，参数为嵌套层数。
```javascript
let arr = [1, [2, [3, [4, 5]]]];
console.log(arr.flat(2)); // 输出[1, 2, 3, [4, 5]]
```
10. flatMap() 对数组进行处理后再执行flat()方法。
```javascript
console.log([1, 2, 3].flatMap(n => [n * 2])); //输出[2, 4, 6]
```
11. 缓冲区，实例化一个指定范围的数组存放区。
```javascript
let buffer = new ArrayBuffer(8);
console.log(buffer.byteLength); // 输出8
```
12. DataView是一种支持存放8中数值类型的数组缓冲区视图。
```javascript
let buffer = new ArrayBuffer(10);
dataView = new DataView(buffer);
dataView.setInt8(0,1);
```
13. 扩展运算符复制数组。
```javascript
let arr = [1,2];
let arr1 = [...arr];
console.log(arr1);
```
## 函数拓展
1. 设置默认参数，**不能有同名参数**。
```javascript
function fun(name,age=2){
  console.log(name,age);
}
fun("Jim",5); //输出Jim5
fun("Jim",null); //输出Jimnull，只有为传递参数或传递undefined时才会使用默认参数
```
2. 不定参数，利用数组解构法传递多个参数。
```javascript
function fun(...values){
  console.log(values.length);
}
fun(1,2); //输出2
fun(1,2,3); //输出3
```
3. 箭头函数(Lambda函数)，简化原始函数，省去function字段。
```javascript
//两种方法同理
var fun = a => a;
var fun = function(a){return a;}
var fun = (a,b) => a+b; //无参或多参要用()
var fun = (id,name) =>({id,name}); //返回对象时须在外围加上()用于区分代码块，属性名和属性值相同可简写
```
4. 箭头函数中的this指向的是定义的时候外层的this对象。
```javascript
var btn = document.getElementById('click');
btn.addEventListener('click',()=>{
  this.classList.toggle('on');
})
```
## 迭代器
1. for...of迭代常规的数据类型。数组，字符串，Map，Set等。
```javascript
const datas = [1,2,3];
const datas = 'hello';
for(let data of datas){
  console.log(data);
}
```
## promise对象
Promise是**ES6**新增加的类，目的是更加优雅地书写复杂的异步任务。

**特点**
- 对象的状态不受外界影响，有三种状态pending、fulfilled和rejected。
- 在处理异步程序时，将异步操作队列化，按照期望的顺序执行，返回符合预期的结果。

**缺点**
- 无法取消Promise，一旦新建它就会立即执行，无法中途取消。
- 不设置回调函数，Promise内部抛出的错误，不会反应到外部。
- 当处于pending状态时，无法得知目前进展到哪一个阶段。
```javascript
const p1 = new Promise(function(resolve,reject){
    resolve('success'); //成功时返回的函数
    reject('fail'); //失败时返回的函数
});
p1.then(function(value){ //then方法接收resolve和reject函数
  console.log(value);
});
```
- **注：promise执行时无法中途取消**
## Generator函数
1. 在function后有个*，函数内部有yield表达式。
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
## async函数
1. async 函数返回一个Promise对象，可以使用 then 方法添加回调函数。
2. await 操作符用于等待一个 Promise 对象, 它只能在异步函数 async function 内部使用。
```javascript
async function fun(){
  const data = await get('xx');
}
```