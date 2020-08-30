<template>
<div>
  <li>
    <h1>{{ characterInfo.character }}</h1>
    <img :src="characterInfo.image" alt />
    <h3>{{ characterInfo.quote }}</h3>
    <button class="quote-button" v-on:click="addToFavourites">Add To Favourites</button>
  </li>
  
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
    width: 60%;
    display: flex;
    /* flex-flow: wrap; */
}

h1 {
    width: auto;
}

h1, h3 {
    text-align: left;
    margin-right: 20px;
}

h3 {
    padding-top: 10px;
}

img {
    width: 222px;
    height: 367px;
}

button {
    position: absolute;
    top: 80%;
    left: 43%;
}
</style>