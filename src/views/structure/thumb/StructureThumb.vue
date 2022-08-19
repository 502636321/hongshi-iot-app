<template>
  <router-link :to="{ path: '/structure/detail', query: {structureId: structure.id} }">
    <div class="list" :class="{'no-mgb':noMargin}">
      <!--建筑背景图片-->
      <div class="top">
        <img class="bg" :src="`https://hongshi-monitor-oss.oss-cn-shenzhen.aliyuncs.com/${structure.thumbnail}?`" alt="">
        <div class="title">{{structure.name || '未知'}}</div>
        <div class="label normal" v-if="structure.lastReportResult === 'NORMAL'">
          <span>正常 <van-icon name="passed" /></span>
        </div>
        <div class="label danger" v-else>
          <span>异常 <van-icon name="warning-o" /></span>
        </div>
      </div>
      <div class="tab">
        <div><i class="iconfont icon-zaixian-xian"></i> 在线 ({{structure.deviceOnlineCount || 0}})</div>
        <div><i class="iconfont icon-lixian-xian"></i> 离线 ({{structure.deviceOfflineCount || 0}})</div>
        <div><i class="iconfont icon-kaiji-xian"></i> 故障 ({{structure.deviceFaultCount || 0}})</div>
      </div>
    </div>
  </router-link>
</template>

<script>
    export default {
        name: "StructureThumb",
        props: {
          structure: {
            type: Object,
            default: () => {}
          },
          noMargin: {
            type: Boolean,
            default: () => false,
          }
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
.list {
  background: #fff;
  margin-bottom: 16px;
  font-size: 26px;
  color: #333;
  border-radius: 16px;
  overflow: hidden;
  &.no-mgb {
    margin-bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding-bottom: 20px;
  }
  .top {
    height: 262px;
    background-size: cover;
    position: relative;
    color: #fff;
    .bg {
      width: 100%;
      height: 100%;
      border-radius: 16px;
    }
    .title {
      padding: 15px 130px 0 15px;
      font-weight: bold;
      font-size: 28px;
      position: absolute;
      left: 0;
      top: 0;
    }
    .label {
      position: absolute;
      right: 0;
      top: 0;
      height: 50px;
      line-height: 50px;
      border-top-left-radius: 25px;
      border-top-right-radius: 16px;
      border-bottom-left-radius: 25px;
      padding: 0 20px;
      span {
        margin: 10px;
        font-size: 28px;
      }
      &.normal {
        background: #07c160;
      }
      &.danger {
        background: #ee0a24;
      }
      &.warning {
        background: #ff976a;
      }
    }
  }
  .tab {
    display: flex;
    align-items: center;
    height: 50px;
    border-top: 1px solid #f9f9f9;
    div {
      text-align: center;
      color: #999;
      flex: 1;
      padding-left: 20px;
      font-size: 22px;
    }
  }
}
</style>