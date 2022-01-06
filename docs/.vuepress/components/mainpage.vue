<template>
    <div>
        <div class="content animate__animated animate__fadeInUp">
            <div class="item" v-for="(item,index) in list" :key="index">
                <div class="title">{{item.title}}</div>
                <div class="moto">{{item.moto}}</div>
            </div>
        </div>
        <div class="footer">MIT Licensed | Copyright © 2021-present Kinron</div>
    </div>
</template>

<script>
import 'animate.css'
export default {
    data() {
        return {
            list: [
                {title: '学习总结', moto: '成功建立在失败之后，或出现于失败之中'},
                {title: '兴趣发展', moto: '当你抛弃了感兴趣的东西，还会觉得做什么都有趣吗？'},
                {title: '感悟记录', moto: '生活就像一本无字之书，学习让书里的内容更加充实，努力让内容更加精彩。'}
            ]
        }
    }
}
</script>

<style scoped>
@media (min-width:768px) {
    .content {
        display: flex;
        justify-content: space-between;
    }
    .item {
        width: 30%;
    }
}
.item {
    margin: 20px;
    padding: 20px;
    text-align: center;
    border: 1px solid #c9c0c0;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgb(162, 147, 167);
    transition-duration: 500ms;
}
.item:hover {
    transform: translateY(-10px);
    transition-duration: 500ms;
}
.title {
    color: #5f4a86;
    font-size: 20px;
    font-weight: bolder;
}
.moto {
    color: #5f4a86;
    margin-top: 20px;
}
.footer {
    text-align: center;
    margin-top: 50px;
}
</style>