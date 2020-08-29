<template>

</template>

<script>
export default {
  name: "app",
  data() {
    return {
      quotes: []
    };
  },
  mounted(){
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(res => res.json())
      .then(data => this.quotes = data)
  }
};
</script>

<style>
</style>