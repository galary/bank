<template>
  <div class="list">
    <mt-header :title="title" fixed class="mtHeader">
      <mt-button icon="back" @click="backBtn" slot="left">返回</mt-button>
    </mt-header>
    <div class="flag">内嵌银行申请页面</div>
  </div>
</template>
<script>
import Header from "./Header.vue"
export default {
  data() {
    return {
      title: ''
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
    this.title = this.$route.params.title

  }
};

</script>
<style lang="less" scoped>
.flag {
  font-size: 30px;
  width: 140px;
  height: 100px;
  line-height: 50px;
  text-align: center;
  margin: 120px auto;
  background-color: #fff;
}

</style>
