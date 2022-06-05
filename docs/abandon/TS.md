# Typescript

> [Typescript官方文档](https://www.tslang.cn/docs/home.html) js强化型语言

typescript优点

1.非常包容JavaScript

2.定义简单到复杂的一切类型

3.typescript如果报错，依然可以生成JavaScript文件

4.typescript拥有活跃的社区

typescript缺点

1.学习成本高

2.短期项目，简答的项目，效率低下

3.跟其他库的兼容性不高


## 基础语法


### 数据类型

`string` 字符串型 `number` 数值型 `any` 任意类型，等同于var `boolean` 布尔型 `enum` 枚举 `void` 定义函数类型

declare 用于声明 *.d.ts 文件

```typescript
declare interface List { //申明接口对象
    name: string
    age: number
}
declare enum message { //申明枚举对象
    name = 'Kin',
    age = '18'
}
```

> null和undefined是所有类型的子类型
>
> 申明时未定义类型，默认会定义为任意类型，由于赋值为单一类型，typescript有类型推断规则，会将赋值的类型定义成变量的类型

### 定义实例


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

### 基本函数


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


可选参数函数（可选参数必须放在必选参数后面），传入一、两个参数。


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


Lambda函数，箭头函数。传入单个参数时括号可省略。


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

```typescript
// 函数参数类型定义
// => 在typescript中用于函数的定义，左边输入类型，右边输出类型
let sum(x:number,y:umber) => number = function(x:number,y:number):number{
    return x + y;
}
```

重载，接受不同数量或者类型的参数

```typescript
function setabc(x:number|string):number|string{
	return x;
}
```

```typescript
class animal{
    static isAnimal(a) {
        return a instanceof Animal;
    }
}
let dog = new Animal();
Animal.isAnimal(dog);
```

### 接口定义

> 对象必须和接口保持一致
> 接口首字母为大写
> 接口属性后加上?，表示此属性为可选属性

```typescript
interface Person{
    name:string;
    age:number;
    hobby?:string;
}
let kin:Person = {
    name:'kin',
    age:18
}
```

```typescript
[propName:string]:any; // 可添加任意属性
// 设置为只读属性，只能进行1次赋值，后面不可以在修改，但是可以获取
readonly name:string;
```

```typescript
let arr:Array<number> = [1,2,3] //数组泛型的定义方式
```

```typescript
//implement，类实现接口的关键词
class SmallCat implements Cat{
    name:string = 'kin';
    age:number = 16;
    constructor(){}
}
```

### 面向对象

类中的静态方法不需要实例化就可以直接调用

类中三种修饰符：public，private，protect

public 在任何地方都可以访问

private 只有在本类中可以访问

protect 在继承的子类中可以访问


```typescript
class Kin {
	user() : void {
		console.log('Kin')
	}
}
var obj = new Kin();
obj.user();
```

```typescript
class Apple {
    protected name;
    public constructor(name) {
		this.name = name
    }
}
// 如果构造函数私有的不能被实例化
class BigApple extends Apple{
    constructor(name) {
        super(name)
        console.log(this.name)
    }
}
```

抽象类，只能被继承不能被实例化

```typescript
abstract class Pig{
    public name;
    constructor(name){
        this.name = name
    }
    public abstract say();
}
class SmallPig extends Pig{
    say(){
        console.log('hello')
    }
}
```

## Vue&Vuex

1. vue中使用typescript

```vue
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({
  name: 'Page',
  components: {}
})
export default class extends Vue {
    @Prop({type: String}) name!: string; //Prop里的类型首字母为大写，外部的为小写，name为传入变量
}
```

2. vuex中使用typescript

```vue
<script lang="ts">
import store from '@/store'
import { Action,getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
export interface Message { //定义类型接口
    message: object
}
// dynamic 动态引入，namespaced 工作区间，name 名称
@Module({ dynamic: true, store, name: 'message', namespaced: true })
class Information extends VuexModule {
  public Message: object = {} //存放数据的state
  @Mutation //设置改变state的方法
  public change_message(info: object) {
    this.message = info
  }
  @Action //可执行异步的方法
  public getInformation(information: object) {
    const str = information + 'xx'
    this.change_message(str)
  }
}

export const InformationModule = getModule(Information)
</script>
```
