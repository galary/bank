<template>
  <div class="list">
    <mt-header :title="title" fixed class="mtHeader">
      <mt-button icon="back" @click="backBtn" slot="left">返回</mt-button>
    </mt-header>
    <div style="margin-top: 40px;">
      <div class="describe" v-if="showDescribe">
        <div class="bankSvg">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="iconId"></use>
          </svg>
        </div>
        <div class="banktext">
          <p class="">{{title}}</p>
          <p class="youhui">周三周六美食5折</p>
        </div>
      </div>
      <cardsList></cardsList>
    </div>
  </div>
</template>
<script>
import goodCards from "../../mock/goodCards.json";
import cardsList from "./cardsList.vue"
import Header from "./Header.vue"
export default {
  data() {
    return {
      goodCards: [],
      title: '',
      iconId: '',
      showDescribe: false
    }
  },
  components: {
    cardsList,
    Header
  },
  methods: {
    backBtn() {
      this.$router.back(-1)
    }
  },
  mounted() {

    this.title = this.$route.params.title;
    this.iconId = this.$route.params.icon;
    console.log(this.$route.params.icon);
    this.goodCards = goodCards.links;
    if (this.iconId == '' || this.iconId == undefined) {
      this.showDescribe = false;
    } else {
      this.showDescribe = true;
    }
  }
};

</script>
<style lang="less" scoped>
.icon {
  width: 4em;
  height: 4em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.list {
  .describe {
    display: flex;
    background-color: #fff;
    padding: 10px;
    .bankSvg {}
    .banktext {
      margin-top: 10px;
      margin-left: 15px;
      .youhui {
        font-size: 0.8rem;
        padding: 2px 0;
        color: #666;
      }
    }
  }
}

</style>
