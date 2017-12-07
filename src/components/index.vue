<template>
  <div class="index">
    <my-header></my-header>
    <my-body></my-body>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import myHeader from '@/components/header'
  import myBody from '@/components/body'
  import myFooter from '@/components/footer'
  export default {
    name: 'index',
    components: {
      'myHeader': myHeader,
      'myBody': myBody,
      'myFooter': myFooter
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .index{
    position: relative;
  }
</style>
