<template>
  <div id="app">
    <div>结果：{{result}}</div>
    <button @click="run">运行</button>
  </div>
</template>

<script>
import {a6} from './linr'
export default {
  name: 'App',
  data() {
    return {
      result: '',
      arr0: [1,2,3,1,4,1,2,5,1,2,4,5],
      arr1: [1, 2, 3, 4, 5, 6, 7, 8],
      arr2: [1, 2, 6],
      arr3: [{num: 1},{num: 2},{num: 6}],
      arr4: [1, 2, 3, 4],
      arr5: [
        {
            groupCheckBasis: 3,
            groupNumber: "bb"
        },
        {
            groupIndex: 2,
            groupNumber: "bb"
        },
        {
            groupCheckBasis: 3,
            groupNumber: "cc"
        },
        {
            groupIndex: 2,
            groupNumber: "aa"
        },
        {
            groupIndex: 1,
            groupNumber: "aa"
        },
        {
            groupCheckBasis: 3,
            groupNumber: "cc"
        }
      ],
      arr6: [
        {
          name: 'ZYTX'
        },
        {
          name: 'ZYTA'
        },
        {
          name: 'ZYTX'
        }
      ],
      arr7: [
        {
          name: 'kin',
          age: 15,
          mess: 'qwert'
        },{
          name: 'lin',
          age: 18,
          mess: 'asdf'
        },{
          name: 'yin',
          age: 14,
          mess: 'qzxcbv'
        },{
          name: 'rin',
          age: 19,
          mess: 'qwert'
        }
      ]
    }
  },
  methods: {
    run() {
      // this.result = a1(this.arr0)
      // this.result = a2(this.arr1,this.arr2,true)
      // this.result = a3(this.arr3,this.arr4,true,'num')
      // this.result = a4(this.arr5,'groupNumber')
      // this.result = a5(this.arr6,'name')
      this.result = a6(this.arr7,'name')

    }
  }
}
</script>

<style>

</style>
