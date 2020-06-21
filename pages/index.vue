<template lang="pug">
  div
    h1 Index
    input(type="text" v-model="text")
    TextComp(:sourceText="this.$store.state.storeText.text" @click.native="putAndTakeText")
</template>

<script>
import TextComp from '@/components/TextComp'
export default {
  components: {
    TextComp
  },
  head() {
    return {
      title: 'Главная'
    }
  },
  data: () => {
    return {
      text: '',
    }
  },
  methods: {
    putAndTakeText() {
      this.$store.commit('storeText/changeText', this.text);
    },
  },
}
</script>

<style scoped lang="scss">
  input{
    margin-bottom: 16px;
  }
</style>
