<template>
  <div>
    <div>axios插件</div>
    <div><el-button @click="handleClick2">设置name</el-button></div>
    <div><el-button @click="handleClick">请求用户列表</el-button></div>
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
<style scoped></style>
