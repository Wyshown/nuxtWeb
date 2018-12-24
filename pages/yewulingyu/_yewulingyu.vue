<template>
  <main class="yewulingyu">
    <v-zhan-wei-tu :imgJsonObj="imgJsonObjModule" :crumbsList="crumbsList"/>
    <div class="clear" style="min-height: 5rem;">
      <v-left-tree :yewufanweiJson="yewufanweiData" :selectedList="selectYeWuLingYu"/>
      <v-list-module :listModule = "listModuleData"/>
    </div>
  </main>
</template>
<script>
import vZhanWeiTu from '~/components/vZhanWeiTu.vue'
import vLeftTree from '~/components/vLeftTree.vue'
import vListModule from '~/components/vListModule.vue'
import yewufanweiJson from '~/static/json/home/yewufanwei.json' // 业务范围
export default {
  components: {
    vZhanWeiTu,
    vLeftTree,
    vListModule
  },
  data() {
    return {
      // 业务范围
      yewufanweiData: [],
      selectYeWuLingYu: '',
      // 传入 vListModule 组件中的值
      listModuleData: [],
      // 面包屑
      crumbsList: [],
      // 占位大图
      imgJsonObjModule: {
        name: '境外培训',
        modelImgUrl: 'changcheng/6erjiyemian/1.png'
      }
    }
  },
  beforeMount() {
    // 境外培训
    if (this.$route.params.yewulingyu === '1') {
      this.listModuleData = this.$store.state.yeWuLingYu.jingWaiPeiXunJson
    }
    // 境外考察
    else if (this.$route.params.yewulingyu === '2') {
      this.listModuleData = this.$store.state.yeWuLingYu.jingWaiKaoChaJson
    }
    // 人才引进
    else if (this.$route.params.yewulingyu === '3') {
      this.listModuleData = this.$store.state.yeWuLingYu.renCaiYinJinJson
    }
    // 会议会展
    else if (this.$route.params.yewulingyu === '4') {
      this.listModuleData = this.$store.state.yeWuLingYu.huiYiHuiZhanJson
    }
    // 项目实习
    else if (this.$route.params.yewulingyu === '5') {
      this.listModuleData = this.$store.state.yeWuLingYu.xiangMuShiXiJson
    }
    // 境外培训
    else {
      this.listModuleData = this.$store.state.yeWuLingYu.jingWaiPeiXunJson
      console.log('121321321')
    }
    console.log('this.$route.params.yewulingyu, this.listModuleData')
    console.log(this.$route.params.yewulingyu, this.listModuleData)
  },
  mounted() {
    // 业务范围
    this.yewufanweiData = yewufanweiJson
    // 选中的业务领域
    this.selectYeWuLingYu = this.$route.params.yewulingyu
    if (!this.selectYeWuLingYu) {
      this.selectYeWuLingYu = '1'
    }
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

      // 动态取出 业务领域 下的二级分类加入到 面包屑 中
      for (var i = 0; i < this.yewufanweiData.length; i++) {
        // 动态添加业务领域二级页面
        if (this.selectYeWuLingYu === this.yewufanweiData[i].id) {
          pushYeWuLingYuCrumb.name = this.yewufanweiData[i].modelName
          pushYeWuLingYuCrumb.pathMoudle = this.yewufanweiData[i].skipUrl
          // 占位大图
          this.imgJsonObjModule.name = this.yewufanweiData[i].modelName
          this.imgJsonObjModule.modelImgUrl = this.yewufanweiData[i].modelImgUrl
          this.crumbsList.push(pushYeWuLingYuCrumb)
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
