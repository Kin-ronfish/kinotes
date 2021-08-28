<template>
  <div id="app">
    <div class="item">
      1.数组去重——a1(arr)
      <div class="content"><button @click="run(1)">运行</button>&nbsp;结果：{{result1}}</div>
    </div><hr>
    <div class="item">
      2.数组过滤——a2(arr1, arr2, flag)
      <div class="content"><button @click="run(2)">运行</button>&nbsp;结果：{{result2}}</div>
    </div><hr>
    <div class="item">
      3.对象数组与数组间过滤——a3(arr1, arr2, flag, key)
      <div class="content"><button @click="run(3)">运行</button>&nbsp;结果：{{result3}}</div>
    </div><hr>
    <div class="item">
      4.对象数组根据某一键值分组——a4(arr, key)
      <div class="content"><button @click="run(4)">运行</button>&nbsp;结果：{{result4}}</div>
    </div><hr>
    <div class="item">
      5.对象数组去重——a5(arr, key)
      <div class="content"><button @click="run(5)">运行</button>&nbsp;结果：{{result5}}</div>
    </div><hr>
    <div class="item">
      6.对象数组提取单个值——a6(arr, key)
      <div class="content"><button @click="run(6)">运行</button>&nbsp;结果：{{result6}}</div>
    </div><hr>
    <div class="item">
      7.数组创建对象数组——a7(arr)
      <div class="content"><button @click="run(7)">运行</button>&nbsp;结果：{{result7}}</div>
    </div><hr>
  </div>
</template>

<script>
import {a1,a2,a3,a4,a5,a6,a7} from './linr'
export default {
  name: 'App',
  data() {
    return {
      result1: '',
      result2: '',
      result3: '',
      result4: '',
      result5: '',
      result6: '',
      result7: '',
      result8: '',
      result9: '',
      result10: '',
      result11: '',
      result12: '',
      result13: '',
      result14: '',
      result15: '',
      result16: '',
      result17: '',
      result18: '',
      result19: '',
      arr0: [1,2,3,1,4,1,2,5,1,2,4,5],
      arr1: [1, 2, 3, 4, 5, 6, 7, 8],
      arr2: [1, 2, 6],
      arr3: [{num: 1},{num: 2},{num: 6}],
      arr4: [1, 2, 3, 4],
      arr5: [{groupCheckBasis: 3,groupNumber: "bb"},{groupIndex: 2,groupNumber: "bb"},
        {groupCheckBasis: 3,groupNumber: "cc"},{groupIndex: 2,groupNumber: "aa"},
        {groupIndex: 1,groupNumber: "aa"},{groupCheckBasis: 3,groupNumber: "cc"}],
      arr6: [{name: 'ZYTX'},{name: 'ZYTA'},{name: 'ZYTX'}],
      arr7: [{name: 'kin',age: 15,mess: 'qwert'},{name: 'lin',age: 18,mess: 'asdf'},{
      name: 'yin',age: 14,mess: 'qzxcbv'},{name: 'rin',age: 19,mess: 'qwert'}]
    }
  },
  methods: {
    run(index) {
      switch(index) {
        case 1:
          this.result1 = a1(this.arr0)
          break
        case 2:
          this.result2 = a2(this.arr1,this.arr2,true)
          break
        case 3:
          this.result3 = a3(this.arr3,this.arr4,true,'num')
          break
        case 4:
          this.result4 = a4(this.arr5,'groupNumber')
          break
        case 5:
          this.result5 = a5(this.arr6,'name')
          break
        case 6:
          this.result6 = a6(this.arr7,'name')
          break
        case 7:
          this.result7 = a7(this.arr2)
          break
      }
    }
  }
}
</script>

<style>
.item {
  background: #ddd;
  color: blueviolet;
  padding: 8px 15px;
}
.content {
  margin-top: 15px;
}
</style>
