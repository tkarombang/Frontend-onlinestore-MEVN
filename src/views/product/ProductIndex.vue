<template>
  <div>
    <div class="container">
      <TransitionGroup tag="div" mode="out-in" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
        <div v-if="loading || !isOnline" class="skeleton-container-parent">
          <SkeletonPIndexVue v-for="n in isOnline || !loading ? barangs : 10" :key="n" />
        </div>
        <!-- v-show="dataReady" -->
        <div v-else class="grid is-col-min-10 is-row-gap-3 is-column-gap-3 is-multiline is-mobile">
          <ProductItem v-for="brg in barangs" :key="brg.id" :products="brg" />
        </div>
      </TransitionGroup>


      <!-- TAMPILKAN PESAN ERROR JIKA DATA GAGAL DIMUAT -->
      <div v-if="error" class="notification is-danger mt-5">
        {{ error }}
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
// import { products } from '../../data-seed' //KITA GANTI DENGAN AXIOS
import axios from 'axios';
import ProductItem from '@/components/ProductItem.vue';
import SkeletonPIndexVue from '@/components/SkeletonPIndex.vue';

// STATE UNTUK MENYIMPAN DATA PRODUK DAN ERRO
const barangs = ref([]);
const error = ref(null);
const loading = ref(true)
const delayTime = ref(0)
const isOnline = ref(navigator.onLine)

const onBeforeEnter = (el) => {
  el.style.opacity = "0"
  el.style.transform = "translateX(-10)"
}

const onEnter = (el, done) => {
  el.style.transition = "opacity 0.8s ease-in, transform 0.8 ease-in";
  el.style.opacity = "1";
  el.style.transform = "translateX(35px)"
  setTimeout(done, 800)
}

const onLeave = (el, done) => {
  el.style.transition = "opacity 0.2s ease-out, transform 0.2s ease-out";
  el.style.opacity = "0";
  el.style.transform = "translateX(10px)";
  setTimeout(done, 200);
};

const updateOnlineStatus = () => {
  isOnline.value = navigator.onLine
  if (isOnline.value && loading.value) {
    fetchProducts()
  }
}

// PANGGIL fetchProducts SAAT KOMPONEN DI-MOUNT
const fetchProducts = async () => {
  try {
    const startTime = performance.now() //MULAI HITUNG WAKTU RESPONSE
    const response = await axios.get('http://localhost:8000/api/products');
    const endTime = performance.now() //SELESAI WAKTU RESPONSE

    // HITUNG DELAY BERDASARKAN KECEPATAN RESPONSE API
    const responseTime = endTime - startTime;
    delayTime.value = Math.min(Math.max(responseTime / 2, 500), 3000) // SET DELAY 500ms - 3000ms
    barangs.value = response.data; //MENYIMPAN DATA PRODUK KE STATE
  } catch (err) {
    console.error(err)
    error.value = 'GAGAL MEMUAT DATA PRODUK. SILAHKAN COBA LAGI NANTI'
  } finally {
    setTimeout(() => {
      loading.value = false
    }, delayTime.value)
  }
}

onMounted(() => {
  fetchProducts()
  window.addEventListener("online", updateOnlineStatus)
  window.addEventListener("offline", updateOnlineStatus)
})

onUnmounted(() => {
  window.addEventListener("online", updateOnlineStatus)
  window.addEventListener("offline", updateOnlineStatus)
})
</script>

<style scoped>
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

.skeleton-container-parent {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
}
</style>
