<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div><div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>

    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header';

const ERR_OK = 0;
export default {
  data() {
    return {
      seller: {}
    };
  },
  created() {
    this.$http.get('/api/seller').then((res) => {
      res = res.body;
      console.log(res);
      if (res.errno === ERR_OK) {
        this.seller = res.data;
      }
    });
  },
  name: 'app',
  components: {
    'v-header': header
  }
};
</script>

<style lang="scss">
  @import "common/scss/mixin";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  .tab{
    display: flex;
    width: 100%;
    height:40px;
    line-height: 40px;
    @include border-bottom(rgba(1, 7, 17, 0.1));


    .tab-item{
      flex: 1;
      text-align:center;

      & > a{
        display: block;
        font-size: 14px;
        color: rgb(77, 85, 93);

        &.active{
          color: rgb(240, 20, 20);
        }
      }
    }
  }
}
</style>
