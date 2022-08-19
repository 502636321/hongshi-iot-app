<template>
    <div>
        <van-nav-bar title="XXX传感器" left-text="返回" left-arrow @click-left="historyBack" />
        <div>视频插入</div>
    </div>
</template>

<script>
    export default {
        name: "VideoItemDetail",
        methods: {
            historyBack() {
                console.log("我的返回")
                window.history.back()
            }
        }
    }
</script>

<style scoped>

</style>