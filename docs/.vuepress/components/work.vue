<template>
    <div>
        <div class="content"></div>
        <div class="font animate__animated animate__flipInX">Print & Diy Work</div>
        <button @click="change">转换</button>
        <div class="box">
            <div class="item" v-for="(item,index) in img" :key="index">
                <img :src="item" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import 'animate.css'
export default {
    data() {
        return {
            img: [
                require('./img/2011/1.jpg'),
                require('./img/2013/2.jpg'),
                require('./img/2013/3.jpg'),
                require('./img/2013/4.jpg'),
                require('./img/2013/5.jpg'),
                require('./img/2013/6.jpg'),
                require('./img/2013/7.jpg'),
                require('./img/2013/8.jpg'),
                require('./img/2013/9.jpg'),
                require('./img/2013/10.jpg'),
                require('./img/2013/11.jpg'),
                require('./img/2013/12.jpg'),
                require('./img/2014/1.jpg'),
                require('./img/2014/2.jpg'),
                require('./img/2014/3.jpg'),
                require('./img/2014/4.jpg'),
                require('./img/2014/5.jpg'),
                require('./img/2014/6.jpg'),
                require('./img/2014/7.jpg'),
                require('./img/2014/8.jpg'),
                require('./img/2014/9.jpg'),
                require('./img/2014/10.jpg'),
                require('./img/2015/1.jpg'),
                require('./img/2015/2.jpg'),
                require('./img/2015/3.jpg'),
                require('./img/2015/4.jpg'),
                require('./img/2015/5.jpg'),
                require('./img/2015/6.jpg'),
                require('./img/2016/1.jpg'),
                require('./img/2016/2.jpg'),
                require('./img/2016/3.jpg'),
                require('./img/2016/4.jpg'),
                require('./img/2016/5.jpg'),
                require('./img/2016/6.jpg'),
                require('./img/2016/7.jpg'),
                require('./img/2016/8.jpg'),
                require('./img/2016/9.jpg'),
                require('./img/2016/10.jpg'),
                require('./img/2016/11.jpg'),
                require('./img/2016/12.jpg'),
                require('./img/2016/13.jpg'),
                require('./img/2016/14.jpg'),
                require('./img/2017/1.jpg'),
                require('./img/2017/2.jpg'),
                require('./img/2017/3.jpg'),
                require('./img/2017/4.jpg'),
                require('./img/2017/5.jpg'),
                require('./img/2017/6.jpg'),
                require('./img/2017/7.jpg'),
                require('./img/2017/8.jpg'),
                require('./img/2017/9.jpg'),
                require('./img/2017/10.jpg'),
                require('./img/2017/11.jpg'),
                require('./img/2017/12.jpg'),
                require('./img/2017/13.jpg'),
                require('./img/2017/14.jpg'),
                require('./img/2017/15.jpg'),
                require('./img/2018/1.jpg'),
                require('./img/2018/2.jpg'),
                require('./img/2018/3.jpg'),
                require('./img/2018/4.jpg'),
                require('./img/2018/5.jpg'),
                require('./img/2018/6.jpg'),
                require('./img/2018/7.jpg'),
                require('./img/2018/8.jpg'),
                require('./img/2018/9.jpg'),
                require('./img/2019/1.jpg'),
                require('./img/2019/2.jpg'),
                require('./img/2019/3.jpg'),
                require('./img/2019/4.jpg'),
                require('./img/2019/5.jpg'),
                require('./img/2019/6.jpg'),
                require('./img/2019/7.jpg'),
                require('./img/2019/8.jpg'),
                require('./img/2019/9.jpg'),
                require('./img/2019/10.jpg'),
                require('./img/2019/11.jpg'),
                require('./img/2019/12.jpg'),
                require('./img/2019/13.jpg'),
                require('./img/2019/14.jpg'),
                require('./img/2020/1.jpg'),
                require('./img/2020/2.jpg'),
                require('./img/2020/3.jpg'),
                require('./img/2020/4.jpg'),
                require('./img/2020/5.jpg'),
                require('./img/2020/6.jpg'),
                require('./img/2020/7.jpg'),
                require('./img/2020/8.jpg'),
                require('./img/2020/9.jpg'),
                require('./img/2020/10.jpg'),
                require('./img/2020/11.jpg'),
                require('./img/2020/12.jpg'),
                require('./img/2020/13.jpg'),
                require('./img/2020/14.jpg'),
                require('./img/2021/1.jpg'),
                require('./img/2021/2.jpg'),
                require('./img/2021/3.jpg'),
                require('./img/2021/4.jpg'),
                require('./img/2021/5.jpg'),
                require('./img/2021/6.jpg'),
                require('./img/2021/7.jpg'),
                require('./img/2021/8.jpg'),
                require('./img/2021/9.jpg'),
                require('./img/2021/10.jpg'),
                require('./img/2021/11.jpg'),
                require('./img/2021/12.jpg'),
                require('./img/2021/13.jpg'),
                require('./img/2021/14.jpg'),
                require('./img/2021/15.jpg'),
                require('./img/2021/16.jpg'),
                require('./img/2021/17.jpg'),
                require('./img/2021/18.jpg'),
                require('./img/2021/19.jpg'),
                require('./img/2021/20.jpg'),
                require('./img/2021/21.jpg'),


            ]
        }
    },
    methods: {
        change() {

        }
    }
}
</script>

<style scoped>
@font-face {
    font-family: fonts;
    src: url('./font/renaissance.ttf');
}
@media (min-width:768px) {
    .item {
        width: 28%;
        margin: 5px;
        border: 10px solid rgba(125, 146, 187, 0.562);
        border-radius: 5px;
        transition-duration: 500ms;
    }
}
@media (max-width:768px) {
    .item {
        margin: 10px;
        border: 10px solid rgba(125, 146, 187, 0.562);
        border-radius: 5px;
        transition-duration: 500ms;
    }
}
.content {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('./img/bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 0;
}
.font {
    font-family: fonts;
    font-size: 30px;
    text-align: center;
    background-color: rgb(97, 53, 138);
    color: #fff;
}
.box {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.item:hover {
    transform: translateY(-5px);
    transition-duration: 500ms;
}
</style>