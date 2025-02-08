<template>
  <div class="skeleton-cart">
    <div class="skeleton-item">
      <div class="skeleton-image"></div>
      <div class="skeleton-details">
        <div class="skeleton-title"></div>
        <div class="skeleton-price"></div>
        <div class="skeleton-rating"></div>
      </div>
      <div class="skeleton-actions">
        <div class="skeleton-button"></div>
        <div class="skeleton-quantity"></div>
        <div class="skeleton-button"></div>
        <div class="skeleton-remove"></div>
      </div>
    </div>

  </div>

</template>
<script></script>
<style scoped>
/* Container utama untuk skeleton */
/* Skeleton CSS */
.skeleton-cart {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.skeleton-item {
  display: flex;
  gap: 16px;
  padding: 16px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  align-items: center;
}

.skeleton-image {
  width: 80px;
  height: 80px;
  background: #e0e0e0;
  border-radius: 8px;
}

.skeleton-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.skeleton-title {
  width: 60%;
  height: 16px;
  background: #e0e0e0;
  border-radius: 4px;
}

.skeleton-price {
  width: 40%;
  height: 16px;
  background: #e0e0e0;
  border-radius: 4px;
}

.skeleton-rating {
  width: 50%;
  height: 16px;
  background: #e0e0e0;
  border-radius: 4px;
}

.skeleton-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.skeleton-button {
  width: 32px;
  height: 32px;
  background: #e0e0e0;
  border-radius: 50%;
}

.skeleton-quantity {
  width: 32px;
  height: 16px;
  background: #e0e0e0;
  border-radius: 4px;
}

.skeleton-remove {
  width: 64px;
  height: 24px;
  background: #e0e0e0;
  border-radius: 4px;
}

/* Animasi loading */
@keyframes loading {
  0% {
    background-position: 200% 0;
  }

  100% {
    background-position: -200% 0;
  }
}
</style>
