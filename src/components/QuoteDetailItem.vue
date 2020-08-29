<template>
  <li>
    <h1>{{ characterInfo.character }}</h1>
    <h3>{{ characterInfo.quote }}</h3>
    <img :src="characterInfo.image" alt />
    <button v-on:click="addToFavourites">Add To Favourites</button>
  </li>
</template>

<script>
import { eventBus } from "@/main";

export default {
  name: "quote-detail-item",
  data(){
      return {
          favouriteCharacterInfo: null,
      }
  },
  props: ["characterInfo"],
  mounted(){
    eventBus.$on('favourite-selected', quote => this.favouriteCharacterInfo = quote)
  },
  methods: {
    addToFavourites: function() {
      eventBus.$emit("quote-selected", this.characterInfo);
    }
  },
  watch: {
      // This changes the displayed quote to be the one that the user selectsÍ
    favouriteCharacterInfo: function(){
      this.characterInfo = this.favouriteCharacterInfo;
    }
  }
};
</script>

<style>
</style>