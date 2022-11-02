<template>
  <div class="home">
    <div class="nav-wrap">
      <nav class="big-nav" v-for="(menu, key) in menuList" :key="key">
        <div class="big-nav-wrap" v-for="item in menu" :key="item.name">
          <router-link class="nav-link" :to="{ name: item.name }">{{
            item.path
          }}</router-link>
          <div class="big-nav-line">
            <div class="line-left"></div>
            <div class="line-right"></div>
          </div>
        </div>
      </nav>
    </div>
    <!-- <div id="nav">
      <router-link class="home-nav" to="/">Home</router-link>
      <router-link class="home-nav" :to="{ name: 'CountTo' }"
        >CountTo</router-link
      >
      <router-link class="home-nav" :to="{ name: 'Clipboard' }"
        >Clipboard</router-link
      >

      <router-link class="home-nav" :to="{ name: 'Axios' }">Axios</router-link>
      <router-link class="home-nav" :to="{ name: 'Qs' }">Qs</router-link>
      <router-link class="home-nav" :to="{ name: 'Md5' }">Md5</router-link>
      <router-link class="home-nav" :to="{ name: 'Lodash' }"
        >Lodash</router-link
      >
    </div> -->
    <!-- <div class="img-wrap">
      <img v-for="item in imagesList" :key="item.id" :src="item.url" alt="" />
    </div> -->
  </div>
</template>

<script>
import { menuList } from '@/router/index.js'

export default {
  name: 'Home',
  data() {
    return {
      menuList,
      imagesList: [
        {
          id: 1,
          url: require('../assets/bg/c2.jpg')
        },
        {
          id: 2,
          url: require('../assets/bg/c3.jpg')
        },
        {
          id: 3,
          url: require('../assets/bg/c4.jpg')
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
// .img-wrap {
//   margin-bottom: 20px;
//   img {
//     width: 160px;
//     height: 160px;
//   }
// }
.home {
  // height: 100%;
  .nav-wrap {
    overflow: hidden;
    padding-bottom: 20px;
  }
}
.big-nav {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  padding-left: 20px;
  .big-nav-wrap {
    position: relative;
    margin-right: 16px;
    &:hover {
      color: #1890ff;
    }
    &:hover .big-nav-line {
      background-color: #ddd;
    }
    &:hover .line-left {
      opacity: 1;
      flex: 1;
    }
    &:hover .line-right {
      opacity: 1;
      flex: 1;
    }
  }
  .big-nav-line {
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    left: 0;
  }
  .line-left,
  .line-right {
    transition-property: flex, opacity;
    transition-duration: 0.5s;
    transition-timing-function: ease-out;
    width: 0;
    height: 2px;
    opacity: 0.6;
    background-color: #1890ff;
  }
}
.nav-link {
  display: block;
  padding: 10px 10px;
  color: #333;
}
.icon_div {
  position: relative;
  overflow: hidden;
  height: 100px;
  width: 100px;
  background-color: red;
}
.icon_div:before {
  position: absolute;
  left: -100%;
  top: 0;
  width: 30%;
  height: 100%;
  content: '';
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: skewX(-45deg);
  animation: searchLights 1.5s ease 0s infinite;
}
@keyframes searchLights {
  to {
    left: 170%;
  }
}
.home-nav {
  position: relative;
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 20px 30px;
  line-height: 100px;
  border-radius: 50%;
  text-align: center;
  border: 1px solid #ffd1ff;
  background-image: none;
}
.home-nav:hover {
  background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);
}
.home-nav:after {
  position: absolute;
  right: 10px;
  bottom: -35px;
  content: '';
  width: 1px;
  height: 100%;
  background-color: #fff;
  box-sizing: 1px 3px 10px #fff;
  transform: rotate(45deg);
}
.home-nav:hover:after {
  animation: transLine 1s;
}
@keyframes transLine {
  to {
    right: 87px;
    bottom: 35px;
  }
}
</style>
