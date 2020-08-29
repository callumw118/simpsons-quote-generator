<template>
  <div>
      <h1 v-for="(detail, index) in quote" :key="index">{{ detail.quote }}</h1>
  </div>
</template>

<script>
export default {
    name: 'quote-detail',
    props: ['quote']
}
</script>

<style>

</style>