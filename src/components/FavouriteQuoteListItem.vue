<template>
  <li>
      {{ quote.character }}
  </li>
</template>

<script>
export default {
    name: 'favourite-quote-list-item',
    props: ['quote']
}
</script>

<style>

</style>