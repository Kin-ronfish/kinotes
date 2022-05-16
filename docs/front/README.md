# 快捷导航

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
          >{{ item.title }}</a
        >
      </div>
    </div>
    <div class="content">
      <div class="title">常用网址</div>
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
          url: "https://cn.vuejs.org/v2/guide/",
        },
        {
          title: "react",
          url: "https://react.docschina.org/",
        },
        {
          title: "angular",
          url: "https://angular.cn/docs",
        },
        {
          title: "element",
          url: "https://element.eleme.cn/#/zh-CN/component/installation",
        },
        {
          title: "vant",
          url: "https://vant-contrib.gitee.io/vant/#/zh-CN/home",
        },
        {
          title: "uview",
          url: "https://www.uviewui.com/components/intro.html",
        },
        {
          title: "babylon",
          url: "https://www.babylonjs.com/",
        },
        {
          title: "three",
          url: "http://www.webgl3d.cn/threejs/docs/",
        },
        {
          title: "electron",
          url: "https://www.electronjs.org/zh/docs/latest",
        },
        {
          title: "uniapp",
          url: "https://uniapp.dcloud.io/",
        },
        {
          title: "typescript",
          url: "https://www.tslang.cn/docs/handbook/basic-types.html",
        },
        {
          title: "lodash",
          url: "https://www.lodashjs.com/",
        },
        {
          title: "matter",
          url: "https://brm.io/matter-js/demo/#stack",
        },
        {
          title: "axios",
          url: "http://www.axios-js.com/zh-cn/docs/",
        },
        {
          title: "jquery",
          url: "https://www.jquery123.com/",
        },
        {
          title: "sass",
          url: "https://www.sass.hk/",
        },
        {
          title: "less",
          url: "https://less.bootcss.com/",
        },
        {
          title: "bootstrap",
          url: "https://v3.bootcss.com/css/",
        },
        {
          title: "dayjs",
          url: "https://dayjs.fenxianglu.cn/",
        },
        {
          title: "html2canvas",
          url: "http://html2canvas.hertzen.com/",
        },
        {
          title: "printjs",
          url: "https://printjs.crabbly.com/",
        },
        {
          title: "animate",
          url: "http://www.animate.net.cn/",
        },
        {
          title: "particles",
          url: "https://vue-particles.netlify.app/",
        },
        {
          title: "md5",
          url: "https://www.npmjs.com/package/js-md5",
        },
        {
          title: "webpack",
          url: "https://webpack.docschina.org/",
        },
        {
          title: "gulp",
          url: "https://www.gulpjs.com.cn/docs/getting-started/quick-start/",
        },
        {
          title: "git",
          url: "https://git-scm.com/book/zh/v2",
        },
      ],
      tmpList_1: [],
      urlList_2: [
        {
          title: "github",
          url: "https://github.com/",
        },
        {
          title: "gitee",
          url: "https://gitee.com/",
        },
        {
          title: "vercel",
          url: "https://vercel.com/",
        },
        {
          title: "菜鸟教程",
          url: "https://www.runoob.com/",
        },
        {
          title: "阿里云图标",
          url: "https://www.iconfont.cn/",
        },
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