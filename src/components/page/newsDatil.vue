<template>
  <div class="newsDatil" ref="newsDatil">
    <mt-header fixed class="mtHeader">
      <mt-button icon="back" @click="backBtn" slot="left">返回</mt-button>
    </mt-header>
    <div style="margin-top: 40px;margin-bottom: 20px;font-weight: 600;text-align: center;">{{title}}</div>
    <div v-html='newsDatilHtml'>
      <div>{{newsDatilHtml}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newsDatil1: '',
      newsDatilHtml: '',
      title: '',
      Guid: ''
    }
  },
  methods: { //http://132.232.14.12/api/Values/GetBankList
    getNewsList() {
      var dataNum = new URLSearchParams();
      dataNum.append('pageNo', 0);
      dataNum.append('pageSize', 10);
      let vm = this;
      this.$http.post(`${this.baseUrl}/api/Discovery/GetDiscoveryList`, dataNum)
        .then(function(res) {
          console.log(res.data.Data)
          res.data.Data.map((item) => {

            if (item.Guid == vm.Guid) {
              vm.newsDatilHtml = item.Content;
            }
          })
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    backBtn() {
      this.$router.back(-1)
    }

  },
  created() {
    this.title = this.$route.params.title;
    this.Guid = this.$route.params.Guid;
    this.newsDatilHtml = this.$route.params.Content
  },
  mounted() {
    // this.title = this.$route.params.title;
    // this.Guid = this.$route.params.Guid;
    // this.newsDatilHtml = this.$route.Content
    // console.log(this.Guid)
  }
}

</script>
<style lang="less">
.newsDatil {
  padding: 10px 20px;
  background-color: #fff;
  img {
    width: 100%;
  }
}

</style>
