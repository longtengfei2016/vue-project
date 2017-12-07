<template>
  <div class="my-header">
    <div class="left-head">left</div>
    <div class="right-head">right</div>
  </div>
</template>

<script>
export default {
  name: 'header',
  props: [name],
  data () {
    return {
      meanu: [topic]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-header{
  width: 100%;
  height: 100px;
}
.left-head{
  width: 20%;
  height: 100%;
  float: left;
  background-color: #999;
}
.right-head{
  width: 80%;
  height: 100%;
  background-color: #ddd;
  float: right;
}
</style>
