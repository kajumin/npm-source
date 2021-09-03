<template>
  <el-container>
    <!-- <m-aside></m-aside> -->
    <el-container>
      <el-header height="70px"></el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// import MAside from '@/components/layout/MAside.vue'
export default {
  components: {
    // MAside
  }
}
</script>
