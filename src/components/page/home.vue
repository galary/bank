<template>
  <div class="homeModule">
    <div class="search">
      <mt-search v-model="searchValue">
        <mt-cell v-for="(item,index) in result" :title="item.title" :value="item.value" style="z-index:100" @click="changeInout(item.value)" :key='index'>
        </mt-cell>
      </mt-search>
      <!-- <mt-search v-model="searchValue"></mt-search> -->
    </div>
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
    <div class="hotBankOuter" ref='hotBankOuter'>
      <div class="hotBank" ref="hotBank">
        <div class="hotCardTitle">
          <div class="hotBankText">热门银行</div>
          <div class="moreCards" @click="showAllCards">全部卡片<i class="iconfont  arrow-right icon-arrowright"></i></div>
        </div>
        <div class="bankOutView">
          <div class="hotbankList">
            <div class="bankView" v-for="(item,index) in bankList" @click='showThisBank(item.name,item.icon)'>
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="`${item.icon}`"></use>
              </svg>
              <div class="name">{{item.name}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="showMore" @click="showMoreChange" v-if='showMore'>展开更多<i class="myicon iconfont arrow-down icon-arrowdown"></i></div>
      <div class="showMore" @click="hiddenMoreChange" v-if='hiddenMore'>收起更多<i class="myicon icon iconfont icon-arrowup"></i></div>
    </div>
    <goodCards></goodCards>
  </div>
</template>
<script>
import hotCards from "../../mock/hotCards.json";
import bankList from "../../mock/bankList.json";
import goodCards from "./goodCards.vue"
export default {
  data() {
    return {
      result: [{ title: "招商", value: 'bbb' }, { title: "招商", value: 'aaa' }, { title: "招商", value: 'cccc' }],
      searchValue: '',
      showMore: true,
      hiddenMore: false,
      hotCards: [],
      bankList: [],
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
  components: {
    goodCards
  },
  methods: {
    showAllCards() {
      this.$router.push({
        name: 'showAllCards',
        params: {
          title: "全部信用卡"
        }
      })
    },
    showThisBank(name, icon) {
      this.$router.push({
        name: 'showAllCards',
        params: {
          title: name,
          icon: icon
        }
      })
    },
    changeInout(val) {
      this.searchValue = val
    },
    showMoreChange: function() {
      this.showMore = false;
      this.hiddenMore = true;
      console.log(this.$refs.hotBank)
      this.$refs.hotBank.style.height = "auto";
    },
    hiddenMoreChange: function() {
      this.showMore = true;
      this.hiddenMore = false;
      this.$refs.hotBank.style.height = "230px";
    }
  },
  mounted() {
    this.hotCards = hotCards.links;
    this.bankList = bankList.links;
    if (this.hotCards.length <= 8) {
      this.showMore = false;
      this.hiddenMore = false;
      this.$refs.hotBank.style.height = "auto";
    }
  }
};

</script>
<style lang="less" scoped>
.icon {
  width: 3em;
  margin-top: 5px;
  height: 3em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.homeModule {
  padding-bottom: 3rem;
  .mint-search {
    height: 100%;
    height: auto;
    overflow: hidden;
  }
}

.hotBankOuter {
  .showMore {
    width: 100px;
    color: #ccc;
    padding: 2px 50px;
    margin: 0 auto;
    .myicon {
      margin-left: 5px;
    }
  }
  width: 100%;
  padding-bottom: 10px;
  background-color: #fff;
  .hotBank {
    width: 100%;
    padding-top: 20px;
    height: 230px;
    overflow: hidden;
    background-color: #fff;
    margin-top: 20px;
    .name {
      margin-top: 5px;
    }
    .hotCardTitle {
      display: flex;
      justify-content: space-between;
      .moreCards {
        margin-right: 5px;
        color: #191dcc;
      }
      .hotBankText {
        border-left: 5px solid #1C5BE6;
        font-size: 16px;
        padding-left: 10px;
        margin-left: 10px;
      }
    }
    .bankOutView {
      width: 100%;
      .hotbankList {
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        margin-left: 10px;
        .bankView {
          font-size: 0.8em;
          height: 70px;
          margin: 10px;
          text-align: center;
          width: 18%;
          height: 80px;
          margin: 10px;
        }
      }
    }
  }
}


//今日推荐
.swiperView {
  width: 100%;
  padding-top: 20px;
  height: 160px;
  background-color: #fff;
  .hotCardTitle {
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
      bottom: -3px;
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
