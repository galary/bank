<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tab></tab>
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

body {
  background-color: #f1f1f1;
}

</style>
