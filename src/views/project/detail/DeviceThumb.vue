<template>
    <div @click="onClick">
        <div class="van-device-card">
            <div class="van-device-card__content">
                <van-row>
                    <van-col span="12">
                        <div class="ant-card">
                            <div class="ant-card-body" style="padding: 20px 24px 8px;">
                                <div class="antd-pro-pages-analysis-components-charts-chart-card-index-chartCard">
                                    <div class="antd-pro-pages-analysis-components-charts-chart-card-index-chartTop">
                                        <div class="antd-pro-pages-analysis-components-charts-chart-card-index-avatar">
                                        </div>
                                        <div class="antd-pro-pages-analysis-components-charts-chart-card-index-metaWrap">
                                            <div class="antd-pro-pages-analysis-components-charts-chart-card-index-meta">
                                                <span>当前值</span>
                                            </div>
                                            <div class="antd-pro-pages-analysis-components-charts-chart-card-index-total">
                                                <span class="antd-pro-pages-device-location-info-index-col" style="width: 100%;">25.0</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="antd-pro-pages-analysis-components-charts-chart-card-index-content" style="height: 46px;">
                                        <div class="antd-pro-pages-analysis-components-charts-chart-card-index-contentFixed">
                                            <div>
                                                <div class="antd-pro-pages-analysis-components-charts-index-miniChart" style="height: 40px;">
                                                    <div class="antd-pro-pages-analysis-components-charts-index-chartContent">
                                                        <div>
                                                            <div>
                                                                <span style="display: none;"></span>
                                                                <div style="position:relative;">
                                                                    <!--                                                            <canvas id="canvas_1" width="304" height="94" style="width: 304px; height: 94px;"></canvas>-->
                                                                    <v-chart autoresize :option="currentOption" style="width:100%;height: 100%;" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </van-col>
                    <van-col span="12">
                        <div class="ant-card">
                            <div class="ant-card-body" style="padding: 20px 24px 8px;">
                                <div class="antd-pro-pages-analysis-components-charts-chart-card-index-chartCard">
                                    <div class="antd-pro-pages-analysis-components-charts-chart-card-index-chartTop">
                                        <div class="antd-pro-pages-analysis-components-charts-chart-card-index-avatar">
                                        </div>
                                        <div class="antd-pro-pages-analysis-components-charts-chart-card-index-metaWrap">
                                            <div class="antd-pro-pages-analysis-components-charts-chart-card-index-meta">
                                                <span>最高值</span>
                                            </div>
                                            <div class="antd-pro-pages-analysis-components-charts-chart-card-index-total">
                                                <span class="antd-pro-pages-device-location-info-index-col" style="width: 100%;">25.0</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="antd-pro-pages-analysis-components-charts-chart-card-index-content" style="height: 46px;">
                                        <div class="antd-pro-pages-analysis-components-charts-chart-card-index-contentFixed">
                                            <div>
                                                <div class="antd-pro-pages-analysis-components-charts-index-miniChart" style="height: 40px;">
                                                    <div class="antd-pro-pages-analysis-components-charts-index-chartContent">
                                                        <div>
                                                            <div>
                                                                <span style="display: none;"></span>
                                                                <div style="position:relative;">
                                                                    <!--                                                            <canvas id="canvas_1" width="304" height="94" style="width: 304px; height: 94px;"></canvas>-->
                                                                    <v-chart autoresize :option="maxOption" style="width:100%;height: 100%;" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </van-col>
                </van-row>
            </div>
            <p class="van-device-card__description">{{device.deviceName || '正在获取...'}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DeviceThumb",
        props: {
            device: {
                default: {
                    id: '',
                    deviceName: '正在获取...'
                }
            }
        },
        data() {
            return {
                currentOption: {
                    xAxis: {
                        type: 'category',
                        show:false,
                        boundaryGap: false,
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        show:false,
                    },
                    series: [
                        {
                            data: [820, 932, 901, 934, 1290, 1330, 1320],
                            type: 'line',
                            areaStyle: {}
                        }
                    ]
                },
                maxOption: {
                    xAxis: {
                        type: 'category',
                        show:false,
                        boundaryGap: false,
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        show:false,
                    },
                    series: [
                        {
                            data: [820, 932, 901, 934, 1290, 1330, 1320],
                            type: 'line',
                            areaStyle: {}
                        }
                    ]
                }
            }
        },
        methods: {
            onClick() {
                this.$router.push({
                    path: '/project/device/detail',
                    query: {
                        id: this.device.id,
                        name: this.device.deviceName
                    }
                })
            }
        },
        created() {
            console.log('获取设备')
            console.log(this.device);
        }
    }
</script>

<style scoped>
    .van-device-card {
        overflow: hidden;
        border-radius: 4px;
        margin: 0 15px 15px;
        background-color: #fff;
        box-shadow: 0 0 4px rgb(0 0 0 / 10%);
    }

    .van-device-card__content {
        /*display: -webkit-box;*/
        /*display: -webkit-flex;*/
        /*display: flex;*/
        /*height: 100px;*/
        padding: 24px 0 0 15px;
        box-sizing: border-box;
    }

    .van-device-card__description {
        padding: 7px 15px;
        border-top: 1px dashed #ebedf0;
        background-color: #fafafa;
    }

</style>
