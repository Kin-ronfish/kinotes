<template>
    <div>
        <div class="content"></div>
        <div class="font animate__animated animate__flipInX">Print & Diy Work</div>
        <div class="box">
            <div class="item" v-for="(item,index) in img" :key="index">
                <img :src="item">
                <div class="title">{{titleList[index]}}</div>
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
                require('./img/2013/1.jpg'),
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
                require('./img/2021/21.jpg')
            ],
            titleList: [
                '品茶老人','山水画','刻画蝴蝶','小兰新一',
                '霸气苍龙','想象之地','天边之树',
                '家中客厅','花花世界','雄鹰展翅',
                '盘曲的龙','七彩凤凰','麒麟腾云驾雾',
                '热火标志','火箭标志','树','树','树',
                '客厅盆栽','嫦娥奔月','杜甫',
                '茶具试绘','茶具套装','双花',
                '玫瑰花','手绘雪碧','手绘可乐',
                '木制飞机','山水画','湖边',
                '立体魔方','立体魔方','纸板凉亭',
                '手绘西红柿','手绘德芙巧克力','纸板风扇',
                '手绘汉堡','御膳房','纸板沙漠之鹰',
                '天地壹号','意大利面','喜迎国庆手抄报',
                '手绘曼妥思','手绘好丽友派','海边',
                '意大利面','德芙巧克力','玫瑰花',
                '纸板弓弩','弓','炒饭','炒饭','炒饭',
                '炒饭','炒饭','手绘月饼','手绘蛋黄派',
                '手绘阿尔卑斯','炒饭','意大利面','手绘维他柠檬茶',
                '纸板水笔','纸板小风扇','意大利面','手绘雪碧',
                '木制纸板弓弩', '手绘月饼','板绘建筑','蓝牙音箱',
                '纸板机械臂','3D打印机','板绘萧炎云韵','板绘美杜莎',
                '板绘萧炎云韵','手绘月饼','塑料机械臂','3D打印机2',
                '手绘士力架','手绘一束花','手绘雪碧','手写打印机',
                '小古筝','木制小枪','手绘&板绘壁纸','手绘焰灵姬',
                '手绘阿尔卑斯','大古筝','木制机械臂','手绘月饼',
                '手绘蛋糕','手绘蛋糕','手绘海琴烟','手绘吉他',
                '手绘笔记本电脑','正光广场','壁纸临摹','小哥',
                '小物品','人物素描','人物素描','M&M糖果',
                '华为手机','第三代蓝牙音箱','蛋炒饭','意大利面',
                '人物素描','香菇炒肉','海鲜意大利面','月饼',
                '人物上色','手机壳插画','小盆栽','德芙巧克力',
                '人物素描','户外写生','美杜莎女王'
            ]
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
    font-size: 25px;
    height: 40px;
    text-align: center;
    padding: 5px;
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
.title {
    margin-top: -4px;
    text-align: center;
    color: #fff;
    background-image: linear-gradient(90deg, rgba(255,77,79,0.00) 0%, #79a4c7 15%, #79a4c7 85%, rgba(255,77,79,0.00) 100%);
}
</style>