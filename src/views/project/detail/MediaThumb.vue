<template>
    <div @click="onClick">
        <div class="title">
            {{media.deviceName || '正在获取...'}}
        </div>
        <div class="con">
            视频内容
        </div>
    </div>
</template>

<script>
    export default {
        name: "MediaThumb",
        props: {
            media: {
                type: Object,
                default: () => {}
            }
        },
        methods: {
            onClick() {
                this.$router.push({
                    path: '/project/media/detail',
                    query: {
                        id: this.media.deviceSerial
                    }
                })
            }
        },
        created() {
            console.log(this.media);
        }
    }
</script>

<style scoped>

</style>
