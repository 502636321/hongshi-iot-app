<template>
    <div class="index">
        <van-nav-bar :title="deviceName" left-text="返回" left-arrow @click-left="$router.back()" />
        <div class="tab-list">
            <beidou-item-chart-tab :device-id="deviceId"></beidou-item-chart-tab>
        </div>
    </div>
</template>

<script>
    import BeidouItemChartTab from "./BeidouItemChartTab";

    export default {
        name: "BeidouItemDetail",
        components: {
            BeidouItemChartTab
        },
        data() {
            return {
                deviceId: '',
                deviceName: '未知设备',
                beidouItemDetailActiveTab: 0
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