# Angular

> [angular框架官方文档](https://angular.cn/docs)

## 优缺点

优点：比较完善的前端框架，服务、模板、数据双向绑定、模块化、路由、过滤器、依赖注入等功能相当完整，模板功能强大，自带丰富的指令，易于操作。
缺点：官方文档可操作性不强，缺乏实例，自学要求较高。版本较多，没有做到很好的兼容，整体较重，渲染初始化慢。

> 主要的逻辑语言是typescript
>
> component.css仅用于组件，src根目录下的style.css全局的样式

## 框架语法

```typescript
// app.module.ts
@NgModule({ //装饰器
  declarations: [ //导入组件申明
    AppComponent, NewsComponent
  ],
  imports: [ //导入编译模块
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [], //自定义服务
  bootstrap: [AppComponent] //挂载的根组件
})
```

```typescript
// app.component.ts
import { Component } from '@angular/core';
@Component({
  // 组件名称
  selector: 'app-root',
  // 组件模板文件，定义组件布局和内容
  templateUrl: './app.component.html',
  //模板的css样式文件
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    // 编写属性及函数方法
    classStr = "bgBlue";
    msg = "这是一个索引属性";
    htmlStr = "<span>hello</span>";
    title = 'app works!';
    sum (a,b) {
        return a+b;
    };
    classObj = {
        "bgBlue": true,
        "active": false
    };
    styleStr = "color:blue;";
    styleObj = {
        background: "pink",
        width: "100px",
        height: "100px"
    };
    widthNum = 200;
    changeColor() {
        this.classStr = "bg"
    }
    changeButton(event) {
        console.log(event)
        event.target.style.background = 'green'
    }
}
```

标签内数据绑定方式与vue相同

```html
<h1>{{title}}</h1>
<p>{{1+2}}</p>
<button class="{{classStr}}">按钮</button>
<h1 [class]="classStr">class4</h1>
<h1 [innerHtml]="htmlStr"></h1>
<h1 [attr.data-index]="msg">msg</h1>
<!-- 字符串 -->
<h1 [style]="styleStr">zxczxczx</h1>
<!-- 对象 -->
<h1 [style]="styleObj"></h1>
<!-- 对象内属性直接赋值 -->
<h2 [style.width]="'100px'">adad</h2>
<h2 [style.width.px]="widthNum">adad</h2>
<!-- 事件绑定 -->
<!-- 左侧事件名称，右侧调用事件的函数 -->
<button (click)="changeColor()">改变</button>
<button (click)="changeButton($event)">改变</button>
```

## 插值

语法： {{...变量和表达式}} （与vue相同）

自定义属性插入方式

```html
<h1 [attr.data-index]="msg">msg</h1>
```

绑定html自带的属性，可以这样绑定

```html
<h1 [class]="classStr"></h1>
```

样式和事件

```html
<!-- 这两种较为常见 -->
<button class="{{classStr}}">按钮</button>
<h1 [class]="classStr"></h1>

<h1 [attr.data-index]="msg">msg</h1>
```
