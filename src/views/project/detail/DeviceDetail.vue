<template>
    <div>
        <van-nav-bar
                :title="device.deviceName || '正在获取...'"
                :fixed="true"
                left-text="返回"
                left-arrow
                @click-left="onClickBack"
        />
        <div>
                <div class="filter">
                    <van-cell-group>
                        <van-field readonly clickable label="选择日期" v-model="dateRange" @click="showFilterCalendar = true" />
                        <van-calendar v-model="showFilterCalendar" type="range" @confirm="onFilterCalendarConfirm" />
                    </van-cell-group>
                </div>
            <div>
                <van-tabs v-model="activeTabKey">
                    <van-tab title="列表" name="list">
                        <van-list
                                v-model="listLoading"
                                :finished="listFinished"
                                finished-text="没有更多了"
                                @load="onListLoad"
                        >
                            <van-cell v-for="(item, index) in listData" :key="index" :title="formatDate(item.timestamp)" :value="item.formatValue" />
                        </van-list>
                    </van-tab>
                    <van-tab title="图表" name="chart">

                    </van-tab>
                </van-tabs>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'

    import { findDataPage } from '@/api/properties'

    export default {
        name: "DeviceDetail",
        // prop: {
        //     device: {
        //         default: {
        //             id: '',
        //             deviceName: '正在获取...'
        //         }
        //     }
        // },
        data() {
            return {
                device: {
                    id: '',
                    deviceName: '正在获取...'
                },
                showFilterCalendar: false,
                dateRange: '',
                activeTabKey: 'list',
                listData: [],
                listLoading: false,
                listFinished: false,
            }
        },
        methods: {
            onClickBack() {
                this.$router.go(-1);
            },
            onFilterCalendarConfirm(date) {
                const [start, end] = date;
                this.showFilterCalendar = false;
                this.dateRange = `${moment(start).format('YYYY/MM/DD')} - ${moment(end).format('YYYY/MM/DD')}`;
            },
            onListLoad() {
                this.listLoading = true;
                findDataPage('240305004089849').then(({pageIndex, pageSize, total, data}) => {
                    this.listLoading = false;
                    if (pageSize * pageIndex <= total) {
                        this.listFinished = false;
                    } else {
                        this.listFinished = true;
                    }

                    this.listData = [...this.listData, ...data];

                    console.log(this.listData);
                }).finally(() => {
                    this.listLoading = false;
                })
            },
            formatDate(timestamp) {
                return moment(timestamp).format('YYYY-MM-DD HH:mm:ss');
            }
        },
        created() {
            this.device.id = this.$route.query.id;
            this.device.deviceName = this.$route.query.name;
        }
    }
</script>

<style scoped>

</style>
