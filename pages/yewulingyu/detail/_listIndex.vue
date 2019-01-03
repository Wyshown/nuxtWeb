<template>
  <main class="yewulingyu">
    <!--占位图-->
    <v-zhan-wei-tu :imgJsonObj="imgJsonObjModule" :crumbsList="crumbsList"/>
    <div class="clear" style="min-height: 5rem;">
      <!--左侧菜单-->
      <v-left-tree :listModuleJson="yewufanweiData" :selectedList="selectYeWuLingYu"/>
      <!--详情页面-->
      <div class="float_ul" style="line-height: 0.24rem;padding-bottom:1rem;width: 7.05rem;margin-top: 0.72rem;margin-left: 0.72rem;margin-right: 1.84rem;border-top: 1px solid #515862;">
        <section v-html="yeWuFanWeiDetailJson.themeDetails"/>
      </div>
    </div>
  </main>
</template>
<script>
import vZhanWeiTu from '~/components/vZhanWeiTu.vue'
import vLeftTree from '~/components/vLeftTree.vue'
import yewufanweiJson from '~/static/json/home/yewufanwei.json' // 业务范围
let base64 = require('js-base64').Base64

export default {
  components: {
    vZhanWeiTu,
    vLeftTree
  },
  data() {
    return {
      detailId: '',
      // 业务范围
      yewufanweiData: yewufanweiJson,
      selectYeWuLingYu: '',
      // 业务范围列表页的数据, 根据
      listModuleData: [],
      // 面包屑
      crumbsList: [],
      // 占位大图
      imgJsonObjModule: {
        name: '境外培训',
        modelImgUrl: 'changcheng/6erjiyemian/1.png'
      },
      // 业务范围详情页面的Json数据
      yeWuFanWeiDetailJson: {},
      // 当前业务领域二级菜单的对象Json
      yewufanweiObjData: {}
    }
  },
  beforeMount() {
    // 根据导航栏信息 判断出属于哪个范围
    if (this.$route.params.listIndex.includes('_')) {
      // 选中的业务领域
      this.selectYeWuLingYu = this.$route.params.listIndex.slice(0, 1)
      // 当前详情的Id
      this.detailId = this.$route.params.listIndex.slice(2)
    } else {
      // 选中的业务领域
      this.selectYeWuLingYu = ''
      // 当前详情的Id
      this.detailId = this.$route.params.listIndex
    }

    if (this.selectYeWuLingYu === '1') {
      this.listModuleData = this.$store.state.yeWuLingYu.jingWaiPeiXunJson
    }
    // 境外考察
    else if (this.selectYeWuLingYu === '2') {
      this.listModuleData = this.$store.state.yeWuLingYu.jingWaiKaoChaJson
    }
    // 人才引进
    else if (this.selectYeWuLingYu === '3') {
      this.listModuleData = this.$store.state.yeWuLingYu.renCaiYinJinJson
    }
    // 会议会展
    else if (this.selectYeWuLingYu === '4') {
      this.listModuleData = this.$store.state.yeWuLingYu.huiYiHuiZhanJson
    }
    // 项目实习
    else if (this.selectYeWuLingYu === '5') {
      this.listModuleData = this.$store.state.yeWuLingYu.xiangMuShiXiJson
    }
    // 境外培训
    else {
      this.listModuleData = this.$store.state.yeWuLingYu.jingWaiPeiXunJson
    }

    // 业务详情的详情页面数据
    this.yeWuFanWeiDetailJson = this.listModuleData[this.detailId - 1]

    this.yewufanweiObjData = this.yewufanweiData[this.selectYeWuLingYu - 1]
  },
  mounted() {
    this.yeWuFanWeiDetailJson = JSON.parse(
      JSON.stringify(this.yeWuFanWeiDetailJson)
    )
    this.yeWuFanWeiDetailJson.themeDetails = base64.decode(
      this.yeWuFanWeiDetailJson.themeDetails
    )
    // 添加面包屑
    this.pushCrumbsList()
  },
  methods: {
    pushCrumbsList() {
      // 动态放置 业务领域
      let yeWuLingYuCrumb = {
        name: '业务领域',
        pathMoudle: '/yewulingyu/1'
      }
      // 动态放置 业务领域的
      let pushYeWuLingYuCrumb = {
        name: '',
        pathMoudle: ''
      }

      // 把 业务领域 的 面包屑 添加到列表中
      this.crumbsList.push(yeWuLingYuCrumb)

      // 业务领域 下的二级分类加入到 面包屑 中
      pushYeWuLingYuCrumb = {}
      pushYeWuLingYuCrumb.name = this.yewufanweiObjData.modelName
      pushYeWuLingYuCrumb.pathMoudle = '/yewulingyu/' + this.selectYeWuLingYu
      console.log('pushYeWuLingYuCrumb1:', pushYeWuLingYuCrumb)
      this.crumbsList.push(pushYeWuLingYuCrumb)

      // 添加详情页面的 面包绡
      pushYeWuLingYuCrumb = {}
      pushYeWuLingYuCrumb.name = this.yeWuFanWeiDetailJson.themeName
      pushYeWuLingYuCrumb.pathMoudle = ''
      this.crumbsList.push(pushYeWuLingYuCrumb)

      // 占位大图
      this.imgJsonObjModule.name = this.yeWuFanWeiDetailJson.modelName
      this.imgJsonObjModule.modelImgUrl = this.yeWuFanWeiDetailJson.modelImgUrl
    }
  }
}
</script>
<style lang="scss" scoped>
.yewulingyu {
  background: #f4f4f4;
}
</style>
