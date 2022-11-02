<template>
  <div>
    <div class="img" v-show="listShareShow">
      <qriously
        id="qriously"
        :backgroundAlpha="1"
        :value="listSharingLink"
        :size="160"
        v-show="false"
      />
      <img :src="listSharingLinkSrc" alt="xxx二维码" @click="downloadQrcode" />
    </div>
    <a id="export-link" :href="exportLink" :download="downloadFilename+'.png'"></a>
    <a @click.stop="listShare">查看链接/二维码</a>
  </div>
</template>
<script>
import Vue from 'vue'
import VueQriously from 'vue-qriously'
Vue.use(VueQriously)
export default {
  // 提取出主要代码
  data() {
    return {
      downloadFilename: 'xxx二维码',
      listSharingLinkSrc: '',
      listSharingLink: 'http://lxchuan12.github.io/',
      listShareShow: false,
      exportLink: ''
    }
  },
  created() {
    // this.listShare()
  },
  methods: {
    /**
     * 查看链接/二维码
     * @author 若川 <lxchuan12@163.com>
     * @date   2018-05-15
     */
    listShare(event) {
      if (!this.listSharingLinkSrc) {
        const canvas = document.querySelector('#qriously > canvas')
        const imgSrc = canvas.toDataURL('image/png')
        this.listSharingLinkSrc = imgSrc
      }
      this.listShareShow = !this.listShareShow
    },
    /**
     * 表格上方：下载二维码列表
     * @author 若川 <lxchuan12@163.com>
     * @date   2018-05-15
     */
    downloadQrcode(event) {
      console.log('click', event)
      this.exportLink = this.listSharingLinkSrc
      const a = document.querySelector('#export-link')
      this.$nextTick(() => {
        a.click()
      })
      // this.$nextTick(() => {
      //   this.exportLink = ''
      // })
      event.stopPropagation()
    }
  },
  directives: {
    click: {
      /**
       * 值更新时候触发点击
       * @author 若川 <lxchuan12@163.com>
       * @date   2018-05-15
       * @param  {HTMLElement} el                指令所绑定的元素
       * @param  {Boolean}     options.value     绑定值(新)
       * @param  {Boolean}     options.oldValue  绑定值(旧)
       */
      update(el, { value, oldValue }) {
        console.log(el, value, oldValue)
        if (value && !oldValue) {
          el.click()
        }
      }
    }
  }
}
</script>
