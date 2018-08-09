<template>
  <div class="newsDatil" ref="newsDatil">
    <mt-header fixed class="mtHeader">
      <mt-button icon="back" @click="backBtn" slot="left">返回</mt-button>
      <!-- <mt-button slot="right" @click='saveInfo'>修改</mt-button> -->
    </mt-header>
    <mt-popup v-model="popupVisible" popup-transition="popup-fade" class="mydialog">
      <div class="dialogIvew">
        <mt-field label="原密码" placeholder="请输入原密码" type="password" v-model="oldPassword"></mt-field>
        <mt-field label="新密码" placeholder="请输入新密码" type="password" v-model="newPassword"></mt-field>
        <mt-button type="primary" size="large" class="submitBtn" @click="submitPassword">提交修改</mt-button>
      </div>
    </mt-popup>
    <div class="setUp">
      <div class="mineModule">
        <div @click="showDialog">
          <mt-cell is-link>
            <div slot='title' class="myTitle" style="">
              <div class="titletext">修改密码</div>
            </div>
          </mt-cell>
        </div>
        <div class="lineStyle"></div>
        <div @click="loginOut()">
          <mt-cell is-link>
            <div slot='title' class="myTitle" style="">
              <div class="titletext">退出</div>
            </div>
          </mt-cell>
        </div>
        <div class="lineStyle"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
import Mavatar from 'mavatar'
export default {
  data() {
    return {
      Userid: '',
      url: '',
      Guid: '',
      popupVisible: false,
      oldPassword: '',
      newPassword: '',
    }
  },
  methods: {
    loginOut() {
      window.localStorage.clear();
      this.$router.push({ path: '/login' })

    },
    showDialog() {
      this.popupVisible = true;
    },
    backBtn() {
      this.$router.back(-1)
    },
    submitPassword() {
      let Value = {
        OldPassWord: this.oldPassword,
        NewPassWord: this.newPassword,
        Guid: this.Userid,
      }
      this.$http.post(`${this.baseUrl}/api/MobileAccount/UpdatePassWord`, this.$qs.stringify(Value))
        .then((res) => {
          if (res.data.message == "修改成功") {
            this.popupVisible = false;
            this.$router.push({ path: '/setUp' })
          } else {
            Toast({
              message: '修改失败',
              position: 'middle',
              duration: 2000
            });
          }
          console.log(res.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    reset() {

    }

  },
  created() {
    let val = this.util.changeStory('Guid');
    this.Userid = val
  },
  mounted() {

  }
}

</script>
<style lang="less" scoped>
.newsDatil {
  width: 100%;
  padding: 20px 0px;
  margin-top: 10px;
  background-color: #fff;
  .mydialog {
    width: 90%;
    height: 200px;
  }
  .dialogIvew {
    padding: 20px;
  }
  .submitBtn {
    margin-top: 30px;
  }
  .lineStyle {
    width: 100%;
    height: 1px;
    margin-top: 2px;
    background-color: rgb(204, 204, 204)
  }

  .my_items {}
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
}

</style>
