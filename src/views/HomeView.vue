<script setup>
import { watch, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'
import { requestData } from '@/service/login/login'

const counterStore = useCounterStore()

const { count, doubleCount } = storeToRefs(counterStore)
const { increment } = counterStore

watch(count, (value, oldValue) => {
  console.log(value, oldValue)
})

onMounted(() => {
  console.log('requestData')
  requestData()
})
</script>

<template>
  <main>
    <h1>HomeView</h1>
    <el-button @click="increment">count is {{ count }}</el-button>
    <el-button type="info">doubleCount is {{ doubleCount }}</el-button>
  </main>
</template>
