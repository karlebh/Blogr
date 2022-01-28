
<template>
  <div id="app">
    <Header/>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    name: 'App',
    data() {
      return {}
    },
    components: {
      Header,
    },
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }
</style>
