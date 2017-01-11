<template>
    <div class="header">
        <div class="content-wrapper">
          <div class="avatar">
            <img width="64" height="64" :src="seller.avatar">
          </div>
        </div>
    </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

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
