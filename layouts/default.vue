<template>
  <div style="background-color: #e5e5e5">
    <!--此处为公众头部信息-->
    <div class="fixed-head shouye" style="width: 12.8rem;height: 0.80rem;margin:0px auto;background: #FFFFFF;display: flex;align-items: center;">
      <a href="/">
        <img class="ilb float_ul" style="margin-left: 1.85rem;width: 1.55rem;height: 0.48rem;" src="~/static/img/logo.png">
      </a>
      <ul class="ilb float_ul" style="font-size: 0.17rem;margin-left: 1.55rem;height: 0.80rem;">
        <nuxt-link
          v-for="(headList,index) in headListData" :key="index"
          :to="{path: headList.url}"
          :class="{'active':headList.enName==navigationSelect}"
          tag="li">
          <a>
            {{ headList.name }}
          </a>
        </nuxt-link>
      </ul>
    </div>
    <!--此处插入中间部分-->
    <div style="width: 12.8rem;margin:0px auto;">
      <nuxt/>
    </div>
    <!--此处插入底部部分-->
    <div style="width: 12.8rem;margin:0px auto;height: 3.76rem;background-color: #072871">
      <div style="height: 0.95rem;">
        <p class="ilb wangzhandaohang">网站导航</p>
      </div>
      <div style="margin-left: 1.83rem;border-bottom: 1px solid #284689;border-top: 1px solid #284689;margin-right: 1.6rem;display: flex;justify-content: space-between;">
        <div v-for="(item,index) in footListData" :key="index">
          <p class="ilb bottom_group">{{ item.bottom_name }}</p>
          <ul style="margin-top: 0.23rem;">
            <li v-for="(subItem,subIndex) in item.bottom_list" :key="subIndex" class="button_skip_p">
              <a :target="subItem.skipForm" :href="subItem.skipUrl">{{ subItem.modelName }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p class="ilb banquanshuoming">美国长城国际 版权所有  GW International USA Inc. © Copyright 2018.        咨询电话：010-82515598        邮件：gwinternational@mail.com </p>
      </div>
    </div>
  </div>
</template>
<script>
import headJson from '~/static/json/head.json'
import footJson from '~/static/json/foot.json'
export default {
  data() {
    return {
      headListData: headJson,
      footListData: footJson,
      navigationSelect: ''
    }
  },

  watch: {
    $route: {
      handler: function() {
        this.navigationSelect = this.$route.name
        console.log('this.$route: ', this.$route)
        this.selectNavigation()
      },
      // 深度观察监听
      deep: true
    }
  },
  beforeMount() {
    this.headListData = headJson
    this.footListData = footJson
    this.navigationSelect = this.$route.name
    this.selectNavigation()
    console.log('this.$route: ', this.$route)
  },
  methods: {
    selectNavigation() {
      // 业务领域
      if (this.navigationSelect.includes('yewulingyu')) {
        this.navigationSelect = 'yewulingyu-yewulingyu'
      }
      // 公司优势
      else if (this.navigationSelect.includes('gongsiyoushi')) {
        this.navigationSelect = 'gongsiyoushi-gongsiyoushi'
      }
      // 成功案例
      else if (this.navigationSelect.includes('chenggonganli')) {
        this.navigationSelect = 'chenggonganli'
      }
      // 美国概况
      else if (this.navigationSelect.includes('meiguogaikuang')) {
        this.navigationSelect = 'meiguogaikuang'
      }
      // 关于我们
      else if (this.navigationSelect.includes('aboutus')) {
        this.navigationSelect = 'aboutus'
      }
      // 首页
      else {
        this.navigationSelect = 'index'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.shouye {
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  li {
    float: left;
    display: inline-block;
    height: 0.8rem;
    vertical-align: middle;
    text-align: center;
    line-height: 0.8rem;
    padding: 0 0.3rem;
  }

  li a {
    display: block;
    color: #515862;
    text-align: center;
    text-decoration: none;
  }

  li:hover:not(.active) {
    background-color: #d1eaff;
    a {
      color: #004a8a;
    }
  }
  .active {
    background-color: #004a8a;
    a {
      color: white;
    }
  }
  .nuxt-link-exact-active {
    background-color: #004a8a;
    color: white;
    a {
      color: inherit;
    }
  }
}
.wangzhandaohang {
  width: 0.89rem;
  height: 0.22rem;
  font-size: 0.22rem;
  font-weight: 400;
  color: #fff;
  line-height: 0.22rem;
  margin-left: 1.83rem;
  margin-top: 0.56rem;
}
.banquanshuoming {
  margin-left: 1.83rem;
  /*height: 0.15rem;*/
  font-size: 0.12rem;
  font-weight: 400;
  color: #ffffff;
  line-height: 0.22rem;
  margin-top: 0.24rem;
}
.bottom_group {
  height: 0.18rem;
  margin-top: 0.29rem;
  font-size: 0.17rem;
  font-weight: 400;
  color: #fff;
  line-height: 0.22rem;
}
.button_skip_p {
  font-size: 0.13rem;
  font-weight: 400;
  color: #8db0ff;
  margin-bottom: 0.1rem;
  a {
    color: #8db0ff;
  }
}
</style>
