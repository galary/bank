<template>
<div class="homeModule">
 <div class="swiperView">
   <div class="hotCardTitle">今日推荐</div>
    <swiper :options="swiperOption" class="swiper-box">
    <swiper-slide class="swiper-item" v-for="(item,index) in hotCards" :key='index'>
      <div class="cardlist">
        <img :src="item.url" alt="">
        <p class="hotcardName">{{item.name}}{{index}}</p>
        <p class="discounts">{{item.discounts}}</p>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
 </div>
 <div class="hotBank">
   <div class="hotCardTitle">热门银行</div>
   <div class="hotbankList">
     <div class="bankView">银行</div><div class="bankView">银行</div>
     <div class="bankView">银行</div><div class="bankView">银行</div>
     <div class="bankView">银行</div><div class="bankView">银行</div>
     <div class="bankView">银行</div><div class="bankView">银行</div>
     <div class="bankView">银行</div><div class="bankView">银行</div>
     <div class="bankView">银行</div><div class="bankView">银行</div>
     <div class="bankView">银行</div><div class="bankView">银行</div>
   </div>
 </div>
</div>
</template>
<script>
import hotCards from "../../mock/hotCards.json";
export default {
  data() {
    return {
      hotCards: [],
      swiperOption: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 5,
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  mounted() {
    this.hotCards = hotCards.links;
    console.log(hotCards);
  }
};
</script>
<style lang="less" scoped>
//热门推荐
.hotBank{
  width: 100%;
  padding-top: 20px;
  height: 160px;
  background-color: #fff;
  margin-top: 20px;
  .hotCardTitle{
    border-left: 5px solid #1C5BE6;
    font-size: 16px;
    padding-left: 10px;
    margin-left: 10px;
  }
  .hotbankList{
    display: flex;
    
  }
}
//今日推荐
.swiperView {
  width: 100%;
  padding-top: 20px;
  height: 160px;
  background-color: #fff;
  .hotCardTitle{
    border-left: 5px solid #1C5BE6;
    font-size: 16px;
    padding-left: 10px;
    margin-left: 10px;
  }
  .swiper-box {
    width: 100%;
    height: 120px;
    margin: 0 auto;
    .hotcardName {
      font-size: 14px;
      color: #666;
    }
    .discounts {
      font-size: 12px;
      color: #ccc;
    }
    .swiper-pagination {
      bottom: -5px;
    }
    .cardlist img {
      width: 100px;
      height: 50px;
    }
    .swiper-item {
      height: 120px;
      text-align: center;
      font-size: 18px;
      background: #fff;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
  }
}
</style>
