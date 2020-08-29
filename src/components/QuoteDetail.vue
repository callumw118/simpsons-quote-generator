<template>
  <div>
      <ul>
          <quote-detail-item v-for="(detail, index) in characterInfo" :key="index" :characterInfo="detail"/>
      </ul>
      <!-- <h1 v-for="(detail, index) in characterInfo" :key="index">{{ detail.quote }}</h1> -->
  </div>
</template>

<script>
import QuoteDetailItem from '@/components/QuoteDetailItem';
export default {
    name: 'quote-detail',
    props: ['characterInfo'],
    components: {
        'quote-detail-item': QuoteDetailItem
    }
}
</script>

<style>

</style>