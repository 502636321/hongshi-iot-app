<template>
    <div class="index">
        <h4>洪实监测</h4>
        <div class="logo">
            <img src="@/assets/images/logo.png" alt="">
        </div>
        <van-form @submit="onSubmitLogin">
            <van-field v-model="username" name="username" label="用户名" placeholder="用户名" />
            <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码" />
            <div style="margin: 16px;">
                <van-button round block type="info" :loading="loginLoading" loading-text="正在登录" native-type="submit" >登录</van-button>
            </div>
        </van-form>
<!--        <div class="line">-->
<!--            <van-divider :style="{ color: '#ccc' }" dashed>社交账号快速登录</van-divider>-->
<!--        </div>-->
<!--        <div class="icon-group">-->
<!--            <img class="qq" src="@/assets/images/icon-qq.png" alt="">-->
<!--            <img class="wx" src="@/assets/images/icon-wx.png" alt="">-->
<!--        </div>-->
    </div>
</template>

<script>
    import {login} from '@/api/login';

    export default {
        name: "Login",
        data() {
            return {
                loginLoading: false,
                username: '',
                password: '',
            };
        },
        methods: {
            onSubmitLogin(values) {
                this.loginLoading = true;
                login(values).then(({result}) => {
                    if (result && result.token) {
                        window.localStorage.setItem("SESSION_ACCESS_TOKEN", result.token); //存储访问access_token
                        window.localStorage.setItem("SESSION_USER_NAME", result.user.name);
                        window.localStorage.setItem("SESSION_USER_ID", result.user.id);
                        this.$router.replace({
                            path: '/index'
                        });
                    }
                }).catch(() => {
                    this.$toast.fail('登录失败,请检查用户名或密码')
                }).finally(() => {
                    this.loginLoading = false;
                });
            }
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
    .index {
        padding: 30px;
        h4 {
            font-size: 64px;
            text-align: center;
            padding: 150px 0 50px;
            color: #777;
        }
        .logo {
            text-align: center;
            margin-bottom: 60px;
            img {
                width: 180px;
            }
        }
        .line {
            width: 80%;
            margin: 200px auto 0;
        }
        .icon-group {
            display: flex;
            align-items: center;
            justify-content: center;
            .qq {
                width: 50px;
                margin-right: 30px;
            }
            .wx {
                width: 60px;
            }
        }
    }
</style>
