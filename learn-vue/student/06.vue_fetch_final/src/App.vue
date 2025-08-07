<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <div class="app-container">
    <AppHeader />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <footer class="app-footer">
      <div class="container">
        <p>© 2025 JSONFetch - Vue.js JSONPlaceholder Demo</p>
      </div>
    </footer>
  </div>
</template>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

.app-footer {
  margin-top: auto;
  padding: var(--space-2) 0;
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
  text-align: center;
  font-size: 0.9rem;
  color: var(--color-text-secondary);
}

/* Page Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (prefers-color-scheme: dark) {
  .app-footer {
    background-color: var(--color-surface-dark);
    border-top-color: var(--color-border-dark);
  }
}
</style>
