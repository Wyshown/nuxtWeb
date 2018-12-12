<template>

  <div>
    <!--此处为公众头部信息-->
    <div style="width: 12.8rem;height: 0.80rem;margin:0px auto;background: #FFFFFF;display: flex;align-items: center;">
      <img class="ilb float_ul" style="margin-left: 1.85rem;" src="~/static/img/logo.png">
      <ul class="ilb float_ul" style="font-size: 0.17rem;margin-left: 1.55rem;height: 0.80rem;">
        <li v-for="(headList,index) in headListData" :key="index" :class="{'active':headList.enName==navigationSelect}" style="height: 0.80rem;">
          <a :href="headList.url" :class="{'activeFont':headList.enName==navigationSelect}" >{{ headList.name }}</a>
        </li>
      </ul>
    </div>
    <!--此处插入中间部分-->
    <div style="width: 12.8rem;margin:0px auto;">
      <nuxt/>
    </div>
    <!--此处插入底部部分-->
  </div>
</template>
<script>
import headJson from '~/static/json/head.json'
export default {
  data() {
    return {
      headListData: [],
      navigationSelect: 'shouye'
    }
  },
  mounted() {
    this.headListData = headJson
    console.log(this.headListData.length)
    console.log(this.headListData)
  }
}
</script>
<style lang="scss" scoped>
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
}
.activeFont {
  color: white;
}
</style>
