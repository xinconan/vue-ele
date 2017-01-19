<template>
    <div class="header">
        <div class="content-wrapper">
          <div class="avatar">
            <img width="64" height="64" :src="seller.avatar">
          </div>
          <div class="content">
            <div class="title">
              <span class="brand"></span>
              <span class="name">{{seller.name}}</span>
            </div>
            <div class="description">
              {{seller.description}}/{{seller.deliveryTime}}分钟送达
            </div>
            <div class="support" v-if="seller.supports">
              <span class="icon"></span>
              <span class="text">{{seller.supports[0].description}}</span>
            </div>
          </div>
        </div>
    </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header{
    position: relative;
    color: #fff;
    background-color: rgba(7,17,27,.5);
    overflow: hidden;

    .content-wrapper{
      padding: 24px 12px 18px 24px;
      font-size: 0px; // 解决子元素内容不对齐
      position: relative;

      .avatar{
        display: inline-block;
        font-size: 14px;
        vertical-align: bottom;

        .img{
          border-radius: 2px;
        }
      }

      .brand{
        display: inline-block;
        width: 30px;
        height: 18px;
        vertical-align: top;
      }

      .content{
        display: inline-block;
        margin-left: 16px;

        .title{
          margin: 2px 0 8px;

          .name{
            margin-left: 6px;
            font-size: 16px;
            line-height: 18px;
            font-weight: bold;
          }
        }

        .description{
          font-size: 12px;
          line-height: 12px;
          margin: 10px 0;
        }
      }
    }
  }
</style>
<script>
    export default{
      name: 'header',
      props: {
        seller: Object
      },
      data() {
        return {
          msg: 'hello vue'
        };
      }
    };
</script>
