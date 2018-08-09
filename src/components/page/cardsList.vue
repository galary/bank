<template>
  <div class="goodCards">
    <div class="swiperView">
      <!-- <div class="hotCardTitle">好卡推荐</div> -->
      <div class="cardsList">
        <div class="cardlistView" v-for="(item,index) in goodCards" :key="index">
          <div class="cardImg"><img :src='`${baseUrl}${item.Attachments[0].Url}`' alt=""></div>
          <div class="cardView">
            <div class="cardName">{{item.Name}}</div>
            <!-- <div class="discount">{{item.Type}}</div> -->
            <div class="discount">{{item.Quota}}</div>
          </div>
          <div class="takeBtn" @click='takeCard(item.ApplyAddress,item.Name)'>办卡</div>
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
      // BankId: ''
    }
  },
  props: {
    msg: String,
    msg1: String,
  },
  methods: {
    getHotCards() {
      let vm = this;
      console.log("haha", this.msg)
      // if(this.)
      var dataNum = {
        'pageNo': 0,
        'pageSize': 100,
        'BankId': this.msg,
        'Para': this.msg1,
      }
      this.$http.post(`${this.baseUrl}/api/CreditCard/GetCreditCardByBankId`, vm.$qs.stringify(dataNum))
        .then(function(res) {
          vm.goodCards = res.data.Data;
          console.log(res.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    takeCard(url, Name) {
      this.$router.push({
        name: 'applyCard',
        params: {
          url: url,
          Name: Name
        }
      })
    }
  },
  mounted() {
    console.log(this.msg)
    this.getHotCards()
    // this.goodCards = goodCards.links;
  }
};

</script>
<style lang="less" scoped>
//今日推荐
.goodCards {
  width: 100%;
  margin-top: 10px;
  background-color: #fff;
  .cardsList {
    margin-top: 20px;
    .cardlistView {
      display: flex;
      margin: 0 10px;
      padding: 15px 0;
      border-top: 1px solid #ccc;
      .takeBtn {
        padding: 2px 10px;
        border: 1px solid #2196F3;
        border-radius: 5px;
        color: #2196F3;
        height: 1.8em;
        font-size: 0.8rem;
        line-height: 1.8em;
      }
      .cardView {
        width: 45%;
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
