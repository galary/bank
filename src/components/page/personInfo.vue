<template>
  <div class="newsDatil" ref="newsDatil">
    <mt-header fixed class="mtHeader">
      <mt-button icon="back" @click="backBtn" slot="left">返回</mt-button>
      <mt-button slot="right" @click='saveInfo'>保存</mt-button>
    </mt-header>
    <div style="margin-top: 40px;margin-bottom: 20px;">
      <div class="user_img" @click="changeImg()"><img :src="imgUrl" class="imgUrl">
        <div class="tishi">更换头像</div>
      </div>
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="真实姓名" placeholder="请输真实姓名" v-model="Name"></mt-field>
      <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
      <mt-field label="手机号" placeholder="" type="tel" v-model="phone" v-if="false"></mt-field>
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
    saveInfo() {
      var Value = {
        UserName: this.username,
        Email: this.email,
        PassWord: this.password,
        // PhoneNumber: this.phone,
        Name: this.Name,
        Guid: "80b6de42-848e-e811-80f5-c8a6e5da3d9b",
      }
      this.$http.post(`${this.baseUrl}/api/MobileAccount/UpdateAccount`, this.$qs.stringify(Value))
        .then((res) => {
          if (res.data.message == "修改成功") {
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
    },
  },
  created() {
    let url = this.util.changeStory('url');
    let Name = this.util.changeStory('Name');
    let Guid = this.util.changeStory('Guid');
    let Email = this.util.changeStory('Email');
    let username = this.util.changeStory('UserName');
    this.imgUrl = url == '' ? this.imgUrl : url;
    this.Name = Name == null ? this.Name : Name;
    this.Guid = Guid == null ? this.Guid : Guid;
    this.Email = Email == null ? this.Name : Email;
    this.username = username == null ? this.username : username;
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
