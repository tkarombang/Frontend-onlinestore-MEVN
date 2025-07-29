<template>

  <!--  is-max-tablet -->
  <div class="container is-max-tablet">

    <!-- NOTFICITAION -->
    <div v-if="showNotification"
      class="notification is-primary has-text-light has-text-weight-semibold has-text-centered">
      {{ notifMessage }}
    </div>

    <TransitionGroup name="fade-x" tag="div">
      <div v-if="error" class="notification is-danger">
        {{ error }}
      </div>

      <div v-else-if="loading || !isOnline">
        <SkeletonCart v-for="n in isOnline || !loading ? dataCart : 2" :key="n" />
      </div>

      <div v-else-if="dataCart && dataCart.length > 0">
        <TransitionGroup name="fade" tag="div">
          <ItemCart v-for="item in dataCart" :key="item._id" :product="item" @remove-product="handleRemove"
            @update-quantity="handleUpdateQuantity" />
        </TransitionGroup>

        <ItemCartTotalPrice class="mt-5" :totalPrices="totalPrice" />
      </div>

      <div v-else class="cart-empty">
        <img src="/src/assets/empty-cart.png" alt="Empty Cart">
      </div>
    </TransitionGroup>

  </div>

</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import axios from 'axios';
import ItemCart from '@/components/ItemCart.vue';
import ItemCartTotalPrice from '@/components/ItemCartTotalPrice.vue';
import SkeletonCart from '@/components/SkeletonCart.vue'


//STATE UNTUK NOTIFIKASI
const showNotification = ref(false)
const notifMessage = ref('')
const dataCart = ref(null) // Data keranjang belanja akan disimpan di sini
const error = ref(null)
const loading = ref(true)
const delayTime = ref(0)
const isOnline = ref(navigator.onLine)

const updateOnlineStatus = () => {
  isOnline.value = navigator.onLine
  if (isOnline.value && loading.value) {
    fetchCartIndex()
  }
}

const fetchCartIndex = async () => {
  try {
    const startTime = performance.now()
    const response = await axios.get('http://localhost:8000/api/orders/user/1');
    const endTime = performance.now()
    const responseTime = endTime - startTime
    if (response.data.length > 0) {
      // HANYA MENGAMBIL PRODUK DARI PESANAN
      // dataCart.value = response.data[0].products // Simpan data dari server

      // MENGGABUNGKAN PRODUK DARI SEMUA PESANAN
      let allProducts = response.data.flatMap(order => {
        return order.products.map(product => {
          const cartItem = order.cart_items.find(item => item.code === product.code)
          return {
            ...product,
            quantity: cartItem ? cartItem.quantity : 1
          }
        })
      })
      delayTime.value = Math.min(Math.max(responseTime / 2, 500), 3000)
      dataCart.value = allProducts
    } else {
      console.log('TIDAK ADA PESANAN')
    }
  } catch (err) {
    console.error(err)
    error.value = 'GAGAL MEMUAT CERANJANG BELANJA...';
  } finally {
    setTimeout(() => {
      loading.value = false
      // cartItems.value = [ /* Data Product */]
    }, delayTime.value)
  }
}

onMounted(() => {
  fetchCartIndex()
  window.addEventListener("online", updateOnlineStatus)
  window.addEventListener("offline", updateOnlineStatus)
})

onUnmounted(() => {
  window.addEventListener("online", updateOnlineStatus)
  window.addEventListener("offline", updateOnlineStatus)
})

const handleRemove = (productCode, productName) => {
  console.log('Removing product with code:', productCode); // Debug
  dataCart.value = dataCart.value.filter((item) => item.code !== productCode)
  console.log('Updated cart:', dataCart.value); // Debug

  //MEMUNCULKAN NOTIF
  notifMessage.value = `Product ${productName} Telah Dihapus`
  showNotification.value = true
  console.log('notif muncul:', notifMessage.value)

  //SEMBUNYIKAN NOTIF
  setTimeout(() => {
    showNotification.value = false
    console.log('NOTIF DISEMBUNYIKAN SELAMA 3 DETIK')
  }, 3000)
}

const handleUpdateQuantity = async (productCode, newQuantity) => {
  console.log(`Updating ${productCode} to ${newQuantity}`);

  const product = dataCart.value.find(item => item.code === productCode);
  if (product) {
    product.quantity = newQuantity;
    try {
      await axios.put(`http://localhost:8000/api/orders/user/1/update-quantity`, {
        product: productCode,
        quantity: newQuantity
      })
      console.log(`QUANTITY UPDATE IN DATABASE`)
    } catch (err) {
      console.error('FAILED TO UPDATE QUANTITY', err)
    }
  }
}

const totalPrice = computed(() => {
  if (!dataCart.value) return 0;
  return dataCart.value.reduce((total, item) => {
    const price = parseFloat(item.price)
    const qty = item.quantity || 1
    return total + (isNaN(price) ? 0 : price * qty)
  }, 0)
})

</script>

<style>
.fade-x-enter-active {
  animation: fadeXIn .8s ease-in forwards;
}

.fade-x-leave-active {
  animation: fadeXOut .2s ease-out forwards;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-10px);
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

.cart-empty {
  text-align: center;
  margin: auto
}
</style>
