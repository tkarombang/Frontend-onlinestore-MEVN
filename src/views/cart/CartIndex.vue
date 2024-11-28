<template>
  <div>

    <!--  is-max-tablet -->
    <div class="container is-max-tablet">

      <ItemCart v-for="item in dataCart" :key="item.id" :product="item" />

      <ItemCartTotalPrice :totalPrices="totalPrice" />
    </div>
  </div>

</template>

<script setup>
import { computed, ref } from 'vue';
import { cartItems } from '@/data-seed';
import ItemCart from '@/components/ItemCart.vue';
import ItemCartTotalPrice from '@/components/ItemCartTotalPrice.vue';

const dataCart = ref(cartItems)
console.log(dataCart, dataCart.value)

const totalPrice = computed(() => {
  return cartItems.reduce((total, item) =>
    total + parseInt(item.price.split('.').join('')), 0
  )
})
console.log(new Intl.NumberFormat('id-ID', {}).format(totalPrice.value),)

</script>

<style></style>
