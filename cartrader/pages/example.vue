<template>
  <div>
    <p>Count is: {{ count }}</p>
    <p>Double count is: {{ doubleCount }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

let count = ref(0)

function increment() {
  count.value++
}

const doubleCount = computed(() => {

  debugger
  return count.value * 2
})
</script>