<template>
  <div>
    <div>$config.env {{ $config.ENV }}</div>
    <RecycleScroller
      class="scroller"
      :items="tableData"
      :item-size="32"
      key-field="id"
      v-slot="{ item }"
    >
      <div class="user">
        {{ item.name }}
      </div>
    </RecycleScroller>
  </div>
</template>

<script>
import Vue from 'vue'
import { RecycleScroller } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

Vue.component('RecycleScroller', RecycleScroller)
export default {
  data() {
    return {
      tableData: [],
    }
  },
  created() {
    for (let i = 0; i < 1000; i++) {
      this.tableData.push({ id: i, name: i })
    }
  },
}
</script>

<style lang="scss" scoped>
.scroller {
  height: 240px;
}

.user {
  height: 32px;
  line-height: 32px;
  padding: 0 12px;
  display: flex;
  align-items: center;
}
</style>
