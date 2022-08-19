<template>
  <div>
    <div class="chart">
      <v-chart autoresize :option="option" style="width:100%;height: 280px;" />
    </div>
    <div class="box">
      <div class="filter">
        <h4>筛选条件</h4>
        <van-field readonly clickable label="筛选日期" v-model="dateRange" @click="showCalendar = true" />
        <van-calendar v-model="showCalendar" type="range" @confirm="onCalendarConfirm" />
        <van-field readonly clickable label="筛选类型" v-model="chartGroup" @click="showPicker = true"/>
      </div>
      <van-popup v-model="showPicker" position="bottom">
        <van-picker
                show-toolbar
                default-index="0"
                :columns="chartColumn"
                @confirm="onPickerConfirm"
                @cancel="showPicker = false"
        />
      </van-popup>
    </div>

  </div>
</template>

<script>
  import moment from 'moment'
  import { findHumitureChart } from '@/api/structure'

    export default {
        name: "HumitureItemChartTab",
        props: ['deviceId'],
        data() {
            return {
              params: {
                chartGroup: 'ALL'
              },
              dateRange: '',
              chartGroup: '全部',
              showCalendar: false,
              showPicker: false,

              chartColumn: [{
                text: '全部',
                key: 'ALL'
              }, {
                text: '每天',
                key: 'DAY'
              }, {
                text: '每周',
                key: 'WEEK'
              }, {
                text: '每月',
                key: 'MOUTH'
              }],
                option: {
                    xAxis: {
                        type: 'category',
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                      {
                        data: [],
                        type: 'line',
                        areaStyle: {},
                        smooth: true
                      }
                    ]
                },
            };
        },
        methods: {
          moment,
            onCalendarConfirm(date) {
                const [start, end] = date;
                this.showCalendar = false;
                this.dateRange = `${moment(start).format('YYYY-MM-DD')} ~ ${moment(end).format('YYYY-MM-DD')}`;
            },
          onPickerConfirm(value) {
            this.showPicker = false;
            this.chartGroup = value.text;
          },
          fetchChart () {
            findHumitureChart(this.deviceId, { }).then(({ data }) => {
              this.option.series[0].data = data.map(item => {
                return [moment(item.timestamp).format('YYYY-MM-DD HH:mm'), item.temperature]
              })
            })
          }
        },
      created() {
          this.fetchChart();
      }
    }
</script>

<style lang="scss" type="text/scss" scoped>
.chart {
  background: #fff;
}
.box {
  padding: 25px;
  .filter {
    background: #fff;
    border-radius: 16px;
    h4 {
      padding: 30px 25px;
      font-size: 28px;
      border-bottom: 1px solid #f9f9f9;
    }
  }
}
</style>