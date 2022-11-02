<template>
  <div>
    <div>v-lazyload</div>
    <div v-lazy-container="{ selector: 'img' }">
      <img :data-src="imagesList[0].url"/>
    </div>
    <img v-lazy="imagesList[1].url" />
    <lazy-component @show="handler">
      <img
        class="mini-cover"
        :src="imagesList[2].url"
      />
    </lazy-component>
  </div>
</template>

<script>
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

const loadimage = require('@/assets/loading.gif')
const errorimage = require('@/assets/404.jpg')

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: errorimage,
  loading: loadimage,
  attempt: 1,
  lazyComponent: true // 使用组件时需要设置
})

export default {
  data() {
    return {
      imagesList: [
        {
          id: 1,
          url: 'https://c.pxhere.com/photos/4a/ae/dandelion_flower_spiritual_pebble_japanese_vacation_summer_garden-868644.jpg!s2'
        },
        {
          id: 2,
          url: 'https://c.pxhere.com/photos/18/3e/chestnut_autumn_spur_open_open_chestnut_shell_brown_plant-485043.jpg!s2'
        },
        {
          id: 3,
          url: 'https://c.pxhere.com/photos/c0/12/teddy_teddy_bear_rose_romantic_romance_greeting_card_love_friendship-702142.jpg!s2'
        }
      ]
    }
  },
  methods: {
    handler() {
      console.log('handler')
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 200px;
}
</style>
