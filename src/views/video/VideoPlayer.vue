<template>
    <div>
        <van-panel :title="deviceName" status="在线">
            <div :id="'VIDEO_CONTAINER_' + deviceSerial" ref="VIDEO_CONTAINER">
            </div>
            <div slot="footer">
<!--                <van-button size="small">声音</van-button>-->
            </div>
        </van-panel>
    </div>
</template>

<script>
    import  EZUIKit from 'ezuikit-js';

    import {getDeviceInfo, getToken} from '@/api/ys7Api'

    export default {
        name: "VideoPlayer",
        props: {
            deviceSerial: String
        },
        data() {
            return {
                deviceName: "正在获取...",
                player: null
            }
        },
        methods: {
            onClickShuaXin() {
                if (this.player) {
                    this.player.stop();
                    this.player = null;
                }
                getToken().then((token) => {
                    this.fetchDeviceInfo(token);
                    this.fetchDeviceVideo(token);
                })
            },
            onClickSwitchShengYin() {
                if (this.player) {
                    console.log(this.player.audio);
                    if (this.player.audio) {
                        this.player.closeSound();
                        this.player.audio = 0;
                    } else {
                        this.player.openSound();
                        this.player.audio = 1;
                    }
                }
            },
            onClickFullScreen() {
                if (this.player) {
                    this.player.fullScreen();
                }
            },
            fetchDeviceInfo(token) {
                getDeviceInfo(token.accessToken, this.deviceSerial).then((resp) => {
                    this.deviceName = resp.data.data.deviceName;
                })
            },
            fetchDeviceVideo(token) {
                const videoContainerId = 'VIDEO_CONTAINER_' + this.deviceSerial;
                this.player = new EZUIKit.EZUIKitPlayer({
                    id: videoContainerId, // 视频容器ID
                    accessToken: token.accessToken,
                    url: 'ezopen://open.ys7.com/' + this.deviceSerial + '/1.hd.live',
                    template: 'simple', // simple - 极简版;standard-标准版;security - 安防版(预览回放);voice-语音版; theme-可配置主题；
                    audio: 0,
                    plugin: ['talk'],                       // 加载插件，talk-对讲
                    width: this.$refs.VIDEO_CONTAINER.clientWidth,
                    height: 200,
                });
            }
        },
        mounted() {
            getToken().then((token) => {
                console.log('获得token')
                console.log(token);
                this.fetchDeviceInfo(token);
                this.fetchDeviceVideo(token);
            })
        }
    }
</script>

<style scoped>

</style>
