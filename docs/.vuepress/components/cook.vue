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
                    "name": "意面",
                    "time": "2016年9月28日",
                    "word": "--",
                    "img": require('../img/2016/12意面.jpg')
                },
                {
                    "name": "意面",
                    "time": "2017年3月11日",
                    "word": "--",
                    "img": require('../img/2017/3意面.jpg')
                },
                {
                    "name": "炒饭",
                    "time": "2017年8月24日",
                    "word": "--",
                    "img": require('../img/2017/8炒饭.jpg')
                },
                {
                    "name": "炒饭",
                    "time": "2017年8月25日",
                    "word": "--",
                    "img": require('../img/2017/9炒饭.jpg')
                },
                {
                    "name": "炒饭",
                    "time": "2017年8月26日",
                    "word": "--",
                    "img": require('../img/2017/10炒饭.jpg')
                },
                {
                    "name": "炒饭",
                    "time": "2017年8月28日",
                    "word": "--",
                    "img": require('../img/2017/11炒饭.jpg')
                },
                {
                    "name": "炒饭",
                    "time": "2017年8月29日",
                    "word": "--",
                    "img": require('../img/2017/12炒饭.jpg')
                },
                {
                    "name": "炒饭",
                    "time": "2018年2月12日",
                    "word": "--",
                    "img": require('../img/2018/1炒饭.jpg')
                },
                {
                    "name": "意面",
                    "time": "2018年2月14日",
                    "word": "--",
                    "img": require('../img/2018/2意面.jpg')
                },
                {
                    "name": "意面",
                    "time": "2018年9月3日",
                    "word": "--",
                    "img": require('../img/2018/6意面.jpg')
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