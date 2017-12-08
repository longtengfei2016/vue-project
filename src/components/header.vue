<template>
  <div class="my-header">
    <div class="left-head">
      <span class="logo"><img :src="logoSrc" /></span>
    </div>
    <div class="nav">
      <el-menu :default-active="activeIndex"
        class="menu"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="useRouter">
        <el-menu-item index="index">首页</el-menu-item>
        <el-menu-item index="topic">文章</el-menu-item>
        <el-menu-item index="funny">乐趣</el-menu-item>
        <el-menu-item index="me">关于我</el-menu-item>
    </el-menu>
    </div>
    <div class="right-head">right</div>
  </div>
</template>

<script>
import { getRoute } from '@/common/common.js'
export default {
  name: 'header',
  data () {
    return {
      useRouter: true,
      logoSrc: require('../static/logo.jpg')
    }
  },
  methods: {
    handleSelect (index, indexPath) {
      this.$router.push({name: index})
      this.$store.commit('changeRouter', index)
    }
  },
  computed: {
    activeIndex () {
      return getRoute()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-header{
  width: 100%;
  height: 80px;
}
.left-head{
  width: 20%;
  height: 100%;
  float: left;
  background-color: #abdcaa;
  line-height: 80px;
  font-size: 50px;
}
.logo{
  display: inline-block;
  width: 100%;
  height: 100%;
}
.logo>img{
  width: 100%;
  height: 100%;
}
.nav{
  width: 60%;
  height: 100%;
  background-color: #b1deea;
  float: left;
}
.right-head{
  width: 20%;
  height: 100%;
  background-color: #eee;
  float: left;
}
.menu>.el-menu-item{
  width: 150px;
  height: 80px;
  line-height: 80px;
}
</style>
