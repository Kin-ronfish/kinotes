<template>
  <div>
    <k-select :list="list" objKey="title" search></k-select>
  </div>
</template>

<script>
import kSelect from "./src/k-select";
export default {
  data() {
    return {
      list: [
        {
          title: '西瓜'
        },
        {
          title: '苹果'
        },
        {
          title: '香蕉'
        },
        {
          title: '菠萝'
        },
        {
          title: '草莓'
        }
      ]
    }
  },
  components: { kSelect }
};
</script>

<style scoped>
</style>