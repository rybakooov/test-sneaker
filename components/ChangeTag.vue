<script>
  export default {
    props: {
      link: {
        type: String,
        required: false,
      }
    },
    render: function (createElement) {
      if(this.link == undefined){
        return createElement(
          'p',
          this.$slots.default
        )
      } else {
        return createElement(
          'a',
          {
            attrs: {
              href: this.link
            },
          },
          this.$slots.default
        )
      }
    },
    mounted() {
      console.log(this.link);
      
    }
  }
</script>

<style lang="scss" scoped>

</style>