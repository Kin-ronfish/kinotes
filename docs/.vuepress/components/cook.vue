<template>
    <div>
        <div class="box" v-for="(item, index) in pageList" :key="index">
            <div class="name">作品名：{{ item.name }}</div>
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
import 'element-ui/lib/theme-chalk/index.css'
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
                    "name": "意面",
                    "time": "2016年9月28日",
                    "word": "--",
                    "img": require('../img/2016/12.jpg')
                },
                {
                    "name": "意面",
                    "time": "2017年3月11日",
                    "word": "--",
                    "img": require('../img/2017/3.jpg')
                },
                {
                    "name": "炒饭",
                    "time": "2017年8月24日",
                    "word": "--",
                    "img": require('../img/2017/8.jpg')
                },
                {
                    "name": "炒饭",
                    "time": "2017年8月25日",
                    "word": "--",
                    "img": require('../img/2017/9.jpg')
                },
                {
                    "name": "炒饭",
                    "time": "2017年8月26日",
                    "word": "--",
                    "img": require('../img/2017/10.jpg')
                },
                {
                    "name": "炒饭",
                    "time": "2017年8月28日",
                    "word": "--",
                    "img": require('../img/2017/11.jpg')
                },
                {
                    "name": "炒饭",
                    "time": "2017年8月29日",
                    "word": "--",
                    "img": require('../img/2017/12.jpg')
                },
                {
                    "name": "炒饭",
                    "time": "2018年2月12日",
                    "word": "--",
                    "img": require('../img/2018/1.jpg')
                },
                {
                    "name": "意面",
                    "time": "2018年2月14日",
                    "word": "--",
                    "img": require('../img/2018/2.jpg')
                },
                {
                    "name": "意面",
                    "time": "2018年9月3日",
                    "word": "--",
                    "img": require('../img/2018/6.jpg')
                }
            ]
        }
    }
}
</script>

<style scoped>
.box {
    margin: 5px;
    color:rgb(100, 78, 0);
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
    border-radius: 10px;
}
</style>