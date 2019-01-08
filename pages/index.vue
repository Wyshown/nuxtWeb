<template>
  <main class="home">
    <!--轮播图-->
    <el-carousel height="4.95rem" style="overflow: hidden;" >
      <el-carousel-item v-for="(item,index) in lunboData" :key="index">
        <nuxt-link :to="{path: item.skipUrl}">
          <img :src="$store.state.env.imgRootUrl + item.modelImgUrl">
        </nuxt-link>
      </el-carousel-item>
    </el-carousel>
    <!--业务范围-->
    <div style="height: 3.64rem;background-color: #f4f4f4">
      <p class="fontSizeTitle" style="display: inline-block;">业务范围</p>
      <div style="margin-top: 0.46rem; display: flex;justify-content: space-around;padding: 0 1.83rem;">
        <div v-for="(item,index) in yewufanweiData" :key="index" class="img_hover_big" style="height: 1.98rem;width: 1.36rem">
          <nuxt-link :to="{path: item.skipUrl}">
            <img :src="$store.state.env.imgRootUrl + item.smallModelImgUrl" style="width: 1.36rem;height: 1.55rem;">
            <span class="fontSizeContent">{{ item.modelName }}</span>
          </nuxt-link>
        </div>
      </div>
    </div>
    <!--公司优势-->
    <div class="mainCss" style="height: 3.34rem">
      <p class="fontSizeGongSiYouShiTitle" style="display: inline-block;">公司优势</p>
      <div style="margin-top: 0.46rem; display: flex;justify-content: space-around;padding: 0 2.08rem;">
        <div v-for="(item,index) in gongsiyoushiData" :key="index" style="height: 1.58rem;width: 1.32rem;text-align: center;">
          <nuxt-link :to="{path: item.skipUrl}">
            <div style="margin: 0 0.19rem;width: 0.94rem;height: 0.94rem;border-radius: 50%;background-color: #80a5c5;border: 0.02rem solid #fff;">
              <p style="display: inline-block;line-height: 0.94rem;width: 100%;height: 100%;text-align: center;color: #fff">{{ item.modelName }}</p>
            </div>
            <span class="fontSizeGongSiYouShiContent" v-html="item.modelBrief"/>
          </nuxt-link>
        </div>
      </div>
    </div>
    <!--成功案例-->
    <div style="background-color: #f4f4f4">
      <p class="fontSizeChengGongAnLiTitle" style="display: inline-block;">成功案例</p>
      <div class="chenggonganli clear" style="margin-top: 0.46rem; padding: 0 1.83rem;">
        <div v-for="(item,index) in chenggonganliData" :key="index" class="float_ul img_hover_big" style="height: 1.14rem;width: 4.46rem;margin-bottom: 20px;">
          <nuxt-link :to="{path: item.skipUrl}">
            <img :src="$store.state.env.imgRootUrl + item.smallModelImgUrl" class="float_ul" style="width: 1.36rem;height: 1.14rem;">
            <div class="float_ul" style="width: 2.7rem;padding: 0 0.2rem;background-color: #fff;height: 1.14rem;">
              <span class="ilb fontSizeChengGongAnLiTitleContent" style="margin-top: 0.14rem;">{{ item.modelName }}</span>
              <span class="ilb fontSizeChengGongAnLiTitlIentro" style="margin-top: 0.12rem;">{{ item.modelBrief }}</span>
              <span class="ilb fontSizeChengGongAnLiGengDuo">更多</span>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
    <!--美国概况-->
    <div class="meiguoGaiKuang">
      <p class="fontSizeMeiGuoGaiKuangTitle" style="display: inline-block;">美国概况</p>
      <nuxt-link to="/meiguogaikuang">
        <div class="img_hover_big" style="margin-top: 0.46rem; padding: 0 1.83rem;border-bottom: 0.87rem solid #f4f4f4;">
          <el-carousel :interval="3000" indicator-position="none" height="1.55rem;">
            <el-carousel-item v-for="(item,index) in meiguogaikuangData" :key="index">
              <img v-for="(subItem,subIndex) in item" :key="subIndex" :src="$store.state.env.imgRootUrl + item[subIndex].smallModelImgUrl" style="height: 1.55rem;width: 1.35rem;" >
            </el-carousel-item>
          </el-carousel>
        </div>
      </nuxt-link>
    </div>
  </main>
