<template>
  <div class="mybgimg">
    <div class="loginView">
      <div class="logimg"><img src="../../../static/image/welcome.png" alt=""></div>
      <div class="form">
        <div class="tabNav">
          <div :class="['yanzhengma',showYz?'redBorder':'']" @click='showtag'>验证码登录</div>
          <div :class="['Verification',showYz?'':'redBorder']" @click='showtag'>密码登录</div>
        </div>
        <div id="container">
          <div class='yazhengView' v-if='showYz'>
            <mt-field placeholder="请输入手机号" autoconplete='off' type="tel" v-model="phone" class="inputStyle"></mt-field>
            <div style="display: flex;">
              <mt-field class="inputStyle yzNum" autoconplete='off' placeholder="请输入验证码" type="text" v-model="Verification"></mt-field>
              <div class="submitzy">发送验证码</div>
            </div>
            <mt-button class='submitBtn' type="primary" size="large" @click='yzSubmit'>登录</mt-button>
          </div>
          <div class='yazhengView' v-if='!showYz'>
            <mt-field placeholder="请输入手机号" autoconplete='off' type="tel" v-model="phone" class="inputStyle"></mt-field>
            <div>
              <mt-field class="inputStyle" autoconplete='off' placeholder="请输入密码" type="text" v-model="password"></mt-field>
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
      msgText: '',
      popupVisible: false,
      Verification: '',
      phone: '',
      password: '',
      showYz: true,
    }
  },
  methods: {
    showtag() {
      this.showYz = !this.showYz;
    },
    yzSubmit() {
      this.$http.post('/api/CreditCard/GetCreditCardByBankId', {
          page: {
            "pageNo": 0,
            "pageSize": 10
          }
        })
        .then(function(res) {
          console.log(res);
        })
        .catch(function(error) {
          console.log(error);
        });
      if (this.phone == 123 && this.Verification == 123) {
        this.$router.push('/')
      } else {
        Toast({
          message: '登录失败',
          position: 'middle',
          duration: 3000
        });
      }
    },
    psSubmit() {
      if (this.phone == 123 && this.Verification == 123) {
        this.$router.push('/')
      } else {
        Toast({
          message: '登录失败',
          position: 'middle',
          duration: 3000
        });
      }
    }
  },
  mounted() {

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
    width: 100%;
    height: 100%;
    background: url(/static/image/bgimg.png) no-repeat left center;
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
