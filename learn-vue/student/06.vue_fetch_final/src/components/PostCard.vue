<script setup>
import { fetchUserById } from '@/api'
import { onMounted, ref } from 'vue'


const props = defineProps({
  post: {
    type: Object
  }
})

const user = ref(null)
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  loading.value = true
  try {
    user.value = await fetchUserById(props.post.userId)
  } catch (e) {
    error.value = 'Failed to laod user data'
    console.error(e)
  } finally {
    loading.value = false
  }
})

</script>

<template>
  <router-link :to="`/post/${props.post.id}`" class="post-card-link">
    <div class="post-card">
      <h2 class="post-title">{{ props.post.title }}</h2>

      <p class="post-body">{{ props.post.body }}</p>

      <div class="post-footer">
        <!-- 로딩 -->
        <div v-if="loading" class="user-skeleton">
          <div class="skeleton" style="width: 120px; height: 18px"></div>
        </div>

        <!-- 에러 -->
        <div v-else-if="error" class="user-error">
          <span>{{ error }}</span>
        </div>

        <!-- 정상 렌더링 -->
        <div v-else class="user-info">
          <span class="username">{{ user?.name }}</span>
          <span class="company">{{ user?.company.name }}</span>
        </div>

        <div class="post-actions">
          <span class="read-more">Read more</span>
        </div>
      </div>
    </div> 
  </router-link>
</template>

<style scoped>
.post-card-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.post-card {
  position: relative;
  background-color: var(--color-surface);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  padding: var(--space-2);
  height: 100%;
  display: flex;
  flex-direction: column;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
  border: 1px solid var(--color-border);
}

.post-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.post-title {
  margin-top: 0;
  margin-bottom: var(--space-1);
  color: var(--color-text-primary);
  font-size: 1.25rem;

  display: -webkit-box;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.post-body {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-2);
  flex-grow: 1;
  line-height: 1.6;

  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: var(--space-1);
  border-top: 1px solid var(--color-border);
}

.user-info {
  display: flex;
  flex-direction: column;
}

.username {
  font-weight: 500;
  color: var(--color-text-primary);
  font-size: 0.9rem;
}

.company {
  color: var(--color-text-tertiary);
  font-size: 0.8rem;
}

.user-error {
  color: var(--color-error);
  font-size: 0.8rem;
}

.post-actions {
  display: flex;
  align-items: center;
}

.read-more {
  color: var(--color-primary);
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
}

.read-more::after {
  content: '→';
  margin-left: 4px;
  transition: transform 0.2s ease;
}

.post-card:hover .read-more::after {
  transform: translateX(4px);
}

@media (prefers-color-scheme: dark) {
  .post-card {
    background-color: var(--color-surface-dark);
    border-color: var(--color-border-dark);
  }

  .post-footer {
    border-top-color: var(--color-border-dark);
  }
}
</style>
