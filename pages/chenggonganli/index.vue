<template>
  <main class="chengGongAnLi">
    <v-zhan-wei-tu :imgJsonObj="imgJsonObjModule" :crumbsList="crumbsList"/>
    <div style="padding-bottom: 0.89rem;width: 9.11rem;margin: 0.52rem auto 0;border-top: 1px solid #515862;">
      <div class="divClass" style="margin-top: 0.71rem;">
        <img v-for="(item,index) in chengGongAnLiImgData" :key="index" :src="$store.state.env.imgRootUrl + item.smallModelImgUrl" class="imgClass">
      </div>
      <div style="margin-top: 0.26rem;">
        <p class="p1Class ilb">部分客户</p>
        <p class="p2Class ilb">
          审计署、环境保护部、商务部、国土资源部、科技部、供销总社、河北外专局、云南外专局、广西外专局、黑龙江外专局、天津市政府、江苏省外专
          局、北京市委组织部、玉林&哈德森友好城市、武汉市委、市长考察团万达集团管理层培训、冷酸灵百人游学、中粮集团培训德勤会计师学院培训团、中
          国银行培训考察团、中国农业银行培训团、西安交通大学EMBA班、上海交通大学EMBA班四川大学EMBA班、北京大学总裁班、华中科技大学EMBA班、
          人民大学EDP商学院、上海国家会计学院EMBA班、清华大学EDP总裁班
        </p>
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
      // 成功案例图片数据
      chengGongAnLiImgData: [],
      // 占位大图
      imgJsonObjModule: {
        name: '成功案例',
        modelImgUrl: 'changcheng/6erjiyemian/9.png'
      }
    }
  },
  beforeMount() {
    // 添加面包屑
    this.pushCrumbsList()
  },
  mounted() {
    this.chengGongAnLiImgData = this.$store.state.smallImg.chengGongAnLiJson
    console.log('chengGongAnLiImgData', this.chengGongAnLiImgData)
    console.log('chengGongAnLiImgData', this.$store.state)
  },
  methods: {
    pushCrumbsList() {
      // 动态放置 业务领域
      let yeWuLingYuCrumb = {
        name: '成功案例',
        pathMoudle: '/chenggonganli'
      }

      // 把 成功安利 的 面包屑 添加到列表中
      this.crumbsList.push(yeWuLingYuCrumb)
    }
  }
}
</script>
<style lang="scss" scoped>
.chengGongAnLi {
  background: #f4f4f4;
  .imgClass {
    width: 2.92rem;
    height: 2.26rem;
    margin-bottom: 0.34rem;
  }
  .divClass img:nth-child(3n + 2) {
    margin-left: 0.13rem;
    margin-right: 0.13rem;
  }
  .p1Class {
    width: 0.64rem;
    height: 0.16rem;
    font-size: 0.16rem;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: #a09196;
    line-height: 0.21rem;
  }
  .p2Class {
    width: 8.85rem;
    height: 0.78rem;
    font-size: 0.14rem;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: #a09196;
    line-height: 0.21rem;
    margin-top: 0.15rem;
  }
}
</style>
