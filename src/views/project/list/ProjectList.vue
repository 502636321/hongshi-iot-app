<template>
    <div>
        <van-sticky>
            <van-nav-bar title="监测项目" />
            <van-search v-model="searchValue" placeholder="请输入项目名称" @search="onSearch" />
            <div>
                <van-dropdown-menu>
                    <van-dropdown-item v-model="projectTypeModelOption" :options="projectTypeModel" />
                </van-dropdown-menu>
            </div>
        </van-sticky>
        <van-list class="list-group" v-model="loading" :finished="finished" finished-text="没有更多了" @load="loadData">
            <project-info v-for="(item, index) in data" :key="index" :project="item" >
            </project-info>
        </van-list>
    </div>
</template>

<script>
    import ProjectInfo from "@/views/project/list/ProjectInfo";

    export default {
        name: "ProjectList",
        data() {
            return {
                data: [{id: 'ffee1e43-2862-4e5e-96a5-f82acca4e325'}],
                loading: false,
                finished: false,
                searchValue: '',
                projectTypeModel: [
                    { text: '全部项目', value: 0 },
                    // { text: '新款商品', value: 1 },
                    // { text: '活动商品', value: 2 }
                ],
                projectTypeModelOption: 0
            }
        },
        components: {
            ProjectInfo
        },
        methods: {
            loadData() {
                this.loading = false;
                this.finished = true;
            },
            onSearch() {
                alert('搜索项目')
            },

        }
    }
</script>

<style scoped>

</style>
