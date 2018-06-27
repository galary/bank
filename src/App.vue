<template>
  <div id="app">
    <keep-alive>
      <!--使用keep-alive会将页面缓存-->
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <router-view name="tab"></router-view>
    <!-- <tab class='tobbar'></tab> -->
  </div>
</template>
<script>
import Tab from './components/tabFooter/tab'
export default {
  name: 'App',
  components: {
    Tab
  },
  data() {
    return {

    }
  },
}

</script>
<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
}

</style>
