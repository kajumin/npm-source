<template>
  <div>
    <div>qrcode</div>
    <div class="qrcode" ref="qrCodeUrl"></div>
  </div>
</template>
<script>
import QRCode from 'qrcodejs2'
export default {
  data() {
    return {}
  },
  mounted() {
    this.creatQrCode()
  },
  methods: {
    creatQrCode() {
      var qrcode = new QRCode(this.$refs.qrCodeUrl, {
        text: 'sdf',
        width: 160,
        height: 160,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
      })
      console.log(qrcode)
    }
  }
}
</script>
<style scoped lang="scss">
.qrcode {
  display: inline-block;
  width: 160px;
  height: 160px;
  img {
    width: 100%;
    height: 100%;
    background-color: #fff; //设置白色背景色
    padding: 6px; // 利用padding的特性，挤出白边
    box-sizing: border-box;
  }
}
</style>
