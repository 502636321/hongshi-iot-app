<template>
    <div class="info-inset">
        <van-cell-group>
            <van-cell title="名称" :value="data.name || '正在获取...'" />
            <van-cell title="类型" value="描述信息" />
            <van-cell title="所属机构" value="" />
            <van-cell title="创建时间" value="" />
            <van-cell title="注册时间" value="" />
            <van-cell title="最后上线时间" value="" />
            <van-cell title="说明" label="描述信息" />
        </van-cell-group>
    </div>
</template>

<script>
    export default {
        name: "Info",
        props: {
            data: {
                default: {
                    id: '',
                    name: '正在获取...'
                }
            }
        }
    }
</script>

<style scoped>
    .info-inset {
        margin: 0 16px;
        overflow: hidden;
        border-radius: 8px;
    }
</style>
