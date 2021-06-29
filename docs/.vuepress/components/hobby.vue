<template>
    <div>
        <el-tabs v-model="activeName">
            <el-tab-pane label="绘画经历" name="first">
                <paint />
            </el-tab-pane>
            <el-tab-pane label="DIY经历" name="second">
                <diy />
            </el-tab-pane>
            <el-tab-pane label="烹饪经历" name="third">
                <cook />
            </el-tab-pane>
            <el-tab-pane label="视频记录" name="fourth">
                <div class="title">2011-2015年作品合集</div>
                <video width="100%" controls>
                    <source src="./2011-2015.mp4" type="video/mp4">
                </video>
                <div class="title">2016-2019年作品合集</div>
                <video width="100%" controls>
                    <source src="./2016-2019.mp4" type="video/mp4">
                </video>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import Diy from './diy.vue'
import paint from './paint.vue'
import Cook from './cook.vue'
export default {
    data() {
        return {
            activeName: 'first'
        }
    },
    components: { paint, Diy, Cook }
}
</script>

<style scoped>
.title {
    margin: 5px;
}
</style>