<template>
  <div class="hightlight">
    <highlightjs language='javascript' class="hljs-link" autodetect :code="code" />
  </div>
</template>

<script>
import hljs from 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'

export default {
  data() {
    return {
      hljs: hljs,
      code: 'bang'
    }
  },
  components: {
    highlightjs: hljsVuePlugin.component
  }
}
</script>
<style scoped></style>
