<template>
  <div>
    <van-nav-bar title="用户协议" left-arrow @click-left="$router.back()" />
    <div class="con">
      <div>
        协议名称
      </div>

      <div>
        协议内容
      </div>

      <div>
        <div>
          公司名称
        </div>
        <div>
          生效日期 0000年00月00日
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AgreementPanel",
        data() {
            return {

            }
        },

        created() {
            console.log(this.$route.query.agreementId)
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
.con {
  padding: 30px;
  font-size: 26px;
  line-height: 36px;
}
</style>