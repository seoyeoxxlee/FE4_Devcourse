<script>
import CustomerHeader from './components/CustomerHeader.vue'
import CustomerList from './components/CustomerList.vue'

export default {
  components: {
    CustomerHeader,
    CustomerList,
  },
  data() {
    return {
      customers: [
        { id: 1, name: 'Neil Sims', email: 'email@windstart.com', amount: '$320' },
        { id: 2, name: 'James', email: 'james@gmail.com', amount: '$250' },
        { id: 3, name: 'Smith', email: 'smith@gmail.com', amount: '$600' },
        { id: 4, name: 'Mike', email: 'mike@gmail.com', amount: '$200' },
        { id: 5, name: 'Yarn', email: 'yarn@gmail.com', amount: '$140' },
        { id: 6, name: 'Npm', email: 'npm@gmail.com', amount: '$220' },
        { id: 7, name: 'Han', email: 'han@gmail.com', amount: '$450' },
      ],
      showAll: false,
    }
  },
  computed: {
    displayedCustomer() {
      return this.showAll ? this.customers : this.customers.slice(0, 5)
    },
  },
  methods: {
    viewAll() {
      this.showAll = true
    },
  },
}
</script>
<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-black">
    <div
      class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <CustomerHeader :showAll @view-all="viewAll" />
      <CustomerList :showAll :customers />
    </div>
  </div>
</template>
<style></style>