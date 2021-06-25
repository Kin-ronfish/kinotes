<template>
    <div>
        <div>
            <el-input type="text" v-model="paintname" style="width:200px;" placeholder="输入画名" clearable></el-input>
            <el-button>查找</el-button>
        </div>
        <div class="box" v-for="(item, index) in list" :key="index">
            <div class="flexbox">
                <span class="name">画名：{{ item.name }}</span>
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
                    "name": "品茶老人",
                    "time": "2011年",
                    "word": "清爽田园风光",
                    "img": require('../img/品茶老人.png')
                },
                {
                    "name": "霸气苍龙",
                    "time": "2013年",
                    "word": "蜿蜒盘旋",
                    "img": require('../img/霸气苍龙.png')
                }
            ]
        }
    }
}
</script>

<style scoped>
.box {
    margin: 5px;
}
.flexbox {
    display: flex;
    justify-content: space-between;
}
.name {
    font-size: 25px;
}
.time {
    font-size: 16px;
    color: #aaa;
}
.word {
    font-size: 20px;
    padding: 3px;
    margin: 5px 0;
}
.img {

}
</style>