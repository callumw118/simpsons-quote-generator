<template>
  <div>
    <section>
      <h1>{{ characterInfo.character }}</h1>
      <h3>{{ characterInfo.quote }}</h3>
    <button class="quote-button" v-on:click="addToFavourites">Add To Favourites</button>
    <audio id="audio" src="https://springfieldfiles.com/sounds/homer/woohoo.mp3"></audio>
    </section>
    <img :src="characterInfo.image" alt />
  </div>
</template>

<script>
import { eventBus } from "@/main";

export default {
  name: "quote-detail-item",
  data() {
    return {
      favouriteCharacterInfo: null
    };
  },
  props: ["characterInfo"],
  methods: {
    // Sends the characterInfo that has been selected to be a favourite
    addToFavourites: function() {
      eventBus.$emit("quote-selected", this.characterInfo);
      audio.play();
    },
    play() {
        var audio = document.getElementById("audio");
      }
  },
  mounted() {
    // Sets the favouriteCharacterInfo to be the one selected by user
    eventBus.$on(
      "favourite-selected",
      quote => (this.favouriteCharacterInfo = quote)
    );
  },
  watch: {
    // This changes the displayed quote to be the one that the user clicks on
    // Watches to see if the favouriteCharacterInfo changes
    favouriteCharacterInfo: function() {
      this.characterInfo = this.favouriteCharacterInfo;
    }
  }
};
</script>

<style scoped>
section {
    display: flex;
    flex-flow: wrap;
    width: 30%;
    text-align: left;
}

h1, h3 {
    margin: 5px;
}

img {
    position: fixed;
    width: 222px;
    height: 367px;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -100px;
    animation: 1s ease-out 0s 1 slideInFromLeft;
}

button {
    margin-top: 20px;
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>