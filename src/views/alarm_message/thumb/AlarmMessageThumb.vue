<template>
  <div class="list">
    <div class="top">
      <h4>{{MESSAGE_TYPE_MAPPER[message.type]}}</h4>
      <p>2020-00-00 00:00</p>
    </div>
    <div class="bottom">
      {{message.content}}
    </div>
  </div>
</template>

<script>


    export default {
        name: "AlarmMessageThumb",
      props: ['message'],
      data() {
          return {
            MESSAGE_TYPE_MAPPER: {
              'DEVICE_ACTION_TYPE': '设备行为',
              'DEVICE_PROPERTY_TYPE': '设备数据'
            }
          };
      }
    }
</script>

<style lang="scss" type="text/scss" scoped>
.list {
  background: #fff;
  margin-bottom: 16px;
  border-radius: 16px;
  .top {
    border-bottom: 1px solid #f9f9f9;
    padding: 20px;
    h4 {
      font-size: 28px;
      margin-bottom: 16px;
    }
    p {
      font-size: 24px;
      color: #ccc;
    }
  }
  .bottom {
    padding: 20px;
    font-size: 24px;
  }
}
</style>