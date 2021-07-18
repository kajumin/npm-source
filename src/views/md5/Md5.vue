<template>
  <div>
    <div>md5</div>
  </div>
</template>

<script>
import md5 from 'js-md5'
export default {
  data() {
    return {
      md5String: ''
    }
  },
  created() {
    const t = Date.now()
    const hash = md5.create()
    hash.update('bang' + t)
    this.md5String = hash.hex()
  }
}
</script>

<style></style>
