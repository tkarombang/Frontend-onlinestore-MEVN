<template>
  <div>
    <div class="container">
      <!-- is-col-min-14 -->

      <div class="grid is-col-min-10 is-row-gap-3 is-column-gap-3 is-multiline is-mobile">
        <!-- TAMPILKAN PRODUK JIKA DATA BERHASIL DIAMBIL -->
        <ProductItem v-for="brg in barangs" :key="brg.id" :products="brg" />
      </div>

      <!-- TAMPILKAN PESAN ERROR JIKA DATA GAGAL DIMUAT -->
      <div v-if="error" class="notification is-danger mt-5">
        {{ error }}
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
// import { products } from '../../data-seed' //KITA GANTI DENGAN AXIOS
import axios from 'axios';
import ProductItem from '@/components/ProductItem.vue';

// STATE UNTUK MENYIMPAN DATA PRODUK DAN ERRO
const barangs = ref([]);
const error = ref(null);

// FUNGSI UNTUK MENGAMBIL DATA PRODUK DARI API
const fetchProducts = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/products');
    // console.log(response.data)
    barangs.value = response.data; //MENYIMPAN DATA PRODUK KE STATE
  } catch (err) {
    console.error(err)
    error.value = 'GAGAL MEMUAT DATA PRODUK. SILAHKAN COBA LAGI NANTI'
  }
}

// PANGGIL fetchProducts SAAT KOMPONEN DI-MOUNT
onMounted(fetchProducts)
</script>

<style scoped></style>
