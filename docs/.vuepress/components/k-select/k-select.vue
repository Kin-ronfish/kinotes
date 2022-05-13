<template>
	<div class="content" :style="`width:${width}`">
		<i class="iconfont icon-icon-24-xiajiantou"></i>
		<div class="head" :style="contentStyle" @click="changeOpen">
			<div class="title">
				{{title_1}}
			</div>
			<img class="img" v-show="open_1" src="./img/down.png">
			<img class="img" v-show="!open_1" src="./img/up.png">
		</div>
		<div v-if="type==='select'" :class="open_1?'close':'open'">
			<div class="item" v-for="(item,index) in list" @click="chose(item)" :key="index">
				<div class="item_content">{{item[objKey]}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"k-select",
		props: {
			type: {
				type: String, default: () => 'select'
			},
			title: {
				type: String, default: () => '请选择'
			},
			open: {
				type: Boolean, default: () => false
			},
			objKey: {
				type: String, default: () => ''
			},
			list: {
				type: Array, default: () => []
			},
			width: {
				type: String, default: () => '100px'
			},
			contentStyle: {
				type: Object, default: () => {}
			},
			itemStyle: {
				type: Object, default: () => {}
			}
		},
		data() {
			return {
				open_1: false,
				title_1: ''
			};
		},
		created() {
			this.open_1 = this.open
			this.title_1 = this.title
		},
		methods: {
			changeOpen() {
				this.open_1=!this.open_1
			},
			chose(item) {
				this.title_1 = item[this.objKey]
				this.open_1 = !this.open_1
				this.$emit('chose',item)
			}
		}
	}
</script>

<style scoped>
	.head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #F8F8F8;
		padding: 3px 8px;
		border-radius: 4px;
		position: relative;
		z-index: 5;
		overflow: hidden;
	}
	.title {
		font-size: 15px;
	}
	.img {
		width: 15px;
		height: 15px;
		color: red;
	}
	.body {
		height: 100px;
		background-color: #C8C7CC;
	}
	.open {
		opacity: 0;
		transition-duration: .5s;
	}
	.close {
		opacity: 1;
		transition-duration: .5s;
	}
	.item {
		background-color: #C8C7CC;
		padding: 1px;
	}
	.item:hover {
		background-color: #F1F1F1;
	}
</style>
