# CSS

基础熟练程度：⭐⭐⭐

## 生成工具

> [grid网格布局生成器](https://cssgr.id/)
>
> [gif图标设计](https://loading.io/animation/icon/)
>
> [flex弹性盒子](https://cssflex-generator.netlify.app/)
>
> [元素样式预览](https://www.html.cn/tool/css3Preview/Box-Shadow.html)
>
> - 阴影、文字阴影
> - 文本
> - 边框
> - 线性渐变
> - 变换
> - 弹性盒子
>
> [动态样式设计网站](https://loading.io/)
>
> - 动态图标、文本、背景，加载等
>
> [css样式高级玩法](https://lhammer.cn/You-need-to-know-css/#/)

## 学习手册

[学习网址](http://caibaojian.com/fedbook/learning/html-css.html)

[学习工具](http://caibaojian.com/fedbook/learning/html-css.html)

[css学习手册](https://developer.mozilla.org/zh-CN/docs/Web/CSS)

## 笔记提示

> 在学习当中遇到的难点做个简单记录，便于开发中快速提示

- 文字溢出

```css
p {
	width: 10px;
	overflow: hidden;
	text-overflow: ellipsis;
}
p { /*单行*/
    width:300px;    
    overflow: hidden;    
    text-overflow:ellipsis;    
    white-space: nowrap;
}
p { /*多行*/
    display: -webkit-box;    
    -webkit-box-orient: vertical;    
    -webkit-line-clamp: 3;    
    overflow: hidden;
}
```

- 定义动画

```css
@keyframes name{ /*@keyframes 名称{from{}to{}}*/
	0%{
		transform: translateX(10px)
	}
	100%{
		transform: translateX(20px)
	}
}
span:hover {
	/* 过渡transition: 属性名称 时长 曲线 延时 */
	transition: width 5s line 2s;
	width: 100px;
}
span {
	/* 动画animation:名称 周期 曲线 延时 次数 是否逆向 是否运行或暂停 */
	animation: name 1s line 2s 1;
}
```

- 多媒体查询(自适应不同平台的处理方法)

```css
@media screen and (min-width: 480px) {
    body { 
        background-color: green;
    }
    div {
        margin: auto; /*居中对齐*/
    }
}
```

- 盒子模型

> 框大小：width(宽)/height(高) + padding(内边距) + border(边框) = 元素实际宽度/高度

> 设置 box-sizing: border-box; 内边距和边框也包含在width和height中

> 盒子模型有四个部分：内容(content)，内边距(padding)，边框(border)，外边距(margin)

> box-sizing = content + padding + border

```css
div {
	display: flex; /*设置弹性盒子*/
    justify-content: space-between; /*横轴*/
    align-items: center; /*纵轴*/
  	vertical-align: center; /*设置图片在行内元素中对齐*/
    flex-direction: row; /*盒子方向*/
    flex-wrap: nowrap; /*盒子元素溢出换行方式*/
    align-content: center; /*设置flex-wrap属性*/
    align-self: center; /*纵轴*/
}
```

> margin值可设置未负数，padding不可以

- 选择器

```css
div {} /*标签选择器*/
#id {} /*ID选择器*/
.class {} /*类选择器*/
div,h1 {} /*选择器简写*/
div h1 {} /*子元素，div内所有h1*/
div>h1 {} /*子元素，所有div下的h1*/
div+h1 {} /*临近元素，所有在div后的元素*/
```

- touch-action

> 设置触摸屏用户如何操纵元素的区域 (例如，浏览器内置的缩放功能)

- 设置滚动条样式

```css
.innerbox::-webkit-scrollbar {/*滚动条整体样式*/
	width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
	height: 4px;
	scrollbar-arrow-color:red;
}
```

- div四面居中

```css
/** 绝对/固定布局 */
div {
    position:absolute/fixed;
    left:0;
    right:0;
    top:0;
    bottom:0;
    margin:auto;
}
/** margin负值 */
div {
    width:200px;
    height: 200px;
    position: absolute;
    left:50%;
    top:50%;
    margin-left:-100px;
    margin-top:-100px;
}
/** css3 transform */
div {
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
}
/** flex布局 */
div {
    display:flex;
    align-items:center;
    justify-content:center;
}
```

> 绝对/固定布局的层级最高
>
> 设置元素在方格中的任意位置，利用相对定位(relative)嵌套绝对定位(absolute)