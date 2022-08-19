<template>
    <div class="index">
        <van-sticky>
            <van-nav-bar title="视频" />
<!--            <van-dropdown-menu>-->
<!--&lt;!&ndash;                <van-dropdown-item v-model="typeValue" :options="typeOptions" @change="onTypeSelectChange" />&ndash;&gt;-->
<!--&lt;!&ndash;                <van-dropdown-item v-model="value2" :title="areaTreeItemTitle" ref="AreaTreeItem">&ndash;&gt;-->
<!--&lt;!&ndash;                    <van-tree-select :items="provItems" :active-id.sync="activeId" :main-active-index.sync="activeIndex" @click-nav="onClickAreaProvItem" @click-item="onClickAreaCityItem" />&ndash;&gt;-->
<!--&lt;!&ndash;                </van-dropdown-item>&ndash;&gt;-->
<!--            </van-dropdown-menu>-->
        </van-sticky>
        <div class="list-group">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <video-player v-for="item in list" :key="item" :device-serial="item">
                </video-player>
            </van-list>
        </div>
    </div>
</template>

<script>
    import VideoPlayer from "@/views/video/VideoPlayer";

    export default {
        name: "VideoTab",
        components: {
            VideoPlayer
        },
        data() {
            return {
                list: [
                    'K17023476',
                    'K20512757',
                    'K20512724'
                ],
                loading: false,
                finished: false,
            };
        },
        methods: {
            onLoad() {
                // 异步更新数据
                // setTimeout 仅做示例，真实场景中一般为 ajax 请求
                // setTimeout(() => {
                //     for (let i = 0; i < 1; i++) {
                //         this.list.push(this.list.length + 1);
                //     }
                //
                //     // 加载状态结束
                //     this.loading = false;
                //
                //     // 数据全部加载完成
                //     if (this.list.length >= 5) {
                //         this.finished = true;
                //     }
                // }, 1000);
            },
        },
    }
</script>

<style scoped>

</style>
