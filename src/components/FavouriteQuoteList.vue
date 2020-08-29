<template>
  <div>
    <ul v-if="favouriteQuotes.length > 0">
      <h2>Favourite Quotes</h2>
      <li
        v-for="(quote, index) in favouriteQuotes"
        :key="index"
        v-on:click="handleClick(index)"
      >{{ quote.quote }}</li>
    </ul>
  </div>
</template>

<script>
import { eventBus } from "@/main";

export default {
  name: "favourite-quote-list",
  props: ["favouriteCharacterInfo"],
  data() {
    return {
      favouriteQuotes: []
    };
  },
  mounted() {
    eventBus.$on("quote-selected", quote => this.favouriteQuotes.push(quote));
  },
  methods: {
    // User can click on a favourite quote which will then send it's position in the favouriteQuotes array
    handleClick(index) {
      eventBus.$emit("favourite-selected", this.favouriteQuotes[index]);
    }
  }
};
</script>

<style>
</style>