<template>
  <div>
    <div class="axios">axios插件</div>
    <div><el-button @click="handleClick2">设置name</el-button></div>
    <div><el-button @click="handleClick">请求用户列表</el-button></div>
    <!--
      拦截器中设置默认参数
      config.params = Object.assign({}, { name: 'bang' }, config.params)
     -->
  </div>
</template>
<script>
import { getUser } from '@/api/user/user.js'
export default {
  data() {
    return {}
  },
  methods: {
    handleClick() {
      getUser({ id: '1' }).then(res => {
        console.log(res)
      })
    },
    handleClick2() {
      localStorage.setItem('name', 'bang')
    }
  }
}
</script>
<style scoped>
.axios {
  color: #096;
}
</style>
