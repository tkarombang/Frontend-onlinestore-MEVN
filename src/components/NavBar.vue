<template>

  <div v-if="loading || !isOnline" class="skeleton-navbar">
    <div class="logo-placeholder"></div>
    <div class="actions">
      <div class="button-placeholder"></div>
      <div class="text-placeholder"></div>
    </div>
  </div>

  <nav v-else class="navbar is-primary has-shadow title is-size-4" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">

      <h1 class="navbar-item ">ONLINESHOP</h1>

      <a role="button" class="navbar-burger has-background-primary-10 has-text-primary-10-invert" data-target="navMenu"
        aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" id="navMenu">
      <!-- navbar start, navbar end -->
      <div class="navbar-start">
        <!-- navbar items -->
        <RouterLink to="/products" class="navbar-item has-text-white">Products</RouterLink>
        <!-- <RouterLink :to="{ name: 'Detail', params: { id: 123 } }" class="navbar-item">Product Detail</RouterLink> -->

      </div>

      <div class="navbar-end">
        <!-- navbar items -->
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <RouterLink to="/orders" class="navbar-item button">
                <span class="icon">
                  <i class="fa-solid fa-cart-shopping"></i>
                </span>
                Cart
              </RouterLink>
            </p>
            <p class="control">
              <a class="button is-primary">
                <span class="icon">
                  <i class="fas fa-download" aria-hidden="true"></i>
                </span>
                <span>Download</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { RouterLink } from "vue-router";

const loading = ref(true)
const delayTime = ref(0)
const isOnline = ref(navigator.onLine)

const updateOnlineStatus = () => {
  isOnline.value = navigator.onLine
  if (isOnline.value) {
    fetchNavbar()
  }
}

const fetchNavbar = () => {
  const startTime = performance.now()
  setTimeout(() => {
    const endTime = performance.now()

    const calcTime = endTime - startTime
    delayTime.value = Math.min(Math.max(calcTime / 2, 500), 3000)
    setTimeout(() => {
      loading.value = false
    }, delayTime.value)
  }, Math.random() * 2000) //SIMULASI WAKTU RESPONSE

}

onMounted(() => {
  fetchNavbar()
  window.addEventListener("online", updateOnlineStatus)
  window.addEventListener("offline", updateOnlineStatus)
})
onUnmounted(() => {
  window.addEventListener("online", updateOnlineStatus)
  window.addEventListener("offline", updateOnlineStatus)
})

</script>

<style scopped>
.skeleton-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #00c2a9;
  padding: 10px 20px;
  height: 60px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.skeleton-navbar .logo-placeholder,
.skeleton-navbar .text-placeholder {
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite linear;
  border-radius: 4px;
}

.skeleton-navbar .logo-placeholder {
  width: 120px;
  height: 20px;
}

.skeleton-navbar .text-placeholder {
  width: 60px;
  height: 20px;
}

.skeleton-navbar .button-placeholder {
  width: 80px;
  height: 30px;
  border-radius: 15px;
}

.skeleton-navbar .actions {
  display: flex;
  gap: 20px;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }

  100% {
    background-position: -200% 0;
  }
}
</style>
