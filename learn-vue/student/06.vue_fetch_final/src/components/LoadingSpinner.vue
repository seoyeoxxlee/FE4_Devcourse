<script setup>
defineProps({
  size: String,
})
</script>

<template>
  <div class="spinner-container">
    <div class="spinner" :class="[size ? `spinner-${size}` : 'spinner-medium']"></div>
  </div>
</template>

<style scoped>
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--space-2);
}

.spinner {
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-top-color: var(--color-primary);
  animation: spin 0.8s linear infinite;
}

.spinner-small {
  width: 16px;
  height: 16px;
}

.spinner-medium {
  width: 32px;
  height: 32px;
}

.spinner-large {
  width: 48px;
  height: 48px;
  border-width: 3px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-color-scheme: dark) {
  .spinner {
    border-color: rgba(255, 255, 255, 0.1);
    border-top-color: var(--color-primary-light);
  }
}
</style>
