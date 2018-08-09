<template>
  <div class="newsDatil">
    <mt-header fixed class="mtHeader">
      <mt-button icon="back" @click="backBtn" slot="left">返回</mt-button>
      <!-- <mt-button slot="right" @click='saveInfo'>修改</mt-button> -->
    </mt-header>
    <div class="outer">
      <div class="imgView"><img src="../../../static/image/404.png" alt="">
        <div class="text">待开发</div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
import Mavatar from 'mavatar'
export default {
  data() {
    return {

    }
  },
  methods: {
    backBtn() {
      this.$router.back(-1)
    },

  },
  created() {

  },
  mounted() {

  }
}

</script>
<style lang="less" scoped>
.outer {
  .imgView {
    text-align: center;
    height: 100vh;
    img {
      width: 58%;
      height: 120px;
      margin-top: 180px;
    }
    .text {
      margin-top: 20px;
      color: #ccc;
      font-size: 1.2em;
    }
  }
}

</style>
