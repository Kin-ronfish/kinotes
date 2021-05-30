<template>
    <div class="constain">
        <button @click="Sort">运行</button>
        <span style="margin-left:10px;">结果: {{result}}</span>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                result: ''
            }
        },
        methods: {
            Sort() {
                var arr = [2,6,1,3,5,9,7,4,8];
                for (var i = 1; i < arr.length; i++) {
                    for (var j = 0; j < arr.length - i; j++) {
                        if (arr[j] > arr[j+1]) {  // 相邻元素两两对比
                            var temp = arr[j+1];  // 元素交换
                            arr[j+1] = arr[j];
                            arr[j] = temp;
                            console.log(arr);
                        }
                    }
                }
                this.result = arr;
            }
        }
    }
</script>

<style scoped>
.constain{
    background-color: rgb(238, 238, 238);
    padding: 10px;
}
</style>