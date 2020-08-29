<template>
  <div>
      <ul>
          <quote-detail-item v-for="(detail, index) in characterInfo" :key="index" :characterInfo="detail"/>
      </ul>
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