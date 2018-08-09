<template>
  <div class="newsDatil" ref="newsDatil">
    <mt-header fixed class="mtHeader">
      <mt-button icon="back" @click="backBtn" slot="left">返回</mt-button>
      <mt-button slot="right" @click='saveInfo'>修改</mt-button>
    </mt-header>
    <div class="">
      <div class="avatarbox">
        <div id="avatar"></div>
        <div class="tishi">请选择图片(裁剪)提交</div>
      </div>
    </div>
    <div v-if="popupVisible" class="mydialog">
      <mt-spinner type="fading-circle" color="#26a2ff" :size='70' style="width: 100px;height: 100px;margin: 200px auto;display: block;z-index: 3001;"></mt-spinner>
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
      popupVisible: false
    }
  },
  methods: {
    backBtn() {
      this.$router.back(-1)
    },
    saveInfo() {
      let vm = this;
      this.avatar.imageClipper(function(data) {
        // const dataUrl = vm.avatar.getDataUrl()
        let Value = {
          Userid: vm.Userid,
          url: data
        }
        vm.popupVisible = true;
        // alert('裁剪成功，生成的图片已覆盖在上传框内');
        vm.$http.post(`${vm.baseUrl}/api/MobileAccount/UpdatePhoto`, vm.$qs.stringify(Value))
          .then(function(res) {
            if (res.data.Success == true) {
              vm.util.changeItem('url', data)
              vm.popupVisible = false
              vm.$router.push({ path: '/personInfo' })

              // let hostory = window.localStorage;
              // let imgUrl = vm.util.changeStory();

            }
          })
          .catch(function(error) {
            console.log(error);
          });
        console.log(vm.avatar.getDataUrl());
      })
    },
    reset() {
      this.avatar.resetImage();
    }

  },
  created() {
    let val = this.util.changeStory('Guid');
    this.Userid = val
  },
  mounted() {
    this.avatar = new Mavatar({ el: '#avatar', backgroundColor: '#fff' });
  }
}

</script>
<style lang="less" scoped>
.newsDatil {
  width: 100%;
  padding: 20px 0px;
  margin-top: 10px;
  height: 100%;
  background-color: #fff;
}

.mydialog {
  background: #666;
  z-index: 3000;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}

.avatarbox {
  text-align: center;
}

#avatar {
  margin: 75px auto;
}

.tishi {
  font-size: 1.2em;
  color: #ccc;
  margin: 75px auto;
}

</style>
