<template>
  <div>
    <k-select :list="list" objKey="title" search>
      <div slot="search_left">搜索</div>
    </k-select>
  </div>
</template>

<script>
import kSelect from "./src/k-select";
export default {
  data() {
    return {
      list: [
        {
          title: 'asd'
        },
        {
          title: 'qwwqe'
        },
        {
          title: 'sdf'
        },
        {
          title: 'afgh'
        },
        {
          title: 'qasdwqe'
        },
        {
          title: 'sasdf'
        },
        {
          title: 'agh'
        }
      ],
      list_1: [1,5,4,6,6,46,6,5,'dfd','werw']
    }
  },
  components: { kSelect },
};
</script>

<style scoped>
</style>