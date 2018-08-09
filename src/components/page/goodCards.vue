<template>
  <div class="goodCards">
    <div class="swiperView">
      <div class="hotCardTitle">好卡推荐</div>
      <div class="cardsList">
        <div class="cardlistView" v-for="(item,index) in goodCards" :key="index" @click="showCards(item)">
          <div class="cardImg"><img :src='`${baseUrl}${item.Attachments[0].Url}`' alt=""></div>
          <div class="cardView">
            <div class="cardName">{{item.Name}}</div>
            <div class="discount">{{item.Type}}</div>
            <div class="discount">{{item.Quota}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import goodCards from "../../mock/goodCards.json";
export default {
  data() {
    return {
      baseUrl: 'http://api.getcard.cn',
      goodCards: [],
    }
  },
  methods: {
    showCards(index) {
      this.$router.push({
        name: 'applyCard',
        params: {
          url: index.ApplyAddress,
          Name: index.Name
        }
      })
      console.log(index)
    },
    getHotCards() {
      let vm = this;
      var dataNum = {
        'pageNo': 0,
        'pageSize': 10
      }
      this.$http.post(`${this.baseUrl}/api/CreditCard/GetRecommondCreditCard`, vm.$qs.stringify(dataNum))
        .then(function(res) {
          vm.goodCards = res.data.Data;
          console.log(res.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getHotCards()
    // this.goodCards = goodCards.links;
  }
};

</script>
<style lang="less" scoped>
//今日推荐
.goodCards {
  width: 100%;
  padding-top: 20px;
  margin-top: 10px;
  background-color: #fff;
  .cardsList {
    margin-top: 20px;
    .cardlistView {
      display: flex;
      margin: 0 10px;
      padding: 15px 0;
      border-top: 1px solid #ccc;
      .cardView {
        margin-left: 15px;
        .cardName {}
        .discount {
          font-size: 0.8rem;
          color: #999;
          padding-top: 5px;
        }
      }
      .cardImg {
        img {
          width: 120px;
          height: 70px;
        }
      }
    }
  }
  .hotCardTitle {
    border-left: 5px solid #1C5BE6;
    font-size: 16px;
    padding-left: 10px;
    margin-left: 10px;
  }
}

</style>
