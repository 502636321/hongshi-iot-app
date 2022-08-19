<template>
    <div>
        <van-nav-bar
                :title="project.name"
                left-text="返回"
                left-arrow
                @click-left="onClickBack()"
        />
        <van-tabs v-model="activeTabKey" type="card">
            <van-tab v-for="tab in activeTabs" :key="tab.id" :title="tab.text">
                <info v-if="tab.id == 'info'" :data="project"/>
                <media v-else-if="tab.id == 'media'" :data="tab.data || []"/>
                <category v-else :data="tab.data || []"/>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import Info from "@/views/project/detail/Info";
    import Media from "@/views/project/detail/Media";
    import Category from "@/views/project/detail/Category";

    import { findProject } from '@/api/project'

    export default {
        name: "ProjectDetail",
        components: {
            Info,
            Media,
            Category
        },
        data() {
            return {
                projectId: '',
                activeTabs: [{
                    id: 'info',
                    text: '项目信息'
                }],
                activeTabKey: 'info',
                project: {
                    name: '正在获取...'
                }
            }
        },
        methods: {
            onClickBack() {
                this.$router.go(-1)
            }
        },
        created() {
            this.projectId = this.$route.query.projectId;
            console.log(this.projectId);
            findProject(this.projectId).then((result) => {
                this.project = result;

                //视频判断
                console.log(this.project.media)
                if (this.project && this.project.media && this.project.media.length > 0) {
                    this.activeTabs.push({
                        id: 'media',
                        text: '视频监控',
                        data: this.project.media
                    });
                }

                if (this.project && this.project.category && this.project.category.length > 0) {
                    this.project.category.forEach(item => {
                        this.activeTabs.push({
                            id: item.id,
                            text: item.name,
                            data: item.device || []
                        })
                    })
                }
            })
        },
    }
</script>

<style scoped>

</style>
