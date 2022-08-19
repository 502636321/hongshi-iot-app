<template>
    <div class="van-coupon" @click="onClickProject(project.id)">
        <div class="van-coupon__content">
            <div class="van-coupon__body">
                <img src="http://api.fshongshi.com/jetlinks/file/28c8aeacc6cc018166b0dfa787d354d3?:X_Access_Token=a0e41ec766e6fac5a295354a24a4a265">
            </div>
        </div>
        <p class="van-coupon__description">{{project.name || '正在获取...'}}</p>
    </div>
</template>

<script>
    export default {
        name: "ProjectInfo",
        props: {
            project: {
                default: {
                    id: '',
                    name: '正在获取...'
                }
            }
        },
        data() {
            return {
            }
        },
        methods: {
            onClickProject(projectId) {
                console.log(projectId);
                this.$router.push({
                    path: '/project/detail',
                    query: {
                        projectId: projectId
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .van-coupon {
        overflow: hidden;
        border-radius: 4px;
        /*margin: 0 15px 15px;*/
        background-color: #fff;
    }

    .van-coupon__content {
        /*display: -webkit-box;*/
        /*display: -webkit-flex;*/
        /*display: flex;*/
        /*height: 220px;*/
        /*!*padding: 24px 0 0 15px;*!*/
        /*box-sizing: border-box;*/
    }

    .van-coupon__body {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        /*flex: 1;*/
        /*position: relative;*/
        border-radius: 0 4px 4px 0;
    }

    .van-coupon__body img {
        width: 100%;
        /*height: 100%;*/
    }

    .van-coupon__head {
        position: relative;
        min-width: 85px;
        padding-right: 10px;
    }
</style>
