<script setup>
import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()

const { count, doubleCount } = storeToRefs(counterStore)
const { increment } = counterStore

watch(count, (value, oldValue) => {
  console.log(value, oldValue)
})
</script>

<template>
  <main>
    <h1>HomeView</h1>
    <el-button @click="increment">count is {{ count }}</el-button>
    <el-button type="info">doubleCount is {{ doubleCount }}</el-button>
  </main>
</template>
