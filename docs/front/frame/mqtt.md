# mqtt

[在vue中使用mqtt](https://www.emqx.com/zh/blog/how-to-use-mqtt-in-vue)

```javascript
import mqtt from 'mqtt'

/**
 * topic：主题
 * qos：消息等级
 * payload：消息内容
 */

export default class MqttX {
    constructor() {
        this.receiveNews = receiveNews
        this.client = client
        this.options = {
            host: 'broker.emqx.io',
            port: 8083,
            endpoint: '/mqtt',
            clean: true, // 保留会话
            // connectTimeout: 4000, // 超时时间
            // reconnectPeriod: 4000, // 重连时间间隔
            // 认证信息
            clientId: 'mqttx_fadf3121', // 每一个客户端ID都不同
            username: '',
            password: ''
        }
        this.subscription = {
            topic: 'topic/mqttx',
            qos: 0
        }
        this.publication = {
            topic: 'topic/mqttx',
            qos: 0,
            payload: '{ "msg": "Hello, I am browser." }'
        }
    }
    // 监理连接
    connection(options) {
        // ws 未加密 WebSocket 连接 端口号8083
        // wss 加密 WebSocket 连接 端口号8083
        // mqtt 未加密 TCP 连接 端口号1883
        // mqtts 加密 TCP 连接 端口号1883
        const { host, port, endpoint, ...option } = options?options:this.options
        const connectUrl = `ws://${host}:${port}${endpoint}`
        try {
            this.client = mqtt.connect(connectUrl, option)
        } catch (error) { 
            console.log('mqtt.connect error', error)
        }
        this.client.on('connect', () => {
            console.log('Connection succeeded!')
        })
        this.client.on('error', error => {
            console.log('Connection failed', error)
        })
        // 监听收到的消息
        this.client.on('message', (topic, message) => {
            this.receiveNews = this.receiveNews.concat(message)
            console.log(`Received message ${message} from topic ${topic}`)
        })
    }
    // 订阅主题
    subscribe(subscription) {
        const { topic, qos } = subscription?subscription:this.subscription
        this.client.subscribe(topic, { qos }, (error, res) => {
            if (error) {
                console.log('Subscribe to topics error', error)
                return
            }
            console.log('Subscribe to topics res', res)
        })
    }
    // 取消订阅
    unSubscribe(subscription) {
        const { topic } = subscription?subscription:this.subscription
        this.client.unsubscribe(topic, error => {
            if (error) {
                console.log('Unsubscribe error', error)
            }
        })
    }
    // 发布消息
    publish(publication) {
        const { topic, qos, payload } = publication?publication:this.publication
        this.client.publish(topic, payload, qos, error => {
            if (error) {
                console.log('Publish error', error)
            }
        })
    }
    // 断开连接
    unConnection() {
        if (this.client.connected) {
            try {
                this.client.end()
                this.client = {
                    connected: false,
                }
                console.log('Successfully disconnected!')
            } catch (error) {
                console.log('Disconnect failed', error.toString())
            }
        }
    }
}
```

