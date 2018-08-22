<template>
  <div class="newsDatil111" ref="newsDatil">
    <mt-header fixed class="mtHeader">
      <mt-button icon="back" @click="backBtn" slot="left">返回</mt-button>
      <!-- <mt-button slot="right" @click='saveInfo'>修改</mt-button> -->
    </mt-header>
    <mt-popup v-model="popupVisible" popup-transition="popup-fade" class="mydialog">
      <div class="dialogIvew" v-if="flag">
        <mt-field label="原密码" :state='oldRule' @blur.native.capture="oldpwBlur" placeholder="请输入原密码" type="password" v-model="oldPassword"></mt-field>
        <mt-field label="新密码" :state='new1Rule' @blur.native.capture="new1pwBlur" placeholder="请输入新密码" type="password" v-model="newPassword"></mt-field>
        <mt-field label="再次输入" :state='new2Rule' @blur.native.capture="new2pwBlur" placeholder="请确认新密码" type="password" v-model="newPassword1"></mt-field>
        <mt-button type="primary" size="large" class="submitBtn" @click="submitPassword">提交修改</mt-button>
      </div>
      <div class="dialogIvew" v-if="!flag">
        <mt-field label="初始密码" :state='firstRule' @blur.native.capture="firstpwBlur" placeholder="请输入初始密码" type="password" v-model="setPassword"></mt-field>
        <mt-field label="再次输入" :state='secRule' @blur.native.capture="secpwBlur" placeholder="请确认新密码" type="password" v-model="setPassword1"></mt-field>
        <mt-button type="primary" size="large" class="submitBtn" @click="setPassword22">提交密码</mt-button>
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
      oldRule: '',
      new2Rule: '',
      new1Rule: '',
      firstRule: "",
      secRule: '',
      Userid: '',
      UserName: '',
      url: '',
      Guid: '',
      flag: true,
      popupVisible: false,
      oldPassword: '',
      newPassword1: '',
      newPassword: '',
      setPassword: '',
      setPassword1: '',
    }
  },
  methods: {
    oldpwBlur() {
      if (this.oldPassword == '') {
        this.oldRule = 'error'
      } else {
        if (this.oldPassword.length < 6) {
          this.oldRule = 'error'
          Toast({
            message: '密码必须大于6个字符',
            position: 'middle',
            duration: 2000
          });
        } else {
          this.oldRule = ''
        }
      }
    },
    new1pwBlur() {

      if (this.newPassword == '') {
        this.new1Rule = 'error'
      } else {
        if (this.newPassword.length < 6) {
          this.new1Rule = 'error'
          Toast({
            message: '密码必须大于6个字符',
            position: 'middle',
            duration: 2000
          });
        } else {
          this.new1Rule = ''
        }
      }
    },
    new2pwBlur() {

      if (this.newPassword1 == '') {
        this.new2Rule = 'error'
      } else {
        if (this.newPassword1.length < 6) {
          this.new2Rule = 'error'
          Toast({
            message: '密码必须大于6个字符',
            position: 'middle',
            duration: 2000
          });
        } else {
          this.new2Rule = ''
        }
      }
    },
    firstpwBlur() {
      if (this.setPassword == '') {
        this.firstRule = 'error'
      } else {
        if (this.setPassword.length < 6) {
          this.firstRule = 'error'
          Toast({
            message: '密码必须大于6个字符',
            position: 'middle',
            duration: 2000
          });
        } else {
          this.firstRule = ''
        }
      }
    },
    secpwBlur() {
      if (this.setPassword1 == '') {
        this.secRule = 'error'
      } else {
        if (this.setPassword1.length < 6) {
          this.secRule = 'error'
          Toast({
            message: '密码必须大于6个字符',
            position: 'middle',
            duration: 2000
          });
        } else {
          this.secRule = ''
        }
      }
    },
    loginOut() {
      window.localStorage.clear();
      this.$router.push({ path: '/login' })
    },
    showDialog() {
      this.oldRule = '';
      this.new2Rule = '';
      this.new1Rule = '';
      this.firstRule = ""
      this.secRule = '';
      this.oldPassword = '';
      this.newPassword1 = '';
      this.newPassword = '';
      this.setPassword = '';
      this.setPassword1 = '';
      this.$http.post(`${this.baseUrl}/api/MobileAccount/IfHasPassword?guid=${this.Userid}`)
        .then((res) => {
          if (res.data.Success == true) {
            this.flag = false
          } else {}
          console.log(res.data);
        })
        .catch(function(error) {
          console.log(error);
        });
      this.popupVisible = true;
    },
    backBtn() {
      this.$router.back(-1)
    },
    setPassword22() {
      if (this.firstRule == '' && this.secRule == '') {
        if (this.setPassword1 == this.setPassword) {
          let Value = {
            PassWord: this.setPassword,
            Guid: this.Userid,
          }
          this.$http.post(`${this.baseUrl}/api/MobileAccount/UpdateAccount`, this.$qs.stringify(Value))
            .then((res) => {
              if (res.data.Success == true) {
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
        } else {
          Toast({
            message: '两次输入的密码不同',
            position: 'middle',
            duration: 2000
          });
          this.setPassword1 = '';
        }
      } else {
        Toast({
          message: '请填写正确的密码格式',
          position: 'middle',
          duration: 2000
        });
      }

    },
    submitPassword() {
      if (this.oldRule == '' && this.new1Rule == '' && this.new2Rule == '') {
        console.log(this.oldRule, this.newPassWord, this.newPassword1)
        if (this.newPassword == this.newPassword1) {
          let Value = {
            OldPassWord: this.oldPassword,
            NewPassWord: this.newPassword,
            Guid: this.Userid,
          }
          this.$http.post(`${this.baseUrl}/api/MobileAccount/UpdatePassWord`, this.$qs.stringify(Value))
            .then((res) => {
              if (res.data.Success == true) {
                this.popupVisible = false;
                this.$router.push({ path: '/setUp' })
              } else {
                Toast({
                  message: '修改失败',
                  position: 'middle',
                  duration: 2000,
                  className: 'myToast'
                });
              }
              console.log(res.data);
            })
            .catch(function(error) {
              console.log(error);
            });
        } else {
          Toast({
            message: '两次输入的密码不同',
            position: 'middle',
            duration: 2000,
            className: 'myToast'
          });
          this.newPassword1 = '';
          this.newPassword = '';
        }
      } else {
        Toast({
          message: '请填写正确的密码格式',
          position: 'middle',
          duration: 2000,
          className: 'myToast'
        });
      }


    },
    reset() {

    }

  },
  created() {
    let val = this.util.changeStory('Guid');
    this.UserName = this.util.changeStory('UserName');
    this.Userid = val
  },
  mounted() {

  }
}

</script>
<style lang="less">
.mint-toast {
  z-index: 1000000!important;
}
.newsDatil111 {
  .mint-popup {
    width: 85%;
    padding: 15px;
  }
  .mint-cell {
    min-height: 61px
  }

  width: 100%;
  padding: 20px 0px;
  margin-top: 10px;
  background-color: #fff;
  .mydialog {
    width: 85%;
  }
  .mint-toast.is-placemiddle.myToast {
    z-index: 10000!important;
  }
  .dialogIvew {
    // padding: 20px;
  }
  .submitBtn {
    margin-top: 20px;
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
