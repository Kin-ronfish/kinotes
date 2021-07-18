# 前端插件

## Typescript

> [Typescript官方文档](https://www.tslang.cn/docs/home.html)

### 基本用法

npm install -g typescript 安装组件
tsc -v 查看版本
tsc test.ts 编译文件输出test.js
node test.js 运行


### 基础语法


#### 数据类型

`string` 字符串型
`number` 数值型
`any` 任意类型，等同于var
`boolean` 布尔型
`enum` 枚举
`void` 定义函数类型

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


#### 定义实例


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

#### 函数


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


#### 面向对象


```typescript
class Kin {
	user() : void {
		console.log('Kin')
	}
}
var obj = new Kin();
obj.user();
```


#### 作用域

全局作用域、类作用域、局部作用域

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
console.log(Numbers.sval)   // 静态变量
var obj = new Numbers(); 
console.log("实例变量: "+obj.num_val)
```


#### 循环


_for...of 循环_


```typescript
let someArray = [1, "str", false];
for (let entry of someArray) {
    console.log(entry); // 1, "str", false
}
```


_forEach 循环_


```typescript
let list = [4, 5, 6];
list.forEach((val, idx, array) => {
    console.log(val);
});
```


_every 循环_


```typescript
let list = [1,2,3,4,5,6];
list.every((val, idx, array) => {
	console.log(val);
    return true;
});
```


_some循环_


```typescript
let list = [1,2,3,4,5,6];
list.some((val, idx, array) => {
    return val < 2; //判断数组中是否存在符合条件的值
});
```

### Vue&Vuex

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

## element

> [element官方文档](https://element.eleme.cn/#/zh-CN/component/installation)

element：在el-checkbox-group内写的div字体默认大小为0

```html
<el-checkbox-group v-model="aimList">
    <div style="font-size:14px">这里添加的东西不起效果</div>
    <el-checkbox label="复选框 A"></el-checkbox>
    <el-checkbox label="复选框 B"></el-checkbox>
</el-checkbox-group>
```

## jQuery

> [jQuery官方文档](https://www.jquery123.com/)

## sass

> [sass官方文档](https://www.sass.hk/)

## less

> [less官方文档](https://less.bootcss.com/)

## bootstrap

> [bootstrap官方文档](https://www.bootcss.com/)

## dayjs

> [dayjs官方文档](https://dayjs.fenxianglu.cn/) 处理时间

```javascript
dayjs.format('YYYY-MM-DD') // 格式转换
dayjs.add(1, 'day') // 添加时间，week，day，month，year，hour，minute，second
dayjs.subtract(1, 'year') // 减去时间
```

## loadsh

> [loadsh官方文档](https://www.lodashjs.com/)

## html2canvas

> [html2canvas官方文档](http://html2canvas.hertzen.com/) 自定义区域html标签转canva

- 截取网页指定区域，保存为图片

```javascript
const docArea: any = this.$refs.Image // 在标签里添加 ref="Image"作为截取区域
html2canvas(docArea, {
	useCORS: true // 允许在截取区域内部加载外部图片
}).then(canvas => {
    // 转成图片，生成图片地址
    this.imgUrl = canvas.toDataURL('image/png')
    // 以下调用网页自动下载文件
    const eleLink = document.createElement('a')
    eleLink.href = this.imgUrl
    eleLink.download = '图片名'
    document.body.appendChild(eleLink)
    eleLink.click()
    document.body.removeChild(eleLink)
})
```

## printjs

> [printjs官方文档](https://printjs.crabbly.com/) 自定义打印对应区域

- 截取网页特定区域作为打印区域

```javascript
print({
    printable: 'print_area', // 标签的id，用于确定范围
    type: 'html',
    style: style, // 亦可使用引入的外部css;
    scanStyles: false
})
```

## animate

> [animate官方文档](http://www.animate.net.cn/)

animate设置修改原有动画

```css
#id { /*通过id获取后直接设置*/
	animation-delay: 2s;
	animation-during: 1s;
}
```

