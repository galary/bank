<template>
  <div class="mybgimg">
    <div></div>
    <div class="loginView" ref="loginView" :style="{backgroundImage:'url('+require('../../../static/image/bgimg.png')+')'}">
      <div class="logimg"><img src="../../../static/image/shenhui.png" alt=""></div>
      <div class="form">
        <div class="tabNav">
          <div :class="['yanzhengma',showYz?'redBorder':'']" @click='showtag'>验证码登录</div>
          <div :class="['Verification',showYz?'':'redBorder']" @click='showtag1'>密码登录</div>
        </div>
        <div id="container">
          <div class='yazhengView' v-if='showYz'>
            <mt-field placeholder="请输入手机号" autoconplete='off' type="tel" v-model="phone" class="inputStyle"></mt-field>
            <div style="display: flex;">
              <mt-field class="inputStyle yzNum" autoconplete='off' placeholder="请输入验证码" type="text" v-model="Verification"></mt-field>
              <div class="submitzy" @click='sendMessage' v-if='showFlag'>发送验证码</div>
              <div class="submitzy" v-if='!showFlag'>{{timeShow}}S</div>
            </div>
            <mt-button class='submitBtn' type="primary" size="large" @click='yzSubmit'>登录</mt-button>
          </div>
          <div class='yazhengView' v-if='!showYz'>
            <label style="display:none;"><span></span>
              <input type="text" name="hidden1">
            </label>
            <label style="display:none;"><span></span>
              <input type="password" name="hidden2">
            </label>
            <mt-field placeholder="请输入用户名或手机号" autoconplete='off' type="tel" v-model="UserName" class="inputStyle"></mt-field>
            <div>
              <mt-field class="inputStyle" autoconplete='off' placeholder="请输入密码" type="password" v-model="PassWord"></mt-field>
            </div>
            <mt-button class='submitBtn' type="primary" size="large" @click='psSubmit'>登录</mt-button>
          </div>
        </div>
      </div>
    </div>
    <mt-popup v-model="popupVisible" position="left" :modal=false>
      {{msgText}}
    </mt-popup>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      type1: "text",
      msgText: '',
      popupVisible: false,
      Verification: '',
      phone: '',
      PassWord: '',
      showFlag: true,
      showYz: true,
      showYz1: false,
      timeShow: 60,
      timer: null,
      UserName: '',
    }
  },
  methods: {
    changType() {
      console.log(this.type1)
      this.type1 = 'password'
    },
    //发送验证吗
    sendMessage() { //http://132.232.14.12/api/Values/GetBankList
      this.$http.post(`${this.baseUrl}/api/MobileAccount/SendMessage?Num=${this.phone}`)
        .then((res) => {
          if (res.data.Data == false) {
            Toast({
              message: '发送失败',
              position: 'middle',
              duration: 2000
            });
          } else {
            const TIME_COUNT = 60; 
            this.showFlag = false;
            this.timer = setInterval(() => {       
              if (this.timeShow > 0 && this.timeShow <= TIME_COUNT) { this.timeShow--; } else {
                this.showFlag = true;         
                clearInterval(this.timer);         
                this.timer = null;        
              }       
            }, 1000) 
          }
          console.log(res.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    showtag1() {
      this.phone = ''
      this.PassWord = ''
      this.Verification = ''
      this.UserName = ''
      this.showYz = false;
      this.showYz1 = true;
    },
    showtag() {
      this.phone = '';
      this.PassWord = '';
      this.Verification = '';
      this.UserName = '';
      this.showYz = true;
      this.showYz1 = false;
    },
    yzSubmit() { //?PhoneNum=${this.phone}&Code=${this.Verification}
      let vm = this;
      this.$http.post(`${this.baseUrl}/api/MobileAccount/LoginWithVerification?PhoneNum=${this.phone}&Code=${this.Verification}`)
        .then((res) => {
          if (res.data.Success == true) {
            this.util.saveInfo(res)
            this.$router.push({ path: '/' })
          } else {
            Toast({
              message: res.data.message,
              position: 'middle',
              duration: 2000
            });
            this.$router.push({ path: '/login' })
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    psSubmit() {
      let Value = {
        UserName: this.UserName,
        PassWord: this.PassWord
      }
      this.$http.post(`${this.baseUrl}/api/MobileAccount/AccountLogin?UserName=${this.UserName}&PassWord=${this.PassWord}`)
        .then((res) => {
          if (res.data.Success == true) {
            this.util.saveInfo(res)
            this.$router.push({ path: '/' })
          } else {
            Toast({
              message: res.data.message,
              position: 'middle',
              duration: 2000
            });
            this.$router.push({ path: '/login' })
          }
        })
        .catch(function(error) {
          console.log(error);
        });
      // if (this.phone == 123 && this.Verification == 123) {
      //   this.$router.push('/')
      // } else {
      //   Toast({
      //     message: '登录失败',
      //     position: 'middle',
      //     duration: 3000
      //   });
      // }
    }
  },
  mounted() {
    this.PassWord = ''
    this.UserName = ''
    // this.$refs.loginView.style.background = `url('../../../static/image/bgimg.png') no-repeat left center`
    clearInterval(this.timer);
  }
};

</script>
<style lang="less">
.mybgimg {
  #container {
    margin-top: 10px;
    .yzNum {
      width: 220px;
    }
    .submitzy {
      width: 105px;
      background: #26a2ff;
      line-height: 50px;
      text-align: center;
      cursor: pointer;
    }
    .submitBtn {
      margin-top: 10px;
    }
  }
  .inputStyle {
    color: #000;
  }
  color: #fff;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  background-color: #ffffff;
  .loginView {
    // background: url('../../../dist/static/image/bgimg.png') no-repeat left center;
    width: 100%;
    height: 100%; // background: 
    background-size: 100% 100%;
    .logimg {
      margin: 0 auto;
      width: 250px;
      height: 80px;
      text-align: center;
      padding-top: 90px;
      img {
        width: 220px;
        height: 70px;
      }
    }
    .form {
      width: 90%;
      height: 40px;
      margin: 0 auto;
      .tabNav {
        display: flex;
        justify-content: space-around;
      }


      .yanzhengma {
        flex: 1;
        text-align: center;
        padding: 5px 0 10px;

        border-bottom: 1px solid #FFF;
      }
      .Verification {
        flex: 1;
        text-align: center;
        border-bottom: 1px solid #FFF;
        padding: 5px 0 10px;
      }
      .redBorder {
        border-bottom: 1px solid #c41931;
      }
    }
  }
}

</style>
