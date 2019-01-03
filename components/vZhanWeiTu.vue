<template>
  <div class="zhanweitu">
    <img :src="$store.state.env.imgRootUrl + imgJsonObj.modelImgUrl" style="width: 12.8rem;height: 4.94rem;">
    <div class="navigate">
      <div class="breadcrumb_url">您当前的位置: </div>
      <nuxt-link :to="{path: '/'}" >
        <div class="breadcrumb_url"><a>首页</a></div>
      </nuxt-link>
      <nuxt-link v-for="(item,index) in crumbsList" :key="index" :to="{ path: item.pathMoudle }">
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
        return [
          {
            name: '业务领域',
            pathMoudle: '/yewulingyu/1'
          }
        ]
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
  watch: {
    crumbsList: {
      handler(newValue, oldValue) {
        console.log('------------------1-----------1han-')
        console.log('1-----------1han-newValue: ', newValue)
        console.log('1-----------1han-oldValue: ', oldValue)
        this.crumbsList = newValue
      },
      // 深度观察监听
      deep: true
    },
    imgJsonObj: {
      handler(newValue, oldValue) {
        console.log('------------------222---------2han-')
        console.log('------222---------2han-newValue: ', newValue)
        console.log('------222---------2han-oldValue: ', oldValue)
        this.imgJsonObj = newValue
      },
      // 深度观察监听
      deep: true
    }
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
      color: #515862;
    }
  }
}
</style>
