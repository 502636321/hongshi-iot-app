<template>
  <div class="list">
    <router-link :to="{path: '/report/detail', query: { reportId: report.id }}">
      <div class="item">
        <div class="left">
          <h4>{{report.title}} - [{{REPORT_TYPE_MAPPER[report.reportType]}}]</h4>
          <p>生成日期: <span> {{ moment(report.createdTime).format('YYYY-MM-DD') }}</span></p>
        </div>
        <img class="state" v-if="report.reportResult === 'NORMAL'" src="@/assets/images/report/NORMAL.png" alt="">
        <img class="state" v-else src="@/assets/images/report/ABNORMAL.png" alt="">
        <!-- <img class="state" src="@/assets/images/report/icon-02.png" alt=""> -->
        <!-- <img class="state" src="@/assets/images/report/icon-03.png" alt=""> -->
        <!-- <div class="right">结果(正常/异常/危险) 图片显示</div> -->
      </div>
    </router-link>
  </div>
</template>

<script>
  import moment from 'moment'

    export default {
        name: "ReportPanel",
        props: ['report'],
      data() {
          return {
            REPORT_TYPE_MAPPER: {
              'DAY_TYPE': '日报',
              'WEEK_TYPE': '周报',
              'MONTH_TYPE': '月报'
            }
          }
      },
      methods: {
          moment
      }
    }
</script>

<style lang="scss" type="text/scss" scoped>
.list {
  .item {
    background: #fff;
    margin-bottom: 16px;
    font-size: 26px;
    color: #333;
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    .left {
      h4 {
        font-size: 28px;
        color: #333;
        margin-bottom: 20px;
      }
      p {
        color: #ccc;
        font-size: 22px;
        span {
          color: #999;
        }
      }
    }
    .state {
      width: 80px;
    }
  }
}
</style>