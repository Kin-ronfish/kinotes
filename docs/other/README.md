# 前端拓展

> 框架功能再好，也离不开底层代码的维持，所以这些知道原理和使用方法即可。

## 前端框架

> [Vue框架官网文档](https://cn.vuejs.org/v2/guide/)

> [Nuxt框架官网文档](https://www.nuxtjs.cn/)

> [React框架官方文档](https://react.docschina.org/)

> [vuepress官网](https://vuepress.vuejs.org/zh/)

## 前端插件

> [Typescript官方文档](https://www.tslang.cn/docs/home.html)

> [jQuery官方文档](https://www.jquery123.com/)

> [sass官方文档](https://www.sass.hk/)

> [less官方文档](https://less.bootcss.com/)

> [bootstrap官方文档](https://www.bootcss.com/)

> [dayjs官方文档](https://dayjs.fenxianglu.cn/):处理时间

> [loadsh官方文档](https://www.lodashjs.com/)

> [html2canvas官方文档](http://html2canvas.hertzen.com/):自定义区域html标签转canva

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

> [printjs官方文档](https://printjs.crabbly.com/):自定义打印对应区域

- 截取网页特定区域作为打印区域

```javascript
print({
    printable: 'print_area', // 标签的id，用于确定范围
    type: 'html', 
    style: style, // 亦可使用引入的外部css;
    scanStyles: false
})
```

