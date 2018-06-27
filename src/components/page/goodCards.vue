<template>
  <div class="goodCards">
    <div class="swiperView">
      <div class="hotCardTitle">好卡推荐</div>
      <div class="cardsList" >
        <div class="cardlistView" v-for="(item,index) in goodCards" :key="index">
          <div class="cardImg"><img :src="item.url" alt=""></div>
          <div class="cardView">
            <div class="cardName">{{item.cards[0].cardName}}</div>
            <div class="discount">{{item.cards[0].discount1}}</div>
            <div class="discount">{{item.cards[0].discount}}</div>
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
      goodCards: [],
    }
  },
  methods: {

  },
  mounted() {
    this.goodCards = goodCards.links;
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
