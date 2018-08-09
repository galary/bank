<template>
  <div class="newsView">
    <div class="newsList" @click='goNewsDatil(item)' v-for='(item,index) in newsList' :key='index'>
      <div class="title">{{item.Title}}</div>
      <div class="newsFoot">
        <div class="newsleft">{{item.PublishPerson}}</div>
        <div class="newsTime">{{item.PublishDate|timeFilters}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment"
export default {
  name: 'App',
  components: {

  },
  filters: {
    timeFilters(val) {
      return moment(val).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  data() {
    return {
      newsList: ''
    }
  },
  methods: { //http://132.232.14.12/api/Values/GetBankList
    getNewsList() {
      let vm = this;
      var dataNum = new URLSearchParams();
      dataNum.append('pageNo', 0);
      dataNum.append('pageSize', 10);
      this.$http.post(`${this.baseUrl}/api/Discovery/GetDiscoveryList`, dataNum)
        .then(function(res) { //http://132.232.14.12/api/MobileAccount/SendMessage?Num=15037266892
          vm.newsList = res.data.Data
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getList() { //http://api.getcard.cn/Help/Api/POST-api-MobileAccount-AccountLogin_UserName_PassWord
      this.$http.post(`${this.baseUrl}/api/Values/GetBankList`, {})
        .then(function(res) { //http://132.232.14.12/api/MobileAccount/SendMessage?Num=15037266892
          // console.log(res.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    goNewsDatil(item) {
      // console.log(item)
      this.$router.push({
        name: 'newsDatil',
        params: {
          title: item.Title,
          Guid: item.Guid
        }
      })
    }
  },
  mounted() {
    this.getNewsList()
    this.getList()
  }
}

</script>
<style lang="less">
.newsView {
  width: 100%;
  height: 100%;
  margin-bottom: 42px;
  .newsList {
    border-bottom: 1px solid #ccc;
    background-color: #fff;
    padding: 10px 15px;
    .newsFoot {
      font-size: 14px;
      color: #666;
      display: flex;
      margin-top: 10px;
      .newsTime {
        margin-left: 25px;
      }
    }
  }
}

</style>
