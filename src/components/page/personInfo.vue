<template>
  <div class="newsDatil" ref="newsDatil">
    <mt-header fixed class="mtHeader">
      <mt-button icon="back" @click="backBtn" slot="left">返回</mt-button>
      <mt-button slot="right" @click='saveInfo'>保存</mt-button>
    </mt-header>
    <div style="margin-top: 40px;margin-bottom: 20px;">
      <div class="user_img" @click="changeImg()"><img :src="`${this.baseUrl}${this.imgUrl}`" class="imgUrl">
        <div class="tishi">更换头像</div>
      </div>
      <mt-field label="用户名" :state='userRule' ref="username" placeholder="请输入用户名" @blur.native.capture="usernameBlur" v-model="username"></mt-field>
      <mt-field label="真实姓名" ref="Name" :state='nameRule' @blur.native.capture="nameBlur" placeholder="请输真实姓名" v-model="Name"></mt-field>
      <mt-field label="邮箱" ref="email" state='userRule' @blur.native.capture="emailBlur" placeholder="请输入邮箱" :state='emailRule' type="email" v-model="email"></mt-field>
      <mt-field label="身份证" ref="Referee" @blur.native.capture="RefereeBlur" placeholder="请输入真实身份证" type="tel" :state='refereeRule' v-model="RefereeId"></mt-field>
      <!-- <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field> -->
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
import Mavatar from 'mavatar'
export default {
  data() {
    return {
      refereeRule: '',
      emailRule: '',
      nameRule: '',
      userRule: '',
      RefereeId: '',
      username: '',
      email: '',
      password: '',
      phone: '',
      Name: '',
      avatar: '',
      Guid: '',
      imgUrl: './static/image/mImg.jpg',
    }
  },
  methods: { //http://132.232.14.12/api/Values/GetBankList
    backBtn() {
      this.$router.push({ path: '/mine' })
    },
    changeImg() {
      this.$router.push({ path: '/uploadImg' })
    },
    RefereeBlur() {
      var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      if (!this.RefereeId && this.RefereeId == '') {
        this.refereeRule = "error"
      } else {
        if (reg.test(this.RefereeId) === false) {
          this.refereeRule = "error"
        } else {
          this.refereeRule = ""
        }
      }
    },
    nameBlur() {
      if (!this.Name && this.Name == '') {
        this.nameRule = "error"
      } else {
        this.nameRule = ""
      }
    },
    emailBlur() {
      let emailStr = "[\\w!#$%&' * +/=?^_`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?";
      if (!this.email && this.email == '') {
        this.emailRule = "error"
      } else {
        console.log(this.email.match(emailStr))
        if (!this.email.match(emailStr)) {
          this.emailRule = "error";
        } else {
          this.emailRule = '';
        }
      }
    },
    usernameBlur(val) {
      if (!this.username && this.username == '') {
        this.userRule = "error"
      } else {
        this.userRule = ""
      }
    },
    Verification() {
      if (this.username && this.Name && this.email && this.RefereeId) {
        if (!this.email
          .text(emailStr)) {

        } else if (!this.RefereeId.text(RefereeId15) && !this.RefereeId18.text(RefereeId18)) {

        }
      }
    },
    saveInfo() {
      var Value = {
        UserName: this.username,
        Email: this.email,
        PassWord: this.password,
        RefereeId: this.RefereeId,
        Name: this.Name,
        Guid: this.Guid,
      }
      if (this.refereeRule == '' && this.emailRule == '' && this.nameRule == '' && this.userRule == '') {
        this.$http.post(`${this.baseUrl}/api/MobileAccount/UpdateAccount`, this.$qs.stringify(Value))
          .then((res) => {
            if (res.data.Success == true) {
              let hostory = window.localStorage;
              hostory.setItem("Email", Value.Email)
              hostory.setItem("UserName", Value.UserName)
              hostory.setItem("Name", Value.Name)
              hostory.setItem("RefereeId", Value.RefereeId)
              Toast({
                message: '修改成功',
                position: 'middle',
                duration: 2000
              });
              this.$router.push({ path: '/mine' })
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
        if (this.emailRule == 'error') {
          Toast({
            message: "请输入正确的邮箱",
            position: 'middle',
            duration: 2000
          });
        }
        if (this.refereeRule == 'error') {
          Toast({
            message: "请输入正确的身份证",
            position: 'middle',
            duration: 2000
          });
        }
      }

    },
  },
  created() {
    let url = this.util.changeStory('url');
    let Name = this.util.changeStory('Name');
    let Guid = this.util.changeStory('Guid');
    let Email = this.util.changeStory('Email');
    let username = this.util.changeStory('UserName');
    let RefereeId = this.util.changeStory('RefereeId');
    this.imgUrl = url == '' ? this.imgUrl : url;
    this.Name = Name == null ? this.Name : Name;
    this.Guid = Guid == null ? this.Guid : Guid;
    this.email = Email == null ? this.Email : Email;
    this.username = username == null ? this.username : username;
    this.RefereeId = RefereeId == null ? this.RefereeId : RefereeId;
    console.log()
  },
  mounted() {
    // this.avatar = new Mavatar({ el: '#avatar', backgroundColor: '#fff' });
  }
}

</script>
<style lang="less" scoped>
.newsDatil {
  width: 100%;
  padding: 20px 0px;
  margin-top: 10px;
  background-color: #fff;
}

.imgUrl {
  margin-left: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.tishi {
  line-height: 50px;
  margin-left: 43px;
  color: #999;
}

.user_img {
  display: flex;
  width: 100%;
  height: 50px;
  border-top: 1px solid #f1f1f1;
  border-bottom: 1px solid #f1f1f1;
  background-color: #f1f1f1;
  padding: 5px 0;
}

</style>
