<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link :to="{name: 'CountTo'}">CountTo</router-link> |
      <router-link :to="{name: 'Clipboard'}">Clipboard</router-link> |
      <router-link :to="{name: 'Axios'}">Axios</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
</style>
