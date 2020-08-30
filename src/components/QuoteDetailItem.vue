<template>
<div>
  <li>
    <h1>{{ characterInfo.character }}</h1>
    <h3>{{ characterInfo.quote }}</h3>
    <img :src="characterInfo.image" alt />
  </li>
  <button v-on:click="addToFavourites">Add To Favourites</button>
  </div>
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
  methods: {
      // Sends the characterInfo that has been selected to be a favourite
    addToFavourites: function() {
      eventBus.$emit("quote-selected", this.characterInfo);
    }
  },
  mounted(){
      // Sets the favouriteCharacterInfo to be the one selected by user
    eventBus.$on('favourite-selected', quote => this.favouriteCharacterInfo = quote)
  },
  watch: {
      // This changes the displayed quote to be the one that the user clicks on
      // Watches to see if the favouriteCharacterInfo changes
    favouriteCharacterInfo: function(){
      this.characterInfo = this.favouriteCharacterInfo;
    }
  }
};
</script>

<style scoped>
li {
    margin: 0;
    width: 50%;
    display: flex;
}

h1, h3 {
    margin-right: 70px;
}

img {
    width: 222px;
    height: 367px;
}
</style>