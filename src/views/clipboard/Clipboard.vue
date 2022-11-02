<template>
  <div>
    <el-button @click="handleClick">复制</el-button>
    <div ref="box">www.baidu.com</div>
    <el-input v-model="value" type="text"></el-input>
  </div>
</template>
<script>
import { handleClipboard } from '@/utils/clipboard.js'
export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    handleClick(e) {
      console.log(e)
      console.log(this.$refs.box.textContent)
      console.log(handleClipboard(this.$refs.box.textContent, e))
    }
  }
}
</script>
<style scoped></style>
