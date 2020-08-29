<template>
  <li>
      <h1>{{ characterInfo.quote }}</h1>
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