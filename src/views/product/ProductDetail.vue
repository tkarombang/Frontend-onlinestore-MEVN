<template>
  <div>


    <div v-if="isProductFound">
      <DetailProduct v-for="brg in barangs" :key="brg.id" :barang="brg" />
    </div>
    <div v-else>
      <NotFound />
    </div>

  </div>
</template>

<script setup>
import { products } from '@/data-seed';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import NotFound from '../errPage/NotFound.vue';
import DetailProduct from '@/components/DetailProduct.vue';

const route = useRoute()

const barangs = ref(products)
const isProductFound = computed(() => {
  return barangs.value.some(brg => brg.id === route.params.id)
});


</script>

<style></style>
