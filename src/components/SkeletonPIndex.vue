<template>
  <div>
    <div class="skeleton-item">
      <div class="image-placeholder"></div>
      <div class="text-placeholder"></div>
      <div class="text-placeholder short"></div>
    </div>
  </div>

</template>
<script></script>
<style scoped>
.skeleton-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 35vh;
  box-sizing: border-box;
  background: #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: pulse 1.5s infinite ease-in-out;
}

.skeleton-item .image-placeholder {
  width: 100%;
  height: 70%;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite linear;
}

.skeleton-item .text-placeholder {
  width: 80%;
  height: 15px;
  margin-top: 1rem;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite linear;
}

.skeleton-item .text-placeholder.short {
  width: 50%;
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
