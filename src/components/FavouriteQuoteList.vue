<template>
  <div>
      <ul>
          <h1>{{ favouriteQuotes }}</h1>
          <!-- <favourite-quote-list-item v-for="(quote, index) in favouriteCharacterInfo" :key="index" :quote="quote"/> -->
      </ul>
  </div>
</template>

<script>
import FavouriteQuoteListItem from '@/components/FavouriteQuoteListItem';
import { eventBus } from '@/main';

export default {
    name: 'favourite-quote-list',
    props: ['favouriteCharacterInfo'],
    data(){
        return {
            favouriteQuotes: []
        }
    },
    components: {
        'favourite-quote-list-item': FavouriteQuoteListItem
    },
    mounted(){
        eventBus.$on('quote-selected', quote => this.favouriteQuotes.push(quote))
    }
}
</script>

<style>

</style>