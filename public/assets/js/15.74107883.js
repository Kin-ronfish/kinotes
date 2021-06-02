(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{302:function(t,v,_){"use strict";_.r(v);var e=_(1),a=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"网络协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网络协议"}},[t._v("#")]),t._v(" 网络协议")]),t._v(" "),_("h1",{attrs:{id:"udp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#udp"}},[t._v("#")]),t._v(" UDP")]),t._v(" "),_("h2",{attrs:{id:"面向报文"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#面向报文"}},[t._v("#")]),t._v(" 面向报文")]),t._v(" "),_("p",[t._v("UDP 是一个面向报文（报文可以理解为一段段的数据）的协议。意思就是 UDP 只是报文的搬运工，不会对报文进行任何拆分和拼接操作。")]),t._v(" "),_("p",[t._v("具体来说")]),t._v(" "),_("ul",[_("li",[t._v("在发送端，应用层将数据传递给传输层的 UDP 协议，UDP 只会给数据增加一个 UDP 头标识下是 UDP 协议，然后就传递给网络层了")]),t._v(" "),_("li",[t._v("在接收端，网络层将数据传递给传输层，UDP 只去除 IP 报文头就传递给应用层，不会任何拼接操作")])]),t._v(" "),_("h2",{attrs:{id:"不可靠性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#不可靠性"}},[t._v("#")]),t._v(" 不可靠性")]),t._v(" "),_("ol",[_("li",[t._v("UDP 是无连接的，也就是说通信不需要建立和断开连接。")]),t._v(" "),_("li",[t._v("UDP 也是不可靠的。协议收到什么数据就传递什么数据，并且也不会备份数据，对方能不能收到是不关心的")]),t._v(" "),_("li",[t._v("UDP 没有拥塞控制，一直会以恒定的速度发送数据。即使网络条件不好，也不会对发送速率进行调整。这样实现的弊端就是在网络条件不好的情况下可能会导致丢包，但是优点也很明显，在某些实时性要求高的场景（比如电话会议）就需要使用 UDP 而不是 TCP。")])]),t._v(" "),_("h2",{attrs:{id:"高效"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#高效"}},[t._v("#")]),t._v(" 高效")]),t._v(" "),_("p",[t._v("因为 UDP 没有 TCP 那么复杂，需要保证数据不丢失且有序到达。所以 UDP 的头部开销小，只有八字节，相比 TCP 的至少二十字节要少得多，在传输数据报文时是很高效的。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-42633.png",alt:""}})]),t._v(" "),_("p",[t._v("头部包含了以下几个数据")]),t._v(" "),_("ul",[_("li",[t._v("两个十六位的端口号，分别为源端口（可选字段）和目标端口")]),t._v(" "),_("li",[t._v("整个数据报文的长度")]),t._v(" "),_("li",[t._v("整个数据报文的检验和（IPv4 可选 字段），该字段用于发现头部信息和数据中的错误")])]),t._v(" "),_("h2",{attrs:{id:"传输方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#传输方式"}},[t._v("#")]),t._v(" 传输方式")]),t._v(" "),_("p",[t._v("UDP 不止支持一对一的传输方式，同样支持一对多，多对多，多对一的方式，也就是说 UDP 提供了单播，多播，广播的功能。")]),t._v(" "),_("h1",{attrs:{id:"tcp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[t._v("#")]),t._v(" TCP")]),t._v(" "),_("h2",{attrs:{id:"头部"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#头部"}},[t._v("#")]),t._v(" 头部")]),t._v(" "),_("p",[t._v("TCP 头部比 UDP 头部复杂的多")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-042634.png",alt:""}})]),t._v(" "),_("p",[t._v("对于 TCP 头部来说，以下几个字段是很重要的")]),t._v(" "),_("ul",[_("li",[t._v("Sequence number，这个序号保证了 TCP 传输的报文都是有序的，对端可以通过序号顺序的拼接报文")]),t._v(" "),_("li",[t._v("Acknowledgement Number，这个序号表示数据接收端期望接收的下一个字节的编号是多少，同时也表示上一个序号的数据已经收到")]),t._v(" "),_("li",[t._v("Window Size，窗口大小，表示还能接收多少字节的数据，用于流量控制")]),t._v(" "),_("li",[t._v("标识符\n"),_("ul",[_("li",[t._v("URG=1：该字段为一表示本数据报的数据部分包含紧急信息，是一个高优先级数据报文，此时紧急指针有效。紧急数据一定位于当前数据包数据部分的最前面，紧急指针标明了紧急数据的尾部。")]),t._v(" "),_("li",[t._v("ACK=1：该字段为一表示确认号字段有效。此外，TCP 还规定在连接建立后传送的所有报文段都必须把 ACK 置为一。")]),t._v(" "),_("li",[t._v("PSH=1：该字段为一表示接收端应该立即将数据 push 给应用层，而不是等到缓冲区满后再提交。")]),t._v(" "),_("li",[t._v("RST=1：该字段为一表示当前 TCP 连接出现严重问题，可能需要重新建立 TCP 连接，也可以用于拒绝非法的报文段和拒绝连接请求。")]),t._v(" "),_("li",[t._v("SYN=1：当SYN=1，ACK=0时，表示当前报文段是一个连接请求报文。当SYN=1，ACK=1时，表示当前报文段是一个同意建立连接的应答报文。")]),t._v(" "),_("li",[t._v("FIN=1：该字段为一表示此报文段是一个释放连接的请求报文。")])])])]),t._v(" "),_("h2",{attrs:{id:"状态机"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#状态机"}},[t._v("#")]),t._v(" 状态机")]),t._v(" "),_("p",[t._v("HTTP 是无连接的，所以作为下层的 TCP 协议也是无连接的，虽然看似 TCP 将两端连接了起来，但是其实只是两端共同维护了一个状态")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-042638.png",alt:""}})]),t._v(" "),_("p",[t._v("TCP 的状态机是很复杂的，并且与建立断开连接时的握手息息相关，接下来就来详细描述下两种握手。")]),t._v(" "),_("p",[t._v("在这之前需要了解一个重要的性能指标 RTT。该指标表示发送端发送数据到接收到对端数据所需的往返时间。")]),t._v(" "),_("h3",{attrs:{id:"建立连接三次握手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#建立连接三次握手"}},[t._v("#")]),t._v(" 建立连接三次握手")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-042641.png",alt:""}})]),t._v(" "),_("p",[t._v("在 TCP 协议中，主动发起请求的一端为客户端，被动连接的一端称为服务端。不管是客户端还是服务端，TCP 连接建立完后都能发送和接收数据，所以 TCP 也是一个全双工的协议。")]),t._v(" "),_("p",[t._v("起初，两端都为 CLOSED 状态。在通信开始前，双方都会创建 TCB。 服务器创建完 TCB 后遍进入 LISTEN 状态，此时开始等待客户端发送数据。")]),t._v(" "),_("p",[_("strong",[t._v("第一次握手")])]),t._v(" "),_("p",[t._v("客户端向服务端发送连接请求报文段。该报文段中包含自身的数据通讯初始序号。请求发送后，客户端便进入  SYN-SENT 状态，"),_("code",[t._v("x")]),t._v(" 表示客户端的数据通信初始序号。")]),t._v(" "),_("p",[_("strong",[t._v("第二次握手")])]),t._v(" "),_("p",[t._v("服务端收到连接请求报文段后，如果同意连接，则会发送一个应答，该应答中也会包含自身的数据通讯初始序号，发送完成后便进入 SYN-RECEIVED 状态。")]),t._v(" "),_("p",[_("strong",[t._v("第三次握手")])]),t._v(" "),_("p",[t._v("当客户端收到连接同意的应答后，还要向服务端发送一个确认报文。客户端发完这个报文段后便进入ESTABLISHED 状态，服务端收到这个应答后也进入 ESTABLISHED 状态，此时连接建立成功。")]),t._v(" "),_("p",[t._v("PS：第三次握手可以包含数据，通过 TCP 快速打开（TFO）技术。其实只要涉及到握手的协议，都可以使用类似 TFO 的方式，客户端和服务端存储相同 cookie，下次握手时发出 cookie 达到减少 RTT 的目的。")]),t._v(" "),_("p",[_("strong",[t._v("你是否有疑惑明明两次握手就可以建立起连接，为什么还需要第三次应答？")])]),t._v(" "),_("p",[t._v("因为这是为了防止失效的连接请求报文段被服务端接收，从而产生错误。")]),t._v(" "),_("p",[t._v("可以想象如下场景。客户端发送了一个连接请求 A，但是因为网络原因造成了超时，这时 TCP 会启动超时重传的机制再次发送一个连接请求 B。此时请求顺利到达服务端，服务端应答完就建立了请求。如果连接请求 A 在两端关闭后终于抵达了服务端，那么这时服务端会认为客户端又需要建立 TCP 连接，从而应答了该请求并进入 ESTABLISHED 状态。此时客户端其实是 CLOSED 状态，那么就会导致服务端一直等待，造成资源的浪费。")]),t._v(" "),_("p",[t._v("PS：在建立连接中，任意一端掉线，TCP 都会重发 SYN 包，一般会重试五次，在建立连接中可能会遇到 SYN FLOOD 攻击。遇到这种情况你可以选择调低重试次数或者干脆在不能处理的情况下拒绝请求。")]),t._v(" "),_("h3",{attrs:{id:"断开链接四次握手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#断开链接四次握手"}},[t._v("#")]),t._v(" 断开链接四次握手")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-42642.png",alt:""}})]),t._v(" "),_("p",[t._v("TCP 是全双工的，在断开连接时两端都需要发送 FIN 和 ACK。")]),t._v(" "),_("p",[_("strong",[t._v("第一次握手")])]),t._v(" "),_("p",[t._v("若客户端 A 认为数据发送完成，则它需要向服务端 B 发送连接释放请求。")]),t._v(" "),_("p",[_("strong",[t._v("第二次握手")])]),t._v(" "),_("p",[t._v("B 收到连接释放请求后，会告诉应用层要释放 TCP 链接。然后会发送 ACK 包，并进入 CLOSE_WAIT 状态，表示 A 到 B 的连接已经释放，不接收 A 发的数据了。但是因为 TCP 连接时双向的，所以 B 仍旧可以发送数据给 A。")]),t._v(" "),_("p",[_("strong",[t._v("第三次握手")])]),t._v(" "),_("p",[t._v("B 如果此时还有没发完的数据会继续发送，完毕后会向 A 发送连接释放请求，然后 B 便进入 LAST-ACK 状态。")]),t._v(" "),_("p",[t._v("PS：通过延迟确认的技术（通常有时间限制，否则对方会误认为需要重传），可以将第二次和第三次握手合并，延迟 ACK 包的发送。")]),t._v(" "),_("p",[_("strong",[t._v("第四次握手")])]),t._v(" "),_("p",[t._v("A 收到释放请求后，向 B 发送确认应答，此时 A 进入 TIME-WAIT 状态。该状态会持续 2MSL（最大段生存期，指报文段在网络中生存的时间，超时会被抛弃） 时间，若该时间段内没有 B 的重发请求的话，就进入 CLOSED 状态。当 B 收到确认应答后，也便进入 CLOSED 状态。")]),t._v(" "),_("p",[_("strong",[t._v("为什么 A 要进入 TIME-WAIT 状态，等待 2MSL 时间后才进入 CLOSED 状态？")])]),t._v(" "),_("p",[t._v("为了保证 B 能收到 A 的确认应答。若 A 发完确认应答后直接进入 CLOSED 状态，如果确认应答因为网络问题一直没有到达，那么会造成 B 不能正常关闭。")]),t._v(" "),_("h2",{attrs:{id:"arq-协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#arq-协议"}},[t._v("#")]),t._v(" ARQ 协议")]),t._v(" "),_("p",[t._v("ARQ 协议也就是超时重传机制。通过确认和超时机制保证了数据的正确送达，ARQ 协议包含停止等待 ARQ 和连续 ARQ")]),t._v(" "),_("h3",{attrs:{id:"停止等待-arq"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#停止等待-arq"}},[t._v("#")]),t._v(" 停止等待 ARQ")]),t._v(" "),_("p",[_("strong",[t._v("正常传输过程")])]),t._v(" "),_("p",[t._v("只要 A 向 B 发送一段报文，都要停止发送并启动一个定时器，等待对端回应，在定时器时间内接收到对端应答就取消定时器并发送下一段报文。")]),t._v(" "),_("p",[_("strong",[t._v("报文丢失或出错")])]),t._v(" "),_("p",[t._v("在报文传输的过程中可能会出现丢包。这时候超过定时器设定的时间就会再次发送丢包的数据直到对端响应，所以需要每次都备份发送的数据。")]),t._v(" "),_("p",[t._v("即使报文正常的传输到对端，也可能出现在传输过程中报文出错的问题。这时候对端会抛弃该报文并等待 A 端重传。")]),t._v(" "),_("p",[t._v("PS：一般定时器设定的时间都会大于一个 RTT 的平均时间。")]),t._v(" "),_("p",[_("strong",[t._v("ACK 超时或丢失")])]),t._v(" "),_("p",[t._v("对端传输的应答也可能出现丢失或超时的情况。那么超过定时器时间 A 端照样会重传报文。这时候 B 端收到相同序号的报文会丢弃该报文并重传应答，直到 A 端发送下一个序号的报文。")]),t._v(" "),_("p",[t._v("在超时的情况下也可能出现应答很迟到达，这时 A 端会判断该序号是否已经接收过，如果接收过只需要丢弃应答即可。")]),t._v(" "),_("p",[_("strong",[t._v("这个协议的缺点就是传输效率低，在良好的网络环境下每次发送报文都得等待对端的 ACK 。")])]),t._v(" "),_("h3",{attrs:{id:"连续-arq"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#连续-arq"}},[t._v("#")]),t._v(" 连续 ARQ")]),t._v(" "),_("p",[t._v("在连续 ARQ 中，发送端拥有一个发送窗口，可以在没有收到应答的情况下持续发送窗口内的数据，这样相比停止等待 ARQ 协议来说减少了等待时间，提高了效率。")]),t._v(" "),_("h3",{attrs:{id:"累计确认"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#累计确认"}},[t._v("#")]),t._v(" 累计确认")]),t._v(" "),_("p",[t._v("连续 ARQ 中，接收端会持续不断收到报文。如果和停止等待 ARQ 中接收一个报文就发送一个应答一样，就太浪费资源了。通过累计确认，可以在收到多个报文以后统一回复一个应答报文。报文中的 ACK 可以用来告诉发送端这个序号之前的数据已经全部接收到了，下次请发送这个序号 + 1的数据。")]),t._v(" "),_("p",[t._v("但是累计确认也有一个弊端。在连续接收报文时，可能会遇到接收到序号 5 的报文后，并未接到序号 6 的报文，然而序号 7 以后的报文已经接收。遇到这种情况时，ACK 只能回复 6，这样会造成发送端重复发送数据，这种情况下可以通过 Sack 来解决，这个会在下文说到。")]),t._v(" "),_("h2",{attrs:{id:"滑动窗口"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#滑动窗口"}},[t._v("#")]),t._v(" 滑动窗口")]),t._v(" "),_("p",[t._v("在上面小节中讲到了发送窗口。在 TCP 中，两端都维护着窗口：分别为发送端窗口和接收端窗口。")]),t._v(" "),_("p",[t._v("发送端窗口包含已发送但未收到应答的数据和可以发送但是未发送的数据。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-042642.png",alt:""}})]),t._v(" "),_("p",[t._v("发送端窗口是由接收窗口剩余大小决定的。接收方会把当前接收窗口的剩余大小写入应答报文，发送端收到应答后根据该值和当前网络拥塞情况设置发送窗口的大小，所以发送窗口的大小是不断变化的。")]),t._v(" "),_("p",[t._v("当发送端接收到应答报文后，会随之将窗口进行滑动")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-042643.png",alt:""}})]),t._v(" "),_("p",[t._v("滑动窗口实现了流量控制。接收方通过报文告知发送方还可以发送多少数据，从而保证接收方能够来得及接收数据。")]),t._v(" "),_("h3",{attrs:{id:"zero-窗口"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#zero-窗口"}},[t._v("#")]),t._v(" Zero 窗口")]),t._v(" "),_("p",[t._v("在发送报文的过程中，可能会遇到对端出现零窗口的情况。在该情况下，发送端会停止发送数据，并启动 persistent timer 。该定时器会定时发送请求给对端，让对端告知窗口大小。在重试次数超过一定次数后，可能会中断 TCP 链接。")]),t._v(" "),_("h2",{attrs:{id:"拥塞处理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#拥塞处理"}},[t._v("#")]),t._v(" 拥塞处理")]),t._v(" "),_("p",[t._v("拥塞处理和流量控制不同，后者是作用于接收方，保证接收方来得及接受数据。而前者是作用于网络，防止过多的数据拥塞网络，避免出现网络负载过大的情况。")]),t._v(" "),_("p",[t._v("拥塞处理包括了四个算法，分别为：慢开始，拥塞避免，快速重传，快速恢复。")]),t._v(" "),_("h3",{attrs:{id:"慢开始算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#慢开始算法"}},[t._v("#")]),t._v(" 慢开始算法")]),t._v(" "),_("p",[t._v("慢开始算法，顾名思义，就是在传输开始时将发送窗口慢慢指数级扩大，从而避免一开始就传输大量数据导致网络拥塞。")]),t._v(" "),_("p",[t._v("慢开始算法步骤具体如下")]),t._v(" "),_("ol",[_("li",[t._v("连接初始设置拥塞窗口（Congestion Window） 为 1 MSS（一个分段的最大数据量）")]),t._v(" "),_("li",[t._v("每过一个 RTT 就将窗口大小乘二")]),t._v(" "),_("li",[t._v("指数级增长肯定不能没有限制的，所以有一个阈值限制，当窗口大小大于阈值时就会启动拥塞避免算法。")])]),t._v(" "),_("h3",{attrs:{id:"拥塞避免算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#拥塞避免算法"}},[t._v("#")]),t._v(" 拥塞避免算法")]),t._v(" "),_("p",[t._v("拥塞避免算法相比简单点，每过一个 RTT 窗口大小只加一，这样能够避免指数级增长导致网络拥塞，慢慢将大小调整到最佳值。")]),t._v(" "),_("p",[t._v("在传输过程中可能定时器超时的情况，这时候 TCP 会认为网络拥塞了，会马上进行以下步骤：")]),t._v(" "),_("ul",[_("li",[t._v("将阈值设为当前拥塞窗口的一半")]),t._v(" "),_("li",[t._v("将拥塞窗口设为 1 MSS")]),t._v(" "),_("li",[t._v("启动拥塞避免算法")])]),t._v(" "),_("h3",{attrs:{id:"快速重传"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#快速重传"}},[t._v("#")]),t._v(" 快速重传")]),t._v(" "),_("p",[t._v("快速重传一般和快恢复一起出现。一旦接收端收到的报文出现失序的情况，接收端只会回复最后一个顺序正确的报文序号（没有 Sack 的情况下）。如果收到三个重复的 ACK，无需等待定时器超时再重发而是启动快速重传。具体算法分为两种：")]),t._v(" "),_("p",[_("strong",[t._v("TCP Taho 实现如下")])]),t._v(" "),_("ul",[_("li",[t._v("将阈值设为当前拥塞窗口的一半")]),t._v(" "),_("li",[t._v("将拥塞窗口设为 1 MSS")]),t._v(" "),_("li",[t._v("重新开始慢开始算法")])]),t._v(" "),_("p",[_("strong",[t._v("TCP Reno 实现如下")])]),t._v(" "),_("ul",[_("li",[t._v("拥塞窗口减半")]),t._v(" "),_("li",[t._v("将阈值设为当前拥塞窗口")]),t._v(" "),_("li",[t._v("进入快恢复阶段（重发对端需要的包，一旦收到一个新的 ACK 答复就退出该阶段）")]),t._v(" "),_("li",[t._v("使用拥塞避免算法")])]),t._v(" "),_("h3",{attrs:{id:"tcp-new-ren-改进后的快恢复"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-new-ren-改进后的快恢复"}},[t._v("#")]),t._v(" TCP New Ren 改进后的快恢复")]),t._v(" "),_("p",[_("strong",[t._v("TCP New Reno")]),t._v(" 算法改进了之前 "),_("strong",[t._v("TCP Reno")]),t._v(" 算法的缺陷。在之前，快恢复中只要收到一个新的 ACK 包，就会退出快恢复。")]),t._v(" "),_("p",[t._v("在 "),_("strong",[t._v("TCP New Reno")]),t._v(" 中，TCP 发送方先记下三个重复 ACK 的分段的最大序号。")]),t._v(" "),_("p",[t._v("假如我有一个分段数据是 1 ~ 10 这十个序号的报文，其中丢失了序号为 3 和 7 的报文，那么该分段的最大序号就是 10。发送端只会收到 ACK 序号为 3 的应答。这时候重发序号为 3 的报文，接收方顺利接收并会发送 ACK 序号为 7 的应答。这时候 TCP 知道对端是有多个包未收到，会继续发送序号为 7 的报文，接收方顺利接收并会发送 ACK 序号为 11 的应答，这时发送端认为这个分段接收端已经顺利接收，接下来会退出快恢复阶段。")]),t._v(" "),_("h1",{attrs:{id:"http"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[t._v("#")]),t._v(" HTTP")]),t._v(" "),_("p",[t._v("HTTP 协议是个无状态协议，不会保存状态。")]),t._v(" "),_("h2",{attrs:{id:"post-和-get-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#post-和-get-的区别"}},[t._v("#")]),t._v(" Post 和 Get 的区别")]),t._v(" "),_("p",[t._v("先引入副作用和幂等的概念。")]),t._v(" "),_("p",[t._v("副作用指对服务器上的资源做改变，搜索是无副作用的，注册是副作用的。")]),t._v(" "),_("p",[t._v("幂等指发送 M 和 N 次请求（两者不相同且都大于 1），服务器上资源的状态一致，比如注册 10 个和 11 个帐号是不幂等的，对文章进行更改 10 次和 11 次是幂等的。")]),t._v(" "),_("p",[t._v("在规范的应用场景上说，Get 多用于无副作用，幂等的场景，例如搜索关键字。Post 多用于副作用，不幂等的场景，例如注册。")]),t._v(" "),_("p",[t._v("在技术上说：")]),t._v(" "),_("ul",[_("li",[t._v("Get 请求能缓存，Post 不能")]),t._v(" "),_("li",[t._v("Post 相对 Get 安全一点点，因为Get 请求都包含在 URL 里，且会被浏览器保存历史纪录，Post 不会，但是在抓包的情况下都是一样的。")]),t._v(" "),_("li",[t._v("Post 可以通过 request body来传输比 Get 更多的数据，Get 没有这个技术")]),t._v(" "),_("li",[t._v("URL有长度限制，会影响 Get 请求，但是这个长度限制是浏览器规定的，不是 RFC 规定的")]),t._v(" "),_("li",[t._v("Post 支持更多的编码类型且不对数据类型限制")])]),t._v(" "),_("h2",{attrs:{id:"常见状态码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常见状态码"}},[t._v("#")]),t._v(" 常见状态码")]),t._v(" "),_("p",[_("strong",[t._v("2XX 成功")])]),t._v(" "),_("ul",[_("li",[t._v("200 OK，表示从客户端发来的请求在服务器端被正确处理")]),t._v(" "),_("li",[t._v("204 No content，表示请求成功，但响应报文不含实体的主体部分")]),t._v(" "),_("li",[t._v("205 Reset Content，表示请求成功，但响应报文不含实体的主体部分，但是与 204 响应不同在于要求请求方重置内容")]),t._v(" "),_("li",[t._v("206 Partial Content，进行范围请求")])]),t._v(" "),_("p",[_("strong",[t._v("3XX 重定向")])]),t._v(" "),_("ul",[_("li",[t._v("301 moved permanently，永久性重定向，表示资源已被分配了新的 URL")]),t._v(" "),_("li",[t._v("302 found，临时性重定向，表示资源临时被分配了新的 URL")]),t._v(" "),_("li",[t._v("303 see other，表示资源存在着另一个 URL，应使用 GET 方法获取资源")]),t._v(" "),_("li",[t._v("304 not modified，表示服务器允许访问资源，但因发生请求未满足条件的情况")]),t._v(" "),_("li",[t._v("307 temporary redirect，临时重定向，和302含义类似，但是期望客户端保持请求方法不变向新的地址发出请求")])]),t._v(" "),_("p",[_("strong",[t._v("4XX 客户端错误")])]),t._v(" "),_("ul",[_("li",[t._v("400 bad request，请求报文存在语法错误")]),t._v(" "),_("li",[t._v("401 unauthorized，表示发送的请求需要有通过 HTTP 认证的认证信息")]),t._v(" "),_("li",[t._v("403 forbidden，表示对请求资源的访问被服务器拒绝")]),t._v(" "),_("li",[t._v("404 not found，表示在服务器上没有找到请求的资源")])]),t._v(" "),_("p",[_("strong",[t._v("5XX 服务器错误")])]),t._v(" "),_("ul",[_("li",[t._v("500 internal sever error，表示服务器端在执行请求时发生了错误")]),t._v(" "),_("li",[t._v("501 Not Implemented，表示服务器不支持当前请求所需要的某个功能")]),t._v(" "),_("li",[t._v("503 service unavailable，表明服务器暂时处于超负载或正在停机维护，无法处理请求")])]),t._v(" "),_("h2",{attrs:{id:"http-首部"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-首部"}},[t._v("#")]),t._v(" HTTP 首部")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("通用字段")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("作用")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Cache-Control")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("控制缓存的行为")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Connection")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("浏览器想要优先使用的连接类型，比如  "),_("code",[t._v("keep-alive")])])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Date")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("创建报文时间")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Pragma")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("报文指令")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Via")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("代理服务器相关信息")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Transfer-Encoding")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("传输编码方式")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Upgrade")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("要求客户端升级协议")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Warning")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("在内容中可能存在错误")])])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("请求字段")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("作用")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Accept")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("能正确接收的媒体类型")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Accept-Charset")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("能正确接收的字符集")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Accept-Encoding")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("能正确接收的编码格式列表")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Accept-Language")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("能正确接收的语言列表")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Expect")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("期待服务端的指定行为")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("From")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("请求方邮箱地址")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Host")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("服务器的域名")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("If-Match")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("两端资源标记比较")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("If-Modified-Since")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("本地资源未修改返回 304（比较时间）")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("If-None-Match")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("本地资源未修改返回 304（比较标记）")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("User-Agent")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("客户端信息")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Max-Forwards")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("限制可被代理及网关转发的次数")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Proxy-Authorization")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("向代理服务器发送验证信息")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Range")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("请求某个内容的一部分")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Referer")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("表示浏览器所访问的前一个页面")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("TE")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("传输编码方式")])])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("响应字段")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("作用")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Accept-Ranges")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是否支持某些种类的范围")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Age")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("资源在代理缓存中存在的时间")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("ETag")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("资源标识")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Location")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("客户端重定向到某个 URL")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Proxy-Authenticate")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("向代理服务器发送验证信息")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Server")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("服务器名字")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("WWW-Authenticate")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("获取资源需要的验证信息")])])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("实体字段")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("作用")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Allow")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("资源的正确请求方式")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Content-Encoding")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("内容的编码格式")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Content-Language")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("内容使用的语言")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Content-Length")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("request body 长度")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Content-Location")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("返回数据的备用地址")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Content-MD5")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("Base64加密格式的内容 MD5检验值")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Content-Range")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("内容的位置范围")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Content-Type")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("内容的媒体类型")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Expires")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("内容的过期时间")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Last_modified")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("内容的最后修改时间")])])])]),t._v(" "),_("p",[t._v("PS：缓存相关已在别的模块中写完，你可以 "),_("router-link",{attrs:{to:"/base/Performance/performance-ch.html#缓存"}},[t._v("阅读该小节")])],1),t._v(" "),_("h1",{attrs:{id:"https"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[t._v("#")]),t._v(" HTTPS")]),t._v(" "),_("p",[t._v("HTTPS 还是通过了 HTTP 来传输信息，但是信息通过 TLS 协议进行了加密。")]),t._v(" "),_("h2",{attrs:{id:"tls"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tls"}},[t._v("#")]),t._v(" TLS")]),t._v(" "),_("p",[t._v("TLS 协议位于传输层之上，应用层之下。首次进行 TLS 协议传输需要两个 RTT ，接下来可以通过 Session Resumption 减少到一个 RTT。")]),t._v(" "),_("p",[t._v("在 TLS 中使用了两种加密技术，分别为：对称加密和非对称加密。")]),t._v(" "),_("p",[_("strong",[t._v("对称加密")]),t._v("：")]),t._v(" "),_("p",[t._v("对称加密就是两边拥有相同的秘钥，两边都知道如何将密文加密解密。")]),t._v(" "),_("p",[_("strong",[t._v("非对称加密")]),t._v("：")]),t._v(" "),_("p",[t._v("有公钥私钥之分，公钥所有人都可以知道，可以将数据用公钥加密，但是将数据解密必须使用私钥解密，私钥只有分发公钥的一方才知道。")]),t._v(" "),_("p",[_("strong",[t._v("TLS 握手过程如下图：")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-042644.jpg",alt:""}})]),t._v(" "),_("ol",[_("li",[t._v("客户端发送一个随机值，需要的协议和加密方式")]),t._v(" "),_("li",[t._v("服务端收到客户端的随机值，自己也产生一个随机值，并根据客户端需求的协议和加密方式来使用对应的方式，发送自己的证书（如果需要验证客户端证书需要说明）")]),t._v(" "),_("li",[t._v("客户端收到服务端的证书并验证是否有效，验证通过会再生成一个随机值，通过服务端证书的公钥去加密这个随机值并发送给服务端，如果服务端需要验证客户端证书的话会附带证书")]),t._v(" "),_("li",[t._v("服务端收到加密过的随机值并使用私钥解密获得第三个随机值，这时候两端都拥有了三个随机值，可以通过这三个随机值按照之前约定的加密方式生成密钥，接下来的通信就可以通过该密钥来加密解密")])]),t._v(" "),_("p",[t._v("通过以上步骤可知，在 TLS 握手阶段，两端使用非对称加密的方式来通信，但是因为非对称加密损耗的性能比对称加密大，所以在正式传输数据时，两端使用对称加密的方式通信。")]),t._v(" "),_("p",[t._v("PS：以上说明的都是 TLS 1.2 协议的握手情况，在 1.3 协议中，首次建立连接只需要一个 RTT，后面恢复连接不需要 RTT 了。")]),t._v(" "),_("h1",{attrs:{id:"http-2-0"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-2-0"}},[t._v("#")]),t._v(" HTTP 2.0")]),t._v(" "),_("p",[t._v("HTTP 2.0 相比于 HTTP 1.X，可以说是大幅度提高了 web 的性能。")]),t._v(" "),_("p",[t._v("在 HTTP 1.X 中，为了性能考虑，我们会引入雪碧图、将小图内联、使用多个域名等等的方式。这一切都是因为浏览器限制了同一个域名下的请求数量，当页面中需要请求很多资源的时候，队头阻塞（Head of line blocking）会导致在达到最大请求数量时，剩余的资源需要等待其他资源请求完成后才能发起请求。")]),t._v(" "),_("p",[t._v("你可以通过 "),_("a",{attrs:{href:"https://http2.akamai.com/demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("该链接"),_("OutboundLink")],1),t._v(" 感受下 HTTP 2.0 比 HTTP 1.X 到底快了多少。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-042644.png",alt:""}})]),t._v(" "),_("p",[t._v("在 HTTP 1.X 中，因为队头阻塞的原因，你会发现请求是这样的")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-042646.png",alt:""}})]),t._v(" "),_("p",[t._v("在 HTTP 2.0 中，因为引入了多路复用，你会发现请求是这样的")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-042647.png",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"二进制传输"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二进制传输"}},[t._v("#")]),t._v(" 二进制传输")]),t._v(" "),_("p",[t._v("HTTP 2.0 中所有加强性能的核心点在于此。在之前的 HTTP 版本中，我们是通过文本的方式传输数据。在 HTTP 2.0 中引入了新的编码机制，所有传输的数据都会被分割，并采用二进制格式编码。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-042649.png",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"多路复用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#多路复用"}},[t._v("#")]),t._v(" 多路复用")]),t._v(" "),_("p",[t._v("在 HTTP 2.0 中，有两个非常重要的概念，分别是帧（frame）和流（stream）。")]),t._v(" "),_("p",[t._v("帧代表着最小的数据单位，每个帧会标识出该帧属于哪个流，流也就是多个帧组成的数据流。")]),t._v(" "),_("p",[t._v("多路复用，就是在一个 TCP 连接中可以存在多条流。换句话说，也就是可以发送多个请求，对端可以通过帧中的标识知道属于哪个请求。通过这个技术，可以避免 HTTP 旧版本中的队头阻塞问题，极大的提高传输性能。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-042650.png",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"header-压缩"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#header-压缩"}},[t._v("#")]),t._v(" Header 压缩")]),t._v(" "),_("p",[t._v("在 HTTP 1.X 中，我们使用文本的形式传输 header，在 header 携带 cookie 的情况下，可能每次都需要重复传输几百到几千的字节。")]),t._v(" "),_("p",[t._v("在 HTTP 2.0 中，使用了 HPACK 压缩格式对传输的 header 进行编码，减少了 header 的大小。并在两端维护了索引表，用于记录出现过的 header ，后面在传输过程中就可以传输已经记录过的 header 的键名，对端收到数据后就可以通过键名找到对应的值。")]),t._v(" "),_("h2",{attrs:{id:"服务端-push"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#服务端-push"}},[t._v("#")]),t._v(" 服务端 Push")]),t._v(" "),_("p",[t._v("在 HTTP 2.0 中，服务端可以在客户端某个请求后，主动推送其他资源。")]),t._v(" "),_("p",[t._v("可以想象以下情况，某些资源客户端是一定会请求的，这时就可以采取服务端 push 的技术，提前给客户端推送必要的资源，这样就可以相对减少一点延迟时间。当然在浏览器兼容的情况下你也可以使用 prefetch 。")]),t._v(" "),_("h2",{attrs:{id:"quic"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#quic"}},[t._v("#")]),t._v(" QUIC")]),t._v(" "),_("p",[t._v("这是一个谷歌出品的基于 UDP 实现的同为传输层的协议，目标很远大，希望替代 TCP 协议。")]),t._v(" "),_("ul",[_("li",[t._v("该协议支持多路复用，虽然 HTTP 2.0 也支持多路复用，但是下层仍是 TCP，因为 TCP 的重传机制，只要一个包丢失就得判断丢失包并且重传，导致发生队头阻塞的问题，但是 UDP 没有这个机制")]),t._v(" "),_("li",[t._v("实现了自己的加密协议，通过类似 TCP 的 TFO 机制可以实现 0-RTT，当然 TLS 1.3 已经实现了 0-RTT 了")]),t._v(" "),_("li",[t._v("支持重传和纠错机制（向前恢复），在只丢失一个包的情况下不需要重传，使用纠错机制恢复丢失的包\n"),_("ul",[_("li",[t._v("纠错机制：通过异或的方式，算出发出去的数据的异或值并单独发出一个包，服务端在发现有一个包丢失的情况下，通过其他数据包和异或值包算出丢失包")]),t._v(" "),_("li",[t._v("在丢失两个包或以上的情况就使用重传机制，因为算不出来了")])])])]),t._v(" "),_("h1",{attrs:{id:"dns"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[t._v("#")]),t._v(" DNS")]),t._v(" "),_("p",[t._v("DNS 的作用就是通过域名查询到具体的 IP。")]),t._v(" "),_("p",[t._v("因为 IP 存在数字和英文的组合（IPv6），很不利于人类记忆，所以就出现了域名。你可以把域名看成是某个 IP 的别名，DNS 就是去查询这个别名的真正名称是什么。")]),t._v(" "),_("p",[t._v("在 TCP 握手之前就已经进行了 DNS 查询，这个查询是操作系统自己做的。当你在浏览器中想访问 "),_("code",[t._v("www.google.com")]),t._v(" 时，会进行一下操作：")]),t._v(" "),_("ol",[_("li",[t._v("操作系统会首先在本地缓存中查询")]),t._v(" "),_("li",[t._v("没有的话会去系统配置的 DNS 服务器中查询")]),t._v(" "),_("li",[t._v("如果这时候还没得话，会直接去 DNS 根服务器查询，这一步查询会找出负责 "),_("code",[t._v("com")]),t._v(" 这个一级域名的服务器")]),t._v(" "),_("li",[t._v("然后去该服务器查询 "),_("code",[t._v("google")]),t._v(" 这个二级域名")]),t._v(" "),_("li",[t._v("接下来三级域名的查询其实是我们配置的，你可以给 "),_("code",[t._v("www")]),t._v(" 这个域名配置一个 IP，然后还可以给别的三级域名配置一个 IP")])]),t._v(" "),_("p",[t._v("以上介绍的是 DNS 迭代查询，还有种是递归查询，区别就是前者是由客户端去做请求，后者是由系统配置的 DNS 服务器做请求，得到结果后将数据返回给客户端。")]),t._v(" "),_("p",[t._v("PS：DNS 是基于 UDP 做的查询。")]),t._v(" "),_("h1",{attrs:{id:"从输入-url-到页面加载完成的过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#从输入-url-到页面加载完成的过程"}},[t._v("#")]),t._v(" 从输入 URL 到页面加载完成的过程")]),t._v(" "),_("p",[t._v("这是一个很经典的面试题，在这题中可以将本文讲得内容都串联起来。")]),t._v(" "),_("ol",[_("li",[t._v("首先做 DNS 查询，如果这一步做了智能 DNS 解析的话，会提供访问速度最快的 IP 地址回来")]),t._v(" "),_("li",[t._v("接下来是 TCP 握手，应用层会下发数据给传输层，这里 TCP 协议会指明两端的端口号，然后下发给网络层。网络层中的 IP 协议会确定 IP 地址，并且指示了数据传输中如何跳转路由器。然后包会再被封装到数据链路层的数据帧结构中，最后就是物理层面的传输了")]),t._v(" "),_("li",[t._v("TCP 握手结束后会进行 TLS 握手，然后就开始正式的传输数据")]),t._v(" "),_("li",[t._v("数据在进入服务端之前，可能还会先经过负责负载均衡的服务器，它的作用就是将请求合理的分发到多台服务器上，这时假设服务端会响应一个 HTML 文件")]),t._v(" "),_("li",[t._v("首先浏览器会判断状态码是什么，如果是 200 那就继续解析，如果 400 或 500 的话就会报错，如果 300 的话会进行重定向，这里会有个重定向计数器，避免过多次的重定向，超过次数也会报错")]),t._v(" "),_("li",[t._v("浏览器开始解析文件，如果是 gzip 格式的话会先解压一下，然后通过文件的编码格式知道该如何去解码文件")]),t._v(" "),_("li",[t._v("文件解码成功后会正式开始渲染流程，先会根据 HTML 构建 DOM 树，有 CSS 的话会去构建 CSSOM 树。如果遇到 "),_("code",[t._v("script")]),t._v(" 标签的话，会判断是否存在 "),_("code",[t._v("async")]),t._v(" 或者 "),_("code",[t._v("defer")]),t._v(" ，前者会并行进行下载并执行 JS，后者会先下载文件，然后等待 HTML 解析完成后顺序执行，如果以上都没有，就会阻塞住渲染流程直到 JS 执行完毕。遇到文件下载的会去下载文件，这里如果使用 HTTP 2.0 协议的话会极大的提高多图的下载效率。")]),t._v(" "),_("li",[t._v("初始的 HTML 被完全加载和解析后会触发 "),_("code",[t._v("DOMContentLoaded")]),t._v(" 事件")]),t._v(" "),_("li",[t._v("CSSOM 树和 DOM 树构建完成后会开始生成 Render 树，这一步就是确定页面元素的布局、样式等等诸多方面的东西")]),t._v(" "),_("li",[t._v("在生成 Render 树的过程中，浏览器就开始调用 GPU 绘制，合成图层，将内容显示在屏幕上了")])])])}),[],!1,null,null,null);v.default=a.exports}}]);