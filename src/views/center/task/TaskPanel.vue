<template>
    <div>
        <van-nav-bar
                title="我的"
                left-arrow
                @click-left="$router.back()"
        />
        <div>
            任务列表
        </div>
    </div>
</template>

<script>
    export default {
        name: "TaskPanel"
    }
</script>

<style scoped>

</style>