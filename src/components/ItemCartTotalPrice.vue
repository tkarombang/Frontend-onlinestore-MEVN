<template>
  <div>
    <h1 class="title is-5">Total: {{ new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(totalPrices) }}</h1>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
  totalPrices: {
    type: Object
  }
})

</script>

<style></style>
