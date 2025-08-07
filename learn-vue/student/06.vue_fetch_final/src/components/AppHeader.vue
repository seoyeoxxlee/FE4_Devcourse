<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const searchQeury = ref('')

const handleSubmit = () => {
  console.log('handleSubmit')
  if (searchQeury.value.trim()) {
    router.push({ name: 'home', query: {search: searchQeury.value}})
  } else {
    router.push({ name: 'home' })
  }
}

</script>

<template>
  <header class="app-header">
    <div class="container header-container">
      <router-link to="/" class="logo">
        <h1>JSONFetch</h1>
      </router-link>

      <form @submit.prevent="handleSubmit" class="search-container">
        <input v-model="searchQeury" type="text" placeholder="Search posts..." />
        <button class="search-btn" @click="handleSearch">
          <span>Search</span>
        </button>
      </form>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  background-color: var(--color-surface);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 10;
  padding: var(--space-1) 0;
}

.header-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-2);
}

.logo {
  text-decoration: none;
  color: var(--color-text-primary);
}

.logo h1 {
  margin: 0;
  font-size: 1.5rem;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.search-container {
  display: flex;
  width: 100%;
  max-width: 500px;
}

input {
  flex: 1;
  padding: 0.6em 1em;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm) 0 0 var(--radius-sm);
  font-size: 0.9rem;
  outline: none;
  transition: border-color var(--transition-fast);
}

input:focus {
  border-color: var(--color-primary);
}

.search-btn {
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  padding: 0 var(--space-2);
  cursor: pointer;
  transition: background-color var(--transition-fast);
}

.search-btn:hover {
  background-color: var(--color-primary-dark);
}

@media (min-width: 768px) {
  .header-container {
    flex-direction: row;
    justify-content: space-between;
    padding: var(--space-2);
  }

  .search-container {
    width: auto;
  }
}

@media (prefers-color-scheme: dark) {
  .app-header {
    background-color: var(--color-surface-dark);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  .logo h1 {
    background: linear-gradient(90deg, var(--color-primary-light), var(--color-accent-light));
    -webkit-background-clip: text;
    background-clip: text;
  }

  input {
    background-color: var(--color-surface-dark);
    color: var(--color-text-primary-dark);
    border-color: var(--color-border-dark);
  }
}
</style>
