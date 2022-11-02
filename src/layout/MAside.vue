<template>
  <el-aside :width="variables.sideBarWidth">
    <el-scrollbar>
      <el-menu
        default-active="2"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :router="true"
        @open="handleOpen"
        @close="handleClose"
      >
        <sidebar-item
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
        />
      </el-menu>
      <div v-for="item in 10" :key="item" style="line-height:30px;">{{item}}</div>
    </el-scrollbar>
  </el-aside>
</template>

<script>
import variables from '@/styles/variables.scss'
import SidebarItem from './components/SidebarItem.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    SidebarItem
  },
  computed: {
    ...mapGetters(['permission_routes']),
    variables() {
      return variables
    }
  },
  methods: {
    handleOpen() {},
    handleClose() {}
  }
}
</script>
