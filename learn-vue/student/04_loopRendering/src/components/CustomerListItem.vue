<script>
export default {
  name: 'CustomerListItem',
  props: {
    customer: {
      type: Object,
    },
  },
}
</script>
<template>
  <li class="py-3 sm:py-4">
    <div class="flex items-center">
      <div class="flex-1 min-w-0 ms-4">
        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
          {{ customer.name }}
        </p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
          {{ customer.email }}
        </p>
      </div>
      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        {{ customer.amount }}
      </div>
    </div>
  </li>
</template>
<style scoped></style>