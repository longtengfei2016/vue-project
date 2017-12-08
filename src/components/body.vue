<template>
  <div class="my-body">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'body',
  data () {
    return {
    }
  },
  created () {
    this.$router.push({name: 'index'})
  }
}
</script>
<style scoped>
.my-body{
  font-size: 14px;
}
</style>
