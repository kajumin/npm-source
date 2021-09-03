<template>
  <div v-if="!item.hidden">
    <el-menu-item
      v-if="(item.meta && item.meta.hideChildren) || !item.children || (item.meta && item.meta.is_leaf)"
      :index="resolve(item)"
    >
      <i :class="item.meta.icon"></i>
      <span slot="title">{{
        item.meta.title
      }}</span>
    </el-menu-item>
    <el-submenu v-else :index="item.path" :disabled="item.meta.hide">
      <template slot="title">
        <i :class="item.meta.icon"></i>
        <span slot="title">{{ item.meta.title }}</span>
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
import SidebarItem from '@/components/layout/components/SidebarItem.vue'
export default {
  name: 'sidebar-item',
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
  components: { SidebarItem },
  data() {
    return {}
  },
  computed: {
    resolve() {
      return function(item) {
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
<style scoped></style>
