# node

forever：让node.js在后台持久运行

pm2: Node.js的进程管理器

# ES6异步写法

- async是个函数，await只能在这个函数里面
- await等待一个promise对象

```javascript
let sleep = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ok') ;
        }, time);
    })
}
let start = async () => {
    await sleep(2000);
}
start();
```

# path路径模块

- dirname(path)：获取所在路径
- basename(path)：获取文件名
- extname(path)：获取扩展名
- join(arry)：路径组合
- resolve(arry)：获取绝对路径
- parse(path)：路径拆解成对象结构
- format(pathObject)：对象结构组合成完整路径

# fs文件操作系统模块

- readFileSync(path,encoding)/readFile(path,encoding,function)：文件同步/异步读取
- writeFileSync(path,str,encoding)/writeFile(path,str,encoding,function)：文件同步/异步写入
- appendFileSync()/appendFile()：文件同步/异步追加
- createReadStream(path,encoding)/createWriteStream(path,encoding)：大文件读取写入
- exists(path)/existsSync(path)：判断文件是否存在
- mkdir(path)/mkdirSync(path)：创建目录
- remdir(path)/remdirSync(path)：删除目录
- unlink(path)：删除文件
- rename(oldPath,newPath,function)/renameSync(oldPath,newPath)：文件重命名
- watchFile(path,options,fuction)：监听文件变化
- chmod(path, mode, fuction)/chmodSync()：修改权限
- stat(path,function)/statSync(path,function)：获取文件信息

# http模块(https)

- 服务端实例

```javascript
let http = require('http')
let url = require('url')
createServer() {
  http.createServer((req, res) => {
    // 请求数据
    console.log(`请求方法${req.method}`)
    console.log(`http版本:${req.httpVersion}`)
    console.log(`请求头部:${JSON.stringify(req.headers)}`)
    if(req.method === 'GET') {
      // 处理链接参数
      let obj = url.parse(req.url, true).query
      console.log('get url is:' + JSON.stringify(obj))
      this.setResult(res)
    }else if(req.method === 'POST') {
      // 处理链接参数
      let obj = url.parse(req.url, true).query
      console.log('get url is:' + JSON.stringify(obj))
      // 处理body参数
      let body = ''
      req.on('data', (thunk) => {
        body += thunk
      })
      req.on('end', () => {
        console.log('post body is:' + body)
        this.setResult(res)
      })
    }
  }).listen(3000)
  console.log('监听端口号:' + 'http://localhost:3000')
}
setResult(res) {
  // 设置响应请求头-1
  // res.setHeader('Content-Type', 'application/json')
  // res.statusCode = 200
  // res.statusMessage = '请求成功'
  // 设置响应请求头-2
  res.writeHead(200, JSON.stringify(this.data), {
    'Content-Type': 'text/plain; charset=UTF-8',
  })
  let result = {
    code: 200,
    msg: "success"
  }
  res.write(JSON.stringify(result)) // 返回请求结果
  res.end() // 请求结束
}
```

- # 客户端实例

```javascript
let fs = require('fs')
let http = require('http')
request({url,method,headers,data}) {
  let client = http.request(url,{headers,method},
                            function (res) {
    if(method === 'GET') {
      let data = ''
      res.setEncoding('utf8')
      res.on('data', function (chunk) {
        data += chunk
      })
      res.on('end', function () {
        data = JSON.parse(data)
        if (data.code === 200) {
          console.log(data.msg)
        }
      })
    }else if(method === 'POST') {
      res.pipe(process.stdout)
    }
  })
  if(data) {
    client.write(JSON.stringify(data))
  }
  client.on('response', function(res) {
    console.log('服务端响应后触发')
  })
  client.end()
}

server.request({
    url: 'http://localhost:3000?num=10&age=19',
    method: 'GET',
    headers: {
        "content-type": "application/json"
    }
})
server.request({
    url: 'http://localhost:3000?num=10&age=19',
    method: 'POST',
    headers: {
        "connection": "keep-alive",
        "content-type": "application/x-www-form-urlencoded"
    },
    data: {
        name: "kin"
    }
})
```

# net模块

http继承了其功能

- 服务端实例

```javascript
let net = require('net')
let datas = {
    code: 200,
    msg: 'success'
}
let server = net.createServer(function(socket) {
    socket.on('data', function(data) {
        console.log('收到客户端数据:'+data)
        // 返回处理信息
        socket.write(JSON.stringify(datas))
    })
    socket.on('close', function() {
        console.log('结束请求')
    })
})
console.log(server.address()) // 服务端地址信息
server.listen(3000, '127.0.0.1')
```

- 客户端实例

```javascript
let net = require('net')
let data = {
    name: 'kin',
    age: 155
}
let client = net.createConnection(3000, '127.0.0.1')
client.on('connect', function() {
    console.log('建立连接')
})
client.on('data', function(data) {
    console.log('收到的数据:'+ data)
})
client.write(JSON.stringify(data))
client.on('close', function() {
    console.log('断开连接')
})
client.end()
```

# dgram模块

对socket的一层封装，比net简单

- 服务端实例

```javascript
let dgram = require('dgram')
let server = dgram.createSocket('udp4')
server.on('listening', function() {
    let address = server.address()
    console.log('UDP Server listening on ' + address.address + ":" + address.port)
})
server.on('message', function(message, remote) {
    console.log(remote.address + ':' + remote.port + '-' + message)
})
server.bind(33333, '127.0.0.1')
```

- 客户端实例

```javascript
let dgram = require('dgram')
let message = Buffer.from('kinron')
let client = dgram.createSocket('udp4')
client.bind(function() {
    client.setBroadcast(true)
    client.send(message, 33333, '127.0.0.1', function(err, bytes) {
        if(err) throw err
        client.close()
    })
})
```

# url模块

- parse(urlObject)：url拆解成对象结构
- format(url)：对象结构组合成完整url

# dns模块

域名解析

- lookup()：域名解析查看
- resolve4()：域名解析查看