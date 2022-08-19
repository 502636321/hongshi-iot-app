<template>
    <div class="index">
        <van-sticky>
            <van-nav-bar title="建筑" />
            <van-dropdown-menu>
                <van-dropdown-item v-model="typeValue" :options="typeOptions" @change="onTypeSelectChange" />
                <van-dropdown-item v-model="value2" :title="areaTreeItemTitle" ref="AreaTreeItem">
                    <van-tree-select :items="provItems" :active-id.sync="activeId" :main-active-index.sync="activeIndex" @click-nav="onClickAreaProvItem" @click-item="onClickAreaCityItem" />
                </van-dropdown-item>
            </van-dropdown-menu>
        </van-sticky>
        <div class="list-group">
            <!--建筑卡片列表-->
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoadStructure">
                <structure-thumb v-for="item in structureItems" :structure="item" :key="item.id" />
            </van-list>
        </div>
    </div>
</template>

<script>
    import StructureThumb from './thumb/StructureThumb';
    import { findStructurePage } from '@/api/structure'
    import { findProvArea, findCityArea } from '@/api/base_data'

    export default {
        name: "StructureTab",
        components: {
            StructureThumb
        },
        data() {
            return {
                structureItems: [],
                loading: false,
                finished: false,
                activeId: 1,
                activeIndex: 0,
                areaTreeItemTitle: '全部地区',
                provItems: [{
                    id: '',
                    text: '所有城市',
                    dot: true,
                    code: '',
                    children: []
                }],
                typeValue: '',
                addressCity: '',
                value2: 'a',
                typeOptions: [
                    { text: '全部建筑', value: '' },
                    { text: '桥梁', value: 'BRIDGE_TYPE' },
                    { text: '楼房', value: 'HOUSE_TYPE' },
                    { text: '古建筑', value: 'ANTIQUE_TYPE' },
                    { text: '构筑物', value: 'CONSTRUCT_TYPE' },
                ]
            };
        },

        methods: {
            onClickAreaProvItem(index) {
                let areaItem =  this.provItems[index];
                if (index > 0) {
                    this.fetchCityArea(areaItem.code).then(({data}) => {
                        this.provItems[index].children = data.map(item => {
                            return {
                                id: item.id,
                                text: item.name,
                                code: item.code
                            }
                        });
                    })
                } else {
                    this.areaTreeItemTitle = areaItem.text;
                    this.$refs.AreaTreeItem.toggle(); //关闭过滤
                }
            },
            onClickAreaCityItem(item) {
                this.areaTreeItemTitle = item.text;
                this.addressCity = item.text;
                this.$refs.AreaTreeItem.toggle(); //关闭过滤
                this.structureItems = [];
                this.onLoadStructure();

            },
            onTypeSelectChange() {
                this.structureItems = [];
                this.onLoadStructure();
            },
            onLoadStructure() {
                // 异步更新数据
                // setTimeout 仅做示例，真实场景中一般为 ajax 请求
                findStructurePage({
                    type: this.typeValue,
                    addressCity: this.addressCity
                }).then(({data}) => {
                    this.structureItems.push(...data.records);

                    if (this.structureItems.length >= data.total) {
                        this.finished = true;
                    }
                }).finally(() => {
                    // 加载状态结束
                    this.loading = false;
                })
            },
            fetchProvArea() {
                findProvArea().then(({data}) => {
                    data.forEach(item => {
                        this.provItems.push({
                            id: item.id,
                            text: item.name,
                            code: item.code,
                            children: []
                        });
                    })
                });
            },

            fetchCityArea(provId) {
                return findCityArea(provId);
            }
        },
        created() {
            this.fetchProvArea();
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
    div.van-picker__toolbar {
        display: none;
    }
    .index {
        padding-bottom: 100px;
        background: #f9f9f9;
        min-height: 100vh;
        box-sizing: border-box;
        .list-group {
            padding: 25px 25px 0;
        }
    }
</style>