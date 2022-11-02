<template>
  <div>
    <div style="font-size:28px;color:#cd0000;">
      <count-to
        :start-val="0"
        :end-val="13600"
        :duration="1200"
        class="card-panel-num"
      />
    </div>
    <div style="font-size:24px;color:#adc;">
      <count-to
        :start-val="startNum"
        :end-val="endNum"
        :duration="1200"
        class="card-panel-num"
      />
    </div>
  </div>
</template>
<script>
import CountTo from 'vue-count-to'
export default {
  components: {
    CountTo
  },
  data() {
    return {
      startNum: 0,
      endNum: 0,
      timer: null
    }
  },
  activated() {
    console.log('我是activated钩子')
  },
  created() {
    setTimeout(() => {
      this.addPercentage('endNum', 12)
    }, 1000)
    const timer = setInterval(() => {
      console.log('定时器')
    }, 1000)
    this.$once('hook:beforeDestroy', () => {
      console.log('执行清除')
      clearInterval(timer)
    })
  },
  methods: {
    addPercentage(key, num) {
      // console.log(this[key], num)
      this[key] += num
      if (num === 100) {
        this[key] = 100
        return
      }
      if (this[key] >= 100) {
        this[key] = 99
      }
    }
  }
}
</script>
<style scoped></style>
