<template lang="pug">
  .text
    p.text__title Компонент
    p.text__result Результат: {{this.sourceText}}
</template>

<script>
  export default {
    props: {
      sourceText: {
        type: String,
        required: true
      }
    },
  }
</script>

<style scoped lang="scss">
  .text{
    width: 100%;
    padding: 20px;
    border: 1px solid #181818;
    cursor: pointer;
    &__title{
      font-size: 24px;
      font-weight: bold;
    }
    &__result{
      margin-top: 8px;
    }
  }
</style>