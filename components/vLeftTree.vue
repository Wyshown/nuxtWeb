<template>
  <div class="left_tree">
    <div class="float_ul" style="width: 1.35rem;padding-left: 1.84rem;margin-top: 0.4rem;">
      <p class="yewulingyu_theme">{{ moduleName }}</p>
      <div>
        <div v-for="(item,index) in listModuleJson" :key="index" :class="{'bannerActive':selectedList === item.id}" class="catalog">
          <nuxt-link :to="{path: item.skipUrl}">
            <p class="ilb">{{ item.modelName }}</p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    listModuleJson: {
      type: Array,
      default: () => {
        return []
      }
    },
    moduleName: {
      type: String,
      default: () => {
        return '业务领域'
      }
    },
    selectedList: {
      type: String,
      default: () => {
        return ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.left_tree {
  .catalog {
    width: 1.35rem;
    height: 0.35rem;
    background: #fff;
    border: 1px solid #072871;
    border-radius: 0.1rem;
    text-align: center;
    margin-top: 0.13rem;
    p {
      height: 0.17rem;
      font-size: 0.16rem;
      font-weight: bold;
      color: #072871;
      line-height: 0.37rem;
    }
  }
  .yewulingyu_theme {
    width: 0.93rem;
    height: 0.21rem;
    font-size: 0.22rem;
    font-weight: 400;
    color: #515862;
  }
  .bannerActive {
    background-color: #004a8f;
    cursor: pointer;
    p {
      color: #fff;
    }
  }
  .bannerActive:hover {
    color: #fff;
  }
  .catalog:hover:not(.bannerActive) {
    background-color: #d1eaff;
    a {
      color: #004a8a;
    }
  }
}
</style>
