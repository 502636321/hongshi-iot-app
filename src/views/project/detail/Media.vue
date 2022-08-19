<template>
    <div class="list-group">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <media-thumb v-for="item in data" :key="item.id" :media="item">
            </media-thumb>
        </van-list>
    </div>
</template>

<script>
    import MediaThumb from "@/views/project/detail/MediaThumb";

    export default {
        name: "Media",
        components: {
            MediaThumb
        },
        props: {
            data: {
                default: []
            }
        },
        data() {
            return {
                loading: false,
                finished: false,
            };
        },
        methods: {
            onLoad() {
                this.loading = false ;
                this.finished = true;
            }
        },
        created() {
            console.log('获取视频监控')
            console.log(this.data)
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
    .list-group {
        padding: 25px 25px 0;
    }
</style>
