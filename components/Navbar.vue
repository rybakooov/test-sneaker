<template lang="pug">
  .navbar-outer
    .navbar
      nuxt-link(
        v-for="page in routes" 
        :to="page.path" 
        no-prefetch 
        active-class="navbar__link_active" 
        exact
        :key="page.path"
        :class="{navbar__link_logo: page.path == '/'}").navbar__link
        .navbar-logo(v-if="page.path == '/'")
          img(src="@/static/logo.png" v-if="page.path == '/'")
          p(v-if="page.path == '/'") SNEAKERSALE
        p(v-else) {{ page.head.title }}
</template>

<script>
export default {
  props: {
    routes: {
      type: Object,
    }
  },
}
</script>

<style lang="scss">
  .navbar{
    &-outer{
      position: sticky;
      box-shadow: 0px 0px 12px 0px rgba(50, 50, 50, 0.49);
    }
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: stretch;
    padding: 0 16px;
    &__link{
      display: flex;
      align-items: center;
      font-size: 16px;
      padding: 8px 8px;
      transition: .3s;
      &_active:not(.navbar__link_logo){
        background-color: rgba(187, 87, 87, 0.49);
        color: #181818;
      }
      &:not(.navbar__link_logo):not(.navbar__link_active){
        &:hover{
          @media screen and (min-width: 1024px){
            color: rgb(226, 107, 107);
          }
        }
      }
      &_logo{
        color: #181818;
        .navbar-logo{
          display: flex;
          align-items: center;
        }
        img{
          width: 48px;
          margin-right: 20px;
        }
      }
      &:first-child{
        font-size: 18px;
        margin-right: auto !important;
        font-weight: bold;
      }
      &:not(:last-child){
        margin-right: 24px;
      }
    }
  }
</style>