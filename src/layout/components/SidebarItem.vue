<template>
  <div v-if="!item.hidden">
    <el-menu-item
      v-if="
        (item.meta && item.meta.hideChildren) ||
          !item.children ||
          (item.meta && item.meta.is_leaf)
      "
      :index="resolve(item)"
    >
      <i :class="item.meta && item.meta.icon"></i>
      <span slot="title">{{ item.meta && item.meta.title }}</span>
    </el-menu-item>
    <el-submenu
      v-else
      :index="item.path"
      :disabled="item.meta && item.meta.hide"
    >
      <template slot="title">
        <i :class="item.meta && item.meta.icon"></i>
        <span slot="title">{{ item.meta && item.meta.title }}</span>
      </template>
      <sidebar-item
        class="menu-children"
        v-for="route in item.children"
        :key="route.path"
        :item="route"
        :base-path="item.path"
      />
    </el-submenu>
  </div>
</template>
<script>
import SidebarItem from './SidebarItem.vue'
export default {
  name: 'sidebar-item',
  components: { SidebarItem },
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  computed: {
    resolve() {
      return function(item) {
        // console.log('resolve', item.path, this.basePath)
        const path = item.path
        if (path.startsWith('/')) {
          return this.basePath + path
        } else {
          return this.basePath + '/' + path
        }
      }
    }
  }
}
</script>
