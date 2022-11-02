<template>
  <div>
    <div>{{msg}}</div>
    <div><input type="text" v-model="inputValue"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: '',
      inputValue: ''
    }
  },
  created() {
    // console.log(this.$route)
    this.msg = this.$route.path
  }
}
</script>
