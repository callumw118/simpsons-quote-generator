<template>
  <div id="favourite-list">
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
    // Pushes the quote to be in the favouriteQuotes array
    // if not already there
    eventBus.$on("quote-selected", quote => {
      if (!this.favouriteQuotes.includes(quote)) {
        this.favouriteQuotes.push(quote);
        audio.play();
      }
    });
  },
  methods: {
    // User can click on a favourite quote which will then send it's position in the favouriteQuotes array
    handleClick(index) {
      eventBus.$emit("favourite-selected", this.favouriteQuotes[index]);
    },
    play() {
      var audio = document.getElementById("audio");
    }
  }
};
</script>

<style scoped>
#favourite-list {
  position: absolute;
  top: 30%;
  right: 5%;
  width: 30%;
}

li {
  margin-bottom: 10px;
  cursor: pointer;
  padding: 5px;
  border: 3px solid #fdfb1d;
  outline: 2px solid black;
  transition: 0.5s;
}

li:hover {
  background-color: #fdfb1d;
}

li:active {
  box-shadow: 0 5px #666;
  transform: translateY(20px);
}
</style>