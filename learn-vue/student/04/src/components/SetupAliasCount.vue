<script setup>
import { computed, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, reactive, ref, watch, watchEffect, watchPostEffect } from 'vue';

// ref, reactive
const count = ref(1)
const numArrs = reactive([1, 2, 3])
const message = ref('')
const pEl = ref(null) // 참조값

// computed
const doubleCount = computed(() => count.value * 2)

// methods
const increment = () => (count.value += 1)

// watch
watch(count, (n, o) => console.log(n, o))
watch(numArrs, (n, o) => console.log(n, o))
// watchEffect -> watch + deep: true + immediate: true
watchEffect(() => {
    console.log('watch:', count.value) // 데이터 자동 감시
    console.log(pEl.value?.innerText)
})
// watchPostEffect -> watch + flush:true
watch(numArrs, (n, o) => console.log(n, o), {
    deep: true,
    immediate: true,
    flush: 'post',
})
watchPostEffect(() => {
    console.log('watchPost:', message.value)
    console.log(pEl.value?.innerText)
})

// lifecycle hook
onBeforeMount(() => console.log('onBeforeMount'))
onMounted(() => console.log('onMounted'))
onBeforeUpdate(() => console.log('onBeforeUpdate'))
onUpdated(() => console.log('onUpdated'))
onBeforeUnmount(() => console.log('onBeforeUnmount'))
onUnmounted(() => console.log('onUnmounted'))

</script>
  
<template>
    <h1>{{ count }}</h1>
    <h1>{{ doubleCount }}</h1>
    <button @click="increment">증가</button>
    <h1>{{ numArrs }}</h1>
    <button @click="numArrs.push(4)">추가</button>
    <br />

    <p ref="pEl">{{ message }}</p>
    <input type="text" v-model="message">
</template>
  
<style scoped>
</style>