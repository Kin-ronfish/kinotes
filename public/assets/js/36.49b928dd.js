(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{526:function(t,e,n){"use strict";n.r(e);var a=n(38),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"react"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#react"}},[t._v("#")]),t._v(" React")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://react.docschina.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("React框架官方文档"),n("OutboundLink")],1)]),t._v(" "),n("blockquote",[n("p",[t._v("优点：更新dom的次数少，速度快、兼容性好，数据单项绑定")]),t._v(" "),n("p",[t._v("缺点：不是一个完整的框架，很多功能需要自行编写")])]),t._v(" "),n("blockquote",[n("p",[t._v("元素渲染必须只有一个根节点")]),t._v(" "),n("p",[t._v("插槽的功能需要自己实现")])]),t._v(" "),n("h2",{attrs:{id:"语法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),n("div",{staticClass:"language-react extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("let num = 15;\nlet color = 'red'\nlet eStyle = {\n  marginTop: '10px'\n}\nlet ele = (\n  <div>\n    <h1>hello</h1>\n    {/* 标签内部用单括号插入表达式 */}\n    <h2>{num<10?'小了':'大了'}</h2>\n    {/* 类名定义用className与class区分，表达式不支持插入数组 */}\n    <div className={color}>红色</div>\n    {/* style表达式只能以对象形式写样式 */}\n    <div style={eStyle}>hello</div>\n  </div>\n)\n")])])]),n("h2",{attrs:{id:"生命周期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),n("div",{staticClass:"language-react extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class ComFife extends React.Component {\n  constructor(props) {\n    super(props)\n  }\n  componentWillMount() {\n    console.log('组件渲染前')\n  }\n  componentDidMount() {\n    console.log('组件渲染后')\n  }\n  componentWillReceiveProps() {\n    console.log('组件接收state和props前')\n  }\n  shouldComponentUpdate() {\n    // 更新返回真，不更新返回假\n    return true\n  }\n  componentWillUpdate() {\n    console.log('组件更新前')\n  }\n  componentDidUpdate() {\n    console.log('组件更新后')\n  }\n  componentWillUnmount() {\n    console.log('组件销毁前')\n  }\n  render() {\n    return (\n      <div></div>\n    )\n  }\n}\n")])])]),n("h2",{attrs:{id:"组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#组件"}},[t._v("#")]),t._v(" 组件")]),t._v(" "),n("blockquote",[n("p",[t._v("组件标签必须只有一给根组件")])]),t._v(" "),n("h3",{attrs:{id:"函数式组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#函数式组件"}},[t._v("#")]),t._v(" 函数式组件")]),t._v(" "),n("blockquote",[n("p",[t._v("数据传输用props，props是单项数据流")])]),t._v(" "),n("div",{staticClass:"language-react extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function Home(props) {\n  return (\n    <div>\n      <h1>首页</h1>\n    </div>\n  )\n}\n")])])]),n("h3",{attrs:{id:"类组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#类组件"}},[t._v("#")]),t._v(" 类组件")]),t._v(" "),n("div",{staticClass:"language-react extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class Home extends React.Component {\n  constructor(props) {\n    // 继承父类\n    super(props)\n    // state相当于vue中的data\n    this.state = {\n      data: 12\n    }\n  }\n  render() {\n    return (\n      <div>\n        <h1>我的</h1>\n      </div>\n    )\n  }\n}\n")])])]),n("h3",{attrs:{id:"事件绑定"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事件绑定"}},[t._v("#")]),t._v(" 事件绑定")]),t._v(" "),n("blockquote",[n("p",[t._v("clickEvent如果不使用箭头函数，就需要在constructor中添加  "),n("code",[t._v("this.clickEvent = this .clickEvent.bind (this)")]),t._v(" 绑定事件")])]),t._v(" "),n("div",{staticClass:"language-react extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('class Home extends React.Component {\n  constructor(props) {\n    super(props)\n  }\n  clickEvent = (e) => {\n    e.preventDefault() // 阻止默认事件写法\n    console.log(e.target.dataset.index)\n  }\n  click = (val) => {\n    console.log(val)\n  }\n  render() {\n    return (\n      <div>\n        <button data-index="1" onClick={this.clickEvent}>点击</button>\n        {/* 以下为事件传值 */}\n        <button data-index="1" onClick={()=>{this.click(15)}}>点击</button>\n      </div>\n    )\n  }\n}\n')])])]),n("h2",{attrs:{id:"组件通讯"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#组件通讯"}},[t._v("#")]),t._v(" 组件通讯")]),t._v(" "),n("h3",{attrs:{id:"父传子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#父传子"}},[t._v("#")]),t._v(" 父传子")]),t._v(" "),n("div",{staticClass:"language-react extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('class ParentCom extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      isActive: "15"\n    }\n  }\n  render() {\n    return (\n      <div>\n        <ChidlCom isActive={this.state.isActive} />\n      </div>\n    )\n  }\n}\nclass ChidlCom extends React.Component {\n  constructor(props) {\n    super(props)\n  }\n  render() {\n    return (\n      <div>{this.props.isActive}</div>\n    )\n  }\n}\n')])])]),n("h3",{attrs:{id:"子传父"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#子传父"}},[t._v("#")]),t._v(" 子传父")]),t._v(" "),n("div",{staticClass:"language-react extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class ParentCom extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      childData: null\n    }\n  }\n  render() {\n    return (\n      <div>\n        <ChidlCom setChildData={this.setChildData} />\n      </div>\n    )\n  }\n  setChildData = (data) => {\n    this.setState({\n      childData: data\n    })\n  }\n}\nclass ChidlCom extends React.Component {\n  constructor(props) {\n    super(props)\n  }\n  render() {\n    return (\n      <div>\n        <button onClick={this.sendData}>传数据给父元素</button>\n      </div>\n    )\n  }\n  sendData = () => {\n    this.props.setChildData('15')\n  }\n}\n")])])]),n("h2",{attrs:{id:"组件渲染"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#组件渲染"}},[t._v("#")]),t._v(" 组件渲染")]),t._v(" "),n("h3",{attrs:{id:"条件渲染"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#条件渲染"}},[t._v("#")]),t._v(" 条件渲染")]),t._v(" "),n("div",{staticClass:"language-react extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function Home(props) {\n  return props.state? <div>是</div> : <div>否</div>\n}\n")])])]),n("h3",{attrs:{id:"列表渲染"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#列表渲染"}},[t._v("#")]),t._v(" 列表渲染")]),t._v(" "),n("div",{staticClass:"language-react extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function Home() {\n  let arr = [1,2,3,4,5]\n  let res = arr.map((item,index) => {\n    return <div key={index}>{item}</div>\n  })\n  return res;\n}\n")])])]),n("h2",{attrs:{id:"react-router-dom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#react-router-dom"}},[t._v("#")]),t._v(" react-router-dom")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" react-router-dom --save\n")])])]),n("h3",{attrs:{id:"路由配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#路由配置"}},[t._v("#")]),t._v(" 路由配置")]),t._v(" "),n("div",{staticClass:"language-react extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("import Home from './views/Home/Home';\nimport Mine from './views/Mine/Mine';\nimport Search from './views/Search/Search';\n<BrowserRouter>\n  <Routes>\n    <Route path='/' element={<Home />} />\n    <Route path='/mine' element={<Mine />} />\n    <Route path='/search' element={<Search />} />\n  </Routes>\n</BrowserRouter>\n")])])]),n("h3",{attrs:{id:"路由跳转"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#路由跳转"}},[t._v("#")]),t._v(" 路由跳转")]),t._v(" "),n("div",{staticClass:"language-react extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("import {useNavigate} from 'react-router-dom'\nfunction Create() {\n    let navigate = useNavigate()\n    function handleClick() {\n        navigate(`/Mine`)\n    }\n    return (\n        <div onClick={handleClick}>新增</div>\n    )\n}\n")])])]),n("blockquote",[n("p",[t._v("返回操作：window.history.back()")])]),t._v(" "),n("h2",{attrs:{id:"redux"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#redux"}},[t._v("#")]),t._v(" redux")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" redux --save\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" react-redux --save\n")])])]),n("blockquote",[n("p",[t._v("项目共享数据较多时使用")])]),t._v(" "),n("p",[t._v("store：数据仓库")]),t._v(" "),n("p",[t._v("state：数据存储对象")]),t._v(" "),n("p",[t._v("action：触发数据改变的方法")]),t._v(" "),n("p",[t._v("dispatch：触发action的方法")]),t._v(" "),n("p",[t._v("reducer：通过获取动作，改变数据")])])}),[],!1,null,null,null);e.default=s.exports}}]);