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
  props: ["characterInfo"],
  methods: {
    addToFavourites: function() {
      eventBus.$emit("quote-selected", this.characterInfo);
      console.log(this.selectedCharacterInfo);
    }
  }
};
</script>

<style>
</style>