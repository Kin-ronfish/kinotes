# 前端插件

## Typescript

> [Typescript官方文档](https://www.tslang.cn/docs/home.html)


### 基础语法


#### 数据类型

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

#### 基本函数


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

### 基本用法

1. 选择框

- 在 `<el-option>` 中循环一个数组，设置选项的值，选择后的值绑定给外层的 `value`。
- clearable 设置选框可清空所选的值。

```html
<el-select v-model="value" clearable placeholder="请选择套餐">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
</el-select>
<script>
  export default {
    data() {
      return {
        options: [{
          value: '1',
          label: '烧鸭饭'
        }, {
          value: '2',
          label: '水煮鱼'
        }, {
          value: '3',
          label: '牛肉饭'
        }],
        value: ''
      }
    }
  }
</script>
```

2. 表单验证

- 在 `<el-form>` 里设置输入值的校验规则，在每一个item中通过 `prop` 导入规则中的属性。
- 输入框绑定的变量名要与校验规则的对象名一致。

```html
<el-form :model="Form" ref="Form" :rules="rule">
  <el-form-item label="名称" prop="name">
    <el-input type="name" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('Form')">提交</el-button>
    <el-button @click="resetForm('Form')">重置</el-button>
  </el-form-item>
</el-form>
<script>
  export default {
    data() {
      return {
        Form: {
          name: ''
        },
        rule: {
            name:[
                { required: true, message: '年姓名不能为空', trigger: 'change'}
            ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
```

3. 文件上传

- action 设置上传的目标路径
- on-preview 点击上传列表触发handlePreview函数

- before-remove/on-remove 文件移除前和移除时触发的函数
- multiple/limit 设置多文件上传并限制文件数量

- on-exceed 文件溢出时触发handleExceed函数
- file-list 用于存放上传文件的列表

```html
<el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :limit="2"
  :on-exceed="handleExceed"
  :file-list="fileList">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
<script>
  export default {
    data() {
      return {
        fileList: []
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 2 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
  }
</script>
```

4. 分页

- `page-size` 设置页面显示数据条例数量。
- `pager-count` 设置页数。
- `total` 所有页面的数量和。

```html
<el-pagination
  :page-size="20"
  :pager-count="10"
  layout="prev, pager, next"
  :total="100">
</el-pagination>
```

5. 表格

- `<el-table>` 绑定数组。
- `<el-table-column>` 通过prop绑定数组中的对象属性值，并循环数组的每一个对象。

```html
<template>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </template>
  <script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: 'Kin',
            address: '金平区护堤路170号'
          }, {
            date: '2016-05-04',
            name: 'Kin',
            address: '金平区护堤路170号'
          }, {
            date: '2016-05-01',
            name: 'Kin',
            address: '金平区护堤路170号'
          }]
        }
      }
    }
  </script>
```

6. 树形控件

- data绑定一个对象数组，对象内部的children层级为树型的分支

- props用于绑定一个默认值

- show-checkbox用于显示节点前的选框

```html
<el-tree :data="data" :props="defaultProps" show-checkbox @node-click="handleNodeClick"></el-tree>
<script>
  export default {
    data() {
      return {
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  };
</script>
```

### 要点提示

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

### 元素操作

```javascript
$("p").append("追加文本");
$("img").after("在后面添加文本");
$("img").before("在前面添加文本");
$("#div").remove();
```

## sass

> [sass官方文档](https://www.sass.hk/)

## less

> [less官方文档](https://less.bootcss.com/)

## bootstrap

> [bootstrap官方文档](https://www.bootcss.com/)

## dayjs

> [dayjs官方文档](https://dayjs.fenxianglu.cn/) 处理时间

### 基本用法

```javascript
dayjs.format('YYYY-MM-DD') // 格式转换
dayjs.add(1, 'day') // 添加时间，week，day，month，year，hour，minute，second
dayjs.subtract(1, 'year') // 减去时间
```

## loadsh

> [loadsh官方文档](https://www.lodashjs.com/)

### 常用用法

- isEmpty 如果 `value` 为空，那么返回 `true`，否则返回 `false`

```javascript
_.isEmpty([1, 2, 3]) // false
_.isEmpty([]) // true
```

- isObject 如果 `value` 为一个对象，那么返回 `true`，否则返回 `false`

```javascript
_.isObject({}) // true
_.isObject(null) // false
```

- isString  如果 `value` 为一个字符串，那么返回 `true`，否则返回 `false`

```javascript
_.isString('abc') // true
_.isString(1) // false
```

- isArray 如果`value`是一个数组返回 `true`，否则返回 `false`

```javascript
_.isArray([1, 2, 3]) // true
_.isArray('abc') // false
```

- cloneDeep 深拷贝

```javascript
_.cloneDeep(objects) // 拷贝一个指针与原值不同的值
```



## html2canvas

> [html2canvas官方文档](http://html2canvas.hertzen.com/) 自定义区域html标签转canva

### 方法案例

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

### 基本用法

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

### 基本用法

animate设置修改原有动画

```css
#id { /*通过id获取后直接设置*/
	animation-delay: 2s;
	animation-during: 1s;
}
```

## particles

#### 基本用法

```html
<vue-particles
    class="login-bg"
    color="#39AFFD"
    :particleOpacity="0.7"
    :particlesNumber="100"
    shapeType="circle"
    :particleSize="4"
    linesColor="#8DD1FE"
    :linesWidth="1"
    :lineLinked="true"
    :lineOpacity="0.4"
    :linesDistance="150"
    :moveSpeed="3"
    :hoverEffect="true"
    hoverMode="grab"
    :clickEffect="true"
    clickMode="push"
></vue-particles>
```

| 属性            | 类型      | default   | 描述                                                   |
| --------------- | --------- | --------- | ------------------------------------------------------ |
| color           | `String`  | ’#dedede’ | 粒子颜色                                               |
| particleOpacity | `Number`  | 0.7       | 粒子透明度                                             |
| particlesNumber | `Number`  | 80        | 粒子数量                                               |
| shapeType       | `String`  | ’circle’  | “circle”,“edge”,“triangle”, “polygon”,“star”           |
| particleSize    | `Number`  | 80        | 单个粒子大小                                           |
| linesColor      | `String`  | ’#dedede’ | 线条颜色                                               |
| linesWidth      | `Number`  | 1         | 线条宽度                                               |
| lineLinked      | `boolean` | true      | 连接线是否可用                                         |
| lineOpacity     | `Number`  | 0.4       | 线条透明度                                             |
| linesDistance   | `Number`  | 150       | 线条距离                                               |
| moveSpeed       | `Number`  | 3         | 粒子运动速度                                           |
| hoverEffect     | `boolean` | true      | 是否有hover特效                                        |
| hoverMode       | `String`  | true      | 可用hover模式有: “grab”, “repulse”, + “bubble”         |
| clickEffect     | `boolean` | true      | 是否有click特效                                        |
| clickMode       | `String`  | true      | 可用click模式有: “push”, “remove”, “repulse”, “bubble” |

## anime

> [anime官方文档](https://animejs.com/)

