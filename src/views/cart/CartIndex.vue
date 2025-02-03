<template>

  <!--  is-max-tablet -->
  <div class="container is-max-tablet">

    <!-- NOTFICITAION -->
    <div v-if="showNotification" class="notification is-success">
      {{ notifMessage }}
    </div>

    <div v-if="error" class="notification is-danger">
      {{ error }}
    </div>
    <div v-else-if="dataCart && dataCart.length > 0">
      <ItemCart v-for="item in dataCart" :key="item._id" :product="item" @remove-product="handleRemove"
        @update-quantity="handleUpdateQuantity" />

      <ItemCartTotalPrice :totalPrices="totalPrice" />
    </div>

  </div>

</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import axios from 'axios';
import ItemCart from '@/components/ItemCart.vue';
import ItemCartTotalPrice from '@/components/ItemCartTotalPrice.vue';


//STATE UNTUK NOTIFIKASI
const showNotification = ref(false)
const notifMessage = ref('')

const dataCart = ref(null) // Data keranjang belanja akan disimpan di sini
const error = ref(null)




const fetchDataCart = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/orders/user/1');
    if (response.data.length > 0) {
      // HANYA MENGAMBIL PRODUK DARI PESANAN
      // dataCart.value = response.data[0].products // Simpan data dari server

      // MENGGABUNGKAN PRODUK DARI SEMUA PESANAN
      let allProducts = response.data.flatMap(order => {
        console.log(order)
        return order.products.map(product => {
          const cartItem = order.cart_items.find(item => item.code === product.code)
          return {
            ...product,
            quantity: cartItem ? cartItem.quantity : 1
          }
        })
      })
      dataCart.value = allProducts
      // console.log(allProducts)
      // console.log(dataCart.value)
    } else {
      console.log('TIDAK ADA PESANAN')
    }
  } catch (err) {
    console.error(err)
    error.value = 'GAGAL MEMUAT CERANJANG BELANJA...';
  }
}

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

//AMBIL DATA SAAT KOMPONEN DI MOUNT
onMounted(fetchDataCart)
</script>

<style></style>
