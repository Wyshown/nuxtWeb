<template>
  <div class="zhanweitu">
    <img v-lazy="$store.state.env.imgRootUrl + imgJsonObj.modelImgUrl" >
    <div class="navigate">
      <el-breadcrumb class="bread_box" separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item,index) in crumbsList" :key="index" :to="{ path: item.pathMoudle }">{{ item.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // 面包屑
    crumbsList: {
      type: Array,
      default: () => {
        return []
      }
    },
    imgJsonObj: {
      type: Object,
      default: () => {
        return {
          name: '境外培训',
          modelImgUrl: 'changcheng/6erjiyemian/1.png'
        }
      }
    }
  },
  mounted() {
    console.log(this.$store.state.env.imgRootUrl + this.imgJsonObj.modelImgUrl)
  }
}
</script>
<style lang="scss" scoped>
.zhanweitu {
  .navigate {
    margin-top: 0.48rem;
    margin-left: 1.82rem;
    background: #f4f4f4;
  }
}
</style>
