<template>
  <div>
    <van-nav-bar title="报告名称" left-text="返回" left-arrow @click-left="$router.back()" />
    <div class="con">
      <div class="label-group">
        <h4 class="label">建筑物: <span>{{report.structureName}}</span></h4>
        <ul>
          <li class="label">建筑类型: <span>{{STRUCTURE_TYPE_MAPPER[report.structureType]}}</span></li>
          <li class="label">报告类型: <span>{{REPORT_TYPE_MAPPER[report.reportType]}}</span></li>
        </ul>
        <ul>
          <li class="label">报告时间: <span>{{moment(report.reportTime).format('YYYY-MM-DD')}}</span></li>
          <li class="label">报告结果: <span>{{REPORT_RESULT_MAPPER[report.reportResult]}}</span></li>
        </ul>
      </div>
    </div>
    <div class="table">
      <div style="white-space: pre-wrap;">
        {{report.content || '未有报告内容'}}
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  import { findReport } from '@/api/report'

    export default {
        name: "ReportDetail",
        data() {
            return {
              reportId: '',
              report: {},
              STRUCTURE_TYPE_MAPPER: {
                'BRIDGE_TYPE': '桥梁',
                'HOUSE_TYPE': '楼房',
                'ANTIQUE_TYPE': '古建筑',
                'CONSTRUCT_TYPE': '构筑物'
              },
              REPORT_TYPE_MAPPER: {
                'DAY_TYPE': '日报',
                'WEEK_TYPE': '周报',
                'MONTH_TYPE': '月报'
              },
              REPORT_RESULT_MAPPER: {
                'NORMAL': '正常',
                'ABNORMAL': '异常'
              }
            }
        },
        methods: {
          moment,
          fetchReport() {
            findReport(this.reportId).then(({data}) => {
              this.report = data;
            })
          }
        },
        activated() {
          this.reportId = this.$route.query.reportId;
          this.fetchReport();
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
.con {
  padding: 30px 30px 14px;
  .label-group {
    font-size: 26px;
    .label {
      margin-bottom: 30px;
      span {
        color: #999;
      }
    }
    ul {
      display: flex;
      align-items: center;
      li {
        flex: 1;
      }
    }
  }
}
.table {
  padding: 30px;
  border-top: 16px solid #f9f9f9;
  font-size: 26px;
  .row {
    display: flex;
    align-items: center;
    height: 70px;
    &:nth-child(odd) {
      background: #f9f9f9;
    }

    li {
      flex: 1;
      text-align: center;
      padding: 0 20px;
      &:first-child {
        text-align: left;
      }
      &:last-child {
        text-align: right;
      }
    }
  }
  ul {
    color: #999;
  }
}
</style>