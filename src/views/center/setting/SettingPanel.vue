<template>
  <div class="index">
    <van-nav-bar title="设置" left-arrow @click-left="$router.back()" />
    <div class="con">
      <router-link to="/center/setting/info_editor" class="header">
        <van-image round width="4rem" height="4rem" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
        <div class="right">
          <h4>张三</h4>
          <p>手机：<span>xxx xxxx xxx</span></p>
        </div>
        <div class="label">编辑</div>
      </router-link>

      <div class="list">
        <van-cell title="关于我们" is-link to="/center/setting/about" />
        <van-cell title="用户协议" is-link :to="{ path: '/agreement', query: {agreementId: '3434343'}}" />
        <van-cell title="隐私协议" is-link :to="{ path: '/agreement', query: {agreementId: '323424324434343'}}" />
      </div>
    </div>
    <div class="footer">
      <van-button type="info" round block @click="onClickLogout">退出登录</van-button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SettingPanel",

        methods: {
          onClickLogout() {
            //系统登出处理

            this.$router.push({
              path: '/login'
            });
          }
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
.index {
  padding-bottom: 100px;
  background: #f9f9f9;
  min-height: 100vh;
  box-sizing: border-box;
  .con {
    padding: 20px;
  }
  .list {
    margin-top: 20px;
    border-radius: 16px;
  }
  .header {
    background: #fff;
    display: flex;
    padding: 20px;
    align-items: center;
    border-radius: 16px;
    position: relative;
    .label {
      position: absolute;
      right: 0;
      top: 0;
      height: 45px;
      line-height: 45px;
      border-top-left-radius: 25px;
      border-top-right-radius: 16px;
      border-bottom-left-radius: 25px;
      padding: 0 30px;
      font-size: 22px;
      color: #fff;
      background: #c8e1ee;
    }
    .right {
      padding-left: 20px;
      h4 {
        font-size: 32px;
        margin-bottom: 26px;
      }
      p {
        font-size: 24px;
        color: #777;
        span {
          color: #999;
        }
      }
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
  }
}
</style>