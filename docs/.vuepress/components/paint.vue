<template>
    <div>
        <div class="box" v-for="(item, index) in pageList" :key="index">
            <div class="name">画名：{{ item.value }}</div>
            <div class="word">留言：{{ item.word }}</div>
            <el-image class="image" :src="item.img" :preview-src-list="item.img"></el-image>
            <div class="time">创作时间：{{ item.time }}</div>
        </div>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-sizes="[5, 10]"
            :page-size="5"
            layout="total, sizes, prev, pager, next, jumper"
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
            pageNum: 5,
            pageList: this.loadAll().slice(0, 5)
        }
    },
    methods: {
        handleSizeChange(val) {
            this.pageNum = val
        },
        handleCurrentChange(val) {
            this.pageList = this.loadAll().slice(val*this.pageNum - this.pageNum, val*this.pageNum)
        },
        loadAll() {
            return [
                {
                    "value": "品茶老人",
                    "time": "2011年",
                    "word": "--",
                    "img": require('../img/2011/1.jpg')
                },
                {
                    "value": "山水画",
                    "time": "2013年",
                    "word": "--",
                    "img": require('../img/2013/1.jpg')
                },
                {
                    "value": " 刻画蝴蝶",
                    "time": "2013年",
                    "word": "--",
                    "img": require('../img/2013/2.jpg')
                },
                {
                    "value": "小兰新一",
                    "time": "2013年",
                    "word": "--",
                    "img": require('../img/2013/3.jpg')
                },
                {
                    "value": "霸气苍龙",
                    "time": "2013年",
                    "word": "--",
                    "img": require('../img/2013/4.jpg')
                },
                {
                    "value": "想象之地",
                    "time": "2013年",
                    "word": "--",
                    "img": require('../img/2013/5.jpg')
                },
                {
                    "value": "天边之树",
                    "time": "2013年",
                    "word": "--",
                    "img": require('../img/2013/6.jpg')
                },
                {
                    "value": "家中客厅",
                    "time": "2013年",
                    "word": "--",
                    "img": require('../img/2013/7.jpg')
                },
                {
                    "value": "花花世界",
                    "time": "2013年4月",
                    "word": "--",
                    "img": require('../img/2013/8.jpg')
                },
                {
                    "value": "雄鹰展翅",
                    "time": "2013年4月",
                    "word": "--",
                    "img": require('../img/2013/9.jpg')
                },
                {
                    "value": "盘曲的龙",
                    "time": "2013年4月",
                    "word": "--",
                    "img": require('../img/2013/10.jpg')
                },
                {
                    "value": "七彩凤凰",
                    "time": "2013年4月",
                    "word": "--",
                    "img": require('../img/2013/11.jpg')
                },
                {
                    "value": "麒麟腾云驾雾",
                    "time": "2013年4月",
                    "word": "--",
                    "img": require('../img/2013/12.jpg')
                },
                {
                    "value": "热火标志",
                    "time": "2014年",
                    "word": "--",
                    "img": require('../img/2014/1.jpg')
                },
                {
                    "value": "火箭标志",
                    "time": "2014年",
                    "word": "--",
                    "img": require('../img/2014/2.jpg')
                },
                {
                    "value": "树",
                    "time": "2014年",
                    "word": "--",
                    "img": require('../img/2014/3.jpg')
                },
                {
                    "value": "树",
                    "time": "2014年",
                    "word": "--",
                    "img": require('../img/2014/4.jpg')
                },
                {
                    "value": "树",
                    "time": "2014年",
                    "word": "--",
                    "img": require('../img/2014/5.jpg')
                },
                {
                    "value": "客厅盆栽",
                    "time": "2014年",
                    "word": "--",
                    "img": require('../img/2014/6.jpg')
                },
                {
                    "value": "嫦娥奔月",
                    "time": "2014年",
                    "word": "--",
                    "img": require('../img/2014/7.jpg')
                },
                {
                    "value": "杜甫",
                    "time": "2014年",
                    "word": "--",
                    "img": require('../img/2014/8.jpg')
                },
                {
                    "value": "茶具试绘",
                    "time": "2014年",
                    "word": "--",
                    "img": require('../img/2014/9.jpg')
                },
                {
                    "value": "茶具套装",
                    "time": "2014年",
                    "word": "--",
                    "img": require('../img/2014/10.jpg')
                },
                {
                    "value": "双花",
                    "time": "2015年",
                    "word": "--",
                    "img": require('../img/2015/1.jpg')
                },
                {
                    "value": "玫瑰花",
                    "time": "2015年",
                    "word": "--",
                    "img": require('../img/2015/2.jpg')
                },
                {
                    "value": "手绘雪碧",
                    "time": "2015年",
                    "word": "--",
                    "img": require('../img/2015/3.jpg')
                },
                {
                    "value": "手绘可乐",
                    "time": "2015年",
                    "word": "--",
                    "img": require('../img/2015/4.jpg')
                },
                {
                    "value": "山水画",
                    "time": "2015年3月6日",
                    "word": "--",
                    "img": require('../img/2015/6.jpg')
                },
                {
                    "value": "湖边",
                    "time": "2016月3月20日",
                    "word": "--",
                    "img": require('../img/2016/1.jpg')
                },
                {
                    "value": "立体魔方",
                    "time": "2016月5月8日",
                    "word": "--",
                    "img": require('../img/2016/2.jpg')
                },
                {
                    "value": "立体魔方",
                    "time": "2016月5月9日",
                    "word": "--",
                    "img": require('../img/2016/3.jpg')
                },
                {
                    "value": "手绘西红柿",
                    "time": "2016月7月",
                    "word": "--",
                    "img": require('../img/2016/5.jpg')
                },
                {
                    "value": "手绘德芙巧克力",
                    "time": "2016月8月2日",
                    "word": "--",
                    "img": require('../img/2016/6.jpg')
                },
                {
                    "value": "手绘汉堡",
                    "time": "2016月8月15日",
                    "word": "--",
                    "img": require('../img/2016/8.jpg')
                },
                {
                    "value": "天地壹号",
                    "time": "2016月9月16日",
                    "word": "--",
                    "img": require('../img/2016/11.jpg')
                },
                {
                    "value": "喜迎国庆手抄报",
                    "time": "2016月10月1日",
                    "word": "--",
                    "img": require('../img/2016/13.jpg')
                },
                {
                    "value": "手绘曼妥思",
                    "time": "2016月12月6日",
                    "word": "--",
                    "img": require('../img/2016/14.jpg')
                },
                {
                    "value": "手绘好丽友派",
                    "time": "2017月2月4日",
                    "word": "--",
                    "img": require('../img/2017/1.jpg')
                },
                {
                    "value": "海边",
                    "time": "2017月3月25日",
                    "word": "--",
                    "img": require('../img/2017/2.jpg')
                },
                {
                    "value": "德芙巧克力",
                    "time": "2017月5月13日",
                    "word": "--",
                    "img": require('../img/2017/4.jpg')
                },
                {
                    "value": "玫瑰花",
                    "time": "2017月7月12日",
                    "word": "--",
                    "img": require('../img/2017/5.jpg')
                },
                {
                    "value": "手绘月饼",
                    "time": "2017月10月1日",
                    "word": "--",
                    "img": require('../img/2017/13.jpg')
                },
                {
                    "value": "手绘蛋黄派",
                    "time": "2017月10月8日",
                    "word": "--",
                    "img": require('../img/2017/14.jpg')
                },
                {
                    "value": "手绘阿尔卑斯",
                    "time": "2017月12月31日",
                    "word": "--",
                    "img": require('../img/2017/15.jpg')
                },
                {
                    "value": "手绘维他柠檬茶",
                    "time": "2018月2月25日",
                    "word": "--",
                    "img": require('../img/2018/3.jpg')
                },
                {
                    "value": "手绘雪碧",
                    "time": "2018月9月6日",
                    "word": "--",
                    "img": require('../img/2018/7.jpg')
                },
                {
                    "value": "手绘月饼",
                    "time": "2018月9月23日",
                    "word": "--",
                    "img": require('../img/2018/9.jpg')
                },
                {
                    "value": "板绘建筑",
                    "time": "2019月6月24日",
                    "word": "--",
                    "img": require('../img/2019/1.jpg')
                },
                {
                    "value": "板绘萧炎云韵",
                    "time": "2019月8月25日",
                    "word": "--",
                    "img": require('../img/2019/5.jpg')
                },
                {
                    "value": "板绘美杜莎",
                    "time": "2019月9月8日",
                    "word": "--",
                    "img": require('../img/2019/6.jpg')
                },
                {
                    "value": "板绘萧炎云韵",
                    "time": "2019月9月8日",
                    "word": "--",
                    "img": require('../img/2019/7.jpg')
                },
                {
                    "value": "手绘月饼",
                    "time": "2019月9月20日",
                    "word": "--",
                    "img": require('../img/2019/8.jpg')
                },
                {
                    "value": "手绘士力架",
                    "time": "2019月10月15日",
                    "word": "--",
                    "img": require('../img/2019/11.jpg')
                },
                {
                    "value": "手绘一束花",
                    "time": "2019月11月3日",
                    "word": "--",
                    "img": require('../img/2019/12.jpg')
                },
                {
                    "value": "手绘雪碧",
                    "time": "2019月11月10日",
                    "word": "--",
                    "img": require('../img/2019/13.jpg')
                },
                {
                    "value": "手绘&板绘壁纸",
                    "time": "2020月3月4日",
                    "word": "--",
                    "img": require('../img/2020/3.jpg')
                },
                {
                    "value": "手绘焰灵姬",
                    "time": "2020月3月25日",
                    "word": "--",
                    "img": require('../img/2020/4.jpg')
                },
                {
                    "value": "手绘阿尔卑斯",
                    "time": "2020月4月5日",
                    "word": "--",
                    "img": require('../img/2020/5.jpg')
                },
                {
                    "value": "手绘月饼",
                    "time": "2020月10月1日",
                    "word": "--",
                    "img": require('../img/2020/8.jpg')
                },
                {
                    "value": "手绘蛋糕",
                    "time": "2020月10月13日",
                    "word": "--",
                    "img": require('../img/2020/9.jpg')
                },
                {
                    "value": "手绘蛋糕",
                    "time": "2020月10月30日",
                    "word": "--",
                    "img": require('../img/2020/10.jpg')
                },
                {
                    "value": "手绘海琴烟",
                    "time": "2020月11月26日",
                    "word": "--",
                    "img": require('../img/2020/11.jpg')
                },
                {
                    "value": "手绘吉他",
                    "time": "2020月11月26日",
                    "word": "--",
                    "img": require('../img/2020/12.jpg')
                },
                {
                    "value": "手绘笔记本电脑",
                    "time": "2020月11月27日",
                    "word": "--",
                    "img": require('../img/2020/13.jpg')
                },
                {
                    "value": "合辑",
                    "time": "2020月11月27日",
                    "word": "--",
                    "img": require('../img/2020/14.jpg')
                },
                {
                    "value": "女孩",
                    "time": "2021月2月11日",
                    "word": "--",
                    "img": require('../img/2021/1.jpg')
                },
                {
                    "value": "小哥",
                    "time": "2021月2月13日",
                    "word": "--",
                    "img": require('../img/2021/2.jpg')
                },
                {
                    "value": "小物品",
                    "time": "2021月3月25日",
                    "word": "--",
                    "img": require('../img/2021/3.jpg')
                },
                {
                    "value": "可爱女孩",
                    "time": "2021月3月27日",
                    "word": "--",
                    "img": require('../img/2021/4.jpg')
                },
                {
                    "value": "王一博",
                    "time": "2021月4月20日",
                    "word": "--",
                    "img": require('../img/2021/5.jpg')
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
.name {
    font-size: 20px;
}
.time {
    width: 100%;
    text-align: right;
    font-size: 12px;
    color: #aaa;
}
.word {
    font-size: 15px;
    padding: 3px;
}
.image {
    padding: 8px;
    background: rgb(134, 114, 22);
}
</style>