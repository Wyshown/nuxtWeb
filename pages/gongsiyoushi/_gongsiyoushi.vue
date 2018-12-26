<template>
  <main class="yewulingyu">
    <v-zhan-wei-tu :imgJsonObj="imgJsonObjModule" :crumbsList="crumbsList"/>
    <div class="clear" style="min-height: 5rem;">
      <v-left-tree :listModuleJson="gongSiYoushiData" :selectedList="selectYeWuLingYu" :moduleName="moduleNameData"/>
      <!--详情页面-->
      <div class="float_ul clear" style="padding-bottom:1rem;width: 7.05rem;margin-top: 0.72rem;margin-left: 0.72rem;margin-right: 1.84rem;border-top: 1px solid #515862;">
        <div id="han" style="line-height: 24px;color: #515862;font-family: MicrosoftYaHei;" v-html="gongSiYoushiDetail.themeDetails"/>
      </div>
    </div>
  </main>
</template>
<script>
import vZhanWeiTu from '~/components/vZhanWeiTu.vue'
import vLeftTree from '~/components/vLeftTree.vue'
import gongSiYoushiJson from '~/static/json/home/gongsiyoushi.json' // 公司优势
let base64 = require('js-base64').Base64

export default {
  components: {
    vZhanWeiTu,
    vLeftTree
  },
  data() {
    return {
      moduleNameData: '公司优势',
      // 公司优势
      gongSiYoushiData: [],
      selectYeWuLingYu: '',
      // 传入 vListModule 组件中的值
      listModuleData: [],
      // 面包屑
      crumbsList: [],
      // 占位大图
      imgJsonObjModule: {
        name: '境外培训',
        modelImgUrl: 'changcheng/6erjiyemian/1.png'
      },
      // 公司优势的详情页面信息
      gongSiYoushiDetail: {}
    }
  },
  beforeMount() {
    // 获得路径上的参数, 选择左侧树菜单
    this.selectYeWuLingYu = this.$route.params.gongsiyoushi
    // 公司优势
    this.gongSiYoushiData = gongSiYoushiJson

    console.log('this.gongSiYoushiData', this.gongSiYoushiData)
    console.log('selectYeWuLingYu:', this.selectYeWuLingYu - 1)

    this.gongSiYoushiDetail = this.gongSiYoushiData[this.selectYeWuLingYu - 1]

    this.gongSiYoushiDetail = JSON.parse(
      JSON.stringify(this.gongSiYoushiDetail)
    )
    console.log('this.gongSiYoushiDetail-----1', this.gongSiYoushiDetail)
    this.gongSiYoushiDetail.themeDetails = base64.decode(
      this.gongSiYoushiDetail.themeDetails
    )
    console.log('this.gongSiYoushiDetail-----2', this.gongSiYoushiDetail)

    // 添加面包屑
    this.pushCrumbsList()
  },
  methods: {
    pushCrumbsList() {
      // 动态放置 公司优势
      let crumb = {
        name: '公司优势',
        pathMoudle: '/gongsiyoushi/1'
      }
      // 动态放置 公司优势的
      let pushCrumb = {
        name: '',
        pathMoudle: ''
      }

      // 把 公司优势 的 面包屑 添加到列表中
      this.crumbsList.push(crumb)

      // 动态取出 公司优势 下的二级分类加入到 面包屑 中
      for (var i = 0; i < this.gongSiYoushiData.length; i++) {
        // 动态添加公司优势二级页面
        if (this.selectYeWuLingYu === this.gongSiYoushiData[i].id) {
          console.log('动态添加公司优势二级页面:', this.gongSiYoushiData[i])
          pushCrumb.name = this.gongSiYoushiData[i].modelName
          pushCrumb.pathMoudle = this.gongSiYoushiData[i].skipUrl
          // 占位大图
          this.imgJsonObjModule.name = this.gongSiYoushiData[i].modelName
          this.imgJsonObjModule.modelImgUrl = this.gongSiYoushiData[
            i
          ].modelImgUrl
          console.log('this.imgJsonObjModule,', this.imgJsonObjModule)

          this.crumbsList.push(pushCrumb)
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.yewulingyu {
  background: #f4f4f4;
}
</style>
<style lang="scss">
#han ul,
#han li {
  list-style: disc;
}
#han ul {
  padding-left: 0.4rem;
}
</style>
