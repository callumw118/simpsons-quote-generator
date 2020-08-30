<template>
  <div>
    <header-view />
    <button class="quote-button" v-on:click="getQuote">Quote Me</button>
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
  margin: 0;
  background: url("../src/assets/simpsons-background.jpg");
  text-align: center;
}

li {
  list-style: none;
}

.quote-button{
  background:#54B4E6;
  background-image: -webkit-linear-gradient(top, #54B4E6, #1E62D0);
  background-image: -moz-linear-gradient(top, #54B4E6, #1E62D0);
  background-image: -ms-linear-gradient(top, #54B4E6, #1E62D0);
  background-image: -o-linear-gradient(top, #54B4E6, #1E62D0);
  background-image: linear-gradient(to bottom, #54B4E6, #1E62D0);
  border-radius: 20px;
  color: #FDFB1F;
  font-family: Verdana;
  font-size: 15px;
  font-weight: 100;
  padding: 20px;
  box-shadow: 1px 1px 20px 0px #0059A0;
  -webkit-box-shadow: 1px 1px 20px 0px #0059A0;
  -moz-box-shadow: 1px 1px 20px 0px #0059A0;
  text-shadow: 1px 1px 6px #000000;
  border: solid #337FED 1px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  outline: none;
}

.quote-button:hover{
  border: solid #337FED 1px;
  background: #1E62D0;
  background-image: -webkit-linear-gradient(top, #1E62D0, #3D94F6);
  background-image: -moz-linear-gradient(top, #1E62D0, #3D94F6);
  background-image: -ms-linear-gradient(top, #1E62D0, #3D94F6);
  background-image: -o-linear-gradient(top, #1E62D0, #3D94F6);
  background-image: linear-gradient(to bottom, #1E62D0, #3D94F6);
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  text-decoration: none;
  outline: none;
}

.quote-button:active {
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
</style>