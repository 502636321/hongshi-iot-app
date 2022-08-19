<template>
  <div class="index">
    <van-nav-bar title="个人信息" left-arrow @click-left="$router.back()" />
    <div>
      <div class="con">
        <div class="header">
          <van-image round width="4rem" height="4rem" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
          <div class="right">
            <h4>张三</h4>
            <p>手机：<span>xxx xxxx xxx</span></p>
          </div>
          <div class="label">编辑</div>
        </div>
        <div class="form-group">
          <van-form @submit="onSubmitForm">
            <van-field v-model="name" input-align="right" name="name" label="名称：" placeholder="请输入名称" />
            <van-field v-model="mobile" input-align="right" name="mobile" label="手机号：" placeholder="请输入手机号" />
            <van-field name="radio" input-align="right" label="性别：">
              <template #input>
                <van-radio-group v-model="gender" direction="horizontal">
                  <van-radio name="1">男</van-radio>
                  <van-radio name="2">女</van-radio>
                </van-radio-group>
              </template>
            </van-field>
          </van-form>
        </div>
      </div>
      <div class="footer">
        <van-button type="info" round block>保存修改</van-button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "InfoEditorPanel",
        data() {
            return {
                name: '',
                mobile: '',
                gender: ''
            }
        },
        methods: {
            onSubmitForm() {

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
    /deep/.van-form {
      border-radius: 16px;
    }
    .header {
      display: flex;
      padding: 20px;
      align-items: center;
      border-radius: 16px;
      margin-bottom: 20px;
      background: #fff;
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
</style>