<template>
    <div>
        <div class="search">
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
                    "word": "--",
                    "img": require('../img/2011/品茶老人.jpg')
                },
                {
                    "name": "山水画",
                    "time": "2013年",
                    "word": "--",
                    "img": require('../img/2013/1山水画.jpg')
                },
                {
                    "name": " 刻画蝴蝶",
                    "time": "2013年",
                    "word": "--",
                    "img": require('../img/2013/2刻画蝴蝶.jpg')
                },
                {
                    "name": "小兰新一",
                    "time": "2013年",
                    "word": "--",
                    "img": require('../img/2013/3小兰新一.jpg')
                },
                {
                    "name": "霸气苍龙",
                    "time": "2013年",
                    "word": "--",
                    "img": require('../img/2013/4霸气苍龙.jpg')
                },
                {
                    "name": "想象之地",
                    "time": "2013年",
                    "word": "--",
                    "img": require('../img/2013/5想象之地.jpg')
                },
                {
                    "name": "天边之树",
                    "time": "2013年",
                    "word": "--",
                    "img": require('../img/2013/6天边之树.jpg')
                },
                {
                    "name": "家中客厅",
                    "time": "2013年",
                    "word": "--",
                    "img": require('../img/2013/7家中客厅.jpg')
                },
                {
                    "name": "花花世界",
                    "time": "2013年4月",
                    "word": "--",
                    "img": require('../img/2013/8花花世界.jpg')
                },
                {
                    "name": "雄鹰展翅",
                    "time": "2013年4月",
                    "word": "--",
                    "img": require('../img/2013/9雄鹰展翅.jpg')
                },
                {
                    "name": "盘曲的龙",
                    "time": "2013年4月",
                    "word": "--",
                    "img": require('../img/2013/10盘曲的龙.jpg')
                },
                {
                    "name": "七彩凤凰",
                    "time": "2013年4月",
                    "word": "--",
                    "img": require('../img/2013/11七彩凤凰.jpg')
                },
                {
                    "name": "麒麟腾云驾雾",
                    "time": "2013年4月",
                    "word": "--",
                    "img": require('../img/2013/12麒麟腾云驾雾.jpg')
                },
                {
                    "name": "热火标志",
                    "time": "2014年",
                    "word": "--",
                    "img": require('../img/2014/1热火标志.jpg')
                },
                {
                    "name": "火箭标志",
                    "time": "2014年",
                    "word": "--",
                    "img": require('../img/2014/2火箭标志.jpg')
                },
                {
                    "name": "树",
                    "time": "2014年",
                    "word": "--",
                    "img": require('../img/2014/3树.jpg')
                },
                {
                    "name": "树",
                    "time": "2014年",
                    "word": "--",
                    "img": require('../img/2014/4树.jpg')
                },
                {
                    "name": "树",
                    "time": "2014年",
                    "word": "--",
                    "img": require('../img/2014/5树.jpg')
                },
                {
                    "name": "客厅盆栽",
                    "time": "2014年",
                    "word": "--",
                    "img": require('../img/2014/6客厅盆栽.jpg')
                },
                {
                    "name": "嫦娥奔月",
                    "time": "2014年",
                    "word": "--",
                    "img": require('../img/2014/7嫦娥奔月.jpg')
                },
                {
                    "name": "杜甫",
                    "time": "2014年",
                    "word": "--",
                    "img": require('../img/2014/8杜甫.jpg')
                },
                {
                    "name": "茶具试绘",
                    "time": "2014年",
                    "word": "--",
                    "img": require('../img/2014/9茶具试绘.jpg')
                },
                {
                    "name": "茶具套装",
                    "time": "2014年",
                    "word": "--",
                    "img": require('../img/2014/10茶具套装.jpg')
                },
                {
                    "name": "双花",
                    "time": "2015年",
                    "word": "--",
                    "img": require('../img/2015/1双花.jpg')
                },
                {
                    "name": "玫瑰花",
                    "time": "2015年",
                    "word": "--",
                    "img": require('../img/2015/2玫瑰花.jpg')
                },
                {
                    "name": "手绘雪碧",
                    "time": "2015年",
                    "word": "--",
                    "img": require('../img/2015/3手绘雪碧.jpg')
                },
                {
                    "name": "手绘可乐",
                    "time": "2015年",
                    "word": "--",
                    "img": require('../img/2015/4手绘可乐.jpg')
                },
                {
                    "name": "山水画",
                    "time": "2016年3月",
                    "word": "--",
                    "img": require('../img/2015/6山水画.jpg')
                },
                {
                    "name": "湖边",
                    "time": "2016月3月20日",
                    "word": "--",
                    "img": require('../img/2016/1湖边.jpg')
                },
                {
                    "name": "立体魔方",
                    "time": "2016月5月8日",
                    "word": "--",
                    "img": require('../img/2016/2立体魔方.jpg')
                },
                {
                    "name": "立体魔方",
                    "time": "2016月5月9日",
                    "word": "--",
                    "img": require('../img/2016/3立体魔方.jpg')
                },
                {
                    "name": "手绘西红柿",
                    "time": "2016月7月",
                    "word": "--",
                    "img": require('../img/2016/5手绘西红柿.jpg')
                },
                {
                    "name": "手绘德芙巧克力",
                    "time": "2016月8月2日",
                    "word": "--",
                    "img": require('../img/2016/6手绘德芙巧克力.jpg')
                },
                {
                    "name": "手绘汉堡",
                    "time": "2016月8月15日",
                    "word": "--",
                    "img": require('../img/2016/8手绘汉堡.jpg')
                },
                {
                    "name": "天地壹号",
                    "time": "2016月9月16日",
                    "word": "--",
                    "img": require('../img/2016/11天地壹号.jpg')
                },
                {
                    "name": "喜迎国庆手抄报",
                    "time": "2016月10月1日",
                    "word": "--",
                    "img": require('../img/2016/13喜迎国庆手抄报.jpg')
                },
                {
                    "name": "手绘曼妥思",
                    "time": "2016月12月6日",
                    "word": "--",
                    "img": require('../img/2016/14手绘曼妥思.jpg')
                },
                {
                    "name": "手绘好丽友派",
                    "time": "2017月2月4日",
                    "word": "--",
                    "img": require('../img/2017/1手绘好丽友派.jpg')
                },
                {
                    "name": "海边",
                    "time": "2017月3月25日",
                    "word": "--",
                    "img": require('../img/2017/2海边.jpg')
                },
                {
                    "name": "德芙巧克力",
                    "time": "2017月5月13日",
                    "word": "--",
                    "img": require('../img/2017/4德芙巧克力.jpg')
                },
                {
                    "name": "玫瑰花",
                    "time": "2017月7月12日",
                    "word": "--",
                    "img": require('../img/2017/5玫瑰花.jpg')
                },
                {
                    "name": "手绘月饼",
                    "time": "2017月10月1日",
                    "word": "--",
                    "img": require('../img/2017/13手绘月饼.jpg')
                },
                {
                    "name": "手绘蛋黄派",
                    "time": "2017月10月8日",
                    "word": "--",
                    "img": require('../img/2017/14手绘蛋黄派.jpg')
                },
                {
                    "name": "手绘阿尔卑斯",
                    "time": "2017月12月31日",
                    "word": "--",
                    "img": require('../img/2017/15手绘阿尔卑斯.jpg')
                },
                {
                    "name": "手绘维他柠檬茶",
                    "time": "2018月2月25日",
                    "word": "--",
                    "img": require('../img/2018/3手绘维他柠檬茶.jpg')
                },
                {
                    "name": "手绘雪碧",
                    "time": "2018月9月6日",
                    "word": "--",
                    "img": require('../img/2018/7手绘雪碧.jpg')
                },
                {
                    "name": "手绘月饼",
                    "time": "2018月9月23日",
                    "word": "--",
                    "img": require('../img/2018/9手绘月饼.jpg')
                },
                {
                    "name": "板绘建筑",
                    "time": "2019月6月24日",
                    "word": "--",
                    "img": require('../img/2019/1板绘建筑.jpg')
                },
                {
                    "name": "板绘萧炎云韵",
                    "time": "2019月8月25日",
                    "word": "--",
                    "img": require('../img/2019/5板绘萧炎云韵.jpg')
                },
                {
                    "name": "板绘美杜莎",
                    "time": "2019月9月8日",
                    "word": "--",
                    "img": require('../img/2019/6板绘美杜莎.jpg')
                },
                {
                    "name": "板绘萧炎云韵",
                    "time": "2019月9月8日",
                    "word": "--",
                    "img": require('../img/2019/7板绘药炎云芝.jpg')
                },
                {
                    "name": "手绘月饼",
                    "time": "2019月9月20日",
                    "word": "--",
                    "img": require('../img/2019/8手绘月饼.jpg')
                },
                {
                    "name": "手绘士力架",
                    "time": "2019月10月15日",
                    "word": "--",
                    "img": require('../img/2019/11手绘士力架.jpg')
                },
                {
                    "name": "手绘一束花",
                    "time": "2019月11月3日",
                    "word": "--",
                    "img": require('../img/2019/12手绘一束花.jpg')
                },
                {
                    "name": "手绘雪碧",
                    "time": "2019月11月10日",
                    "word": "--",
                    "img": require('../img/2019/13手绘雪碧.jpg')
                },
                {
                    "name": "手绘&板绘壁纸",
                    "time": "2020月3月4日",
                    "word": "--",
                    "img": require('../img/2020/3手绘&板绘壁纸.jpg')
                },
                {
                    "name": "手绘焰灵姬",
                    "time": "2020月3月25日",
                    "word": "--",
                    "img": require('../img/2020/4手绘焰灵姬.jpg')
                },
                {
                    "name": "手绘阿尔卑斯",
                    "time": "2020月4月5日",
                    "word": "--",
                    "img": require('../img/2020/5手绘阿尔卑斯.jpg')
                },
                {
                    "name": "手绘月饼",
                    "time": "2020月10月1日",
                    "word": "--",
                    "img": require('../img/2020/8月饼.jpg')
                },
                {
                    "name": "手绘蛋糕",
                    "time": "2020月10月13日",
                    "word": "--",
                    "img": require('../img/2020/9手绘蛋糕.jpg')
                },
                {
                    "name": "手绘蛋糕",
                    "time": "2020月10月30日",
                    "word": "--",
                    "img": require('../img/2020/10手绘蛋糕.jpg')
                },
                {
                    "name": "手绘海琴烟",
                    "time": "2020月11月26日",
                    "word": "--",
                    "img": require('../img/2020/11手绘海琴烟.jpg')
                },
                {
                    "name": "手绘吉他",
                    "time": "2020月11月26日",
                    "word": "--",
                    "img": require('../img/2020/12手绘吉他.jpg')
                },
                {
                    "name": "手绘笔记本电脑",
                    "time": "2020月11月27日",
                    "word": "--",
                    "img": require('../img/2020/13手绘电脑.jpg')
                },
                {
                    "name": "合辑",
                    "time": "2020月11月27日",
                    "word": "--",
                    "img": require('../img/2020/14合辑.jpg')
                },
                {
                    "name": "女孩",
                    "time": "2021月2月11日",
                    "word": "--",
                    "img": require('../img/2021/1女孩.jpg')
                },
                {
                    "name": "小哥",
                    "time": "2021月2月13日",
                    "word": "--",
                    "img": require('../img/2021/2小哥.jpg')
                },
                {
                    "name": "小物品",
                    "time": "2021月3月25日",
                    "word": "--",
                    "img": require('../img/2021/3小物品.jpg')
                },
                {
                    "name": "可爱女孩",
                    "time": "2021月3月27日",
                    "word": "--",
                    "img": require('../img/2021/4可爱女孩.jpg')
                },
                {
                    "name": "王一博",
                    "time": "2021月4月20日",
                    "word": "--",
                    "img": require('../img/2021/5王一博.jpg')
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
    font-size: 20px;
}
.time {
    font-size: 14px;
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