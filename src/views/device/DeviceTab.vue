<template>
    <div class="index">
        <van-sticky>
            <van-nav-bar title="预警" />
            <van-search v-model="searchValue" placeholder="请输入设备名称" @search="onSearch" />
            <div>
                <van-dropdown-menu>
                    <van-dropdown-item v-model="value1" :options="option1" />
                </van-dropdown-menu>
            </div>
        </van-sticky>
        <div class="con-box">
            <device-list v-if="activeAlarmMessageTab == 'ALL'"></device-list>
            <device-list v-if="activeAlarmMessageTab == 'ONLINE'"></device-list>
            <device-list v-if="activeAlarmMessageTab == 'OFFLINE'"></device-list>
        </div>
    </div>
</template>

<script>

    import DeviceList from "@/views/device/DeviceList";

    export default {
        name: "DeviceTab",
        components: {
            DeviceList
        },
        data() {
            return {
                searchValue: '',
                activeAlarmMessageTab: 'ALL',
                value1: '',
                option1: [
                    { text: '选择产品', value: ''},
                    { text: '北斗远程位移测量系统JMBD-1050', value: '1' },
                    { text: '压差式精密水位计JMYC-67XXAD', value: '2' },
                ],
            }
        },
        methods: {
            onSearch() {
                console.log(this.$refs);

            }
        },
        created() {
            // findDevicePage({
            //     pageIndex: 1,
            //     pageSize: 10
            // }).then((resp) => {
            //     console.log(resp);
            // });
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
    .index {
        padding-bottom: 100px;
        background: #f9f9f9;
        min-height: 100vh;
        box-sizing: border-box;
        .tab-list {
            /deep/.van-tabs__line {
                bottom: 45px;
            }
        }
        .con-box {
            padding: 24px;
        }
    }
</style>
