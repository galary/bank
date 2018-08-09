<template>
  <div class="list">
    <mt-header :title="title" fixed class="mtHeader">
      <mt-button icon="back" @click="backBtn" slot="left">返回</mt-button>
    </mt-header>
    <div class="flag">
      <iframe :src="url" class="innerHtml" scrolling="auto" border="0" frameborder='no'></iframe>
    </div>
  </div>
</template>
<script>
import Header from "./Header.vue"
export default {
  data() {
    return {
      title: '',
      url: ''
    }
  },
  components: {
    Header
  },
  methods: {
    backBtn() {
      this.$router.back(-1)
    }
  },
  mounted() {
    console.log(this.$route.params)
    this.title = this.$route.params.Name
    this.url = this.$route.params.url;

  }
};

</script>
<style lang="less" scoped>
.flag {
  .innerHtml {
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
}

</style>
