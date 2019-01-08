<template>
  <div class="listModule">
    <div class="float_ul" style="min-height:6rem;width: 7.05rem;margin-top: 0.72rem;margin-left: 0.72rem;margin-right: 1.84rem;border-top: 1px solid #515862;">
      <div v-for="(item,index) in forListModule" :key="index" class="yewulingyu_for_div clear img_hover_big">
        <nuxt-link :to="{path: '/yewulingyu/detail/' + $route.params.yewulingyu + '_' + ((page - 1) * rows + index + 1)}">
          <img :src="$store.state.env.imgRootUrl + item.themeImgUrl" class="float_ul" style="width: 2.12rem;height: 1.56rem;">
          <div class="float_ul" style="margin-left: 0.36rem;width: 4.57rem;">
            <p class="yewulingyu_title"><span style="color: #515862;">{{ item.themeName }}</span></p>
            <p class="ilb yewulingyu_intro" style="margin-top: 0.14rem;">
              <span style="color: #515862;" v-html="item.themeBrief"/>
            </p>
          </div>
        </nuxt-link>
      </div>
      <el-pagination v-show="listModule.length > 10" :total="total" layout="prev, pager, next" @current-change="handleCurrentChange"/>
    </div>
  </div>
</template>
<script>
let base64 = require('js-base64').Base64

export default {
  props: {
    listModule: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      page: 1,
      rows: 10,
      total: 0,
      forListModule: []
    }
  },
  mounted() {
    console.log('this.listModule', this.listModule)
    this.total = this.listModule.length
    console.log('this.total', this.total)

    this.setForListModule()
  },
  methods: {
    handleCurrentChange(val) {
      this.page = val
      console.log(this.page)

      this.setForListModule()
    },
    setForListModule() {
      // 循环遍历数据
      if (this.page * 10 > this.total) {
        this.forListModule = this.listModule.slice(
          (this.page - 1) * 10,
          this.total
        )
      } else {
        this.forListModule = this.listModule.slice(
          (this.page - 1) * 10,
          this.page * 10
        )
      }
      this.forListModule = JSON.parse(JSON.stringify(this.forListModule))
      for (let val of this.forListModule) {
        val.themeBrief = base64.decode(val.themeBrief)
      }
    }
  }
}
</script>
<style lang="scss">
.listModule {
  .el-pagination {
    margin-bottom: 0.17rem;
  }
}
</style>
<style lang="scss" scoped>
.listModule {
  .yewulingyu_title {
    height: 0.15rem;
    font-size: 0.16rem;
    color: #515862;
  }
  .yewulingyu_intro {
    width: 4.57rem;
    height: 0.48rem;
    font-size: 0.12rem;
    font-weight: 400;
    color: #515862;
    line-height: 0.18rem;
  }
  .yewulingyu_for_div {
    margin-bottom: 0.2rem;
    &:first-child {
      margin-top: 0.13rem;
    }
  }
}
</style>
