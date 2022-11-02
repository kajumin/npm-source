<template>
  <div></div>
</template>

<script>
import { flowRight, toUpper, reverse, curry, first } from 'lodash'
import { map } from 'lodash/fp'
export default {
  data() {
    return {
      arr: ['first-name', 'last-name', 'user-list']
    }
  },
  created() {
    this.flowRight()
  },
  methods: {
    flowRight() {
      console.log('flowRight', typeof first, typeof curry, typeof flowRight, typeof map, typeof toUpper, typeof reverse)
      // console.log(curry(map)(toUpper)(this.arr))
      const tranStr = function(str) {
        return str.replace(/-([A-z]{1})/g, ($1, $2) => {
          // console.log($1, $2)
          return $2.toUpperCase()
        })
      }
      // const tranFunc = flowRight(curry(map)(tranStr), reverse)
      const tranFunc = flowRight(curry(map)(toUpper), reverse)
      console.log('tranFunc', typeof tranStr, tranFunc(this.arr))
    }
  }
}
</script>

<style>

</style>
