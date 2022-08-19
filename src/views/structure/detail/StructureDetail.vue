<template>
  <div class="index">
    <van-nav-bar :title="structure.name" left-arrow @click-left="$router.back()" />
    <div>
      <van-sticky>
        <div class="statistics">
          <div><i class="iconfont icon-zaixian-xian"></i> 在线 ({{structure.deviceOnlineCount || 0}})</div>
          <div><i class="iconfont icon-lixian-xian"></i> 离线 ({{structure.deviceOfflineCount || 0}})</div>
          <div><i class="iconfont icon-kaiji-xian"></i> 故障 ({{structure.deviceFaultCount || 0}})</div>
        </div>
        <div>
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(image, index) in images" :key="index">
              <img class="img" :src="`https://hongshi-monitor-oss.oss-cn-shenzhen.aliyuncs.com/${image}?x-oss-process=image/resize,m_fixed,h_150,w_360`" />
              <!-- <img class="img" src="@" /> -->
            </van-swipe-item>
          </van-swipe>
        </div>
        <div class="tab-list" v-if="deviceTabs && deviceTabs.length > 0">
          <van-tabs v-model="activeDeviceTab" swipeable sticky animated title-inactive-color="#999999" title-active-color="#333" color="#39a9ed" line-width="30px" line-height="2px">
            <van-tab v-if="deviceTabs.includes('VIDEO_TYPE')">
              <template #title><i class="iconfont icon-jiankong"></i> 视频监控</template>
              <video-tab :structure-id="structureId" />
            </van-tab>
            <van-tab v-if="deviceTabs.includes('STRAIN_TYPE')">
              <template #title><i class="iconfont icon-yingli"></i> 应力传感器</template>
              <strain-tab :structure-id="structureId" />
            </van-tab>
            <van-tab v-if="deviceTabs.includes('HYDROSTATIC_TYPE')">
              <template #title><i class="iconfont icon-jinglishuizhunyi"></i> 静力水准仪</template>
              <hydrostatic-tab :structure-id="structureId" />
            </van-tab>
            <van-tab v-if="deviceTabs.includes('ELASTICSTRESS_TYPE')">
              <template #title><i class="iconfont icon-suolijiasudu"></i> 索力传感器</template>
              <elasticstress-tab :structure-id="structureId" />
            </van-tab>
            <van-tab v-if="deviceTabs.includes('BEIDOU_TYPE')">
              <template #title><i class="iconfont icon-beidoudingwei"></i> 北斗定位</template>
              <beidou-tab :structure-id="structureId" />
            </van-tab>
            <van-tab v-if="deviceTabs.includes('HUMITURE_TYPE')">
              <template #title><i class="iconfont icon-kongqiwendu"></i> 温湿度传感器</template>
              <humiture-tab :structure-id="structureId" />
            </van-tab>
            <van-tab v-if="deviceTabs.includes('ANEMOCLINOGRAPH_TYPE')">
              <template #title><i class="iconfont icon-fengsufengxiang"></i> 风向风速传感器</template>
              <anemoclinograph-tab :structure-id="structureId" />
            </van-tab>
            <van-tab v-if="deviceTabs.includes('INCLINOMETER_TYPE')">
              <template #title><i class="iconfont icon-qingjiao"></i> 倾角传感器</template>
              <inclinometer-tab :structure-id="structureId" />
            </van-tab>
          </van-tabs>
        </div>
        <div v-else>
          <div class="no-data">
            <van-icon name="replay" /> 暂无设备
          </div>
        </div>
      </van-sticky>
    </div>
  </div>
</template>

<script>
  import VideoTab from "./video/VideoTab"; //视频监控
  import StrainTab from "./strain/StrainTab"; //应力传感器/应变传感器
  import HydrostaticTab from "./hydrostatic/HydrostaticTab"; //静力水准仪
  import ElasticstressTab from "./elasticstress/ElasticstressTab"; //索力传感器
  import BeidouTab from "./beidou/BeidouTab"; //北斗定位
  import HumitureTab from "./humiture/HumitureTab"; //温湿度传感器
  import AnemoclinographTab from "./anemoclinograph/AnemoclinographTab"; //风向风速传感器
  import InclinometerTab from "./inclinometer/InclinometerTab"; //倾角传感器

  import { findStructure, findStructureDeviceGroup } from '@/api/structure'
  import { findFiles } from '@/api/oss'

    export default {
      name: "StructureDetail",
      components: {
        VideoTab,
        StrainTab,
        HydrostaticTab,
        ElasticstressTab,
        BeidouTab,
        HumitureTab,
        AnemoclinographTab,
        InclinometerTab,

      },
        data() {
          return {
            structure: {},
            images: [],
            structureId: '',
            activeDeviceTab: 0,
            deviceTabs: []
          }
        },
      methods: {
        fetchStructure () {
          findStructure(this.structureId).then(({ data }) => {
            this.structure = data
          }).finally(() => {

          })
        },
        fetchStructureDeviceGroup () {
          findStructureDeviceGroup(this.structureId).then(({ data }) => {
            this.deviceTabs = data
            // this.deviceTabList = this.deviceTabTemplate.filter(item => deviceTabs.includes(item.key))

            // if (this.deviceTabs && this.deviceTabs.length > 0) {
            //   // 默认为第一个选项卡
            //   this.deviceActiveTabKey = this.deviceTabList[0].key
            // }
          }).finally(() => {

          })
        },
        fetchImages () {
          findFiles(this.structureId).then(({ data }) => {
            this.images = data;
          })
        }
      },
        activated() {
           this.structureId = this.$route.query.structureId;
           this.fetchStructure();

           this.fetchStructureDeviceGroup();

           this.fetchImages();
        },
    }
</script>

<style lang="scss" type="text/scss" scoped>
.index {
  background: #f9f9f9;
  min-height: 100vh;
  box-sizing: border-box;
}
.my-swipe .van-swipe-item {
  height: 312px;
  .img {
    width: 100%;
    height: 100%;
  }
}
.statistics {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #999;
  background: #fff;
  height: 50px;
  text-align: center;
  font-size: 24px;
  div {
    flex: 1;
  }
}
.tab-list {
  /deep/.van-tabs__line {
    bottom: 45px;
  }
}
.no-data {
  text-align: center;
  margin-top: 100px;
  color: #ccc;
}
</style>