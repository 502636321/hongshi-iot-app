<template>
    <div class="index">
        <van-sticky>
            <van-nav-bar title="预警" />
            <van-search v-model="searchValue" placeholder="请输入设备ID" @search="onSearch" />
            <div class="tab-list">
                <van-tabs v-model="activeAlarmMessageTab" swipeable title-inactive-color="#999999" title-active-color="#333" color="#39a9ed" line-width="30px" line-height="2px">
                    <van-tab title="全部" name="ALL"></van-tab>
                    <van-tab title="未处理" name="NEWER"></van-tab>
                    <van-tab title="已处理" name="READ"></van-tab>
                </van-tabs>
            </div>
        </van-sticky>
        <div class="con-box">
            <AlarmStateSubTab v-if="activeAlarmMessageTab == 'ALL'" ref="ALL" status="" />
            <AlarmStateSubTab v-if="activeAlarmMessageTab == 'NEWER'" ref="UNREAD" status="UNREAD" />
            <AlarmStateSubTab v-if="activeAlarmMessageTab == 'READ'" ref="READ" status="READ" />
        </div>

    </div>
</template>

<script>
    import AlarmStateSubTab from "@/views/alarm/AlarmStateSubTab";

    export default {
        name: "AlarmTab",
        components: {
            AlarmStateSubTab
        },
        data() {
            return {
                searchValue: '',
                activeAlarmMessageTab: 'ALL'
            }
        },
        methods: {
            onSearch(text) {
                console.log(this.$refs);
                switch (this.activeAlarmMessageTab) {
                    case "ALL":
                        this.$refs.ALL.onSearch(text);
                        break;
                    case "UNREAD":
                        this.$refs.UNREAD.onSearch(text);
                        break;
                    case "READ":
                        this.$refs.READ.onSearch(text);
                        break;
                }
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
