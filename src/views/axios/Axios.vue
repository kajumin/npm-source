<template>
  <div>
    <div class="axios">axios插件</div>
    <el-form>
      <el-form-item label-width="120px">
        <el-input type="text" placeholder="请输入姓名" v-model="inputText"></el-input>
      </el-form-item>
    </el-form>
    <div>
      <el-button @click="handleClick2">设置name</el-button
      ><el-button @click="handleClick">请求用户列表</el-button
      ><el-button @click="handleCancel">测试取消请求</el-button>
    </div>
    <!--
      拦截器中设置默认参数
      config.params = Object.assign({}, { name: 'bang' }, config.params)
     -->
  </div>
</template>
<script>
import { getUser, getCancel } from '@/api/user/user.js'
export default {
  data() {
    return {
      inputText: ''
    }
  },
  created() {
    function p1() {
      return new Promise((resolve) => {
        resolve(1)
      })
    }
    async function fun12() {
      const p = await p1()
      console.log('fun12', p)
    }
    fun12()
  },
  methods: {
    handleClick() {
      getUser({ id: '1' }).then((res) => {
        console.log(res)
      })
    },
    handleClick2() {
      localStorage.setItem('name', 'bang')
    },
    handleCancel() {
      getCancel()
        .then((res) => {
          console.log(res)
          if (res.code === 0) {
            this.$message({
              type: 'success',
              message: res.data.msg
            })
          }
        })
        .catch((res) => {
          console.log(res)
        })
    }
  }
}
</script>
<style scoped>
.axios {
  color: #096;
}
</style>
