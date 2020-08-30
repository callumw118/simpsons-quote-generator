<template>
  <div>
    <header-view />
    <button v-on:click="getQuote">Quote Me</button>
    <quote-detail :characterInfo="characterInfo" />
    <favourite-quote-list />
  </div>
</template>

<script>
import Header from "@/components/Header";
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
    "header-view": Header,
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
body {
  background: url("../src/assets/simpsons-background.jpg");
}
</style>