<template>
  <router-link class="list" to="/structure/detail/video-item/detail">
    <div class="title">
      标题XXX
    </div>
    <div class="con">
      视频内容
    </div>
  </router-link>
</template>

<script>
    export default {
        name: "VideoItemThumb"
    }
</script>

<style lang="scss" type="text/scss" scoped>
.list {
  background: #fff;
  margin-bottom: 16px;
  display: block;
  border-radius: 16px;
  .title {
    padding: 20px;
    font-size: 28px;
    border-bottom: 1px solid #f9f9f9;
  }
  .con {
    height: 200px;
    padding: 20px;
    font-size: 24px;
    color: #ccc;
  }
}
</style>