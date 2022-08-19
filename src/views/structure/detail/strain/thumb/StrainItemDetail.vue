<template>
  <div class="index">
    <van-nav-bar :title="deviceName" left-text="返回" left-arrow @click-left="$router.back()" />
    <div class="tab-list">
      <strain-item-chart-tab :device-id="deviceId"></strain-item-chart-tab>
    </div>
  </div>
</template>

<script>
    import StrainItemChartTab from "./StrainItemChartTab";
    // import DeviceItemDataTab from "../../common/DeviceItemDataTab";
    // import DeviceItemMessageTab from "../../common/DeviceItemMessageTab";

    export default {
        name: "StrainItemDetail",
        components: {
            StrainItemChartTab
            // DeviceItemDataTab,
            // DeviceItemMessageTab
        },
        data() {
            return {
              deviceId: '',
              deviceName: '未知设备',
              strainItemDetailActiveTab: 0
            }
        },
        created() {
          this.deviceId = this.$route.query.deviceId;
          this.deviceName = this.$route.query.deviceName;
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
.index {
  background: #f9f9f9;
  min-height: 100vh;
  box-sizing: border-box;
}
.tab-list {
  /deep/.van-tabs__line {
    bottom: 45px;
  }
}
</style>