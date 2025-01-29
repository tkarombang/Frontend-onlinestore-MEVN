<template>

  <!--  is-max-tablet -->
  <div class="container is-max-tablet">

    <div v-if="error" class="notification is-danger">
      {{ error }}
    </div>
    <div v-else-if="dataCart && dataCart.length > 0">
      <ItemCart v-for="item in dataCart" :key="item._id" :product="item" :onRemove="handleRemove" />

      <ItemCartTotalPrice :totalPrices="totalPrice" />
    </div>

  </div>

</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import axios from 'axios';
import ItemCart from '@/components/ItemCart.vue';
import ItemCartTotalPrice from '@/components/ItemCartTotalPrice.vue';

const dataCart = ref(null) // Data keranjang belanja akan disimpan di sini
const error = ref(null)
const fetchDataCart = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/orders/user/1');
    if (response.data.length > 0) {
      // HANYA MENGAMBIL PRODUK DARI PESANAN
      // dataCart.value = response.data[0].products // Simpan data dari server

      // MENGGABUNGKAN PRODUK DARI SEMUA PESANAN
      let allProducts = response.data.flatMap(order => order.products)
      dataCart.value = allProducts
      console.log(allProducts)
      // console.log(dataCart.value)
    } else {
      console.log('TIDAK ADA PESANAN')
    }
  } catch (err) {
    console.error(err)
    error.value = 'GAGAL MEMUAT CERANJANG BELANJA...';
  }
}

const handleRemove = (productCode) => {
  console.log('Removing product with code:', productCode); // Debug
  dataCart.value = dataCart.value.filter((item) => item.code !== productCode)
  console.log('Updated cart:', dataCart.value); // Debug
}

const totalPrice = computed(() => {
  if (!dataCart.value) return 0;
  return dataCart.value.reduce((total, item) => {
    const price = parseFloat(item.price)
    return total + (isNaN(price) ? 0 : price)
  }, 0)
})

//AMBIL DATA SAAT KOMPONEN DI MOUNT
onMounted(fetchDataCart)
</script>

<style></style>
