<template>
  <div>
    <count-to :start-val="0" :end-val="13600" :duration="1200" class="card-panel-num" />
    <count-to :start-val="startNum" :end-val="endNum" :duration="1200" class="card-panel-num" />
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
  created() {
    setTimeout(() => {
      this.addPercentage('endNum', 12)
    }, 300)
    setTimeout(() => {
      this.addPercentage('endNum', 20)
    }, 400)
    setTimeout(() => {
      this.addPercentage('endNum', 20)
    }, 300)
    setTimeout(() => {
      this.addPercentage('endNum', 10)
    }, 500)
    setTimeout(() => {
      this.addPercentage('endNum', 10)
    }, 600)
    setTimeout(() => {
      this.addPercentage('endNum', 12)
    }, 600)
    setTimeout(() => {
      this.addPercentage('endNum', 100)
    }, 700)
  },
  methods: {
    addPercentage(key, num) {
      console.log(this[key], num)
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
