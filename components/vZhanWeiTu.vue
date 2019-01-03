<template>
  <div class="zhanweitu">
    <img v-lazy="$store.state.env.imgRootUrl + imgJsonObj.modelImgUrl" style="width: 12.8rem;height: 4.94rem;">
    <div class="navigate">
      <div class="breadcrumb_url">您当前的位置: </div>
      <nuxt-link :to="{path: '/'}" >
        <div class="breadcrumb_url"><a>首页</a></div>
      </nuxt-link>
      <nuxt-link v-for="(item,index) in aa" :key="index" :to="{ path: item.pathMoudle }">
        <div class="breadcrumb_url">&nbsp;/</div>
        <div :to="{path: '/'}" class="breadcrumb_url"><a>{{ item.name }}</a></div>
      </nuxt-link>
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
          name: '',
          modelImgUrl: ''
        }
      }
    }
  },
  data() {
    return {
      aa: []
    }
  },
  beforeMount() {
    this.aa = this.crumbsList
  },
  mounted() {
    console.log('imgJsonObj-------,', this.imgJsonObj)
    console.log('面包屑-------,', this.crumbsList)
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
  .breadcrumb_url {
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    height: 0.16rem;
    font-size: 0.16rem;
    line-height: 0.16rem;
    color: #515862;
    a {
      height: 0.16rem;
      font-size: 0.16rem;
      height: 100%;
    }
  }
}
</style>
