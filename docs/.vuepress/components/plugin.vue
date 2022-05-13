<template>
  <div>
    <k-select :list="list" objKey="title"></k-select>
  </div>
</template>

<script>
import kSelect from "./k-select/k-select.vue";
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
        }
      ]
    }
  },
  components: { kSelect },
};
</script>

<style scoped>
</style>