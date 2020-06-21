<template lang="pug">
  div
    h1 Страница
    ChangeTag Текст
    ChangeTag(link="https://google.com") Ссылка
</template>

<script>
import ChangeTag from '@/components/ChangeTag';

export default {
  components: {
    ChangeTag
  }
}
</script>