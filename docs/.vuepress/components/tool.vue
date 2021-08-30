<template>
  <div id="app">
    <div v-if="num === 1" class="item">
      <button @click="run(1)">运行</button>&nbsp;结果：{{result1}}
    </div>
    <div v-if="num === 2" class="item">
      <button @click="run(2)">运行</button>&nbsp;结果：{{result2}}
    </div>
    <div v-if="num === 3" class="item">
      <button @click="run(3)">运行</button>&nbsp;结果：{{result3}}
    </div>
    <div v-if="num === 4" class="item">
      <button @click="run(4)">运行</button>&nbsp;结果：{{result4}}
    </div>
    <div v-if="num === 5" class="item">
      <button @click="run(5)">运行</button>&nbsp;结果：{{result5}}
    </div>
    <div v-if="num === 6" class="item">
      <button @click="run(6)">运行</button>&nbsp;结果：{{result6}}
    </div>
    <div v-if="num === 7" class="item">
      <button @click="run(7)">运行</button>&nbsp;结果：{{result7}}
    </div>
    <div v-if="num === 8" class="item">
      <button @click="run(8)">运行</button>&nbsp;结果：{{result8}}
    </div>
    <div v-if="num === 9" class="item">
      <button @click="run(9)">运行</button>&nbsp;结果：{{result9}}
    </div>
    <div v-if="num === 10" class="item">
      <button @click="run(10)">运行</button>&nbsp;结果：{{result10}}
    </div>
  </div>
</template>

<script>
import {a1,a2,a3,a4,a5,a6,a7,a8,a9,a10} from './linr'
export default {
  name: 'App',
  props: {
    num: Number
  },
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
      name: 'yin',age: 14,mess: 'qzxcbv'},{name: 'rin',age: 19,mess: 'qwert'}],
      arr8: ['a', 'b', 'c'],
      arr9: [1,2,3,[4,5,6]],
      arr10: [{a:[1,2,3]},{a:[4,5,6]},{a:[7,8,9]}],
      arr11: [{name:'xx',num:5},{name:'yy',num:7},{name:'ww',num:4}],
      arr12: [{name:'aa',num:48},{name:'xx',num:62},{name:'gj',num:4},{name:'yu',num:15}]
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
          this.result7 = a7(this.arr8)
          break
        case 8:
          this.result8 = a8(this.arr9, 2)
          break
        case 9:
          this.result9 = a9(this.arr10, 'a')
          break
        case 10:
          this.result10 = a10(this.arr11, this.arr12, 'name')
          break
      }
    }
  }
}
</script>

<style>
.item {
  padding: 8px 15px;
}
</style>
