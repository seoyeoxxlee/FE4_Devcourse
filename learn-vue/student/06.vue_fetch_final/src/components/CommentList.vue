<script setup>
import { onMounted, ref } from 'vue'
import { fetchCommentsByPostId } from '@/api'
import LoadingSpinner from './LoadingSpinner.vue'

const props = defineProps({
  postId: Number,
})

const comments = ref([])
const loading = ref(true)
const error = ref(null)

const laodData = async() => {
  loading.value = true;
  error.value = null;
  try {
    comments.value = await fetchCommentsByPostId(props.postId)
  } catch (e) {
    error.value = "Failed to load comments"
    console.error(e)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  laodData()
})
</script>

<template>
  <div class="comments-section">
    <h3>Comments <span v-if="!loading && !error">({{ comments.length }})</span></h3>

    <!-- 로딩 -->
    <div v-if="loading" class="comments-loading">
      <LoadingSpinner />
    </div>

    <!-- 에러 -->
    <div v-else-if="error" class="comments-error">
      <p>{{ error }}</p>
      <button class="btn btn-secondary" @click="laodData">Try again</button>
    </div>

    <!-- 댓글 없음 -->
    <div v-else-if="!loading && comments.length === 0" class="no-comments">
      <p>No comments found for this post.</p>
    </div>

    <div v-else class="comments-list">
      <div v-for="comment in comments" :key="comment.id" class="comment-card">
        <div class="comment-header">
          <h4 class="comment-name">{{ comment.name }}</h4>
          <span class="comment-email">{{ comment.email }}</span>
        </div>
        <p class="comment-body">{{ comment.body }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.comments-section {
  margin-top: var(--space-4);
}

.comments-section h3 {
  padding-left: 1rem;
}

.comments-loading {
  display: flex;
  justify-content: center;
  padding: var(--space-3);
}

.comments-error {
  background-color: rgba(255, 69, 58, 0.1);
  border: 1px solid var(--color-error);
  border-radius: var(--radius-md);
  padding: var(--space-2);
  text-align: center;
}

.no-comments {
  padding: var(--space-2);
  text-align: center;
  color: var(--color-text-secondary);
}

.comments-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin-top: var(--space-2);
}

.comment-card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-2);
  transition: transform 0.2s ease;
}

.comment-card:hover {
  transform: translateY(-2px);
}

.comment-header {
  margin-bottom: var(--space-1);
}

.comment-name {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
}

.comment-email {
  display: block;
  color: var(--color-text-tertiary);
  font-size: 0.8rem;
  margin-top: 0.25rem;
}

.comment-body {
  margin: 0;
  line-height: 1.6;
  color: var(--color-text-secondary);
}

@media (prefers-color-scheme: dark) {
  .comments-error {
    background-color: rgba(255, 69, 58, 0.2);
  }

  .comment-card {
    background-color: var(--color-surface-dark);
    border-color: var(--color-border-dark);
  }
}
</style>
