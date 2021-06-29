# 方法案例

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

- 截取网页特定区域作为打印区域

```javascript
print({
    printable: 'print_area', // 标签的id，用于确定范围
    type: 'html',
    style: style, // 亦可使用引入的外部css;
    scanStyles: false
})
```

- 传入一个**特定位置**含有对应字段的值，判断该值属于哪个类型，并赋予其特定属性。

```javascript
/* 方法1 */
// 判断文件格式
const str = 'note.txt'
const filetype = ['pdf', 'doc', 'xls', 'txt'] // 传入文件后缀格式
const fileName = ['演示稿', '文档', '表格', '文本'] // 文件格式
const tmpStr: string = str.split('.')[name.split('.').length - 1] //文件截取后缀名
const result = filetype
.map((item, index) => { // 利用map函数保留满足条件的值
    if (str === item) {
        return fileImage[index]
    }
})
.filter(value => { // 利用filter过滤掉undefined
    return value != undefined
})
/* 方法2 */
const str = 'note.txt'
const file: any = {pdf: '演示稿',doc: '文档',xls: '表格',txt: '文本'}
const tmpStr: string = str.split('.')[name.split('.').length - 1] //文件截取后缀名
const result = file[tmpStr]
```

- 原始内容复制到剪切板

```javascript
const inputTest = document.createElement('input') //创建一个输入框
inputTest.value = this.applyUrl //绑定一个待复制的值
document.body.appendChild(inputTest) //添加节点
inputTest.select()
document.execCommand('Copy') //设置复制指令
inputTest.className = 'oInput' //添加类名
inputTest.style.display = 'none' //销毁属性
```

- 页面重载方法

```javascript
this.$router.go()
location.reload()
```

