<template>
  <div>
    <button v-on:click="getQuote">Quote Me</button>
    <quote-detail :characterInfo="characterInfo"/>
  </div>
</template>

<script>
import QuoteDetail from "@/components/QuoteDetail";
export default {
  name: "app",
  data() {
    return {
      characterInfo: []
    };
  },
  components: {
    'quote-detail': QuoteDetail
  },
  methods: {
    getQuote: function() {
      fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(res => res.json())
      .then(data => this.characterInfo = data)
    }
  }
};
</script>

<style>
</style>