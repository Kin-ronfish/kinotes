# Typescript
## 安装方法
- npm install -g typescript 安装组件
- tsc -v 查看版本
- tsc test.ts 编译文件输出test.js
- node test.js 运行
## 数据类型
- `string` 字符串型
- `number` 数值型
- `any` 任意类型，等同于var
- `boolean` 布尔型
- `enum` 枚举
- `void` 定义函数类型
## 定义实例
var [变量名] : [类型] = 值;
```typescript
var strs : string = "hello";
var nums : number = 12;
var arr : any[] = [1,2];
let flag : boolean = true;
let x: [string, number];
x = ["kin",15];
enum Color {Red, Green, Blue}; //枚举
let c: Color = Color.Red;
console.log(c); //输出数值索引
//类型断言
var str = '1'
var str1 : number = <number> <any> str;
console.log(str1);
```
## 函数定义
基本函数
```typescript
function user():string {
	return "Lin"; //返回一个字符串类型
}
```
多参函数,必须传入两个数值型的参数，否则报错。
```typescript
function add(x: number,y: number): number {
	return x + y;
}
```
可选参数函数，传入一、两个参数。
```typescript
function Name(first: string, last?: string) {
	if(last)
		return first + "" + last;
	else
		return first;
}
```
剩余参数函数，以数组形式传入，可多个。
```typescript
function Name(first: string, ...restOf: string[]) {
	return first + "" + restOf.join("");
}
let buildName = Name("xx","cc","zz")
```
匿名函数除了没有函数名，其余的与标准函数一样。
```typescript
var msg = function() {
	return "Kin";
}
console.log(msg());
// 调用自身
(function() {
	console.log("Kin")
})()
```
构造函数，使用JavaScript内置的构造函数。
```typescript
var myFun = new Function("a","b","return a+b");
var tmp = myFun(2,6);
console.log(tmp);
```
Lambda(箭头)函数。传入单个参数时括号可省略。
```typescript
var foo = (x:number)=> {
    x = 10 + x
    console.log(x)
}
foo(100)
```
函数重载，参数类型个数等都可以不同。
```typescript
function disp(s1:string):void;
function disp(n1:number,s1:string):void;
function disp(x:any,y?:any):void {
	console.log(x);
    console.log(y);
}
disp("abc")
disp(1,"xyz");
```
# 面向对象
```typescript
class Kin {
	user() : void {
		console.log('Kin')
	}
}
var obj = new Kin();
obj.user();
```
## 作用域
- 全局作用域
- 类作用域
- 局部作用域
```typescript
var global_num = 12          // 全局变量
class Numbers {
   num_val = 13;             // 实例变量
   static sval = 10;         // 静态变量
   storeNum():void {
      var local_num = 14;    // 局部变量
   }
}
console.log("全局变量为: "+global_num)
console.log(Numbers.sval)    // 静态变量
var obj = new Numbers();
console.log("实例变量: "+obj.num_val)
```
## 数组循环
*for...of 循环*
```typescript
let someArray = [1, "str", false];
for (let entry of someArray) {
    console.log(entry); // 1, "str", false
}
```
*forEach 循环*
```typescript
let list = [4, 5, 6];
list.forEach((val, idx, array) => {
    console.log(val);
});
```
*every 循环*
```typescript
let list = [1,2,3,4,5,6];
list.every((val, idx, array) => {
	console.log(val);
    return true;
});
```
*some循环*
```typescript
let list = [1,2,3,4,5,6];
list.some((val, idx, array) => {
    return val < 2; //判断数组中是否存在符合条件的值
});
```
> [Typescript官方文档](https://www.tslang.cn/docs/handbook/basic-types.html)