<template>
    <div class="index">
        <van-sticky>
            <van-nav-bar title="报告" />
            <div>
                <van-dropdown-menu>
                    <van-dropdown-item v-model="value1" :options="option1" />
                    <van-dropdown-item v-model="value2" :options="option2" />
                </van-dropdown-menu>
            </div>
        </van-sticky>
        <div class="list-group">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="fetchReportPage">
                <report-thumb v-for="(item, index) in reportItems" :key="index" :title="item" v-bind:report="item" />
            </van-list>
        </div>
    </div>
</template>

<script>
    import ReportThumb from './thumb/ReportThumb';

    import { findReportPage } from '@/api/report'

    export default {
        name: "ReportTab",
        components: {
            ReportThumb
        },
        data() {
            return {
                current: 1,
                reportItems: [],
                loading: false,
                finished: false,
                value1: 0,
                value2: 'a',
                option1: [
                    { text: '报告类型', value: 0 },
                    { text: '日报', value: 1 },
                    { text: '周报', value: 2 },
                    { text: '月报', value: 4 }
                ],
                option2: [
                    { text: '报告结果', value: 'a' },
                    { text: '正常', value: 'b' },
                    { text: '异常', value: 'c' },
                ],
            }
        },
        methods: {
            fetchReportPage() {
                findReportPage({
                    current: this.current,
                    search: this.searchValue,
                    status: this.status
                }).then(({data}) => {
                    this.current = this.current + 1;
                    this.reportItems.push(...data.records);

                    if (this.reportItems.length >= data.total) {
                        this.finished = true;
                    }
                }).finally(() => {
                    // 加载状态结束
                    this.loading = false;
                })
            },
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
    .index {
        padding-bottom: 100px;
        background: #f9f9f9;
        min-height: 100vh;
        box-sizing: border-box;
        .list-group {
            padding: 25px 25px 0;
        }
    }
</style>