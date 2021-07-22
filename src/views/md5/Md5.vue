<template>
  <div>
    <div>md5</div>
    <div>{{md5String}}</div>
  </div>
</template>

<script>
import { getMd5 } from '@/api/getMsg.js'
export default {
  data() {
    return {
      md5String: ''
    }
  },
  created() {
    const t = Date.now()
    this.md5String = getMd5('bang' + t)
  }
}
</script>

<style></style>
