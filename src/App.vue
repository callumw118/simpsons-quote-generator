<template>
  <div>
    <button v-on:click="getQuote">Quote Me</button>
    <quote-detail :characterInfo="characterInfo" />
    <favourite-quote-list />
  </div>
</template>

<script>
import QuoteDetail from "@/components/QuoteDetail";
import FavouriteQuoteList from "@/components/FavouriteQuoteList";
import { eventBus } from "@/main";

export default {
  name: "app",
  data() {
    return {
      // Holds all character information
      characterInfo: []
    };
  },
  components: {
    "quote-detail": QuoteDetail,
    "favourite-quote-list": FavouriteQuoteList
  },
  methods: {
    // Makes call to API and sets the data returned to the characterInfo
    getQuote: function() {
      fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
        .then(res => res.json())
        .then(data => (this.characterInfo = data));
    }
  }
};
</script>

<style>
</style>