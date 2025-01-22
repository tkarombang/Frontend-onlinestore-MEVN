<template>
  <div>

    <div v-if="barangs">
      <DetailProduct v-if="barangs" :barangs="barangs" />
    </div>
    <div v-else-if="error" class="notification is-danger mt-5">
      {{ error }}
    </div>

  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import DetailProduct from '@/components/DetailProduct.vue';
import axios from 'axios';

const route = useRoute() //MENGAMBIL PARAMETER RUTE AKTIF
const barangs = ref(null) //DATA PRODUK YANG AKAN DITAMPILKAN
const error = ref(null) //ERROR HANDLING UNTUK PRODUK TIDAK DITEMUKAN

const fetchProductDetail = async () => {
  try {
    const { code } = route.params //AMBIL PARAMETER 'code' DARI RUTE
    const response = await axios.get(`http://localhost:8000/api/products/${code}`)  //PANGGIL API DETAIL PRODUK
    barangs.value = response.data; //SIMPAN DATA PRODUK
  } catch (err) {
    console.error(err)
    error.value = 'GAGAL MEMUAT DATA PRODUK. SILAHKAN COBA LAGI NANTI'
  }
}
//PANGGIL DATA PRODUCT SAAT KOMPONEN DI MOUNT
onMounted(fetchProductDetail)

</script>

<style></style>
