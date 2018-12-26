<template>
  <main class="chengGongAnLi">
    <v-zhan-wei-tu :imgJsonObj="imgJsonObjModule" :crumbsList="crumbsList"/>
    <div style="height: 0.75rem;"><p class="p2Class ilb">美国概况</p></div>
    <div style="padding-bottom:0.89rem;width: 9.11rem;margin: 0 auto;border-top: 1px solid #515862;">
      <div v-for="(item,index) in meiGuoGaiKuangData" :key="index">
        <p class="p1Class ilb">{{ item.name }}</p>
        <div class="classDiv clear" style="margin-top: 0.17rem;">
          <div v-for="(subItem,subIndex) in item.list" :key="subIndex" class="forClassDiv float_ul">
            <img :src="$store.state.env.imgRootUrl + subItem.smallModelImgUrl" class="imgClass">
            <p class="ilb p3Class">{{ subItem.modelName }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import vZhanWeiTu from '~/components/vZhanWeiTu.vue'
export default {
  components: {
    vZhanWeiTu
  },
  data() {
    return {
      // 面包屑
      crumbsList: [],
      // 美国概况
      meiGuoGaiKuangData: [],
      // 占位大图
      imgJsonObjModule: {
        name: '美国概括',
        modelImgUrl: 'changcheng/6erjiyemian/10.png'
      }
    }
  },
  beforeMount() {
    // 添加面包屑
    this.pushCrumbsList()
  },
  mounted() {
    this.meiGuoGaiKuangData = this.$store.state.smallImg.meiGuoGaiKuangJson
    console.log('meiGuoGaiKuangData', this.$store.state.smallImg)
    console.log('meiGuoGaiKuangData', this.$store.state)
  },
  methods: {
    pushCrumbsList() {
      // 动态放置
      let crumb = {
        name: '美国概括',
        pathMoudle: '/meiguogaikuo'
      }

      // 把 美国概括 的 面包屑 添加到列表中
      this.crumbsList.push(crumb)

      crumb = {
        name: '特色风情',
        pathMoudle: ''
      }
      this.crumbsList.push(crumb)
    }
  }
}
</script>
<style lang="scss" scoped>
.chengGongAnLi {
  background: #f4f4f4;
  .p1Class {
    width: 0.64rem;
    height: 0.16rem;
    font-size: 0.16rem;
    font-weight: 400;
    line-height: 0.21rem;
    color: #072871;
    margin-top: 0.4rem;
  }
  .p2Class {
    width: 0.93rem;
    height: 0.23rem;
    font-size: 0.22rem;
    font-weight: 400;
    color: #515862;
    margin-left: 1.87rem;
    padding-top: 0.4rem;
  }
  .imgClass {
    height: 1.42rem;
    width: 2.08rem;
  }
  .classDiv div {
    margin-left: 0.26rem;
  }
  .classDiv div:nth-child(4n + 1) {
    margin-left: 0px;
  }
  .forClassDiv {
    height: 1.74rem;
    width: 2.08rem;
  }
  .p3Class {
    height: 0.32rem;
    font-size: 0.16rem;
    font-weight: 400;
    color: #515862;
    text-align: center;
    width: 100%;
    margin-top: 0.08rem;
  }
}
</style>
