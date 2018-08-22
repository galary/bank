<template>
  <div class="newsView" :style="{'-webkit-overflow-scrolling': scrollMode}">
    <v-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
      <div class="newsList" @click='goNewsDatil(item)' v-for='(item,index) in pageList' :key='index'>
        <div class="title">{{item.Title}}</div>
        <div class="newsFoot">
          <div class="newsleft">{{item.PublishPerson}}</div>
          <div class="newsTime">{{item.PublishDate|timeFilters}}</div>
        </div>
      </div>
      <div style="text-align: center;margin: 10px 0;color: #ccc;" v-if="allLoaded">无更多内容</div>
    </v-loadmore>
  </div>
</template>
<script>
import moment from "moment"
import { Loadmore } from 'mint-ui';
export default {
  name: 'App',
  filters: {
    timeFilters(val) {
      return moment(val).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  data() {
    return {
      searchCondition: { //分页属性
        pageNo: "0",
        pageSize: "10",
        Type: '0'
      },
      totalCount: 0,
      pageList: [],
      allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
      scrollMode: "auto",
      newsList: ''
    }
  },
  components: {
    'v-loadmore': Loadmore
  },
  methods: {
    loadBottom: function() {
      // 上拉加载
      this.more(); // 上拉触发的分页查询
      this.$refs.loadmore.onBottomLoaded(); // 固定方法，查询完要调用一次，用于重新定位
    },
    loadPageList: function() {
      let vm = this
      // 查询数据
      console.log(this.searchCondition)
      this.$http.post(`${this.baseUrl}/api/Announcenment/GetAnnouncenmentList`, vm.$qs.stringify(this.searchCondition)).then(data => {
        // 是否还有下一页，加个方法判断，没有下一页要禁止上拉
        this.totalCount = data.data.totalCount;
        let flag = null
        if (this.pageList.length >= this.totalCount) {
          flag = false;
        } else {
          flag = true
        }
        this.isHaveMore(flag);
        this.pageList = data.data.Data;
        this.$nextTick(() => {
          this.scrollMode = "touch";
        });
      });
    },
    more: function() {
      // 分页查询
      let vm = this;
      this.searchCondition.pageNo = parseInt(this.searchCondition.pageNo) + 1;
      this.$http.post(`${this.baseUrl}/api/Announcenment/GetAnnouncenmentList`, vm.$qs.stringify(this.searchCondition)).then(data => {
        this.pageList = this.pageList.concat(data.data.Data);
        let flag = null
        if (this.pageList.length >= this.totalCount) {
          flag = false;
        } else {
          flag = true
        }
        this.isHaveMore(flag);
      });
    },
    isHaveMore: function(isHaveMore) {
      // 是否还有下一页，如果没有就禁止上拉刷新
      this.allLoaded = true; //true是禁止上拉加载
      if (isHaveMore) {
        this.allLoaded = false;
      }
    },

    getNewsList() {
      let vm = this;
      var dataNum = new URLSearchParams();
      dataNum.append('pageNo', 0);
      dataNum.append('pageSize', 20);
      this.$http.post(`${this.baseUrl}/api/Discovery/GetDiscoveryList`, dataNum)
        .then(function(res) {
          vm.newsList = res.data.Data
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getList() {
      this.$http.post(`${this.baseUrl}/api/Values/GetBankList`, {})
        .then(function(res) {
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
          Guid: item.Guid,
          Content: item.Content,
        }
      })
    }
  },
  mounted() {
    this.pageList.length = 0;
    this.loadPageList();
    // this.getNewsList()
    // this.getList()
  }
}

</script>
<style lang="less">
.newsView {
  width: 100%;
  height: 100vh;
  overflow: scroll;
  margin-bottom: 40px;
  background-color: #fff;
  .mint-loadmore {
    overflow: hidden;
    margin-bottom: 53px;
  }
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
