# CSS
## 标签样式

- 盒子阴影

```css
div {
	box-shadow: 10px 10px 2px #fff; /*水平距离 垂直距离 阴影像素 颜色*/
}
```

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

- 图形变换

```css
span {
	transform: translateX(10px) scaleY(10px) rotateX(10deg)
	/* transform->translate_(x)移动，scale_(x)缩放，rotate_(x)旋转 */
}
```

- 动画

```css
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
```

- 多媒体查询

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

## 盒子模型

- 框大小：width(宽)/height(高) + padding(内边距) + border(边框) = 元素实际宽度/高度
- 设置 box-sizing: border-box; 内边距和边框也包含在width和height中
- 盒子模型有四个部分：内容(content)，内边距(padding)，边框(border)，外边距(margin)
- box-sizing = content + padding + border

```css
div {
	display: flex; /*设置弹性盒子*/
    justify-content: space-between; /*横轴*/
    align-items: center; /*纵轴*/
    flex-direction: row; /*盒子方向*/
    flex-wrap: nowrap; /*盒子元素溢出换行方式*/
    align-content: center; /*设置flex-wrap属性*/
    align-self: center; /*纵轴*/
}
```

## 选择器
```css
div {} /*标签选择器*/
#id {} /*ID选择器*/
.class {} /*类选择器*/
div,h1 {} /*选择器简写*/
div h1 {} /*子元素，div内所有h1*/
div>h1 {} /*子元素，所有div下的h1*/
div+h1 {} /*临近元素，所有在div后的元素*/
```

- :target目标伪类选择器
- :nth-child(n)选择父元素的第n个子元素
- :nth-of-type(n)选择父元素内具有指定类型的第n个元素

## 屏目操作
设置触摸屏用户如何操纵元素的区域 (例如，浏览器内置的缩放功能)

```css
* {
    touch-action: auto;  /* 初始值 当触控事件发生在元素上时，由浏览器来决定进行哪些操作，比如对viewport进行平滑、缩放等 */
    touch-action: none;  /* 当触控事件发生在元素上时，不进行任何操作 */
    touch-action: pan-x;  /* 启用单指水平平移手势 */
    touch-action: pan-left;  /* */
    touch-action: pan-right;
    touch-action: pan-y;  /* 启用单指垂直平移手势 */
    touch-action: pan-up;
    touch-action: pan-down;
    touch-action: pinch-zoom;  /* 启用多手指平移和缩放页面。 这可以与任何平移值组合。 */
    touch-action: manipulation;  /* 浏览器只允许进行滚动和持续缩放操作。 */
    
    /* Global values */
    touch-action: inherit;
    touch-action: initial;
    touch-action: unset;
}
```


## 案例方法

```css
.innerbox::-webkit-scrollbar {/*滚动条整体样式*/
      width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
      height: 4px;
      scrollbar-arrow-color:red;
}
```

div四面居中

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
