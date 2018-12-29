<template>
  <main class="yewulingyu">
    <!--占位图-->
    <v-zhan-wei-tu :imgJsonObj="imgJsonObjModule" :crumbsList="crumbsList"/>
    <div class="clear" style="min-height: 5rem;">
      <!--左侧菜单-->
      <v-left-tree :listModuleJson="yewufanweiData" :selectedList="selectYeWuLingYu"/>
      <!--详情页面-->
      <div class="float_ul" style="line-height: 0.24rem;padding-bottom:1rem;width: 7.05rem;margin-top: 0.72rem;margin-left: 0.72rem;margin-right: 1.84rem;border-top: 1px solid #515862;">
        <p v-html="yeWuFanWeiDetailJson.themeDetails"/>
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
      yewufanweiData: [],
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
    // 业务范围
    this.yewufanweiData = yewufanweiJson
    // 境外培训
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
      console.log('--------------1----------------')
      this.listModuleData = this.$store.state.yeWuLingYu.jingWaiPeiXunJson
    }
    // 境外考察
    else if (this.selectYeWuLingYu === '2') {
      console.log('--------------2----------------')
      this.listModuleData = this.$store.state.yeWuLingYu.jingWaiKaoChaJson
    }
    // 人才引进
    else if (this.selectYeWuLingYu === '3') {
      console.log('--------------3----------------')
      this.listModuleData = this.$store.state.yeWuLingYu.renCaiYinJinJson
    }
    // 会议会展
    else if (this.selectYeWuLingYu === '4') {
      console.log('--------------4----------------')
      this.listModuleData = this.$store.state.yeWuLingYu.huiYiHuiZhanJson
    }
    // 项目实习
    else if (this.selectYeWuLingYu === '5') {
      console.log('--------------5----------------')
      this.listModuleData = this.$store.state.yeWuLingYu.xiangMuShiXiJson
    }
    // 境外培训
    else {
      console.log('--------------else----------------')
      this.listModuleData = this.$store.state.yeWuLingYu.jingWaiPeiXunJson
    }

    console.log('listModuleData:', this.listModuleData)
    console.log('detailId:', this.detailId)

    // 业务详情的详情页面数据
    this.yeWuFanWeiDetailJson = this.listModuleData[this.detailId - 1]

    // 业务详情页面的占位图数据
    console.log('---1- ', this.yewufanweiData)
    console.log('---2- ', this.selectYeWuLingYu)

    this.yewufanweiObjData = this.yewufanweiData[this.selectYeWuLingYu - 1]
    console.log('selectYeWuLingYu:', this.selectYeWuLingYu)
    console.log('业务详情的详情页面数据: ', this.yeWuFanWeiDetailJson)
    console.log('业务详情列表页面的数据', this.yewufanweiObjData)
  },
  mounted() {
    console.log('mounted:', this.yeWuFanWeiDetailJson)
    this.yeWuFanWeiDetailJson = JSON.parse(
      JSON.stringify(this.yeWuFanWeiDetailJson)
    )
    this.yeWuFanWeiDetailJson.themeDetails = base64.decode(
      this.yeWuFanWeiDetailJson.themeDetails
    )
    console.log('thisyeWuFanWeiDetailJson:', this.yeWuFanWeiDetailJson)
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
      console.log('业务领域下的二级分类加入到面包屑中:', this.yewufanweiObjData)
      pushYeWuLingYuCrumb = {}
      pushYeWuLingYuCrumb.name = this.yewufanweiObjData.modelName
      pushYeWuLingYuCrumb.pathMoudle = '/yewulingyu/' + this.selectYeWuLingYu
      console.log('pushYeWuLingYuCrumb1:', pushYeWuLingYuCrumb)
      this.crumbsList.push(pushYeWuLingYuCrumb)

      // 添加详情页面的 面包绡
      console.log('添加详情页面的', this.yeWuFanWeiDetailJson)
      pushYeWuLingYuCrumb = {}
      pushYeWuLingYuCrumb.name = this.yeWuFanWeiDetailJson.themeName
      pushYeWuLingYuCrumb.pathMoudle = ''
      console.log('pushYeWuLingYuCrumb2:', pushYeWuLingYuCrumb)
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
