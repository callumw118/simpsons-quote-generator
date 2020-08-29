<template>
  <div>
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
  mounted(){
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(res => res.json())
      .then(data => this.characterInfo = data)
  }
};
</script>

<style>
</style>