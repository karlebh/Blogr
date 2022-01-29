
<template>
  <div id="app">
    <Header/>

    <MobileMain/>
    <DesktopMain/>

    <Footer/>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import MobileMain from '@/components/MobileMain'
  import DesktopMain from '@/components/DesktopMain'
  import Footer from '@/components/Footer'

  export default {
    name: 'App',
    data() {
      return {}
    },
    components: {
      Header,
      MobileMain,
      DesktopMain,
      Footer,
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
