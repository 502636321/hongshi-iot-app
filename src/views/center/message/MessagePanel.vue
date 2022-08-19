<template>
    <div>
            <van-nav-bar
                    title="消息"
                    left-arrow
                    @click-left="$router.back()"
            />
            <div>
                消息列表
            </div>
    </div>
</template>

<script>
    export default {
        name: "MessagePanel"
    }
</script>

<style scoped>

</style>