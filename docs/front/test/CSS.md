# CSS
## 标签样式
```html
<div>title</div>
<p>123123123</p>
<span>Kin</span>
<style>
div {
	box-shadow: 10px 10px 2px #fff; /*水平距离 垂直距离 阴影像素 颜色*/
}
p {
	/*文字溢出*/
	width: 10px;
	overflow: hidden;
	text-overflow: ellipsis;
}
span {
	/* 图形变换 */
	transform: translateX(10px) scaleY(10px) rotateX(10deg)
	/* transform->translate_(x)移动，scale_(x)缩放，rotate_(x)旋转 */
}
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
</style>
```
## 弹性盒子
- 框大小：width(宽)/height(高) + padding(内边距) + border(边框) = 元素实际宽度/高度
- 设置 box-sizing: border-box; 内边距和边框也包含在width和height中
- display: flex设置弹性盒子
- flex-direction: row|row-reverse|column|column-reverse
- justify-content横轴: flex-start|flex-end|center|space-between|space-around
- align-items纵轴: flex-start | flex-end | center | baseline
- flex-wrap换行方式: nowrap单行|wrap多行|wrap-reverse反转
- align-content设置flex-wrap属性:flex-start | flex-end | center | space-between | space-around
- 居中: margin: auto
- align-self纵轴: auto | flex-start | flex-end | center | baseline
- flex属性用于指定弹性子元素如何分配空间
- 多媒体查询:@media screen and (min-width: 480px) {body { background-color: green;}}
```html
<div class=”box”>
<div>content</div>
<div>content</div>
</div>
<style>
.box{ /*自适应网页大小的弹性盒子*/
	display: flex;
	justify-content: space-around/space-between;
}
</style>
```
## 选择器
### 结构选择器
- :target目标伪类选择器
- :nth-child(n)选择父元素的第n个子元素
- :nth-of-type(n)选择父元素内具有指定类型的第n个元素
### 属性选择器
- attribute~=value选取属性值中包含指定词汇的元素
- attribute|=value选取带有以指定值开头的属性值的元素，该值必须是整个单词。
- attribute^=value匹配属性值以指定值开头的每个元素。
- attribute$=value匹配属性值以指定值结尾的每个元素。
- attribute*=value匹配属性值中包含指定值的每个元素。