<template>

  <!-- Skeleton untuk konten utama -->
  <div class="skeleton-content-wrapper">
    <div class="skeleton-image"></div>
    <div class="skeleton-content">
      <div class="skeleton-title"></div>
      <div class="skeleton-price"></div>
      <div class="skeleton-description"></div>
      <div class="skeleton-description"></div>
      <div class="skeleton-rating"></div>
    </div>
  </div>

  <!-- Skeleton untuk tombol -->
  <div class="skeleton-actions">
    <div class="skeleton-button"></div>
    <div class="skeleton-button"></div>
  </div>
</template>
<script>
</script>
<style scoped>
.skeleton-content-wrapper {
  display: flex;
  gap: 20px;
  width: 100%;
}

.skeleton-image {
  flex: 0 0 40%;
  /* 40% dari lebar kontainer */
  height: 250px;
  border-radius: 10px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite linear;
}

.skeleton-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.skeleton-title {
  width: 60%;
  height: 24px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite linear;
  border-radius: 4px;
}

.skeleton-price {
  width: 30%;
  height: 20px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite linear;
  border-radius: 4px;
}

.skeleton-description {
  width: 100%;
  height: 16px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite linear;
  border-radius: 4px;
  margin-bottom: 8px;
}

.skeleton-rating {
  width: 120px;
  height: 20px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite linear;
  border-radius: 4px;
}

/* Tombol skeleton di bawah tengah */
.skeleton-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: auto;
  width: 100%;
}

.skeleton-button {
  flex: 1;
  max-width: 150px;
  height: 40px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite linear;
  border-radius: 8px;
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
