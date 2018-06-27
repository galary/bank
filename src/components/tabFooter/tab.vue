<template>
  <div class="tab">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home">
        <i class="tabicon icon iconfont icon-wxbzhuye" slot="icon"></i> 首页
      </mt-tab-item>
      <mt-tab-item id="find">
        <i class="tabicon icon iconfont icon-compass" slot="icon"></i> 发现
      </mt-tab-item>
      <mt-tab-item id="mine">
        <i class="tabicon icon iconfont icon-account" slot="icon"></i> 我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: ''
    }
  },
  watch: {
    // this.$.router.push({name: ''})
    // 固定的书写 ""双引号里面是要监听的数据 handler是处理数据改变的函数 deep是否深度监听
    "selected": {
      handler(val, oldval) { //多看文档 handler
        if (this.selected == "home") {
          this.$router.push('/')
        } else if (this.selected == "find") {
          this.$router.push('/find')
        } else if (this.selected == 'mine') {
          this.$router.push('/mine')
        }
      }
      // deep:true//对象内部的属性监听，也叫深度监听
    }
  },
  created() {
    this.selected = this.$route.name;
    console.log(this.selected)
  }
}

</script>
<style lang="less" scoped>
.tab {
  margin-top: 10px;
  .mint-tabbar {
    border-top: 1px solid #f1f1f1;
    background: #fff;
    height: 3.1rem;
    padding-top: -0.4rem;
    .mint-tab-item.is-selected {
      color: #FE4070;
      background: #fff;
      text-decoration: none;
    }
  }
  .tabicon {
    font-size: 25px;
  }
}

</style>