</template>
<script>
import lunboJson from '~/static/json/home/lunbo.json' // 首页轮播
import yewufanweiJson from '~/static/json/home/yewufanwei.json' // 业务范围
import gongsiyoushiJson from '~/static/json/home/gongsiyoushi.json' // 公司优势
import chenggonganliJson from '~/static/json/home/chenggonganli.json' // 成功案例
import meiguogaikuangJson from '~/static/json/home/meiguogaikuang.json' // 美国概况

export default {
  data() {
    return {
      // 轮播数据
      lunboData: [],
      // 业务范围
      yewufanweiData: [],
      // 公司优势
      gongsiyoushiData: [],
      // 成功案例
      chenggonganliData: [],
      // 美国概况
      meiguogaikuangData: []
    }
  },
  mounted() {
    this.lunboData = lunboJson
    this.yewufanweiData = yewufanweiJson
    this.gongsiyoushiData = gongsiyoushiJson
    this.chenggonganliData = chenggonganliJson
    this.meiguogaikuangData = meiguogaikuangJson
  }
}
</script>

<style lang="scss">
.home {
  .el-carousel__button {
    width: 0.15rem;
    height: 0.15rem;
    border-radius: 50%;
  }
  .meiguoGaiKuang {
    background-color: #f4f4f4;
    .el-carousel__item {
      display: flex;
      justify-content: space-between;
      background-color: #f4f4f4;
    }
    .el-carousel__container {
      height: 1.55rem;
      overflow: hidden;
    }
  }
}
</style>
<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 0.18rem;
  opacity: 0.75;
  line-height: 3rem;
  margin: 0;
}
.fontSizeTitle {
  display: inline-block;
  margin-top: 0.56rem;
  text-align: center;
  width: 100%;
  color: #004a8a;
  height: 0.21rem;
  font-size: 0.22rem;
  font-weight: 400;
}
.fontSizeContent {
  font-size: 0.17rem;
  display: inline-block;
  margin-top: 0.23rem;
  text-align: center;
  width: 100%;
  color: #004a8a;
}
.fontSizeGongSiYouShiTitle {
  display: inline-block;
  margin-top: 0.56rem;
  text-align: center;
  width: 100%;
  color: #fff;
  height: 0.21rem;
  font-size: 0.22rem;
  font-weight: 400;
}
.fontSizeGongSiYouShiContent {
  font-size: 0.12rem;
  display: inline-block;
  margin-top: 0.22rem;
  text-align: center;
  width: 100%;
  color: #fff;
}
.fontSizeChengGongAnLiTitle {
  display: inline-block;
  margin-top: 0.56rem;
  text-align: center;
  width: 100%;
  color: #004a8a;
  height: 0.21rem;
  font-size: 0.22rem;
  font-weight: 400;
}
.fontSizeChengGongAnLiTitleContent {
  width: 0.32rem;
  height: 0.17rem;
  font-size: 0.16rem;
  font-weight: 400;
  color: #34141e;
  line-height: 0.16rem;
}
.fontSizeChengGongAnLiTitlIentro {
  height: 0.4rem;
  font-size: 0.12rem;
  font-weight: 400;
  color: #a09196;
  line-height: 0.14rem;
}
.chenggonganli div:nth-child(2n + 1) {
  margin-right: 0.2rem;
}
.fontSizeChengGongAnLiGengDuo {
  height: 0.12rem;
  font-size: 0.12rem;
  font-weight: 400;
  color: #a09196;
  margin-top: 0.12rem;
  text-align: right;
  line-height: 0rem;
  width: 100%;
}
.fontSizeMeiGuoGaiKuangTitle {
  display: inline-block;
  margin-top: 0.34rem;
  text-align: center;
  width: 100%;
  color: #004a8a;
  height: 0.21rem;
  font-size: 0.22rem;
  font-weight: 400;
}
.fontSizeMeiGuoGaiKuangTitleContent {
  width: 0.32rem;
  height: 0.17rem;
  font-size: 0.16rem;
  font-weight: 400;
  color: #34141e;
  line-height: 0.16rem;
}
.fontSizeMeiGuoGaiKuangTitlIentro {
  height: 0.4rem;
  font-size: 0.12rem;
  font-weight: 400;
  color: #a09196;
  line-height: 0.14rem;
}
</style>
