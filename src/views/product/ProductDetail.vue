<template>
  <div class="container">
    <TransitionGroup name="fade-x" tag="div">
      <div v-if="loading || !isOnline" class="skeleton-detail-container">
        <SkeletonPdetailVue />
      </div>
      <div v-else-if="!loading || isOnline">
        <DetailProduct v-if="barangs" :barangs="barangs" />
      </div>
    </TransitionGroup>
    <div v-if="error" class="notification is-danger mt-5">
      {{ error }}
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import DetailProduct from '@/components/DetailProduct.vue';
import SkeletonPdetailVue from '@/components/SkeletonPdetail.vue'
import axios from 'axios';

const route = useRoute() //MENGAMBIL PARAMETER RUTE AKTIF
const barangs = ref(null) //DATA PRODUK YANG AKAN DITAMPILKAN
const error = ref(null) //ERROR HANDLING UNTUK PRODUK TIDAK DITEMUKAN
const loading = ref(true)
const delayTime = ref(0)
const isOnline = ref(navigator.onLine)

const updateOnlineStatus = () => {
  isOnline.value = navigator.onLine
  if (isOnline.value && loading.value) {
    fetchProductDetail()
  }
}

const fetchProductDetail = async () => {
  try {
    const startTime = performance.now()
    const { code } = route.params //AMBIL PARAMETER 'code' DARI RUTE
    const response = await axios.get(`http://localhost:8000/api/products/${code}`)  //PANGGIL API DETAIL PRODUK
    const endTime = performance.now()
    const responseTime = endTime - startTime
    delayTime.value = Math.min(Math.max(responseTime / 2, 500), 3000)
    barangs.value = response.data; //SIMPAN DATA PRODUK
  } catch (err) {
    console.error(err)
    error.value = 'GAGAL MEMUAT DATA PRODUK. SILAHKAN COBA LAGI NANTI'
  } finally {
    setTimeout(() => {
      loading.value = false
    }, delayTime.value);
  }
}
onMounted(() => {
  fetchProductDetail()
  window.addEventListener("online", updateOnlineStatus)
  window.addEventListener("offline", updateOnlineStatus)
})
onUnmounted(() => {
  window.addEventListener("online", updateOnlineStatus)
  window.addEventListener("offline", updateOnlineStatus)
})

</script>

<style scoped>
.skeleton-detail-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.fade-x-enter-active {
  animation: fadeXIn 0.8s ease-in forwards;
}

.fade-x-leave-active {
  animation: fadeXOut 0.2s ease-out forwards;
}

@keyframes fadeXIn {
  from {
    opacity: 0;
    transform: translateX(35px);
  }

  to {
    opacity: 1;
    transform: translateX(0)
  }
}

@keyframes fadeXOut {
  from {
    opacity: 1;
    transform: translateX(0);
  }

  to {
    opacity: 0;
    transform: translateX(10px)
  }
}
</style>
