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
          </div>
          <div class='yazhengView' v-if='!showYz'>
            <mt-field placeholder="请输入手机号" autoconplete='off' type="tel" v-model="phone" class="inputStyle"></mt-field>
            <div>
              <mt-field class="inputStyle" autoconplete='off' placeholder="请输入密码" type="text" v-model="password"></mt-field>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Verification: '',
      phone: '',
      password: '',
      showYz: true,
    }
  },
  methods: {
    showtag() {
      this.showYz = !this.showYz;
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
      background: #112380;
      line-height: 50px;
      text-align: center;
      cursor: pointer;
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
