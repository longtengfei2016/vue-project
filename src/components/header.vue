<template>
  <div class="my-header">
    <div class="left-head">LOGO</div>
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
    </el-menu>
    </div>
    <div class="right-head">right</div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      useRouter: true
    }
  },
  methods: {
    handleSelect (index, indexPath) {
      console.log(index)
      console.log(indexPath)
      this.$router.push({name: index})
      this.$store.commit('changeRouter', index)
    }
  },
  computed: {
    activeIndex () {
      return !this.$store.routerName ? 'index' : this.$store.routerName
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
  height: 80px;
  line-height: 80px;
}
</style>
