<template>
  <div :class="$style.qs">
    <div :class="$style.title">qs</div>
    <div :class="$style.content">
      <p :class="$style.text">
        qs: 有以下几个格式{ arrayFormat: 'indices' }(默认) brackets repeat
      </p>
    </div>
    <div :class="$style.content2">
      <p :class="$style.text">qs: 有以下几个格式{ arrayFormat: 'indices' }(默认) brackets repeat</p>
    </div>
  </div>
</template>

<script>
import { getMenu, addUser } from '@/api/user/user.js'
import Qs from 'qs'
export default {
  data() {
    return {
      a: [1, 2, 3],
      sort: { id: 1 }
    }
  },
  created() {
    console.log(
      decodeURI(Qs.stringify({ a: this.a }, { arrayFormat: 'indices' }))
    ) // 默认格式
    console.log(
      decodeURI(Qs.stringify({ a: this.a }, { arrayFormat: 'brackets' }))
    )
    console.log(Qs.stringify({ a: this.a }, { arrayFormat: 'repeat' }))
    // php需要的格式
    console.log(
      decodeURI(Qs.stringify({ sort: this.sort }, { arrayFormat: 'indices' }))
    ) // 默认格式

    var params = Qs.stringify({ sort: this.sort }, { arrayFormat: 'indices' })
    getMenu(params).then((res) => {
      console.log(res)
    })
    addUser(params).then((res) => {
      console.log(res)
    })
  }
}
</script>

<style module lang="scss">
.qs {
  color: #cd0000;
  .title {
    font-size: 24px;
    font-weight: bold;
  }
  .content {
    border: 1px solid #eee;
    margin-top: 20px;
    .text {
      font-size: 18px;
      text-indent: 2em;
    }
  }
  .content2 {
    border: 1px solid #ccc;
    margin-top: 30px;
    .text {
      font-size: 18px;
      text-indent: 3em;
    }
  }
}
</style>
