<template>
    <div>
        <div id="content">npm install {{keyword}} --save</div>
        <select v-model="keyword">
            <option disabled value="">选择插件</option>
            <option>typescript</option>
            <option>lodash</option>
            <option>element</option>
            <option>vant</option>
            <option>uview-ui</option>
            <option>axios</option>
            <option>jQuery</option>
            <option>sass</option>
            <option>less</option>
            <option>bootstrap</option>
            <option>dayjs</option>
            <option>html2canvas</option>
            <option>printjs</option>
            <option>animate</option>
            <option>particles</option>
            <option>md5</option>
        </select>
        <button @click="copy">复制</button>
        <input type="text" style="width:8%" v-model="keyword" placeholder="自定义">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                keyword: ''
            }
        },
        methods: {
            copy() {
                var Url2=document.getElementById('content').innerText;
                var oInput = document.createElement('input');
                oInput.value = Url2;
                document.body.appendChild(oInput);
                oInput.select(); // 选择对象
                document.execCommand("Copy"); // 执行浏览器复制命令
                oInput.className = 'oInput';
                oInput.style.display='none';
                console.log("复制成功");
            }
        }
    }
</script>

<style scoped>
#content {
    margin: 10px 0;
    padding: 10px;
    width: 20%;
    background-color:rgb(241, 241, 241);
}
</style>