<template>
  <div class="hightlight">
    <div>
      <highlightjs language="javascript" class="hljs-literal" code="<h1>标题</h1>" />
    </div>
    <div>
      <highlightjs language="javascript" class="hljs-literal" :code="code" />
    </div>
    <div>
      <highlightjs language="javascript" class="hljs-meta" :code="code" />
    </div>
    <div>
      <highlightjs language="javascript" class="hljs-string" :code="code" />
    </div>
    <div>
      <highlightjs language="javascript" class="hljs-variable" :code="code" />
    </div>
    <div>
      <highlightjs language="javascript" class="hljs-emphasis" :code="code" />
    </div>
    <div>
      <pre class="hljs javascript">
       <code class="javascript"><span class="hljs-function"><span class="hljs-keyword">functionspan>  <span class="hljs-title">getPersonInfospan>
         </span>
         </span></span>
       </code>
    </pre>
    </div>
    <!-- <highlightjs autodetect code="function test() {}" /> -->
    <!-- 也可以指定语言 -->
    <!-- <highlightjs language="javascript" code="var x = 5;" /> -->
  </div>
</template>

<script>
// import hljs from 'highlight.js/lib/common.js'
import hljsVuePlugin from '@highlightjs/vue-plugin'
// import Vue from 'vue'
// import hljs from 'highlight.js'
// import 'highlight.js/styles/idea.css' // 这里有多个样式，自己可以根据需要切换
// Vue.use(hljs)
export default {
  data() {
    return {
      // hljs: hljs,
      code: 'var b = "123";console.log(b)'
    }
  },
  created() {
    // console.log('hljs', hljs, Vue)
  },
  components: {
    highlightjs: hljsVuePlugin.component
  }
}
</script>
<style scoped></style>
