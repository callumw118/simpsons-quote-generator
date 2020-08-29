<template>
  <div>
    <quote-detail :quote="quote"/>
  </div>
</template>

<script>
import QuoteDetail from "@/components/QuoteDetail";
export default {
  name: "app",
  data() {
    return {
      quote: []
    };
  },
  components: {
    'quote-detail': QuoteDetail
  },
  mounted(){
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(res => res.json())
      .then(data => this.quote = data)
  }
};
</script>

<style>
</style>