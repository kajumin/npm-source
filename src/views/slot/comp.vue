<template>
  <div class="header">
    <slot :info="info">
      <div class="title">{{ info.title }}</div>
      <div class="description">{{ info.description }}</div>
    </slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        title: 'title-后备内容',
        description: 'description-作用域插槽',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
}
.title {
  font-size: 24px;
  color: red;
}
.description {
  color: #666;
}
</style>
