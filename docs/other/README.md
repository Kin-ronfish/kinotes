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

> [printjs官方文档](https://printjs.crabbly.com/):自定义打印对应区域

## 新方案记录

1. 通过网页自动下载链接对应的文件
```javascript
const eleLink = document.createElement('a')
eleLink.href = Url
eleLink.download = '文件名'
document.body.appendChild(eleLink)
eleLink.click()
document.body.removeChild(eleLink)
```
