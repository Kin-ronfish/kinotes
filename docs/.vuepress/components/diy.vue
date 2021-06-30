<template>
    <div>
        <div class="box" v-for="(item, index) in pageList" :key="index">
            <div class="name">作品名：{{ item.value }}</div>
            <div class="word">留言：{{ item.word }}</div>
            <el-image class="image" :src="item.img" :preview-src-list="item.img"></el-image>
            <div class="time">创作时间：{{ item.time }}</div>
        </div>
        <el-pagination
            @current-change="handleCurrentChange"
            small
            :page-size="5"
            :pager-count="4"
            layout="total, prev, pager, next"
            style="margin-top: 20px;text-align: right;"
            :total="list.length">
        </el-pagination>
    </div>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import cloneDeep from 'lodash/cloneDeep'
Vue.use(ElementUI)
export default {
    data() {
        return {
            list: cloneDeep(this.loadAll()),
            pageList: this.loadAll().slice(0, 5)
        }
    },
    methods: {
        handleCurrentChange(val) {
            this.pageList = this.loadAll().slice(val*5 - 5, val*5)
        },
        loadAll() {
            return [
                {
                    "value": "木制飞机",
                    "time": "2015年",
                    "word": "--",
                    "img": require('../img/2015/5.jpg')
                },
                {
                    "value": "纸板凉亭",
                    "time": "2016年6月11日",
                    "word": "--",
                    "img": require('../img/2016/4.jpg')
                },
                {
                    "value": "纸板压缩小风扇",
                    "time": "2016年8月3日",
                    "word": "--",
                    "img": require('../img/2016/7.jpg')
                },
                {
                    "value": "纸板御膳房",
                    "time": "2016年9月1日",
                    "word": "--",
                    "img": require('../img/2016/9.jpg')
                },
                {
                    "value": "沙漠之鹰纸板模型",
                    "time": "2016年9月",
                    "word": "--",
                    "img": require('../img/2016/10.jpg')
                },
                {
                    "value": "纸板弓弩",
                    "time": "2017年8月",
                    "word": "--",
                    "img": require('../img/2017/6.jpg')
                },
                {
                    "value": "纸板弓",
                    "time": "2017年8月",
                    "word": "--",
                    "img": require('../img/2017/7.jpg')
                },
                {
                    "value": "纸板水笔",
                    "time": "2018年4月6日",
                    "word": "--",
                    "img": require('../img/2018/4.jpg')
                },
                {
                    "value": "压缩纸板小风扇",
                    "time": "2018年4月6日",
                    "word": "--",
                    "img": require('../img/2018/5.jpg')
                },
                {
                    "value": "纸板弓弩",
                    "time": "2018年9月20日",
                    "word": "--",
                    "img": require('../img/2018/8.jpg')
                },
                {
                    "value": "纸板蓝牙音响",
                    "time": "2019年7月26日",
                    "word": "--",
                    "img": require('../img/2019/2.jpg')
                },
                {
                    "value": "纸板机械臂",
                    "time": "2019年7月31日",
                    "word": "--",
                    "img": require('../img/2019/3.jpg')
                },
                {
                    "value": "木制3D打印机",
                    "time": "2019年8月7日",
                    "word": "--",
                    "img": require('../img/2019/4.jpg')
                },
                {
                    "value": "塑料机械臂",
                    "time": "2019年9月20日",
                    "word": "--",
                    "img": require('../img/2019/9.jpg')
                },
                {
                    "value": "木制3D打印机",
                    "time": "2019年10月2日",
                    "word": "--",
                    "img": require('../img/2019/10.jpg')
                },
                {
                    "value": "木制手写打印机",
                    "time": "2019年11月19日",
                    "word": "--",
                    "img": require('../img/2019/14.jpg')
                },
                {
                    "value": "木制小古筝",
                    "time": "2020年2月12日",
                    "word": "--",
                    "img": require('../img/2020/1.jpg')
                },
                {
                    "value": "木制小枪",
                    "time": "2020年2月15日",
                    "word": "--",
                    "img": require('../img/2020/2.jpg')
                },
                {
                    "value": "木制小古筝",
                    "time": "2020年4月19日",
                    "word": "--",
                    "img": require('../img/2020/6.jpg')
                },
                {
                    "value": "第三代机械臂&LED灯",
                    "time": "2020年6月9日",
                    "word": "--",
                    "img": require('../img/2020/7.jpg')
                }
            ]
        }
    }
}
</script>

<style scoped>
.box {
    margin: 5px;
    color:rgb(0, 100, 67);
}
.name {
    font-size: 20px;
}
.time {
    width: 100%;
    text-align: right;
    font-size: 13px;
    color: #aaa;
}
.word {
    font-size: 15px;
    padding: 3px;
}
.image {
    padding: 10px;
    background: rgb(130, 117, 144);
    border-radius: 10px;
}
</style>