# React

[React框架官方文档](https://react.docschina.org/)

> 优点：更新dom的次数少，速度快、兼容性好，数据单项绑定
>
> 缺点：不是一个完整的框架，很多功能需要自行编写

>  插槽的功能需要自己实现

## 语法

```react
let num = 15;
let color = 'red'
let eStyle = {
  marginTop: '10px'
}
let ele = (
  <div>
    <h1>hello</h1>
    {/* 标签内部用单括号插入表达式 */}
    <h2>{num<10?'小了':'大了'}</h2>
    {/* 类名定义用className与class区分，表达式不支持插入数组 */}
    <div className={color}>红色</div>
    {/* style表达式只能以对象形式写样式 */}
    <div style={eStyle}>hello</div>
  </div>
)
```

## 生命周期

```react
class ComFife extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    console.log('组件渲染前')
  }
  componentDidMount() {
    console.log('组件渲染后')
  }
  componentWillReceiveProps() {
    console.log('组件接收state和props前')
  }
  shouldComponentUpdate() {
    // 更新返回真，不更新返回假
    return true
  }
  componentWillUpdate() {
    console.log('组件更新前')
  }
  componentDidUpdate() {
    console.log('组件更新后')
  }
  componentWillUnmount() {
    console.log('组件销毁前')
  }
  render() {
    return (
      <div></div>
    )
  }
}
```

## 组件

> 组件标签必须只有一给根组件

### 函数式组件

> 数据传输用props，props是单项数据流

```react
function Home(props) {
  return (
    <div>
      <h1>首页</h1>
    </div>
  )
}
```

### 类组件

```react
class Home extends React.Component {
  constructor(props) {
    // 继承父类
    super(props)
    // state相当于vue中的data
    this.state = {
      data: 12
    }
  }
  render() {
    return (
      <div>
        <h1>我的</h1>
      </div>
    )
  }
}
```

### 事件绑定

> clickEvent如果不使用箭头函数，就需要在constructor中添加  `this.clickEvent = this .clickEvent.bind (this)` 绑定事件

```react
class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  clickEvent = (e) => {
    e.preventDefault() // 阻止默认事件写法
    console.log(e.target.dataset.index)
  }
  click = (val) => {
    console.log(val)
  }
  render() {
    return (
      <div>
        <button data-index="1" onClick={this.clickEvent}>点击</button>
        {/* 以下为事件传值 */}
        <button data-index="1" onClick={()=>{this.click(15)}}>点击</button>
      </div>
    )
  }
}
```

## 组件通讯

### 父传子

```react
class ParentCom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: "15"
    }
  }
  render() {
    return (
      <div>
        <ChidlCom isActive={this.state.isActive} />
      </div>
    )
  }
}
class ChidlCom extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>{this.props.isActive}</div>
    )
  }
}
```

### 子传父

```react
class ParentCom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      childData: null
    }
  }
  render() {
    return (
      <div>
        <ChidlCom setChildData={this.setChildData} />
      </div>
    )
  }
  setChildData = (data) => {
    this.setState({
      childData: data
    })
  }
}
class ChidlCom extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <button onClick={this.sendData}>传数据给父元素</button>
      </div>
    )
  }
  sendData = () => {
    this.props.setChildData('15')
  }
}
```

## 组件渲染

### 条件渲染

```react
function Home(props) {
  return props.state? <div>是</div> : <div>否</div>
}
```

### 列表渲染

```react
function Home() {
  let arr = [1,2,3,4,5]
  let res = arr.map((item,index) => {
    return <div key={index}>{item}</div>
  })
  return res;
}
```

# react-router-dom

```shell
npm install react-router-dom
```

## 路由配置

```react
import Home from './views/Home/Home';
import Mine from './views/Mine/Mine';
import Search from './views/Search/Search';
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/mine' element={<Mine />} />
    <Route path='/search' element={<Search />} />
  </Routes>
</BrowserRouter>
```

## 路由跳转

```react
import {useNavigate} from 'react-router-dom'
function Create() {
    let navigate = useNavigate()
    function handleClick() {
        navigate(`/Mine`)
    }
    return (
        <div onClick={handleClick}>新增</div>
    )
}
```

> 返回操作：window.history.back()