<template>
    <div class="list">
        <div class="top">
            <h4>{{message.deviceName}}</h4>
            <p>{{formatDate(message.alarmTime)}}</p>
        </div>
        <div class="bottom">
            {{message.alarmName}}
        </div>
    </div>
</template>

<script>
    import moment from 'moment'

    export default {
        name: "AlarmInfo",
        props: ['message'],
        methods: {
            formatDate(v) {
                return moment(v).format('YYYY年MM月DD日 HH:mm')
            }
        },
        data() {
            return {
            };
        }
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
</style>
