<template>
  <div class="my-body">
    <router-view></router-view>
  </div>
</template>

<script>
import { getRoute } from '@/common/common.js'
export default {
  name: 'body',
  data () {
    return {
    }
  },
  created () {
    this.$router.push({name: getRoute()})
  }
}
</script>
<style scoped>
.my-body{
  font-size: 14px;
}
</style>
