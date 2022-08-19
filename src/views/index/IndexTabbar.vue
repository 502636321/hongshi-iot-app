<template>
    <div>
        <router-view />

        <van-tabbar route v-model="active" @change="onTabChange" >
            <van-tabbar-item icon="send-gift" to="/project">项目</van-tabbar-item>
<!--            <van-tabbar-item icon="home-o" to="/video">视频</van-tabbar-item>-->
<!--            <van-tabbar-item icon="wap-home-o" to="/device">设备</van-tabbar-item>-->
            <van-tabbar-item icon="comment-o" to="/alarm">告警</van-tabbar-item>
            <van-tabbar-item icon="friends-o" to="/center">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: "IndexTabbar",
        data() {
            return {
                active: 0,
            };
        },
        methods: {
            onTabChange(index) {
                this.active = index;
            },
        },
        created() {
        }
    }
</script>

<style scoped>

</style>
