<template>
  <div id="my">
    <div class="mine">
      <div class="my_header">
        <div class="user_img" @click="selectLogin()"><img :src="imgUrl"></div>
        <div class="des" @click="selectPersonalpage()">
          <div class="user_name">{{Name}}</div>
          <div class="rightFlag"><i class="icon iconfont icon-arrowright"></i></div>
        </div>
      </div>
    </div>
    <div class="my_items">
      <div class="mineModule">
        <div @click='goNull'>
          <mt-cell is-link>
            <div slot='title' class="myTitle" style="">
              <svg class="icon" aria-hidden="true" slot='icon'>
                <use xlink:href="#icon-yinhangqia"></use>
              </svg>
              <div class="titletext">我的银行卡</div>
            </div>
          </mt-cell>
        </div>
        <!-- <div class="lineStyle"></div> -->
        <div @click='goNull'>
          <mt-cell is-link>
            <div slot='title' class="myTitle" style="">
              <svg class="icon" aria-hidden="true" slot='icon'>
                <use xlink:href="#icon-daikuan-xuanzhong"></use>
              </svg>
              <div class="titletext">我的钱包</div>
            </div>
          </mt-cell>
        </div>
      </div>
      <div class="mineModule">
        <div @click='goNull'>
          <mt-cell is-link>
            <div slot='title' class="myTitle" style="">
              <svg class="icon" aria-hidden="true" slot='icon'>
                <use xlink:href="#icon-Group"></use>
              </svg>
              <div class="titletext">办卡进度查询</div>
            </div>
          </mt-cell>
        </div>
        <!-- <div class="lineStyle"></div> -->
        <div @click='goNull'>
          <mt-cell is-link>
            <div slot='title' class="myTitle" style="">
              <svg class="icon" aria-hidden="true" slot='icon'>
                <use xlink:href="#icon-zhengfu"></use>
              </svg>
              <div class="titletext">银行服务大厅</div>
            </div>
          </mt-cell>
        </div>
        <!-- <div class="lineStyle"></div> -->
        <div @click='goNull'>
          <mt-cell is-link>
            <div slot='title' class="myTitle" style="">
              <svg class="icon" aria-hidden="true" slot='icon'>
                <use xlink:href="#icon-yinhangqia"></use>
              </svg>
              <div class="titletext">信用卡提额</div>
            </div>
          </mt-cell>
        </div>
      </div>
      <div class="mineModule">
        <div @click='goNull'>
          <mt-cell is-link>
            <div slot='title' class="myTitle" style="">
              <svg class="icon" aria-hidden="true" slot='icon'>
                <use xlink:href="#icon-bangzhu"></use>
              </svg>
              <div class="titletext">帮助与反馈</div>
            </div>
          </mt-cell>
        </div>
        <!-- <div class="lineStyle"></div> -->
        <div @click="goSetUp()">
          <mt-cell :is-link="true">
            <div slot='title' class="myTitle" style="">
              <svg class="icon" aria-hidden="true" slot='icon'>
                <use xlink:href="#icon-shezhi"></use>
              </svg>
              <div class="titletext">设置</div>
            </div>
          </mt-cell>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgUrl: './static/image/mImg.jpg',
      Name: '请完善个人信息'
    }
  },
  props: {

  },
  created() {
    // let hostory = window.localStorage;
    // var val = hostory.getItem(data);
    let url = this.util.changeStory('url');
    let Name = this.util.changeStory('Name');
    this.imgUrl = (url == '') ? this.imgUrl : url;
    this.Name = (Name == null) ? this.Name : Name;
  },
  methods: {
    goNull() {
      this.$router.push({ path: '/NullPage' })
    },
    goSetUp() {
      // console.log("5555")
      this.$router.push({ path: '/setUp' })
    },
    selectPersonalpage() {
      this.$router.push({ path: '/personInfo' })
    },
    selectLogin() {

      // this.$refs.login.show()
    }
  },
}

</script>
<style lang="less" scoped>
.lineStyle {
  width: 100%;
  height: 1px;
  background-color: rgb(204, 204, 204)
}

.my_items {
  .myTitle {
    display: flex;
    align-items: center;
  }
  .titletext {
    margin-left: 10px;
  }
  .mineModule {
    margin-top: 10px; // text-align: center;
  }
}

.icon {
  /* 通过设置 font-size 来改变图标大小 */
  width: 1.8em;
  height: 1.8em;
  /* 图标和文字相邻时，垂直对齐 */
  vertical-align: -0.15em;
  /* 通过设置 color 来改变 SVG 的颜色/fill */
  fill: currentColor;
  /* path 和 stroke 溢出 viewBox 部分在 IE 下会显示
             normalize.css 中也包含这行 */
  overflow: hidden;
}

#my {
  -webkit-overflow-scrolling: touch;
}

.my_header {
  display: flex;
  width: 100%;
}

.my_header .user_img {
  width: 50px;
  height: 50px;
  margin-left: 20px;
}

.user_img img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.my_header .des {
  // display: flex;
  // flex: 1;
  padding-left: 20px;
  line-height: 50px;
  width: 100%;
  /*background: url('./right2.png') 92% center no-repeat;*/
}

.my_header .des .user_name {
  font-size: 18px;
  line-height: 50px;
  font-weight: 500;
  color: #000;
  float: left;
}

.my_header .des .user_work {
  font-size: 14px;
  font-weight: 400;
  margin-top: 5px;
}

.mine {
  .rightFlag {
    // padding-left: 200px;
    margin-right: 20px;
    float: right;
  }
  display: flex;
  width: 100%;
  align-items: center;
  height: 100px;
  background: #fff;
  justify-content: space-between;
}

</style>
