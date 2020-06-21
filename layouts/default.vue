<template lang="pug">
  main
    Navbar(:routes="this.$store.state.routes.routes")
    .container
      nuxt
    .footer by Rybakov Alexander
        
</template>

<script>
  import Navbar from '@/components/Navbar'
  export default {
    components: {
      Navbar
    },
    data: function(){
      return {
      }
    }
  }
</script>
