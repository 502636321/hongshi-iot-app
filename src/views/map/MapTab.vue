<template>
    <div class="index">
        <div class="header">
            <van-nav-bar title="首页" />
            <van-search placeholder="请输入搜索关键词" v-model="searchValue" @search="loadStructureAddressPage" />
        </div>

        <div>
            <baidu-map class="map-container" :center="center" :zoom="zoom" :scroll-wheel-zoom="true">
                <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>

                <div v-for="(structure) in structures" :key="structure.id">
                    <bm-marker :position="{lng: structure.addressLng, lat: structure.addressLat}" @click="onClickStructureMarker(structure)">
                    </bm-marker>
                </div>
            </baidu-map>
        </div>

        <van-popup v-model="structureMarkerShow" position="bottom" round>
            <StructureThumb :structure="structureMarker" :noMargin="true" />
            <van-cell title="名称" :value="structureMarker.name || '未知'" />
            <van-cell title="类型" :value="STRUCTURE_TYPE_MAPPER[structureMarker.type] || '未知类型'" />
            <van-cell title="地址" :label="structureMarker.addressName" />
            <div class="popup-btn">
                <van-button type="info" round block @click="onCloseStructureMarker">关闭</van-button>
            </div>
        </van-popup>
    </div>
</template>

<script>
    import StructureThumb from '@/views/structure/thumb/StructureThumb';

    import { findStructureAddressPage, findStructure } from '@/api/structure'

    let DEFAULT_MAP_CENTER = {
        lng: 116.404,
        lat: 39.915
    }
    let DEFAULT_MAP_ZOOM = 5;

    export default {
        name: "MapTab",
        components: {
            StructureThumb
        },
        data() {
            return {
                info: '设备信息',
                searchValue: '',
                center: DEFAULT_MAP_CENTER,
                zoom: DEFAULT_MAP_ZOOM,
                structures: [],
                structureMarker: {},
                structureMarkerShow: false,
                list: [],
                STRUCTURE_TYPE_MAPPER: {
                    'BRIDGE_TYPE': '桥梁',
                    'HOUSE_TYPE': '楼房',
                    'ANTIQUE_TYPE': '古建筑',
                    'CONSTRUCT_TYPE': '构筑物'
                }
            }
        },
        methods: {
            onClickStructureMarker(structure) {
                this.structureMarkerShow = true;
                findStructure(structure.id).then(({data}) => {
                    this.structureMarker = data; //根据ID获取建筑详细信息
                });
            },
            onCloseStructureMarker() {
                this.structureMarkerShow = false;
            },
            loadStructureAddressPage() {
                findStructureAddressPage({
                    search: this.searchValue
                }).then(resp => {
                    this.structures = resp.data;
                })
            }
        },
        created: function () {
            this.loadStructureAddressPage();
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
    .index {
        box-sizing: border-box;
        .header {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 999;
        }
        /deep/.van-popup {
            background: #f9f9f9;
            padding: 30px 30px 160px;
            box-sizing: border-box;
        }
        .popup-btn {
            position: fixed;
            bottom: 0;
            left: 0;
            padding: 30px;
            width: 100%;
            box-sizing: border-box;
        }
    }
    .map-container {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        position: absolute;
    }
</style>