<template>
  <div id="app">
    <el-container>
      <m-aside></m-aside>
      <el-container>
        <el-header height="70px" class="box-shadow-bottom"></el-header>
        <el-main>
          <keep-alive :include="keepRouteList"
            ><router-view></router-view
          ></keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MAside from './MAside.vue'
export default {
  components: {
    MAside
  },
  data() {
    return {
      keepRouteList: []
    }
  },
  watch: {
    $route: {
      handler(newV) {
        // console.log('newV', newV)
        if (
          newV.meta &&
          newV.meta.keepalive &&
          !this.keepRouteList.includes(newV.name)
        ) {
          console.log('添加')
          this.keepRouteList.push(newV.name)
        }
      },
      immediate: true
    }
  },
  computed: {
    isKeepalive() {
      console.log(this.keepRouteList.includes(this.$route.name))
      return this.keepRouteList.includes(this.$route.name)
    }
  }
}
</script>
