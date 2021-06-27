<template>
    <div>
        <div class="search">
            <el-input type="text" v-model="paintname" style="width:200px;" placeholder="输入画名" clearable></el-input>
            <el-button>查找</el-button>
        </div>
        <div class="box" v-for="(item, index) in list" :key="index">
            <div class="flexbox">
                <span class="name">作品名：{{ item.name }}</span>
                <span class="time">创作时间：{{ item.time }}</span>
            </div>
            <div class="word">留言：{{ item.word }}</div>
            <el-image class="image" :src="item.img" :preview-src-list="item.img"></el-image>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
export default {
    data() {
        return {
            paintname: '',
            list: [
                {
                    "name": "木制飞机",
                    "time": "2015年",
                    "word": "--",
                    "img": require('../img/2015/5木制飞机.jpg')
                },
                {
                    "name": "纸板凉亭",
                    "time": "2016年6月11日",
                    "word": "--",
                    "img": require('../img/2016/4纸板凉亭.jpg')
                },
                {
                    "name": "纸板压缩小风扇",
                    "time": "2016年8月3日",
                    "word": "--",
                    "img": require('../img/2016/7纸板小风扇.jpg')
                },
                {
                    "name": "纸板御膳房",
                    "time": "2016年9月1日",
                    "word": "--",
                    "img": require('../img/2016/9纸板御膳房.jpg')
                },
                {
                    "name": "沙漠之鹰纸板模型",
                    "time": "2016年9月",
                    "word": "--",
                    "img": require('../img/2016/10纸板沙漠之鹰.jpg')
                },
                {
                    "name": "纸板弓弩",
                    "time": "2017年8月",
                    "word": "--",
                    "img": require('../img/2017/6纸板弓弩.jpg')
                },
                {
                    "name": "纸板弓",
                    "time": "2017年8月",
                    "word": "--",
                    "img": require('../img/2017/7纸板弓.jpg')
                },
                {
                    "name": "纸板水笔",
                    "time": "2018年4月6日",
                    "word": "--",
                    "img": require('../img/2018/4纸板水笔.jpg')
                },
                {
                    "name": "压缩纸板小风扇",
                    "time": "2018年4月6日",
                    "word": "--",
                    "img": require('../img/2018/5压缩纸板小风扇.jpg')
                },
                {
                    "name": "纸板弓弩",
                    "time": "2018年9月20日",
                    "word": "--",
                    "img": require('../img/2018/8纸板弓弩.jpg')
                },
                {
                    "name": "纸板蓝牙音响",
                    "time": "2019年7月26日",
                    "word": "--",
                    "img": require('../img/2019/2纸板蓝牙音响.jpg')
                },
                {
                    "name": "纸板机械臂",
                    "time": "2019年7月31日",
                    "word": "--",
                    "img": require('../img/2019/3纸板机械臂.jpg')
                },
                {
                    "name": "木制3D打印机",
                    "time": "2019年8月7日",
                    "word": "--",
                    "img": require('../img/2019/4木制3D打印机.jpg')
                },
                {
                    "name": "塑料机械臂",
                    "time": "2019年9月20日",
                    "word": "--",
                    "img": require('../img/2019/9塑料机械臂.jpg')
                },
                {
                    "name": "木制3D打印机",
                    "time": "2019年10月2日",
                    "word": "--",
                    "img": require('../img/2019/10木制3D打印机.jpg')
                },
                {
                    "name": "木制手写打印机",
                    "time": "2019年11月19日",
                    "word": "--",
                    "img": require('../img/2019/14木制手写打印机.jpg')
                },
                {
                    "name": "木制小古筝",
                    "time": "2020年2月12日",
                    "word": "--",
                    "img": require('../img/2020/1古筝.jpg')
                },
                {
                    "name": "木制小枪",
                    "time": "2020年2月15日",
                    "word": "--",
                    "img": require('../img/2020/2木制小枪.jpg')
                },
                {
                    "name": "木制小古筝",
                    "time": "2020年4月19日",
                    "word": "--",
                    "img": require('../img/2020/6木制小古筝.jpg')
                },
                {
                    "name": "第三代机械臂&LED灯",
                    "time": "2020年6月9日",
                    "word": "--",
                    "img": require('../img/2020/7第三代机械臂.jpg')
                }
                
            ]
        }
    }
}
</script>

<style scoped>
.search {
    margin: 10px;
}
.box {
    margin: 5px;
}
.flexbox {
    display: flex;
    justify-content: space-between;
}
.name {
    font-size: 15px;
}
.time {
    font-size: 15px;
    color: #aaa;
}
.word {
    font-size: 10px;
    padding: 3px;
    margin: 5px 0;
}
.image {
    padding: 8px;
    background: rgb(134, 114, 22);
}
</style>