<template>
    <div>
        <div class="list">
            <div class="top">
                <h4>{{info.name || ''}}</h4>
                <p>{{info.describe}}</p>
            </div>
            <div class="bottom text-block">
                {{info.state.text}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DeviceInfo",
        props: ['info']
    }
</script>

<style lang="scss" type="text/scss" scoped>
    .list {
        background: #fff;
        margin-bottom: 16px;
        border-radius: 16px;
        .top {
            border-bottom: 1px solid #f9f9f9;
            padding: 20px;
            h4 {
                font-size: 28px;
                margin-bottom: 16px;
            }
            p {
                font-size: 24px;
                color: #ccc;
            }
        }
        .bottom {
            padding: 20px;
            font-size: 24px;
        }
    }

    .text-block {
        white-space: pre; // or pre-line
    }
</style>
