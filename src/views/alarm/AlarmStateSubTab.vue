<template>
    <div>
        <van-list class="list-group" v-model="loading" :finished="finished" finished-text="没有更多了" @load="loadAlarmMessagePage">
            <alarm-info v-for="(item, index) in alarmMessageItems" :key="index" :message="item" >
            </alarm-info>
        </van-list>
    </div>
</template>

<script>
    import AlarmInfo from "@/views/alarm/AlarmInfo";

    import { findAlarmPage } from '@/api/alarm'

    export default {
        name: "AlarmStateSubTab",
        props: ['status'],
        components: {
            AlarmInfo
        },
        data() {
            return {
                alarmMessageItems: [],
                searchValue: '',
                loading: false,
                finished: false,
                pageIndex: 0,
                pageSize: 20,
                total: 0
            };
        },
        methods: {
            loadAlarmMessagePage() {
                findAlarmPage({
                    pageIndex: this.pageIndex,
                    pageSize: this.pageSize
                }).then(({result}) => {
                    this.alarmMessageItems.push(...result.data);

                    if ((result.pageIndex + 1) * result.pageSize >= result.total) {
                        this.finished = true;
                    }
                    this.pageIndex += this.pageIndex + 1;
                }).finally(() => {
                    // 加载状态结束
                    this.loading = false;
                })
            },

            onSearch() {
                this.alarmMessageItems = [];
                this.loadAlarmMessagePage();
            }
        },
        created() {
            this.loadAlarmMessagePage();
        }
    }
</script>

<style lang="scss" type="text/scss"  scoped>
    .list-group {
    }
</style>
