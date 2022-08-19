<template>
  <router-link :to="src">
    <div class="list">
      <div class="item">
        <h4 class="title">{{ device.nickname }}</h4>
        <van-tag class="line" plain type="primary"><i class="iconfont icon-zaixian-xian"></i>&nbsp;在线</van-tag>
        <div class="bottom">
          <p>{{ moment(device.lastRecordTime).format('YYYY-MM-DD HH:mm') || '无数据' }}</p>
          <slot  name="value">
            <p>变化值：{{ lastValuekey || '无数值' }}</p>
          </slot>
        </div>
      </div>
      <div>
        <van-icon name="arrow" />
      </div>
    </div>
  </router-link>
</template>

<script>
  import moment from 'moment'

    export default {
        name: "DeviceItemThumb",
      props: ['src', 'device', 'lastValuekey'],
      methods: {
          moment
      }
    }
</script>

<style lang="scss" type="text/scss" scoped>
.list {
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  .item {
    flex: 1;
    position: relative;
    margin-right: 16px;
    .title {
      font-size: 28px;
      margin-bottom: 30px;
    }
    .line {
      position: absolute;
      right: 0;
      top: 0;
    }
    .bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #999;
      font-size: 24px;
    }
  }
}
</style>