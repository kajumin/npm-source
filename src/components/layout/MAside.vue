<template>
  <el-aside :width="variables.sideBarWidth">
    <el-scrollbar>
      <el-menu
        default-active="2"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        @open="handleOpen"
        @close="handleClose"
      >
        <sidebar-item
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
        />
        <!-- <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        -->
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script>
import variables from '@/styles/variables.scss'
import { mapGetters } from 'vuex'
import SidebarItem from '@/components/layout/components/SidebarItem.vue'
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

<style scoped lang="scss">
.el-aside /deep/ {
  .el-scrollbar {
    height: 100%;
    .el-scrollbar__wrap {
      overflow-x: auto;
    }
  }
}
</style>
