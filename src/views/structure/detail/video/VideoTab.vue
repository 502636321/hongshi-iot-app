<template>
  <div class="list-group">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <video-item-thumb v-for="item in list" :key="item" :title="item">
      </video-item-thumb>
    </van-list>
  </div>
</template>

<script>
    import VideoItemThumb from "./thumb/VideoItemThumb";

    export default {
        name: "VideoTab",
        components: {
            VideoItemThumb
        },
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
            };
        },
        methods: {
            onLoad() {
                // 异步更新数据
                // setTimeout 仅做示例，真实场景中一般为 ajax 请求
                setTimeout(() => {
                    for (let i = 0; i < 3; i++) {
                        this.list.push(this.list.length + 1);
                    }

                    // 加载状态结束
                    this.loading = false;

                    // 数据全部加载完成
                    if (this.list.length >= 5) {
                        this.finished = true;
                    }
                }, 1000);
            },
        },
    }
</script>

<style lang="scss" type="text/scss" scoped>
.list-group {
  padding: 25px 25px 0;
}
</style>