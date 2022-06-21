<template>
	<div class="content" :style="`width:${width}`">
		<div class="head" :style="contentStyle" @click="changeOpen">
			<div class="title">{{value}}</div> 
			<i class="iconfont icon-icon-24-xiajiantou" v-show="open"></i>
			<i class="iconfont icon-icon-24-shangjiantou" v-show="!open"></i>
		</div>
		<div v-if="type==='select'" :class="open?'close':'open'" :style="`width:${width};`">
			<div class="search" :style="`background:${searchStyle.background};`" v-if="search">
				<i class="search_icon iconfont icon-search" :style="searchStyle.l_icon"></i>
				<input class="search_input" :style="`${search_focus?searchStyle.border:'border: 1px solid #ffffff00'};${searchStyle.round?'border-radius: 15px;':''}`" type="text" 
				v-model="keyword" @input="searchVal(keyword)" @focus="search_focus=true"
				@blur="search_focus=false">
				<i v-show="keyword" class="close_icon iconfont icon-roundclose" :style="searchStyle.l_icon" @click="clear"></i>
			</div>
			<div class="content_list" v-if="tmpList.length">
				<div class="item" v-for="(item,index) in tmpList" @click="chose(item)" :key="index">
					<div class="item_content">{{isObjArr?item[objKey]:item}}</div>
				</div>
			</div>
			<div v-else class="null">
				<i class="null_icon iconfont icon-zanwushuju"></i>
				<div class="null_title">暂无数据</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"k-select",
		props: {
			list: {type: Array, default: () => []},
			objKey: {type: String, default: () => ''},
			type: {type: String, default: () => 'select'},
			search: {type: Boolean, default: () => false},
			width: {type: String, default: () => '200px'},
			contentStyle: {type: Object, default: () => {}},
			itemStyle: {type: Object, default: () => {}},
			searchStyle: {type: Object, default: () => {
				return {
					border: 'border: 1px solid #5F4A86',
					background: '#f8f8f8',
					round: true,
					l_icon: '#97979b',
					r_icon: '#97979b'
				}
			}}
		},
		data() {
			return {
				open: false,
				isObjArr: false,
				value: '',
				keyword: '', // 搜索框
				tmpList: [],
				search_focus: false
			};
		},
		created() {
			// 判断是否是对象数组
			if(typeof this.list[0] === 'object') {
				this.isObjArr = true
				this.value = this.list[0][this.objKey]
			}else {
				this.value = this.list[0]
			}
			this.tmpList = this.list
		},
		methods: {
			changeOpen() {
				this.open=!this.open
			},
			chose(item) {
				if(this.isObjArr) {
					this.value = item[this.objKey]
				}else {
					this.value = item
				}
				this.open = !this.open
				this.$emit('chose',item)
			},
			searchVal(val) {
				if(val) {
					if(this.isObjArr) {
						this.tmpList = this.list.filter(item => `${item[this.objKey]}`.indexOf(val)!=-1)
					}else {
						this.tmpList = this.list.filter(item => `${item}`.indexOf(val)!=-1)
					}
				}else {
					this.tmpList = this.list
				}
				console.log(this.tmpList)
			},
			clear() {
				this.keyword=''
				this.tmpList = this.list
			}
		}
	}
</script>

<style scoped>
	@import './iconfont/iconfont.css';
	.content {
		margin: 5px;
	}
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
	}
	.open {
		opacity: 0;
		transition-duration: .5s;
	}
	.close {
		opacity: 1;
		transition-duration: .5s;
	}
	.content_list {
		overflow-y: scroll;
		height:100px;
	}
	.content_list::-webkit-scrollbar {
		width: 3px;
	}
	.content_list::-webkit-scrollbar-thumb {
		background: #9886b8;
		border-radius: 3px;
	}
	.item {
		padding: 1px;
	}
	.item:hover {
		background-color: #F1F1F1;
	}
	.search {
		display: flex;
		align-items: center;
		position: relative;
		padding-left: 2px;
	}
	.search_icon {
		position: absolute;
		left: 5px;
	}
	.close_icon {
		position: absolute;
		right: 8px;
	}
	.search_input {
		outline: none;
		margin: 5px 0;
		outline: none;
		transition-duration: .5s;
		padding: 5px 5px 5px 20px;
	}
	.null {
		text-align: center;
	}
	.null_icon {
		font-size: 25px;
		color: #9886b8;
	}
	.null_title {
		font-size: 15px;
		color: #97979b;
	}
</style>