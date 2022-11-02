<template>
  <div>
    <comp v-slot="scope">
      <div class="title">标题: {{ scope.info.title }}</div>
      <div class="description">{{ scope.info.description }}</div>
    </comp>
    <Comp />
  </div>
</template>

<script>
import Comp from './comp.vue'
export default {
  components: {
    Comp,
  },
  data() {},
}
</script>

<style lang="scss" scoped>
.title {
  color: pink;
}
.description {
  color: #999;
}
</style>
