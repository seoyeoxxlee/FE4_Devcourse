<script>
import CustomerListItem from './CustomerListItem.vue'

export default {
  name: 'CustomerList',
  components: {
    CustomerListItem,
  },
  props: {
    customers: {
      type: Array,
      required: true,
    },
    showAll: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    displayedCustomer() {
      return this.showAll ? this.customers : this.customers.slice(0, 5)
    },
  },
}
</script>
<template>
  <div class="flow-root">
    <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
      <li
        is="vue:customer-list-item"
        v-for="customer in displayedCustomer"
        :key="customer.id"
        :customer="customer"
      />
    </ul>
  </div>
</template>
<style scoped></style>