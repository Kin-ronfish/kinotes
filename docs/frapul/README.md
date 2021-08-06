# 框架及插件

> 理解原理，掌握用法

框架

- **Vue框架原理及用法**

- Nuxt框架原理及用法

- **React框架原理及用法**

- **Angular框架原理及用法**

插件

- **Typescript用法及示例**

- **element用法及示例**

- **jQuery用法及示例**

- sass用法及示例

- **bootstrap用法及示例**

- dayjs用法及示例

- loadsh用法及示例

- html2canvas用法及示例

- printjs用法及示例

- animate用法及示例

- particles用法及示例

- anime用法及示例

其他

- node

- uniapp

- git

# 前端框架

MVVM设计模式起源于MVC

model：数据(模型)/状态；View：视图；Control：控制器，交互修改数据的方式

M：model；V：view；VM：对数据和试图的双向绑定，只要修改数据，VM（框架）就会自动改变视图，视图的交互改变了数据

## 安装方法

安装脚手架和初始化项目

```shell
# vue 项目初始化
npm install --g vue-cli
vue init webpack vueApp
vue ui # UI项目创建界面
# react 项目初始化
npm install -g create-react-app
create-react-app reactApp
# angular 项目初始化
cnpm install -g @angular/cli
ng new angularApp -- skip install
ng g component path/name # 创建组件的命令
```

## 框架特点

vue：数据双向绑定，单个vue文件

react：jsx语法（在js里写html），单数据流，js文件、css文件

angular：ts代替js，数据双向绑定，ts文件、html文件、css文件

## 框架语法

### vue

标签在template模板里编写

数据绑定：标签内插入变量及表达式（数据双向绑定）

```html
<div :class="class" :style="style">{{title}}</div>
```

事件绑定：绑定对应的函数方法

```html
<button @click="click()">按钮</button>
```

内置标签属性：v-if，v-else，v-show，v-for，v-model

生命周期：八大执行函数

### react

标签在JSX中编写

数据设置：数据更改需要重新渲染才能显示（数据单向绑定）

```html
<div className={class} style={style}>{title}</div>
```

事件绑定：绑定对应的函数方法

```html
<button onClick={this.click}>按钮</button>
```

标签内注释：{/* 解释文字 */}

生命周期：七大执行函数

### angular

标签在html里编写

数据绑定：标签内插入变量及表达式（数据双向绑定）

```html
<div [class]="class" [style]="style">{{title}}</div>
```

事件绑定：绑定对应的函数及方法

```html
<button (click)="click()">按钮</button>
```

标签内属性可以对象获取：`<h2 [style.width]="'10px'"></h2>`

