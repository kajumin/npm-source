<template>
  <div>
    <div>
      <el-input type="text" v-model="inputValue" @input="handleDebounce"></el-input>
      <el-button @click="handleDebounce">防抖</el-button>
      {{debounce}}
    </div>
    <div>
      <el-button @click="handleThrottle">节流</el-button>
      {{throttle}}
    </div>
  </div>
</template>

<script>
import { debounce, throttle } from '@/utils/lodash.js'
export default {
  data() {
    return {
      inputValue: '',
      throttle: 0,
      debounce: 0
    }
  },
  methods: {
    handleDebounce: debounce(
      function(e) {
        this.debounce++
        console.log(e)
      },
      2000,
      { leading: true }
    ),
    // 立即执行
    handleThrottle: throttle(function(e) {
      this.throttle++
      console.log(e)
    }, 2000)
    // 默认立即执行
  }
}
</script>

<style></style>
