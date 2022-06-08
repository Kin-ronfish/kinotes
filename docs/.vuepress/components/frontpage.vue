
<template>
  <div class="home">
    <div class="content">
      <div class="title">前端学习网址</div>
      <input class="search" v-model="value_1" placeholder="输入关键词" />
      <div
        class="item"
        :style="
          index < tmpList_1.length - 1
            ? 'border-bottom:1px solid rgb(241, 241, 241)'
            : ''
        "
        v-for="(item, index) in tmpList_1"
        :key="index"
      >
        <a
          :id="item.title"
          :href="item.url"
          target="_blank"
          style="text-decoration: none; color: rgb(60, 81, 124)"
          rel="noopener noreferrer"
          >{{ item.title }}</a>
        <div style="font-size:10px;">{{item.remark}}</div>
      </div>
    </div>
    <div class="content">
      <div class="title">其他常用网址</div>
      <input class="search" v-model="value_2" placeholder="输入关键词" />
      <div
        class="item"
        :style="
          index < tmpList_2.length - 1
            ? 'border-bottom:1px solid rgb(241, 241, 241)'
            : ''
        "
        v-for="(item, index) in tmpList_2"
        :key="index"
      >
        <a
          :id="item.title"
          :href="item.url"
          target="_blank"
          style="text-decoration: none; color: rgb(60, 81, 124)"
          rel="noopener noreferrer"
          >{{ item.title }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      value_1: "",
      value_2: "",
      urlList_1: [
        {
          title: "vue",
          remark:"",
          url: "https://cn.vuejs.org/v2/guide/",
        },
        {
          title: "react",
          remark:"",
          url: "https://react.docschina.org/",
        },
        {
          title: "angular",
          remark:"",
          url: "https://angular.cn/docs",
        },
        {
          title: "element",
          remark:"",
          url: "https://element.eleme.cn/#/zh-CN/component/installation",
        },
        {
          title: "vant",
          remark:"",
          url: "https://vant-contrib.gitee.io/vant/#/zh-CN/home",
        },
        {
          title: "uview",
          remark:"",
          url: "https://www.uviewui.com/components/intro.html",
        },
        {
          title: "babylon",
          remark:"",
          url: "https://www.babylonjs.com/",
        },
        {
          title: "three",
          remark:"",
          url: "http://www.webgl3d.cn/threejs/docs/",
        },
        {
          title: "electron",
          remark:"",
          url: "https://www.electronjs.org/zh/docs/latest",
        },
        {
          title: "uniapp",
          remark:"",
          url: "https://uniapp.dcloud.io/",
        },
        {
          title: "typescript",
          remark:"",
          url: "https://www.tslang.cn/docs/handbook/basic-types.html",
        },
        {
          title: "lodash",
          remark:"",
          url: "https://www.lodashjs.com/",
        },
        {
          title: "matter",
          remark:"",
          url: "https://brm.io/matter-js/demo/#stack",
        },
        {
          title: "axios",
          remark:"",
          url: "http://www.axios-js.com/zh-cn/docs/",
        },
        {
          title: "jquery",
          remark:"",
          url: "https://www.jquery123.com/",
        },
        {
          title: "sass",
          remark:"",
          url: "https://www.sass.hk/",
        },
        {
          title: "less",
          remark:"",
          url: "https://less.bootcss.com/",
        },
        {
          title: "bootstrap",
          remark:"",
          url: "https://v3.bootcss.com/css/",
        },
        {
          title: "dayjs",
          remark:"",
          url: "https://dayjs.fenxianglu.cn/",
        },
        {
          title: "html2canvas",
          remark:"",
          url: "http://html2canvas.hertzen.com/",
        },
        {
          title: "printjs",
          remark:"页面打印插件",
          url: "https://printjs.crabbly.com/",
        },
        {
          title: "animate",
          remark:"",
          url: "http://www.animate.net.cn/",
        },
        {
          title: "particles",
          remark:"",
          url: "https://vue-particles.netlify.app/",
        },
        {
          title: "md5",
          remark:"",
          url: "https://www.npmjs.com/package/js-md5",
        },
        {
          title: "webpack",
          remark:"",
          url: "https://webpack.docschina.org/",
        },
        {
          title: "gulp",
          remark:"",
          url: "https://www.gulpjs.com.cn/docs/getting-started/quick-start/",
        },
        {
          title: "git",
          remark:"",
          url: "https://git-scm.com/book/zh/v2",
        },
        {
          title: "eslint",
          remark:"",
          url: "https://eslint.bootcss.com/docs/user-guide/getting-started",
        },
        {
          title: "babel",
          remark:"",
          url: "https://www.babeljs.cn/docs/",
        },
        {
          title: "wangeditor",
          remark:"富文本编辑器",
          url: "https://www.wangeditor.com/",
        },
        {
          title: "ant-design",
          remark:"",
          url: "https://ant.design/docs/react/introduce-cn"
        },
        {
          title: "layabox",
          remark:"web3D游戏开发方案",
          url: "https://www.layabox.com/"
        }
      ],
      tmpList_1: [],
      urlList_2: [
        {
          title: "前端导航",
          remark:"",
          url: "https://www.kwgg2020.com/",
        },
        {
          title: "github",
          remark:"",
          url: "https://github.com/",
        },
        {
          title: "gitee",
          remark:"",
          url: "https://gitee.com/",
        },
        {
          title: "vercel",
          remark:"",
          url: "https://vercel.com/",
        },
        {
          title: "菜鸟教程",
          remark:"",
          url: "https://www.runoob.com/",
        },
        {
          title: "阿里云图标",
          remark:"",
          url: "https://www.iconfont.cn/",
        },
        {
          title: "瑞文网",
          remark:"",
          url: "https://www.ruiwen.com/",
        },
        {
          title: "艾瑞网",
          remark:"",
          url: "https://www.iresearch.cn/",
        },
        {
          title: "JavaScript学习手册",
          remark: "",
          url: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript"
        },
        {
          title: "coderd",
          remark: "前后端项目模板生成器",
          url: "http://coderd.adjustrd.com/"
        },
        {
          title: "loading",
          remark: "动态加载图标",
          url: "https://loading.io/animation/icon/"
        },
        {
          title: "mixkit",
          remark:"",
          url: "https://mixkit.co/",
        },
        {
          title: "maglcalcoder",
          remark: "前端页面生成器",
          url: "http://www.magicalcoder.com/"
        },
        {
          title: "bootstrap",
          remark: "前端模板生成器",
          url: "http://www.ibootstrap.cn/"
        },
        {
          title: "videvo",
          remark:"",
          url: "https://www.videvo.net/",
        },
        {
          title: "自然音效",
          remark:"",
          url: "https://www.soundgator.com/",
        },
        {
          title: "newcger",
          remark:"",
          url: "https://www.newcger.com/",
        }
      ],
      tmpList_2: [],
    };
  },
  watch: {
    value_1(newVal) {
      this.tmpList_1 = this.urlList_1.filter(
        (item) => item.title.indexOf(newVal) != -1
      );
    },
    value_2(newVal) {
      this.tmpList_2 = this.urlList_2.filter(
        (item) => item.title.indexOf(newVal) != -1
      );
    },
  },
  created() {
    this.tmpList_1 = this.urlList_1;
    this.tmpList_2 = this.urlList_2;
  },
};
</script>
<style scoped>
.content {
  height: 300px;
  overflow: scroll;
  position: relative;
  border-radius: 10px;
  border: 1px solid gainsboro;
  margin: 30px auto;
}
.content::-webkit-scrollbar {
  width: 0;
}
.title {
  font-family: "楷体";
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  position: sticky;
  top: 0;
  height: 30px;
  padding-top: 10px;
  background-color: #fff;
  z-index: 1;
}
.search {
  position: sticky;
  border: none;
  outline: none;
  background-color: rgb(238, 238, 238);
  left: 20px;
  right: 20px;
  width: 100%;
  height: 30px;
  top: 40px;
  padding: 2px 5px;
  z-index: 1;
}
.item {
  margin: 10px;
  padding-bottom: 5px;
  display: flex;
  justify-content: space-between;
}
.icon {
  cursor: pointer;
}
</style>

