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
      characterInfo: [],
      favouriteCharacterInfo: null,
    };
  },
  components: {
    "quote-detail": QuoteDetail,
    "favourite-quote-list": FavouriteQuoteList
  },
  methods: {
    getQuote: function() {
      fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
        .then(res => res.json())
        .then(data => (this.characterInfo = data));

        eventBus.$on('favourite-selected', quote => this.favouriteCharacterInfo = quote)
    }
  }
};
</script>

<style>
</style>