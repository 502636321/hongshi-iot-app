<template>
  <div>
    <van-list class="list-group" v-model="loading" :finished="finished" finished-text="没有更多了" @load="loadAlarmMessagePage">
      <alarm-message-thumb v-for="(item, index) in alarmMessageItems" :key="index" :message="item" >
      </alarm-message-thumb>
    </van-list>
  </div>
</template>

<script>
  import AlarmMessageThumb from "./../thumb/AlarmMessageThumb";

  import { findAlarmMessagePage } from '@/api/alarm_message'

    export default {
        name: "AlarmMessageTab",
      props: ['status'],
      components: {
        AlarmMessageThumb
      },
      data() {
        return {
          alarmMessageItems: [],
          searchValue: '',
          loading: false,
          finished: false,
        };
      },
      methods: {
        loadAlarmMessagePage() {
          findAlarmMessagePage({
            search: this.searchValue,
            status: this.status
          }).then(({data}) => {
            this.alarmMessageItems.push(...data.records);

            if (this.alarmMessageItems.length >= data.total) {
              this.finished = true;
            }
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