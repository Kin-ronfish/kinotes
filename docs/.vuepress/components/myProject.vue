<!-- 我的项目演示 -->
<template>
    <div>
        <button @click="save">保存数据</button>
        <button @click="getValue">获取数据</button>
        <button @click="removeValue">删除数据</button>
    </div>
</template>

<script>
import uni from './uni.webview.1.5.3'
export default {
    data() {
        return {}
    },
    created() {
        // 以下函数用于接收返回值
        window.setResult = (res) => {
            console.log(res)
        }
        window.getResult = (res) => {
            console.log(res)
        }
        window.removeResult = (res) => {
            console.log(res)
        }
        console.log('数据设置成功')
    },
    methods: {
        save() {
            uni.postMessage({
                data: {
                    type: 'setStore',
                    content: {
                        name: 'name',
                        value: 'Kin'
                    }
                }
            },'*')
        },
        getValue() {
            uni.postMessage({
                data: {
                    type: 'getStore',
                    content: {
                        name: 'name',
                        value: ''
                    }
                }
            },'*')
        },
        removeValue() {
            uni.postMessage({
                data: {
                    type: 'removeStore',
                    content: {
                        name: 'name',
                        value: ''
                    }
                }
            },'*')
        }
    }
}
</script>

<style scoped>

</style>