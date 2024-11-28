<template>
  <div>
    <div class="container">
      <!-- is-col-min-14 -->

      <div class="grid is-col-min-10 is-row-gap-0 is-column-gap-3 ">
        <ProductItem v-for="brg in barangs" :key="brg.id" :products="brg" />
      </div>


    </div>


  </div>
</template>

<script setup>
import { ref } from 'vue';
import { products } from '../../data-seed'
import ProductItem from '@/components/ProductItem.vue';

const barangs = ref(products);
</script>

<style scoped></style>
