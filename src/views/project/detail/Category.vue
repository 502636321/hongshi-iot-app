<template>
    <div class="list-group">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了">
            <device-thumb v-for="item in data" :key="item.id" :device="item">
            </device-thumb>
        </van-list>
    </div>
</template>

<script>
    import DeviceThumb from "@/views/project/detail/DeviceThumb";
    export default {
        name: "Category",
        props: {
            data: {
                default: []
            }
        },
        components: {
            DeviceThumb
        },
        data() {
            return {
                loading: false,
                finished: true,
            }
        }
    }
</script>

<style scoped>

</style>
