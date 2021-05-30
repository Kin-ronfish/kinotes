<template>
    <div class="container">
        <button @click="change">{{btn?'显示':'隐藏'}}</button>
        <span v-if="display">{{mess}}</span><br><br>
        <input type="text" v-model="result" />
        <span>数据双向绑定: {{result}}</span><br><br>
        <input type="text" v-model="value" />
        <span>根据字符串长度循环渲染每一个字符</span>
        <ul v-for="(item,index) in value" :key="index">
            <li>{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                mess: '你好，能交个朋友吗',
                display: false,
                result: '',
                btn: true,
                value: ''
            }
        },
        methods: {
            change() {
                this.display = !this.display;
                this.btn = !this.btn;
            }
        }
    }
</script>

<style scoped>
.container{
    padding: 10px;
    background-color: aliceblue;
}
</style>