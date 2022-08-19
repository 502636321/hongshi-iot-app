<template>
  <div class="list-group">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="fetchDevices">
      <device-item-thumb v-for="item in devices" :key="item.id" :device="item" :lastValuekey="`${item.lastRecordDifference}με`" :src="`/structure/detail/strain-item/detail?deviceId=${item.id}&deviceName=${item.nickname}`">
      </device-item-thumb>
    </van-list>
  </div>
</template>

<script>
    import DeviceItemThumb from '@/views/structure/detail/common/DeviceItemThumb'
    import { findStructureDevices } from '@/api/structure'

    export default {
      name: "StrainTab",
      components: {
        DeviceItemThumb
      },
      props: ['structureId'],
        data() {
            return {
              devices: [],
              DEVICE_TYPE: 'STRAIN_TYPE',
              loading: false,
              finished: true,
            };
        },
      created() {
        this.fetchDevices();
      },
      methods: {
        fetchDevices() {
          this.loading = true;
          findStructureDevices(this.structureId, this.DEVICE_TYPE).then(({data}) => {
            // 获取该建筑的应力传感器列表
            this.devices = data;
          }).finally(() => {
            this.loading = false;
          })
        }
      }
    }
</script>

<style lang="scss" type="text/scss" scoped>
.list-group {
  padding: 25px 25px 0;
}
</style>