<template>
    <div class="index">
        <van-sticky>
            <van-nav-bar title="预警" />
            <van-search v-model="searchValue" placeholder="请输入搜索关键词" @search="onSearch" />
            <div class="tab-list">
                <van-tabs v-model="activeAlarmMessageTab" swipeable title-inactive-color="#999999" title-active-color="#333" color="#39a9ed" line-width="30px" line-height="2px">
                    <van-tab title="全部" name="ALL"></van-tab>
                    <van-tab title="未读" name="UNREAD"></van-tab>
                    <van-tab title="已读" name="READ"></van-tab>
                </van-tabs>
            </div>
        </van-sticky>
        <div class="con-box">
            <AlarmMessageSubTab v-if="activeAlarmMessageTab == 'ALL'" ref="ALL" status="" />
            <AlarmMessageSubTab v-if="activeAlarmMessageTab == 'UNREAD'" ref="UNREAD" status="UNREAD" />
            <AlarmMessageSubTab v-if="activeAlarmMessageTab == 'READ'" ref="READ" status="READ" />
        </div>

    </div>
</template>

<script>
    import AlarmMessageSubTab from './subtab/AlarmMessageSubTab';

    export default {
        name: "AlarmMessageTab",
        components: {
            AlarmMessageSubTab
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