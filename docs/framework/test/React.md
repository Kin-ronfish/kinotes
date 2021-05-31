# React框架
框架特点：最大限度的减少DOM的操作；JSX(在JS里写HTML，JavaScript语法扩展)；组件化，模块化；单项数据流，没有双向绑定数据（数据-视图-事件-数据）。
JSX优点：执行更快，编译为JavaScript代码时进行优化；类型更安全，编译过程中能发现错误；编写模板更加简单快捷。(其性能次于vue)

## 安装方法
- `npm install -g create-react-app` 安装脚手架
- `create-react-app <文件名>` 创建react框架
## 框架语法
```javascript
import React from 'react'; //React的核心库
import ReactDOM from 'react-dom'; //提供与 DOM 相关的功能
let root = document.querySelector('#root'); //获取根标签
let app = <div> //JSX中必须只有一个根元素
      		<h1>xx</h1> // 小写是普通HTML元素
		  <Child/> // 大写默认是组件
		</div>;
ReactDOM.render(app,root); //标签渲染
```
函数式组件，用于静态没有交互事件内容的组件页面
```javascript
function Childcom(props){//props父传递给子组件数据、函数，单项流动，不能反向
  return (
	<div>
	<h1>天气：{props.weather}</h1>
	{/* 变量、属性、HTML、表达式和注释用{}插入 */}
      <h1 className={title} style={Styles}>函数式组件</h1>
      {/* 标签内多单词的需使用驼峰命名，{}内为变量 */}
    </div>
  )
}
```
类组件，用于有交互或数据修改操作的组件页面
```javascript
class Hello extends React.Component{
constructor(props){
    super(props)
    //构造函数初始化数据，将需要改变的数据在state中初始化
    this.state = { //state：相当于vue的data
      time: new Date()
    }
  }
  render(){
    return (
      <div>
        <h1>类组件</h1>
        <h1>{this.props.name}</h1>
		{/* props父传子的name值 */}
		<Childcom weather={this.props.weather}/>
		{/* 复合组件：类组件内嵌套函数式组件 */}
		<h1>时间:{this.state.time}</h1>
		{/* 当前对象的state */}
      </div>
    )
  }
}
ReactDOM.render(
  // <Childcom weather={this.props.weather}/>,
<Hello name="lin" weather="出太阳"/>，
  document.querySelector('#root')
)
```
事件
```javascript
class Tab extends React.Component{
  constructor(props){
    super(props)
    this.state = {//设置状态、数据
      dispaly:'content'
    }
    // this.clickEvent = this.clickEvent.bind(this)绑定点击事件
  }
  clickEvent = (e) =>{ //使用ES6箭头函数不用在构造函数内绑定事件,可传递多个参数
    console.log(e.target.dataset.index) //输出标签索引
    this.setState({ //修改state数据的方法，数据会被重新渲染
         display:'content active',
      })
  }
  render(){
    return (
      <div>
        <button data-index="1" onClick={this.clickEvent}>显示</button>
        {/* 绑定事件的命名要用驼峰命名法 */}
        <div className={this.state.display}>内容</div>
      </div>
    )
  }
}
ReactDOM.render(
  <Tab/>,
  document.querySelector('#root')
)
```
子组件传值给父组件的方法就是调用父元素传递进来的父元素函数
```javascript
class ParentCom extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      childData: null
    }
  }
  render(){
    return(
      <div>
        <h1>{this.state.childData}</h1>
        <ChildCom setChildData={this.setChildData}/>//传入函数
      </div>
    )
  }
  setChildData = (data) =>{
    this.setState({
      childData:data
    })
  }
}
class ChildCom extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      msg:"helloworld"
    }
  }
  render(){
    return(
      <div>
        <button onClick={this.sendData}>传递给父元素</button>
      </div>
    )
  }
  sendData = () =>{
    this.props.setChildData(this.state.msg)//使用父组件函数
  }
}
ReactDOM.render(
  <ParentCom/>,
  document.querySelector('#root')
)
```
列表渲染：使用数组的map方法，对每一项数据按照JSX的形式进行加工，最终得到一个每一项都是JSX对象的数组，将数组渲染到模板中，Key值需要放置到每一项中。
```javascript
let listArr = this.state.list.map((item,index)=>{ //list为数组
   return (
    <ListItem key={index} data={item} index={index}></ListItem>
  )
})
```
生命周期是组件从实例化到渲染到最终从页面中销毁。在周期中可以调用事件。
生命周期的3个状态:
1. Mounting:将组件插入到DOM中
2. Updating:将数据更新到DOM中
3. Unmounting;:将组件移除DOM中

生命周期中七个钩子函数（方法，事件)
```javascript
class ParentCom extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      msg: "hello"
    }
    console.log("构造函数")
  }
  componentWillMount(){
    console.log("组件将要渲染")
  }
  componentDidMount(){
    console.log("组件渲染完毕")
  }
  componentWillReceiveProps(){
    console.log("组件将要接收新的state和props")
  }
  shouldComponentUpdate(){
    console.log("组件接收到新的state或者 props,判断是否更新")
    return true
  }
  componentWillUpdate(){
    console.log("组件将要更新")
  }
  componentDidUpdate(){
    console.log("组件更新完毕")
  }
  componentWillUnmount(){
    console.log("组件将要卸载")
  }
  render(){
    console.log("渲染函数")
    return(
      <div>
        <h1>hello</h1>
      </div>
    )
  }
}
```