<template>
  <mt-header :title="headerTitle" fixed class="mtHeader">
    <mt-button icon="back" @click="backBtn" slot="left">返回</mt-button>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
</template>
<script>
import goodCards from "../../mock/goodCards.json";
export default {
  data() {
    return {
      headerTitle:''
    }
  },
  props:{
    title:{
      type: String,
      default:''
    }
  },
  methods: {
    backBtn(){ this.$router.back(-1) }

  },
  mounted() {
    this.headerTitle=this.title?this.title:''
  } 
};

</script>
<style lang="less" scoped>
.mtHeader{
  margin-bottom: 40px;
}

</style>
