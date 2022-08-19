<template>
    <div class="index">
        <div class="title">我的</div>
        <div class="header-group">
            <router-link to="/center/setting/info_editor" class="header">
                <van-image round width="4rem" height="4rem" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                <div class="right">
                    <h4>{{name}}</h4>
                    <p>手机：<span>xxx xxxx xxx</span></p>
                </div>
            </router-link>

            <div class="serve">
                <h4>服务</h4>
                <van-grid :border="false">
                    <van-grid-item to="/center/task" icon="todo-list-o" text="任务(保留)" />
                    <van-grid-item to="/center/message" icon="chat-o" text="消息" />
                    <van-grid-item to="/center/" icon="service-o" text="客服(保留)" />
                    <van-grid-item to="/center/setting" icon="setting-o" text="设置" />
                </van-grid>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CenterTab",
        data() {
            return {
                name: ''
            }
        },
        created() {
            this.name = window.localStorage.getItem("SESSION_USER_NAME");
            console.log('获取');
            console.log(window.localStorage.getItem("SESSION_USER_NAME"))
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>

    .index {
        padding-bottom: 100px;
        background: linear-gradient(#b3d6e8 0%, #f9f9f9 20%);
        min-height: 100vh;
        box-sizing: border-box;
        .title {
            height: 100px;
            text-align: center;
            line-height: 100px;
            color: #fff;
        }
        .header-group {
            padding: 30px;
        }
        .header {
            display: flex;
            padding: 10px 10px 30px;
            align-items: center;
            .right {
                padding-left: 20px;
                h4 {
                    font-size: 32px;
                    margin-bottom: 26px;
                }
                p {
                    font-size: 24px;
                    color: #777;
                    span {
                        color: #999;
                    }
                }
            }
        }
        .serve {
            background: #fff;
            margin-top: 16px;
            border-radius: 16px;
            h4 {
                font-size: 30px;
                padding-left: 20px;
                height: 70px;
                line-height: 70px;
                border-bottom: #f9f9f9 solid 1px;
            }
            /deep/.van-grid-item__text {
                color: #777;
            }
        }
    }
</style>
