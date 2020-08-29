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
      selectedCharacterInfo: null,
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
        
        // eventBus.$on('quote-selected', quote => this.favouriteQuotes.push(quote))
        // console.log(this.favouriteQuotes)
    }
  }
};
</script>

<style>
</style>