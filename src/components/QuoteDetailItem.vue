<template>
  <li>
      <h1>{{ characterInfo.character }}</h1>
      <h3>{{ characterInfo.quote }}</h3>
      <img :src= "characterInfo.image" alt="">
  </li>
</template>

<script>
export default {
    name: 'quote-detail-item',
    props: ['characterInfo']
}
</script>

<style>

</style>