<script setup>
import { fetchPostById, fetchUserById } from '@/api'
import CommentList from '@/components/CommentList.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ErrorMessage from '@/components/ErrorMessage.vue'

const route = useRoute()
const router = useRouter()
const post = ref(null)
const user = ref(null)
const loading = ref(true)
const error = ref(null)

const postId = computed(() => {
  const id = Number(route.params.id);
  return isNaN(id) ? -1 : id
});

const loadData = async() => {
  if(postId.value === -1) {
    error.value = 'Invalid Post ID'
    loading.value = false
  }

  loading.value = true;
  error.value = null;
  try {
    post.value = await fetchPostById(postId.value)
    if (post.value) {
      user.value = await fetchUserById(post.value.userId)
    }
  } catch (e) {
    error.value = 'Failed to load post details'
    console.error(e)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadData()
})
</script>

<template>
  <div class="post-detail-view">
    <div class="container">
      <button class="back-button" @click="router.go(-1)">← Back</button>

      <!-- 로딩 -->
      <div v-if="loading" class="loading-container">
        <LoadingSpinner size="large" />
        <p>Loading post details...</p>
      </div>

      <!-- 에러 -->
      <div v-else-if="error" class="error-container">
        <ErrorMessage :message="error" :retry="loadData"/>
      </div>

      <div v-else-if="post" class="post-detail">
        <div class="post-header">
          <h1>{{ post.title }}</h1>

          <div v-if="user" class="user-info">
            <div class="user-avatar">{{ user.name.charAt(0) }}</div>
            <div class="user-details">
              <span class="user-name">{{ user.name }}</span>
              <span class="user-company">{{ user.company.name }}</span>
              <a :href="`mailto:${user.email}`" class="user-email">{{ user.email }}</a>
            </div>
          </div>
        </div>

        <div class="post-content">
          <p>{{ post.body }}</p>
        </div>

        <CommentList :post-id="postId"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.post-detail-view {
  padding: var(--space-3) 0;
}

.back-button {
  background: none;
  border: none;
  color: var(--color-primary);
  font-weight: 500;
  cursor: pointer;
  padding: var(--space-1) 0;
  margin-bottom: var(--space-2);
  display: inline-flex;
  align-items: center;
  transition: transform var(--transition-fast);
}

.back-button:hover {
  transform: translateX(-4px);
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
}

.loading-container p {
  margin-top: var(--space-2);
  color: var(--color-text-secondary);
}

.post-detail {
  background-color: var(--color-surface);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  overflow: hidden;
}

.post-header {
  padding: var(--space-3);
  border-bottom: 1px solid var(--color-border);
}

.post-header h1 {
  margin-top: 0;
  margin-bottom: var(--space-2);
  font-size: 1.8rem;
}

.user-info {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-top: var(--space-2);
}

.user-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
}

.user-details {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: 600;
  font-size: 1.1rem;
}

.user-company {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
}

.user-email {
  color: var(--color-primary);
  font-size: 0.9rem;
  margin-top: 0.25rem;
}

.post-content {
  padding: var(--space-3);
  line-height: 1.8;
  font-size: 1.1rem;
}

.post-content p {
  margin-top: 0;
}

@media (prefers-color-scheme: dark) {
  .post-detail {
    background-color: var(--color-surface-dark);
  }

  .post-header {
    border-bottom-color: var(--color-border-dark);
  }
}
</style>
