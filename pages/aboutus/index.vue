<template>
  <main class="yewulingyu">
    <v-zhan-wei-tu :imgJsonObj="imgJsonObjModule" :crumbsList="crumbsList"/>
    <div class="clear" style="min-height: 5rem;">
      <v-left-tree :listModuleJson="aboutUsData" :selectedList="selectAboutUs" :moduleName="moduleNameData"/>
      <div class="float_ul" style="line-height: 0.18rem;padding-bottom:1rem;width: 7.05rem;margin-top: 0.72rem;margin-left: 0.72rem;margin-right: 1.84rem;border-top: 1px solid #515862;">
        <p v-html="aboutUsDetail.themeDetails"/>
      </div>
    </div>
  </main>
</template>
<script>
import vZhanWeiTu from '~/components/vZhanWeiTu.vue'
import vLeftTree from '~/components/vLeftTree.vue'
import aboutUsJson from '~/static/json/home/aboutus.json' // 关于我们
let base64 = require('js-base64').Base64

export default {
  components: {
    vZhanWeiTu,
    vLeftTree
  },
  data() {
    return {
      moduleNameData: '关于我们',
      // 关于我们
      aboutUsData: aboutUsJson,
      selectAboutUs: '1',
      // 传入 vListModule 组件中的值
      listModuleData: [],
      // 面包屑
      crumbsList: [],
      // 占位大图
      imgJsonObjModule: {
        name: '关于我们',
        modelImgUrl: 'changcheng/6erjiyemian/11.png'
      },
      // 关于我们的详情页面信息
      aboutUsDetail: {}
    }
  },
  beforeMount() {
    // 公司介绍详情的数据
    this.aboutUsDetail = this.aboutUsData[0]
    // 替换内存中路径, 并解析详情页面数据
    this.aboutUsDetail = JSON.parse(JSON.stringify(this.aboutUsDetail))
    this.aboutUsDetail.themeDetails = base64.decode(
      this.aboutUsDetail.themeDetails
    )
  },
  mounted() {
    // 添加面包屑
    this.pushCrumbsList()
  },
  methods: {
    pushCrumbsList() {
      // 动态放置 关于我们
      let crumb = {
        name: '关于我们',
        pathMoudle: '/gongsiyoushi/1'
      }

      // 把 关于我们 的 面包屑 添加到列表中
      this.crumbsList.push(crumb)

      crumb = {
        name: '公司简介',
        pathMoudle: ''
      }
      this.crumbsList.push(crumb)
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
